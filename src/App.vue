<template>
    <div class="flex">
        <SideBar :toggleDark="toggleDark" :isDark="useDark" />
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
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
const toggleDark = useToggle(isDark)
console.log(isDark.value)

export default {
    components: {
        SideBar,
        About,
        Terminal
    },
    data() {
        return {
            toggleDark,
            useDark
        }
    }
}
</script>
