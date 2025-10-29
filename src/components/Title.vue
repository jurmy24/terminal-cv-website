<template>
    <div class="overflow-x-clip"></div>
</template>

<script>
import { useWindowSize } from '@vueuse/core'

export default {
    name: 'TitleComponent',
    data() {
        return {
            name: 'Victor Oldensand',
            width: useWindowSize().width
        }
    },
    watch: {
        width: {
            handler(newWidth) {
                if (newWidth < 768) {
                    this.name = 'V. Oldensand'
                } else {
                    this.mdTerminalContent = 'Victor Oldensand'
                }
            },
            immediate: true
        }
    }
}
</script>
