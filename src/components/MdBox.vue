<template>
    <!-- Terminal info text box -->
    <div class="md-box">
        <!-- Conditionally Render Header Section -->
        <MdHeaderBox @renderToggled="updateShowPretty" :currentFileName="currentFileName" />
        <MdViewBox :mdContent="mdContent" :showPretty="showPretty"></MdViewBox>
    </div>
</template>

<script>
import MdHeaderBox from './MdHeaderBox.vue'
import MdViewBox from './MdViewBox.vue'

export default {
    name: 'MdBox',
    props: {
        mdContent: {
            type: String,
            required: true
        },
        currentFileName: {
            type: String,
            required: true
        }
    },
    components: {
        MdHeaderBox,
        MdViewBox
    },
    data() {
        return {
            showPretty: true // Default component
        }
    },
    methods: {
        updateShowPretty(showPretty) {
            this.showPretty = showPretty
        }
    }
}
</script>
