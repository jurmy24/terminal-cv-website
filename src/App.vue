<template>
    <div class="flex font-sans md:h-screen h-full w-full overflow-x-hidden">
        <!-- Main Content -->
        <Home />
    </div>
</template>

<script>
import { useDark, useToggle } from '@vueuse/core'

import Home from './views/Home.vue'
import { useWindowSize } from '@vueuse/core'

const isDark = useDark()
const toggleDark = useToggle(isDark)

export default {
    components: {
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
