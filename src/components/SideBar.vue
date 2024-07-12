<template>
    <div
        class="fixed md:h-screen md:w-16 h-16 w-screen m-0 flex md:flex-col flex-row justify-end md:pb-4 pb-0 md:pr-0 pr-4 md:border-r md:border-b-0 border-b border-borderLight dark:border-borderDark bg-terminalBgLight text-terminalTextLight dark:bg-terminalBgDark dark:text-terminalTextDark shadow-lg"
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
