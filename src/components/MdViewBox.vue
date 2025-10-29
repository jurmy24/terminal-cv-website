<template>
    <!-- Terminal info text box -->
    <div class="text-foreground overflow-y-auto scrollbar-hide">
        <div v-html="renderedContent"></div>
    </div>
</template>

<script>
import { defineComponent, ref, onMounted, watch, onUnmounted, computed } from 'vue'
import hljs from 'highlight.js/lib/core'
import markdown from 'highlight.js/lib/languages/markdown'

// Register the languages for raw markdown view
hljs.registerLanguage('markdown', markdown)

export default defineComponent({
    name: 'MdViewBox',
    props: {
        mdContent: {
            type: String,
            required: true
        }
    },
    setup(props) {
        const codeBlock = ref(null)
        const displayedContent = ref('')
        const isTyping = ref(false)
        let typingTimeout = null

        // Enhanced markdown to HTML converter that preserves existing HTML
        const markdownToHtml = (markdown) => {
            if (!markdown) return ''

            // First, protect existing HTML tags by temporarily replacing them
            const htmlTags = []
            let html = markdown.replace(/(<[^>]+>)/g, (match) => {
                htmlTags.push(match)
                return `__HTML_TAG_${htmlTags.length - 1}__`
            })

            // Convert markdown syntax only on non-HTML content
            html = html
                .replace(/^### (.*$)/gim, '<h3>$1</h3>')
                .replace(/^## (.*$)/gim, '<h2>$1</h2>')
                .replace(/^# (.*$)/gim, '<h1>$1</h1>')
                // Convert bold and italic
                .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                .replace(/\*(.*?)\*/g, '<em>$1</em>')
                // Convert code blocks
                .replace(/`(.*?)`/g, '<code>$1</code>')

            // Restore HTML tags
            htmlTags.forEach((tag, index) => {
                html = html.replace(`__HTML_TAG_${index}__`, tag)
            })

            // Convert line breaks only outside of HTML tags
            html = html.replace(/\n(?![^<]*>)/g, '<br>')

            return html
        }

        // Progressive rendering function - smart chunk by chunk
        const startProgressiveRendering = (content) => {
            if (typingTimeout) {
                clearTimeout(typingTimeout)
            }

            isTyping.value = true
            displayedContent.value = ''

            // Convert content to HTML first
            const fullHtml = markdownToHtml(content)

            // Split into chunks: complete HTML tags and text portions
            const chunks = parseIntoChunks(fullHtml)
            let currentChunkIndex = 0

            const renderNextChunk = () => {
                if (currentChunkIndex < chunks.length) {
                    const chunk = chunks[currentChunkIndex]

                    if (chunk.isHtml) {
                        // Render complete HTML tag instantly
                        displayedContent.value += chunk.content
                        currentChunkIndex++
                        typingTimeout = setTimeout(renderNextChunk, 100) // Short pause after HTML elements
                    } else {
                        // Type text character by character
                        let charIndex = 0
                        const typeText = () => {
                            if (charIndex < chunk.content.length) {
                                displayedContent.value += chunk.content[charIndex]
                                charIndex++
                                typingTimeout = setTimeout(typeText, 30) // 30ms per character
                            } else {
                                currentChunkIndex++
                                typingTimeout = setTimeout(renderNextChunk, 50) // Pause between chunks
                            }
                        }
                        typeText()
                    }
                } else {
                    isTyping.value = false
                }
            }

            renderNextChunk()
        }

        // Parse content into HTML tags and text chunks
        const parseIntoChunks = (html) => {
            const chunks = []
            let currentPos = 0
            const htmlTagRegex = /<[^>]+>/g
            let match

            while ((match = htmlTagRegex.exec(html)) !== null) {
                // Add text before the tag
                if (match.index > currentPos) {
                    const textContent = html.slice(currentPos, match.index)
                    if (textContent.trim()) {
                        chunks.push({ content: textContent, isHtml: false })
                    }
                }

                // Add the HTML tag
                chunks.push({ content: match[0], isHtml: true })
                currentPos = match.index + match[0].length
            }

            // Add remaining text after last tag
            if (currentPos < html.length) {
                const textContent = html.slice(currentPos)
                if (textContent.trim()) {
                    chunks.push({ content: textContent, isHtml: false })
                }
            }

            return chunks
        }

        const renderedContent = computed(() => {
            return displayedContent.value
        })

        const highlightCode = () => {
            if (codeBlock.value) {
                hljs.highlightElement(codeBlock.value)
            }
        }

        onMounted(async () => {
            highlightCode()
        })

        onUnmounted(() => {
            if (typingTimeout) {
                clearTimeout(typingTimeout)
            }
        })

        watch(
            () => props.mdContent,
            async (newContent) => {
                if (newContent) {
                    startProgressiveRendering(newContent)
                }
            },
            { immediate: true }
        )

        return {
            codeBlock,
            renderedContent,
            isTyping
        }
    }
})
</script>
