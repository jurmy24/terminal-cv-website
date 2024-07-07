<template>
    <div class="w-full bg-terminalBg pt-2 overflow-scroll h-full pb-10">
        <!-- Terminal output-->
        <div class="terminal-output">
            <div v-for="line in output" :key="line">{{ line }}</div>
        </div>
        <div class="flex gap-2 items-center justify-start">
            <Ghost class="w-6 h-6" />
            <span class="text-topbarViola font-bold text-xl">~</span>
            <!-- Terminal input-->
            <form @submit.prevent="emitCommand" class="w-full">
                <input
                    class="option-input border-0 outline-0 bg-transparent w-full"
                    v-model="command"
                    placeholder="Type a command..."
                    type="text"
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
        output: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            command: ''
        }
    },
    methods: {
        emitCommand() {
            this.$emit('submit-command', this.command)
            this.command = ''
        }
    }
}
</script>
