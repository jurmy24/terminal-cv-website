<template>
    <div
        class="w-full h-full bg-secondary overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800"
        ref="terminalContentContainer"
    >
        <div class="p-4 space-y-2">
            <!-- Terminal output-->
            <div v-for="(item, index) in history" :key="index" class="space-y-1">
                <!-- Command line -->
                <div class="flex items-center space-x-2">
                    <span class="text-accent font-bold">~</span>
                    <span class="text-foreground">{{ item.command }}</span>
                </div>

                <!-- Command output -->
                <div v-if="Array.isArray(item.output) && item.output.length > 1" class="ml-6">
                    <div v-if="item.output[0].name">
                        <div v-for="output in item.output" :key="output.name" class="py-0.5">
                            <span
                                :class="
                                    output.type === 'folder'
                                        ? 'text-purple-400 font-semibold'
                                        : 'text-foreground'
                                "
                            >
                                {{ output.name }}
                            </span>
                        </div>
                    </div>
                    <div v-else>
                        <div v-for="output in item.output" :key="output" class="py-0.5">
                            <p class="text-foreground">{{ output }}</p>
                        </div>
                    </div>
                </div>
                <div
                    v-else-if="Array.isArray(item.output) && item.output.length <= 1"
                    class="ml-6 text-sm"
                >
                    <span class="text-foreground">{{ item.output[0] }}</span>
                </div>
                <div v-else class="ml-6 text-sm">
                    <span class="text-foreground">{{ item.output }}</span>
                </div>
            </div>

            <!-- Terminal input-->
            <div class="flex items-center space-x-2 text-sm">
                <Ghost class="w-4 h-4 text-green-400 flex-shrink-0" />
                <span class="text-blue-400 font-bold">~</span>
                <form @submit.prevent="emitCommand" class="flex-1">
                    <input
                        class="border-0 outline-0 bg-transparent w-full text-foreground placeholder-gray-500"
                        v-model="command"
                        placeholder="Type a command..."
                        type="text"
                        ref="commandInput"
                        autocomplete="off"
                        spellcheck="false"
                    />
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import { nextTick } from 'vue'

export default {
    name: 'TerminalInputOutput',
    props: {
        commandOutput: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            command: '',
            history: []
        }
    },
    mounted() {
        this.focusInput()
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
        scrollToBottom() {
            nextTick(() => {
                const terminalContent = this.$refs.terminalContentContainer
                if (terminalContent) {
                    terminalContent.scrollTop = terminalContent.scrollHeight
                }
            })
        },
        focusInput() {
            nextTick(() => {
                const input = this.$refs.commandInput
                if (input) {
                    input.focus()
                }
            })
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
