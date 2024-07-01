<template>
    <!-- Terminal info text box -->
    <div class="md-view-box">
        <!-- Conditionally Render Header Section -->
        <MdHeaderBox v-if="showHeader" />
        <div v-html="markdownToHtml" class="p-4 md-view"></div>
    </div>
</template>

<script>
import MarkdownIt from 'markdown-it'
import MdHeaderBox from './MdHeaderBox.vue'

const markdowner = new MarkdownIt({
    // Enable HTML tags in source
    html: false,
    // Convert '\n' in paragraphs into <br>
    breaks: true,
    // Autoconvert URL-like text to links
    linkify: true
})

export default {
    name: 'MdViewBox',
    props: {
        mdContent: {
            type: String,
            required: true
        },
        showHeader: {
            type: Boolean,
            default: true
        }
    },
    computed: {
        markdownToHtml() {
            const renderedHtml = markdowner.render(this.mdContent)
            console.log(renderedHtml)
            return renderedHtml
        }
    },
    components: {
        MdHeaderBox
    }
}
</script>
