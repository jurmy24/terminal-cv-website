<template>
    <div class="h-5/6 my-auto overflow-hidden">
        <div
            class="h-full p-4 pr-0 border border-borderLight dark:border-borderDark rounded-md shadow-lg dark:bg-terminalBgDark bg-terminalBgLight font-ProFontIIxNerdFontRegular dark:text-terminalTextDark text-terminalTextLight overflow-hidden hide-scrollbar"
        >
            <p class="h-min-12">Last login: {{ currentDate }} on IPv4 {{ ipAddress }}</p>
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
