<template>
    <div class="w-screen h-screen bg-primary">
        <div class="px-60 flex text-foreground font-dm-mono h-full w-full">
            <!-- Loading Screen -->
            <div v-if="!showMdView" class="flex items-center h-full w-full">
                <span>
                    <span v-for="(char, idx) in displayedText" :key="idx">{{ char }}</span>
                    <span v-if="showCaret" class="animate-blink">|</span>
                </span>
            </div>

            <!-- MdView -->
            <div v-if="showMdView" class="w-full h-full">
                <MdViewBox
                    :mdContent="mdContent"
                    :currentFileName="currentFileName"
                    class="w-full h-full"
                />
            </div>

            <!-- Modal -->
            <Modal :isOpen="isTerminalOpen" @close="closeTerminal">
                <Terminal @file-changed="handleFileChanged" />
            </Modal>
        </div>
    </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'

import Modal from './components/Modal.vue'
import Terminal from './components/Terminal.vue'
import MdViewBox from './components/MdViewBox.vue'
import { useWindowSize } from '@vueuse/core'

export default {
    components: {
        Modal,
        Terminal,
        MdViewBox
    },
    setup() {
        const isTerminalOpen = ref(false)
        const showMdView = ref(false)
        const mdContent = ref('')
        const currentFileName = ref('intro.md')
        const fullText = 'Loading...'
        const displayedText = ref('')
        const showCaret = ref(true)
        const typingSpeed = 50 // ms between each character
        const blinkSpeed = 500 // ms between caret blinks
        let timeout = null
        let blinkTimeout = null

        const openTerminal = () => {
            isTerminalOpen.value = true
        }

        const closeTerminal = () => {
            isTerminalOpen.value = false
        }

        const handleFileChanged = (filePath) => {
            if (filePath) {
                fetchMarkdownContent(filePath)
            }
        }

        const fetchMarkdownContent = async (filePath) => {
            try {
                currentFileName.value = filePath.split('/').pop()
                const response = await fetch(filePath)
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`)
                }
                const data = await response.text()
                mdContent.value = data
            } catch (err) {
                console.error(`Error fetching the markdown file: ${err.message}`)
                mdContent.value = `Error loading file: ${err.message}`
            }
        }

        const handleKeydown = (event) => {
            // Check for Command+K (Mac) or Ctrl+K (Windows/Linux)
            if ((event.metaKey || event.ctrlKey) && event.key === 'k') {
                event.preventDefault()
                if (isTerminalOpen.value) {
                    closeTerminal()
                } else {
                    openTerminal()
                }
            }
        }

        const startTyping = () => {
            timeout = setTimeout(() => {
                displayedText.value += fullText[displayedText.value.length]
                if (displayedText.value.length < fullText.length) {
                    startTyping()
                }
            }, typingSpeed)
        }

        const showIntroAfterDelay = async () => {
            // Load intro.md content and show mdview after 5 seconds
            await fetchMarkdownContent('filesystem/root/intro.md')
            setTimeout(() => {
                showMdView.value = true
                // The progressive rendering will start automatically when mdContent changes
            }, 4000)
        }

        onMounted(() => {
            document.addEventListener('keydown', handleKeydown)
            // Load intro.md and show after 5 seconds
            showIntroAfterDelay()
            startTyping()
        })

        onUnmounted(() => {
            document.removeEventListener('keydown', handleKeydown)
            clearTimeout(timeout)
            clearTimeout(blinkTimeout)
        })

        return {
            isTerminalOpen,
            showMdView,
            mdContent,
            currentFileName,
            openTerminal,
            closeTerminal,
            handleFileChanged,
            displayedText,
            showCaret,
            typingSpeed,
            blinkSpeed,
            timeout,
            blinkTimeout
        }
    },
    data() {
        return {
            width: useWindowSize().width
        }
    }
}
</script>
