<template>
    <div
        class="flex items-center justify-between bg-markdownTopBarLight dark:bg-markdownTopBarDark border-b border-b-borderLight dark:border-b-borderDark p-2"
    >
        <div class="flex">
            <button class="md-button">Pretty</button>
            <button class="md-button rounded-l-none rounded-r">Raw</button>
        </div>
        <p class="flex-1 text-center text-current">about-me.md</p>
        <!-- Placeholder for spacing to center the text -->
        <div class="w-20"></div>
    </div>
</template>

<script>
export default {
    name: 'MdHeaderBox'
}
</script>
