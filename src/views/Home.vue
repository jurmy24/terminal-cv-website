<template>
    <div
        class="md:w-full w-screen h-full py-4 px-4 flex md:space-x-4 md:flex-row md:space-y-0 space-y-4 flex-col md:overflow-y-scroll"
    >
        <div v-if="width >= 768" class="flex md:w-1/3 h-full flex-col">
            <!-- Terminal -->
            <Terminal @file-changed="fetchMarkdownContent" />
        </div>
        <div v-else class="flex flex-col space-y-4 align-middle">
            <!-- Terminal info text box -->
            <MdViewBox
                :mdContent="mdTerminalContent"
                class="w-full pb-0 overflow-x-hidden hide-scrollbar"
            />
        </div>
        <!-- Markdown content -->
        <MdBox
            :mdContent="mdContent"
            :currentFileName="currentFileName"
            class="md:w-2/3 w-full h-full"
        />
    </div>
</template>

<script>
import MdBox from '../components/MdBox.vue'
import MdViewBox from '../components/MdViewBox.vue'
import Terminal from '../components/Terminal.vue'
import { useWindowSize } from '@vueuse/core'

export default {
    name: 'Home',
    components: {
        MdBox,
        Terminal,
        MdViewBox
    },
    data() {
        return {
            mdTerminalContent: '',
            mdContent: '',
            error: null,
            currentFileName: 'about.md',
            width: useWindowSize().width
        }
    },
    async created() {
        await this.fetchMarkdownContent('filesystem/root/about.md')
    },
    methods: {
        async fetchMarkdownContent(filePath) {
            try {
                // console.log('Fetching markdown content from', filePath)
                this.currentFileName = filePath.split('/')?.pop()
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
    },
    watch: {
        width: {
            handler(newWidth) {
                if (newWidth < 768) {
                    this.mdTerminalContent =
                        "# Welcome! \n If you want to use my terminal please visit on a larger screen. You could give it a shot in landscape mode but I wouldn't recommend it. Who uses a terminal on their phone anyways?"
                }
            },
            immediate: true
        }
    }
}
</script>
