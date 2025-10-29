<template>
    <div class="h-full flex flex-col bg-secondary text-foreground font-dm-mono">
        <!-- Terminal Header Info -->
        <div class="px-4 py-2 bg-gray-800/30 border-b border-gray-700/20">
            <p class="text-foreground">Last login: {{ currentDate }} on IPv4 {{ ipAddress }}</p>
        </div>

        <!-- Terminal Content -->
        <div class="flex-1 overflow-hidden">
            <TerminalInputOutput :commandOutput="output" @submit-command="handleCommand" />
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import TerminalInputOutput from './TerminalInputOutput.vue'
import terminalLogic from '../terminalLogic.js'

export default {
    data() {
        return {
            currentDate: new Date().toLocaleString(),
            ipAddress: 'loading...', // Default value while fetching
            state: terminalLogic.state,
            currentFile: terminalLogic.state.currentFile,
            output: terminalLogic.state.output
        }
    },
    components: {
        TerminalInputOutput
    },
    mounted() {
        this.fetchIPAddress()
    },
    methods: {
        async fetchIPAddress() {
            try {
                const response = await axios.get('https://api.ipify.org?format=json')
                this.ipAddress = response.data.ip
            } catch (error) {
                console.error('Error fetching IP address:', error)
                this.ipAddress = 'unknown'
            }
        },
        handleCommand(command) {
            terminalLogic.handleCommand(command)
            this.output = [...this.state.output] // Trigger reactivity
            this.currentFile = this.state.currentFile // Trigger reactivity
        }
    },
    watch: {
        currentFile: {
            handler(currentFile) {
                this.$emit('file-changed', currentFile)
            },
            immediate: true
        }
    }
}
</script>
