<template>
    <div class="h-5/6 my-auto">
        <div
            class="h-full p-4 rounded-md shadow-lg dark:bg-terminalBgDark bg-terminalBgLight font-ProFontIIxNerdFontRegular dark:text-terminalTextDark text-terminalTextLight"
        >
            <p>Last login: {{ currentDate }} on IPv4 {{ ipAddress }}</p>
            <TerminalInputOutput />
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import TerminalInputOutput from './subcomponents/TerminalInputOutput.vue'

export default {
    data() {
        return {
            currentDate: new Date().toLocaleString(),
            ipAddress: 'loading...' // Default value while fetching
        }
    },
    components: {
        TerminalInputOutput
    },
    mounted() {
        this.fetchIPAddress()
    },
    methods: {
        async fetchIPAddress() {
            try {
                const response = await axios.get('https://api.ipify.org?format=json')
                this.ipAddress = response.data.ip
            } catch (error) {
                console.error('Error fetching IP address:', error)
                this.ipAddress = 'unknown'
            }
        }
    }
}
</script>
