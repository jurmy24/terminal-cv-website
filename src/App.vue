<template>
    <div class="flex font-sans md:h-screen h-full w-full overflow-x-hidden">
        <!-- Side Bar -->
        <SideBar :toggleDark="toggleDark" :isDark="useDark" />
        <div class="md:ml-16 md:mt-0 mt-16 ml-0 flex flex-col md:w-full">
            <!-- Main Content -->
            <Home />
            <!-- Copyright footer -->
            <footer
                class="md:fixed w-full h-6 md:bottom-1 text-left px-4 text-markdownTextLight dark:text-markdownTextDark text-sm"
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
import { useWindowSize } from '@vueuse/core'

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
            useDark,
            width: useWindowSize().width
        }
    }
}
</script>
