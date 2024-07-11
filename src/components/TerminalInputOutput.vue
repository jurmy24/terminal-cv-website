<template>
    <div class="w-full bg-terminalBg overflow-scroll h-full pb-10">
        <!-- Terminal output-->
        <div v-for="(item, index) in history" :key="index">
            <div class="flex gap-2 items-center justify-start my-2">
                <Ghost class="min-w-6 min-h-6" />
                <span class="text-current font-bold text-xl">~</span>
                <span>{{ item.command }}</span>
            </div>
            <div v-if="item.output">{{ item.output }}</div>
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
            this.command = ''
            this.history.push({ command: currentCommand })
            this.$emit('submit-command', currentCommand)
        }
    },
    watch: {
        commandOutput: {
            handler(newOutput) {
                if (this.history.length > 0) {
                    this.history[this.history.length - 1].output = newOutput
                }
            }
        }
    }
}
</script>
