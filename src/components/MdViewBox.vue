<template>
    <!-- Terminal info text box -->
    <div class="md-view-box hide-scrollbar">
        <div v-if="showPretty" v-html="markdownToHtml" class="p-4 md-view"></div>
        <div v-else class="p-4">
            <pre class="whitespace-pre-wrap break-words">
                <code ref="codeBlock" class="language-markdown">{{ mdContent }}</code>
            </pre>
        </div>
    </div>
</template>

<script>
import MarkdownIt from 'markdown-it'
import hljs from 'highlight.js/lib/core'
import markdown from 'highlight.js/lib/languages/markdown'
import '../styles/highlight-custom.css' // Import your custom styles
import '../styles/md-view-custom.css'

// Then register the languages you need
hljs.registerLanguage('markdown', markdown)

const markdowner = new MarkdownIt({
    // Enable HTML tags in source
    html: false,
    // Convert '\n' in paragraphs into <br>
    breaks: true,
    // Autoconvert URL-like text to links
    linkify: true
})

// TO MAKE ALL LINKS OPEN IN NEW TAB
// Remember the old renderer if overridden, or proxy to the default renderer.
var defaultRender =
    markdowner.renderer.rules.link_open ||
    function (tokens, idx, options, env, self) {
        return self.renderToken(tokens, idx, options)
    }

markdowner.renderer.rules.link_open = function (tokens, idx, options, env, self) {
    // Add a new `target` attribute, or replace the value of the existing one.
    tokens[idx].attrSet('target', '_blank')

    // Pass the token to the default renderer.
    return defaultRender(tokens, idx, options, env, self)
}

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
            return renderedHtml
        }
    },
    mounted() {
        if (!this.showPretty) {
            this.$nextTick(() => {
                this.highlightCode()
            })
        }
    },
    updated() {
        if (!this.showPretty) {
            this.highlightCode()
        }
    },
    methods: {
        highlightCode() {
            const codeBlock = this.$refs.codeBlock
            if (codeBlock) {
                hljs.highlightElement(codeBlock)
            }
        }
    }
}
</script>
<style scoped>
.hljs {
    /* No styles applied */
}

.hljs-string,
.hljs-section,
.hljs-selector-class,
.hljs-template-variable,
.hljs-deletion {
    /* No styles applied */
}

.hljs-addition,
.hljs-built_in,
.hljs-bullet,
.hljs-code {
    /* No styles applied */
}

.hljs-link,
.hljs-operator,
.hljs-regexp,
.hljs-selector-attr,
.hljs-selector-pseudo,
.hljs-symbol,
.hljs-template-variable,
.hljs-variable {
    /* No styles applied */
}
</style>
