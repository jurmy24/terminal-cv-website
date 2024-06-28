<template>
    <div class="w-1/2 h-full p-4 bg-cyan-950 font-ProFontIIxNerdFontRegular text-slate-300">
        <p>Last login: {{ currentDate }} on IPv4 {{ ipAddress }}</p>
        <TerminalInputOutput />
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
