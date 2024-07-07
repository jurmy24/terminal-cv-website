<template>
    <div class="flex font-sans">
        <!-- Side Bar -->
        <SideBar :toggleDark="toggleDark" :isDark="useDark" />

        <!-- Main Content -->
        <Home />
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
