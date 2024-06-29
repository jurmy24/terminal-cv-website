<template>
    <h1
        class="text-5xl uppercase relative w-[max-content] font-mono before:absolute before:inset-0 before:animate-typewriter before:bg-aboutBg after:absolute after:inset-0 after:w-[0.125em] after:animate-caret after:bg-black"
    >
        {{ name }}
    </h1>
    <p class="font-semibold mb-5 p-1">A doer of stuff</p>
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
