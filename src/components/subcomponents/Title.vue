<template>
    <h1
        class="text-7xl relative w-[max-content] font-mono before:absolute before:inset-0 before:animate-typewriter before:bg-mainBgLight dark:before:bg-mainBgDark after:absolute after:inset-0 after:w-[0.125em] after:animate-caret after:bg-current"
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
