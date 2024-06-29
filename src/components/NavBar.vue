<template>
    <!-- Navbar -->
    <div class="py-10 top-0 flex w-full">
        <!-- <nav class="flex justify-end items-center"> -->
        <nav class="flex-no-wrap fixed p-4 top-0 flex w-full items-center lg:justify-end">
            <DarkModeButton />
        </nav>
    </div>
</template>

<script>
import DarkModeButton from './subcomponents/ToggleDarkModeButton.vue'
export default {
    name: 'NavBar',
    components: {
        DarkModeButton
    }
}
</script>
