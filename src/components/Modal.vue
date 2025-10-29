<template>
    <transition name="modal-fade">
        <div
            v-if="isOpen"
            class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 backdrop-blur-sm"
            @click.self="closeModal"
        >
            <div
                class="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-markdownBgLight dark:bg-markdownBgDark border border-borderLight dark:border-borderDark rounded-lg shadow-2xl transform transition-all"
                @click.stop
            >
                <!-- Header -->
                <div
                    class="sticky top-0 flex items-center justify-between p-4 border-b border-borderLight dark:border-borderDark bg-markdownTopBarLight dark:bg-markdownTopBarDark"
                >
                    <h2
                        class="text-2xl font-bold text-markdownTextLight dark:text-markdownTextDark"
                    >
                        Terminal Commands
                    </h2>
                    <button
                        @click="closeModal"
                        class="text-markdownTextLight dark:text-markdownTextDark hover:text-purpleHighlight transition-colors duration-200"
                    >
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>

                <!-- Content -->
                <div class="p-6 space-y-6 font-github-mono">
                    <div class="space-y-4">
                        <div class="command-section">
                            <div class="flex items-center space-x-2 mb-2">
                                <span
                                    class="text-lg font-bold text-purpleHighlight dark:text-purpleHighlight"
                                    >ls</span
                                >
                                <span
                                    class="text-sm text-markdownTextLight dark:text-markdownTextDark"
                                    >or</span
                                >
                                <span
                                    class="text-lg font-bold text-purpleHighlight dark:text-purpleHighlight"
                                    >dir</span
                                >
                            </div>
                            <p
                                class="text-sm text-markdownTextLight dark:text-markdownTextDark ml-6"
                            >
                                List all files and folders in the current directory. Folders are
                                shown in purple.
                            </p>
                        </div>

                        <div class="command-section">
                            <div class="flex items-center space-x-2 mb-2">
                                <span
                                    class="text-lg font-bold text-purpleHighlight dark:text-purpleHighlight"
                                    >cd</span
                                >
                                <span
                                    class="text-sm text-markdownTextLight dark:text-markdownTextDark opacity-70"
                                    >&lt;folder_name&gt;</span
                                >
                            </div>
                            <p
                                class="text-sm text-markdownTextLight dark:text-markdownTextDark ml-6"
                            >
                                Change directory into a folder. Use
                                <code
                                    class="px-1 py-0.5 bg-mdCodeBgLight dark:bg-mdCodeBgDark rounded"
                                    >cd ..</code
                                >
                                to go back to the parent directory.
                            </p>
                        </div>

                        <div class="command-section">
                            <div class="flex items-center space-x-2 mb-2">
                                <span
                                    class="text-lg font-bold text-purpleHighlight dark:text-purpleHighlight"
                                    >view</span
                                >
                                <span
                                    class="text-sm text-markdownTextLight dark:text-markdownTextDark opacity-70"
                                    >&lt;file_name&gt;</span
                                >
                            </div>
                            <p
                                class="text-sm text-markdownTextLight dark:text-markdownTextDark ml-6"
                            >
                                Open and display the contents of a file in the viewer on the right.
                            </p>
                        </div>

                        <div class="command-section">
                            <div class="flex items-center space-x-2 mb-2">
                                <span
                                    class="text-lg font-bold text-purpleHighlight dark:text-purpleHighlight"
                                    >pwd</span
                                >
                            </div>
                            <p
                                class="text-sm text-markdownTextLight dark:text-markdownTextDark ml-6"
                            >
                                Print the current working directory path.
                            </p>
                        </div>

                        <div class="command-section">
                            <div class="flex items-center space-x-2 mb-2">
                                <span
                                    class="text-lg font-bold text-purpleHighlight dark:text-purpleHighlight"
                                    >clear</span
                                >
                            </div>
                            <p
                                class="text-sm text-markdownTextLight dark:text-markdownTextDark ml-6"
                            >
                                Clear the terminal history and start fresh.
                            </p>
                        </div>

                        <div class="command-section">
                            <div class="flex items-center space-x-2 mb-2">
                                <span
                                    class="text-lg font-bold text-purpleHighlight dark:text-purpleHighlight"
                                    >help</span
                                >
                            </div>
                            <p
                                class="text-sm text-markdownTextLight dark:text-markdownTextDark ml-6"
                            >
                                Display this help modal with all available commands.
                            </p>
                        </div>
                    </div>

                    <div
                        class="mt-6 p-4 bg-terminalBgLight dark:bg-terminalBgDark rounded-md border border-borderLight dark:border-borderDark"
                    >
                        <h3
                            class="text-lg font-bold mb-2 text-markdownTextLight dark:text-markdownTextDark"
                        >
                            💡 Quick Tips
                        </h3>
                        <ul
                            class="space-y-2 text-sm text-markdownTextLight dark:text-markdownTextDark list-disc list-inside"
                        >
                            <li>
                                Start by typing
                                <code
                                    class="px-1 py-0.5 bg-mdCodeBgLight dark:bg-mdCodeBgDark rounded"
                                    >ls</code
                                >
                                to see what's available
                            </li>
                            <li>
                                Navigate into folders with
                                <code
                                    class="px-1 py-0.5 bg-mdCodeBgLight dark:bg-mdCodeBgDark rounded"
                                    >cd</code
                                >
                            </li>
                            <li>
                                View files with
                                <code
                                    class="px-1 py-0.5 bg-mdCodeBgLight dark:bg-mdCodeBgDark rounded"
                                    >view</code
                                >
                            </li>
                        </ul>
                    </div>
                </div>

                <!-- Footer -->
                <div
                    class="sticky bottom-0 flex justify-end p-4 border-t border-borderLight dark:border-borderDark bg-markdownTopBarLight dark:bg-markdownTopBarDark"
                >
                    <button
                        @click="closeModal"
                        class="px-6 py-2 bg-purpleHighlight text-white rounded-md hover:opacity-80 transition-opacity duration-200 font-medium"
                    >
                        Got it!
                    </button>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    name: 'Modal',
    props: {
        isOpen: {
            type: Boolean,
            required: true
        }
    },
    emits: ['close'],
    methods: {
        closeModal() {
            this.$emit('close')
        }
    },
    watch: {
        isOpen(newValue) {
            if (newValue) {
                document.body.style.overflow = 'hidden'
            } else {
                document.body.style.overflow = ''
            }
        }
    },
    beforeUnmount() {
        document.body.style.overflow = ''
    }
}
</script>

<style scoped>
.modal-fade-enter-active,
.modal-fade-leave-active {
    transition: opacity 0.3s ease;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
    opacity: 0;
}

.modal-fade-enter-active > div,
.modal-fade-leave-active > div {
    transition: transform 0.3s ease;
}

.modal-fade-enter-from > div,
.modal-fade-leave-to > div {
    transform: scale(0.9);
}
</style>
