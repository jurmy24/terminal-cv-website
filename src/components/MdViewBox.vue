<template>
    <!-- Terminal info text box -->
    <div class="md-view-box">
        <div v-if="showPretty" v-html="markdownToHtml" class="p-4 md-view"></div>
        <div v-else class="p-4">
            <pre
                class="whitespace-pre-wrap break-words"
            ><code class="language-markdown">{{ mdContent }}</code></pre>
        </div>
    </div>
</template>

<script>
import MarkdownIt from 'markdown-it'
// Using ES6 import syntax
import hljs from 'highlight.js/lib/core'
import markdown from 'highlight.js/lib/languages/markdown'

// Then register the languages you need
hljs.registerLanguage('markdown', markdown)
hljs.highlightAll()

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
        showPretty: {
            type: Boolean,
            default: true
        }
    },
    computed: {
        markdownToHtml() {
            const renderedHtml = markdowner.render(this.mdContent)
            // console.log(renderedHtml)
            return renderedHtml
        }
    }
}
</script>
