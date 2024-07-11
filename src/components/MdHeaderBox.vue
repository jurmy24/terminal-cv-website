<template>
    <div class="md-header-box">
        <div class="flex">
            <button
                :class="[
                    'md-button',
                    {
                        'bg-purpleHighlight hover:bg-purpleHighlight dark:hover:bg-purpleHighlight text-terminalTextDark':
                            showPretty
                    }
                ]"
                @click="toggleRender(true)"
            >
                Pretty
            </button>
            <button
                :class="[
                    'md-button rounded-l-none rounded-r',
                    {
                        'bg-purpleHighlight hover:bg-purpleHighlight dark:hover:bg-purpleHighlight text-terminalTextDark':
                            !showPretty
                    }
                ]"
                @click="toggleRender(false)"
            >
                Raw
            </button>
        </div>
        <p class="flex-1 text-center text-current">{{ currentFileName }}</p>
        <!-- Placeholder for spacing to center the text -->
        <div class="w-20"></div>
    </div>
</template>

<script>
export default {
    name: 'MdHeaderBox',
    props: {
        currentFileName: {
            type: String,
            required: true
        }
    },
    methods: {
        toggleRender(showPretty) {
            this.showPretty = showPretty
            this.$emit('renderToggled', showPretty)
        }
    },
    data() {
        return {
            showPretty: true // Default component
        }
    }
}
</script>
