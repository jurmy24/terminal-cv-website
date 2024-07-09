<template>
    <div
        class="fixed h-screen w-16 m-0 flex flex-col justify-end pb-4 border-r border-borderLight dark:border-borderDark bg-terminalBgLight text-terminalTextLight dark:bg-terminalBgDark dark:text-terminalTextDark shadow-lg"
    >
        <SideBarIcon text="Toggle mode" @click="toggleDark()" class="mx-2">
            <v-icon
                :name="isDark ? 'hi-solid-sun' : 'bi-moon-fill'"
                class="w-6 h-6 dark:text-yellow-500 text-buttonBg"
            />
        </SideBarIcon>
        <SideBarIcon text="Visit my Chatbot" class="cursor-not-allowed mx-2">
            <v-icon name="fa-robot" class="w-6 h-6" />
        </SideBarIcon>
        <SideBarIcon text="Give a review" class="cursor-not-allowed mx-2">
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
