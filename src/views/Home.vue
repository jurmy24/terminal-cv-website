<template>
    <div class="w-screen h-screen p-4 pt-10 flex space-x-10">
        <div class="flex w-1/2 flex-col space-y-4">
            <TitleComponent />
            <!-- Terminal info text box -->
            <MdViewBox :mdContent="mdTerminalContent" :showHeader="false" class="w-full h-1/3" />
            <!-- Terminal -->
            <Terminal />
        </div>
        <!-- Markdown content -->
        <MdViewBox :mdContent="mdContent" class="w-full h-full" />
    </div>
</template>

<script>
import MdViewBox from '../components/MdViewBox.vue'
import Terminal from '../components/Terminal.vue'
import TitleComponent from '../components/Title.vue'

export default {
    name: 'Home',
    components: {
        MdViewBox,
        Terminal,
        TitleComponent
    },
    async created() {
        try {
            const response = await fetch('markdown/about-me.md')
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`)
            }
            const data = await response.text()
            this.mdContent = data
        } catch (err) {
            this.error = `Error fetching the markdown file: ${err.message}`
        }
    },
    data() {
        return {
            mdTerminalContent:
                'Welcome to my **Terminal**! \nYou can navigate around my terminal using `cd` with the path. If you want to view what files exist in each directory you can write `ls` (or `dir`, this is an inclusive space). In this environment, you can open up a file simply using `view`. Type **`help`** if you need more advice.',
            mdContent: '',
            error: null
        }
    }
}
</script>
