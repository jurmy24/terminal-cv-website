<template>
    <div class="flex">
        <SideBar />
        <!-- Main Content -->
        <div class="w-screen h-screen flex items-start justify-center">
            <About />
            <Terminal />
        </div>
    </div>
</template>

<script>
import About from './components/About.vue'
import Terminal from './components/Terminal.vue'
import SideBar from './components/SideBar.vue'

export default {
    components: {
        SideBar,
        About,
        Terminal
    }
}
</script>
