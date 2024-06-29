<template>
    <div class="w-screen h-screen flex flex-col">
        <NavBar />
        <!-- Main Content -->
        <div class="w-screen h-screen flex items-start justify-center">
            <Terminal />
            <About />
        </div>
    </div>
</template>

<script>
import About from './components/About.vue'
import Terminal from './components/Terminal.vue'
import NavBar from './components/NavBar.vue'

export default {
    components: {
        NavBar,
        About,
        Terminal
    }
}
</script>
