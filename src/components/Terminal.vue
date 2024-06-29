<template>
    <div class="mx-auto h-5/6 shadow-2xl border-black border-2">
        <div
            class="h-full p-4 rounded-md shadow-2xl bg-terminalBgDark font-ProFontIIxNerdFontRegular text-terminalTextDark"
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
