<template>
    <!-- SideBar -->
    <div
        class="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-gray-900 text-white shadow-lg"
    >
        <DarkModeButton />
        <SideBarIcon text="Sun Icon">
            <v-icon name="hi-solid-sun" class="w-6 h-6" />
        </SideBarIcon>
        <SideBarIcon text="Moon Icon">
            <v-icon name="io-moon" class="w-6 h-6" />
        </SideBarIcon>
        <SideBarIcon text="Chatbot Icon">
            <v-icon name="fa-robot" class="w-6 h-6" />
        </SideBarIcon>
        <SideBarIcon text="Rate Icon">
            <v-icon name="md-ratereview" class="w-6 h-6" />
        </SideBarIcon>
    </div>
</template>

<script>
import DarkModeButton from './subcomponents/ToggleDarkModeButton.vue'
import SideBarIcon from './subcomponents/SideBarIcon.vue'

export default {
    name: 'SideBar',
    components: {
        SideBarIcon,
        DarkModeButton
    }
}
</script>
