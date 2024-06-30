<template>
    <div class="flex font-ProFontIIxNerdFontRegular">
        <SideBar :toggleDark="toggleDark" :isDark="useDark" />
        <!-- Main Content -->
        <div class="w-screen h-screen p-7 flex">
            <div class="flex w-1/2 flex-col space-y-5">
                <TitleComponent />
                <!-- Terminal info text box -->
                <div>
                    <div
                        class="font-mono px-6 py-2 border border-gray-300 dark:border-black rounded-md bg-textboxBgLight dark:bg-textboxBgDark dark:text-terminalTextDark text-gray-800"
                    >
                        <!-- <textarea v-model="markdown"></textarea> -->
                        <div v-html="markdownToHtml"></div>
                    </div>
                </div>
                <Terminal />
            </div>
            <MdViewBox :mdContent="mdContent" />
        </div>
    </div>
</template>

<script>
import MdViewBox from './components/MdViewBox.vue'
import Terminal from './components/Terminal.vue'
import SideBar from './components/SideBar.vue'
import { useDark, useToggle } from '@vueuse/core'
import TitleComponent from './components/subcomponents/Title.vue'
import MarkdownIt from 'markdown-it'

const markdowner = new MarkdownIt({
    // Enable HTML tags in source
    html: false,

    // Convert '\n' in paragraphs into <br>
    breaks: false,

    // Autoconvert URL-like text to links
    linkify: true
})

const isDark = useDark()
const toggleDark = useToggle(isDark)

export default {
    components: {
        SideBar,
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
            // console.log(this.mark)
        } catch (err) {
            this.error = `Error fetching the markdown file: ${err.message}`
        }
    },
    data() {
        return {
            toggleDark,
            useDark,
            markdown:
                'Welcome to my **Terminal**! You can navigate around my terminal using `cd` with the path. If you want to view what files exist in each directory you can write `ls` (or `dir`, this is an inclusive space). In this environment, you can open up a file simply using `view`. Type **`help`** if you need more advice.',
            mdContent: '',
            error: null
        }
    },
    computed: {
        markdownToHtml() {
            return markdowner.render(this.markdown)
        }
    }
}
</script>
