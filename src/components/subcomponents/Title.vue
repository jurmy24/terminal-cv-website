<template>
    <h1
        class="text-3xl uppercase relative w-[max-content] font-ProFontIIxNerdFontRegular before:absolute before:inset-0 before:animate-typewriter before:bg-aboutBg after:absolute after:inset-0 after:w-[0.125em] after:animate-caret after:bg-black"
    >
        {{ name }}
    </h1>
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
