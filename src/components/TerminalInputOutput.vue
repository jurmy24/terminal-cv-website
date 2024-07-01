<template>
    <!---------------------- terminal-inputs-outputs----------------------->
    <div class="w-full bg-terminalBg pt-2">
        <div class="flex gap-2 items-center justify-start">
            <Ghost className="w-6 h-6" />
            <span class="text-topbarViola font-bold text-xl">~</span>
            <!-- Terminal input-->
            <input class="option-input border-0 outline-0 bg-transparent" type="text" />
        </div>
    </div>
</template>

<script>
import Ghost from './icons/Ghost.vue'
export default {
    name: 'TerminalInputOutput',
    components: {
        Ghost
    }
}
</script>
