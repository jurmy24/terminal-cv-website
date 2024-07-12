<template>
    <div
        class="md:w-full w-screen h-full pb-10 p-4 pt-10 flex md:space-x-10 md:flex-row md:space-y-0 space-y-4 flex-col md:overflow-y-scroll"
    >
        <div v-if="width >= 768" class="flex md:w-1/2 flex-col space-y-4">
            <TitleComponent />
            <!-- Terminal -->
            <Terminal @file-changed="fetchMarkdownContent" />
            <!-- Terminal info text box -->
            <MdViewBox :mdContent="mdTerminalContent" class="w-full h-1/3" />
        </div>
        <div v-else class="flex flex-col space-y-4 align-middle">
            <TitleComponent />
            <!-- Terminal info text box -->
            <MdViewBox :mdContent="mdTerminalContent" class="w-full" />
        </div>
        <!-- Markdown content -->
        <MdBox :mdContent="mdContent" :currentFileName="currentFileName" class="w-full h-full" />
    </div>
</template>

<script>
import MdBox from '../components/MdBox.vue'
import MdViewBox from '../components/MdViewBox.vue'
import Terminal from '../components/Terminal.vue'
import TitleComponent from '../components/Title.vue'
import { useWindowSize } from '@vueuse/core'

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
                'For those of you familiar with the terminal, this should be pretty intuitive. For the rest, feel free to type **`help`** into my terminal and press **↵ Enter** to learn about the commands you can write to use it. By the way, if you want to view one of my files, just type **`view`** along with the file name.',
            mdContent: '',
            error: null,
            currentFileName: 'about.md',
            width: useWindowSize().width
        }
    },
    async created() {
        await this.fetchMarkdownContent('filesystem/root/about.md')
        // if (this.width < 768) {
        //     this.mdTerminalContent =
        //         '# Welcome!\n If you want to use my terminal please visit me on a larger screen.'
        // }
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
                        '# Welcome! 😎\n If you want to use my terminal please visit me on a larger screen.'
                } else {
                    this.mdTerminalContent =
                        'For those of you familiar with the terminal, this should be pretty intuitive. For the rest, feel free to type **`help`** into my terminal and press **↵ Enter** to learn about the commands you can write to use it. By the way, if you want to view one of my files, just type **`view`** along with the file name.'
                }
            },
            immediate: true
        }
    }
}
</script>
