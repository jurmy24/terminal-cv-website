<template>
    <div class="overflow-clip">
        <h1
        class="text-purpleHighlight font-ProFontIIxNerdFontRegular text-5xl mr-10 relative w-[max-content] before:absolute before:inset-0 before:animate-typewriter before:bg-mainBgLight dark:before:bg-mainBgDark after:absolute after:inset-0 after:w-[0.125em] after:animate-caret after:bg-current "
        >
        {{ name }}
    </h1>
    </div>
    
</template>

<script>
export default {
    data() {
        return {
            name: 'Victor Oldensand'
        }
    },
    name: 'TitleComponent'
}
</script>
