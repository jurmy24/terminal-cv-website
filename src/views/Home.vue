<template>
    <div class="w-full h-full pb-10 p-4 pt-10 flex space-x-10">
        <div class="flex w-1/2 flex-col space-y-4">
            <TitleComponent />
            <!-- Terminal info text box -->
            <MdViewBox :mdContent="mdTerminalContent" class="w-full h-1/3" />
            <!-- Terminal -->
            <Terminal @file-changed="fetchMarkdownContent" />
        </div>
        <!-- Markdown content -->
        <MdBox :mdContent="mdContent" class="w-full h-full" />
    </div>
</template>

<script>
import MdBox from '../components/MdBox.vue'
import MdViewBox from '../components/MdViewBox.vue'
import Terminal from '../components/Terminal.vue'
import TitleComponent from '../components/Title.vue'

export default {
    name: 'Home',
    components: {
        MdBox,
        Terminal,
        TitleComponent,
        MdViewBox
    },
    data() {
        return {
            mdTerminalContent:
                'Welcome to my **Terminal**! \nYou can navigate around it using `cd` with the path. If you want to view what files exist in each directory you can write `ls` (or `dir`, this is an inclusive space). In this environment, you can open up a file simply using `view`. Type **`help`** if you need more advice. You can also use **`clear`** to empty the terminal.',
            mdContent: '',
            error: null
        }
    },
    async created() {
        await this.fetchMarkdownContent('filesystem/root/about.md')
    },
    methods: {
        async fetchMarkdownContent(filePath) {
            try {
                // console.log('Fetching markdown content from', filePath)
                const response = await fetch(filePath)
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`)
                }
                const data = await response.text()
                this.mdContent = data
            } catch (err) {
                this.error = `Error fetching the markdown file: ${err.message}`
                console.log(this.error)
            }
        }
    }
}
</script>
