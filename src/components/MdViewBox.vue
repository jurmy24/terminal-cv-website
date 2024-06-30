<template>
    <!-- Terminal info text box -->
    <div
        class="mx-10 w-full h-full p-4 py-2 border border-gray-300 rounded-md bg-textboxBgLight text-gray-800 overflow-auto"
    >
        <div v-html="markdownToHtml"></div>
    </div>
</template>

<script>
import MarkdownIt from 'markdown-it'

const markdowner = new MarkdownIt({
    // Enable HTML tags in source
    html: false,

    // Convert '\n' in paragraphs into <br>
    breaks: false,

    // Autoconvert URL-like text to links
    linkify: true
})

export default {
    name: 'MdViewBox',
    props: {
        mdContent: {
            type: String,
            required: true
        }
    },
    computed: {
        markdownToHtml() {
            return markdowner.render(this.mdContent)
        }
    }
}
</script>
