<template>
    <div
        class="w-screen h-screen bg-gradient-to-r from-gradientBg1 to-gradientBg2 flex flex-col items-center justify-center flex-wrap"
    >
        <About />
        <Terminal />
    </div>
</template>

<script>
import About from './components/About.vue'
import Terminal from './components/Terminal.vue'

export default {
    components: {
        About,
        Terminal
    }
}
</script>
