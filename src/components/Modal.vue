<template>
    <div v-if="isOpen" class="fixed inset-0 z-50 flex items-center justify-center p-4">
        <!-- Backdrop -->
        <div
            class="fixed inset-0 bg-primary bg-opacity-5 backdrop-blur-sm transition-all duration-300"
            :class="isOpen ? 'opacity-100' : 'opacity-0'"
            @click="closeModal"
        ></div>

        <!-- Modal Content -->
        <div
            class="relative z-10 w-full max-w-3xl h-[60vh] max-h-[600px] bg-secondary border border-gray-700/50 rounded-xl shadow-2xl overflow-hidden transition-all duration-300 transform scale-100"
            :class="isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'"
            @click.stop
        >
            <div class="h-full">
                <slot>
                    <p>No content provided to this modal.</p>
                </slot>
            </div>
        </div>
    </div>
</template>

<script>
import { onMounted, onUnmounted } from 'vue'

export default {
    name: 'Modal',
    props: {
        isOpen: {
            type: Boolean,
            default: false
        },
        title: {
            type: String,
            default: ''
        }
    },
    emits: ['close'],
    setup(props, { emit }) {
        const closeModal = () => {
            emit('close')
        }

        const handleKeydown = (event) => {
            if (event.key === 'Escape' && props.isOpen) {
                closeModal()
            }
        }

        onMounted(() => {
            document.addEventListener('keydown', handleKeydown)
        })

        onUnmounted(() => {
            document.removeEventListener('keydown', handleKeydown)
        })

        return {
            closeModal
        }
    }
}
</script>
