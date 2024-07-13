<template>
    <div class="overflow-x-clip">
        <h1
            class="text-purpleHighlight z-0 font-ProFontIIxNerdFontRegular text-5xl mr-10 relative w-[max-content] before:absolute before:inset-0 md:before:animate-typewriter before:animate-typewriterSmall before:bg-mainBgLight dark:before:bg-mainBgDark after:absolute after:inset-0 after:w-[0.125em] after:animate-caret after:bg-current"
        >
            {{ name }}
        </h1>
    </div>
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
