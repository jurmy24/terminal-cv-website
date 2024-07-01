<template>
    <!-- Terminal info text box -->
    <div class="md-view-box">
        <!-- Conditionally Render Header Section -->
        <div
            v-if="showHeader"
            class="flex items-center justify-between bg-markdownTopBarLight dark:bg-markdownTopBarDark border-b border-b-borderLight dark:border-b-borderDark p-2"
        >
            <div class="flex">
                <button class="md-button">Pretty</button>
                <button class="md-button rounded-l-none rounded-r">Raw</button>
            </div>
            <p class="flex-1 text-center text-current">about-me.md</p>
            <div class="w-20"></div>
            <!-- Placeholder for spacing to center the text -->
        </div>
        <div v-html="markdownToHtml" class="p-4"></div>
    </div>
</template>

<script>
import MarkdownIt from 'markdown-it'

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
            return markdowner.render(this.mdContent)
        }
    }
}
</script>
