<template>
    <div class="h-full overflow-hidden">
        <div
            class="h-full flex flex-col border border-borderLight dark:border-borderDark rounded-lg shadow-xl dark:bg-terminalBgDark bg-terminalBgLight font-github-mono dark:text-terminalTextDark text-terminalTextLight overflow-hidden transition-all duration-200 hover:shadow-2xl"
        >
            <!-- Terminal Header -->
            <div
                class="px-4 pt-4 pb-3 border-b border-borderLight dark:border-borderDark bg-opacity-50"
            >
                <div class="flex items-center justify-between mb-2">
                    <div class="flex space-x-2">
                        <div
                            class="w-3 h-3 rounded-full bg-red-500 transition-transform hover:scale-110"
                        ></div>
                        <div
                            class="w-3 h-3 rounded-full bg-yellow-500 transition-transform hover:scale-110"
                        ></div>
                        <div
                            class="w-3 h-3 rounded-full bg-green-500 transition-transform hover:scale-110"
                        ></div>
                    </div>
                    <!-- <span class="text-xs opacity-70 font-medium">Terminal</span> -->
                </div>
                <p class="text-xs opacity-70 font-github-mono tracking-wide">
                    Last login: {{ currentDate }} on IPv4 {{ ipAddress }}
                </p>
            </div>
            <!-- Terminal Content -->
            <div class="flex-1 p-4 pr-0 overflow-hidden">
                <TerminalInputOutput
                    :commandOutput="output"
                    :currentPath="currentPath"
                    @submit-command="handleCommand"
                />
            </div>
        </div>
        <Modal :isOpen="showHelpModal" @close="showHelpModal = false" />
    </div>
</template>

<script>
import axios from 'axios'
import TerminalInputOutput from './TerminalInputOutput.vue'
import Modal from './Modal.vue'
import terminalLogic from '../terminalLogic.js'

export default {
    data() {
        return {
            currentDate: new Date().toLocaleString(),
            ipAddress: 'loading...', // Default value while fetching
            state: terminalLogic.state,
            currentFile: terminalLogic.state.currentFile,
            output: terminalLogic.state.output,
            currentPath: terminalLogic.state.currentPath,
            showHelpModal: false
        }
    },
    components: {
        TerminalInputOutput,
        Modal
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
            const result = terminalLogic.handleCommand(command)
            if (result && result.showHelp) {
                this.showHelpModal = true
            }
            this.output = [...this.state.output] // Trigger reactivity
            this.currentFile = this.state.currentFile // Trigger reactivity
            this.currentPath = [...this.state.currentPath] // Trigger reactivity
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
