<template>
    <!-- SideBar -->
    <!-- <div
        class="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-terminalBgLight text-terminalTextLight dark:bg-terminalBgDark dark:text-terminalTextDark shadow-lg"
    > -->
    <div
        class="h-screen w-16 m-0 flex flex-col justify-end pb-4 border-r border-borderLight dark:border-borderDark bg-terminalBgLight text-terminalTextLight dark:bg-terminalBgDark dark:text-terminalTextDark shadow-lg"
    >
        <SideBarIcon text="Toggle mode" @click="toggleDark()">
            <v-icon
                :name="isDark ? 'hi-solid-sun' : 'bi-moon-fill'"
                class="w-6 h-6 dark:text-yellow-500 text-buttonBg"
            />
        </SideBarIcon>
        <SideBarIcon text="Visit my Chatbot">
            <v-icon name="fa-robot" class="w-6 h-6" />
        </SideBarIcon>
        <SideBarIcon text="Give a review">
            <v-icon name="md-ratereview" class="w-6 h-6" />
        </SideBarIcon>
    </div>
</template>

<script>
import SideBarIcon from './SideBarIcon.vue'
import { useDark } from '@vueuse/core'

const isDark = useDark()

export default {
    name: 'SideBar',
    components: {
        SideBarIcon
    },
    props: {
        toggleDark: {
            type: Function,
            required: true
        }
    },
    data() {
        return {
            isDark
        }
    }
}
</script>
