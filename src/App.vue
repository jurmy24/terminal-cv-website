<template>
    <div class="flex font-sans h-screen w-screen">
        <!-- Side Bar -->
        <SideBar :toggleDark="toggleDark" :isDark="useDark" class="" />
        <div class="ml-16 flex flex-col">
            <!-- Main Content -->
            <Home />
            <!-- Copyright footer -->
            <footer
                class="fixed w-full h-6 bottom-1 text-left px-4 text-markdownTextLight dark:text-markdownTextDark text-sm"
            >
                &copy; 2024 Victor Oldensand.
            </footer>
        </div>
    </div>
</template>

<script>
import { useDark, useToggle } from '@vueuse/core'

import SideBar from './components/SideBar.vue'
import Home from './views/Home.vue'

const isDark = useDark()
const toggleDark = useToggle(isDark)

export default {
    components: {
        SideBar,
        Home
    },
    data() {
        return {
            toggleDark,
            useDark
        }
    }
}
</script>
