<template>
    <div
        class="w-full bg-terminalBg overflow-y-scroll h-full mb-10 pb-10 hide-scrollbar"
        ref="terminalContentContainer"
    >
        <!-- Terminal output-->
        <div v-for="(item, index) in history" :key="index" class="mb-5">
            <!-- Command line -->
            <div class="flex gap-2 items-center justify-start mb-3 mr-4 group">
                <Ghost class="min-w-6 min-h-6 transition-all duration-200 group-hover:opacity-80" />
                <span class="text-sm font-medium tracking-wide">{{ item.command }}</span>
            </div>

            <!-- Output container with better structure -->
            <div
                v-if="Array.isArray(item.output) && item.output.length > 0 && item.output[0].name"
                class="text-sm mr-4"
            >
                <!-- File/Folder listings -->
                <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-2.5">
                    <div
                        v-for="output in item.output"
                        :key="output.name"
                        @click="handleItemClick(output)"
                        class="flex items-center gap-2.5 hover:bg-opacity-10 hover:bg-purpleHighlight rounded-md px-3 py-2.5 transition-all duration-150 cursor-pointer group/item border border-transparent hover:border-purpleHighlight hover:border-opacity-30 min-w-0"
                    >
                        <!-- Icon indicator -->
                        <div
                            :class="
                                output.type === 'folder'
                                    ? 'bg-purpleHighlight bg-opacity-20 text-purpleHighlight'
                                    : 'bg-gray-500 bg-opacity-20 text-gray-400 dark:text-gray-500'
                            "
                            class="flex items-center justify-center w-7 h-7 rounded text-xs font-bold flex-shrink-0 transition-transform group-hover/item:scale-110"
                        >
                            {{ output.type === 'folder' ? '/' : '•' }}
                        </div>
                        <!-- File/Folder name -->
                        <span
                            :class="
                                output.type === 'folder'
                                    ? 'text-purpleHighlight font-semibold'
                                    : 'text-current opacity-90'
                            "
                            class="font-github-mono text-[13px] tracking-wide truncate min-w-0"
                            :title="output.name"
                        >
                            {{ output.name }}
                        </span>
                    </div>
                </div>
            </div>
            <!-- Multi-line text output -->
            <div
                v-else-if="Array.isArray(item.output) && item.output.length > 1"
                class="text-sm mr-4"
            >
                <div class="space-y-0.5">
                    <div v-for="output in item.output" :key="output">
                        <p
                            class="text-current opacity-90 py-0.5 leading-relaxed font-github-mono text-[13px] tracking-wide"
                        >
                            {{ output }}
                        </p>
                    </div>
                </div>
            </div>
            <!-- Single line output (error/info messages) -->
            <div
                v-else-if="Array.isArray(item.output) && item.output.length === 1"
                class="text-sm mr-4"
            >
                <div
                    :class="getMessageClass(item.output[0])"
                    class="rounded-md px-4 py-2.5 font-github-mono text-[13px] tracking-wide flex items-start gap-2.5"
                >
                    <span class="flex-shrink-0 font-bold text-sm">{{
                        getMessageIcon(item.output[0])
                    }}</span>
                    <span class="leading-relaxed">{{ item.output[0] }}</span>
                </div>
            </div>
            <!-- Simple output -->
            <div v-else class="text-sm mr-4">
                <div
                    :class="getMessageClass(item.output)"
                    class="rounded-md px-4 py-2.5 font-github-mono text-[13px] tracking-wide flex items-start gap-2.5"
                >
                    <span class="flex-shrink-0 font-bold text-sm">{{
                        getMessageIcon(item.output)
                    }}</span>
                    <span class="leading-relaxed">{{ item.output }}</span>
                </div>
            </div>
        </div>
        <!-- Terminal input-->
        <div class="flex gap-2 items-center justify-start my-2 group">
            <Ghost
                class="min-w-6 min-h-6 transition-all duration-200 group-hover:opacity-80 animate-pulse"
            />
            <span class="text-sm font-semibold text-purpleHighlight mr-1">{{
                currentPathDisplay
            }}</span>
            <span class="text-sm font-medium mr-2 opacity-80">$</span>
            <form @submit.prevent="emitCommand" class="flex-1">
                <input
                    class="border-0 outline-0 bg-transparent w-full text-sm font-medium tracking-wide placeholder-opacity-50 focus:placeholder-opacity-30 transition-all duration-200"
                    v-model="command"
                    placeholder="Type a command... (try 'help')"
                    type="text"
                    ref="commandInput"
                    autocomplete="off"
                    spellcheck="false"
                />
            </form>
        </div>
    </div>
</template>

<script>
import Ghost from './icons/Ghost.vue'
import { nextTick } from 'vue'

export default {
    name: 'TerminalInputOutput',
    components: {
        Ghost
    },
    props: {
        commandOutput: {
            type: Array,
            required: true
        },
        currentPath: {
            type: Array,
            required: true
        }
    },
    computed: {
        currentPathDisplay() {
            return `~/${this.currentPath.slice(1).join('/')}`
        }
    },
    data() {
        return {
            command: '',
            history: []
        }
    },
    methods: {
        emitCommand() {
            let currentCommand = this.command
            if (currentCommand == 'clear') {
                this.history = []
            } else {
                this.history.push({ command: currentCommand })
                this.$emit('submit-command', currentCommand)
            }
            this.command = ''
            this.scrollToBottom()
        },
        handleItemClick(item) {
            let command
            if (item.type === 'folder') {
                command = `cd ${item.name}`
            } else {
                command = `view ${item.name}`
            }
            // Set the command in the input and submit it
            this.command = command
            this.emitCommand()
        },
        scrollToBottom() {
            nextTick(() => {
                const terminalContent = this.$refs.terminalContentContainer
                if (terminalContent) {
                    terminalContent.scrollTop = terminalContent.scrollHeight
                }
            })
        },
        isErrorMessage(message) {
            if (typeof message !== 'string') return false
            const errorPatterns = ['No such', 'Unknown command', 'Error', 'not found', 'failed']
            return errorPatterns.some((pattern) =>
                message.toLowerCase().includes(pattern.toLowerCase())
            )
        },
        getMessageClass(message) {
            if (this.isErrorMessage(message)) {
                return 'bg-red-500 bg-opacity-10 border border-red-500 border-opacity-30 text-red-600 dark:text-red-400'
            }
            return 'bg-blue-500 bg-opacity-10 border border-blue-500 border-opacity-30 text-blue-700 dark:text-blue-400'
        },
        getMessageIcon(message) {
            if (this.isErrorMessage(message)) {
                return '✕'
            }
            return '→'
        }
    },
    watch: {
        commandOutput: {
            handler(newOutput) {
                if (this.history.length > 0) {
                    this.history[this.history.length - 1].output = newOutput
                    this.scrollToBottom()
                }
            },
            immediate: true
        }
    }
}
</script>
