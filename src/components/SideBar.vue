<template>
    <!-- SideBar -->
    <div
        class="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-gray-900 text-white shadow-lg"
    >
        <SideBarIcon text="Toggle dark mode" @click="toggleDark()">
            <v-icon
                :name="isDark ? 'hi-solid-sun' : 'bi-moon-fill'"
                :class="['w-6 h-6', isDark ? 'text-yellow-500' : 'text-blue-500']"
            />
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
import SideBarIcon from './subcomponents/SideBarIcon.vue'
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
