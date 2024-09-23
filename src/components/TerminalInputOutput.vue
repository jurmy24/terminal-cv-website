<template>
    <div
        class="w-full bg-terminalBg overflow-y-scroll h-full mb-10 pb-10"
        ref="terminalContentContainer"
    >
        <!-- Terminal output-->
        <div v-for="(item, index) in history" :key="index">
            <div class="flex gap-2 items-center justify-start my-2 mr-4">
                <Ghost class="min-w-6 min-h-6" />
                <span class="text-current font-bold text-xl">~</span>
                <span>{{ item.command }}</span>
            </div>

            <div v-if="Array.isArray(item.output) && item.output.length > 1" class="text-xs mr-4">
                <div v-if="item.output[0].name">
                    <div v-for="output in item.output" :key="output.name">
                        <span
                            :class="
                                output.type === 'folder' ? 'text-purpleHighlight' : 'text-current'
                            "
                        >
                            {{ output.name }}
                        </span>
                    </div>
                </div>
                <div v-else>
                    <div v-for="output in item.output" :key="output">
                        <p class="text-current py-1">{{ output }}</p>
                    </div>
                </div>
            </div>
            <div v-else-if="Array.isArray(item.output) && item.output.length <= 1" class="text-xs">
                <span class="text-current">{{ item.output[0] }}</span>
            </div>
            <div v-else class="text-xs">
                <span class="text-current">{{ item.output }}</span>
            </div>
        </div>
        <!-- Terminal input-->
        <div class="flex gap-2 items-center justify-start my-2">
            <Ghost class="min-w-6 min-h-6" />
            <span class="text-current font-bold text-xl">~</span>
            <form @submit.prevent="emitCommand" class="w-full">
                <input
                    class="border-0 outline-0 bg-transparent w-full"
                    v-model="command"
                    placeholder="Type a command..."
                    type="text"
                    ref="commandInput"
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
        scrollToBottom() {
            nextTick(() => {
                const terminalContent = this.$refs.terminalContentContainer
                if (terminalContent) {
                    terminalContent.scrollTop = terminalContent.scrollHeight
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
