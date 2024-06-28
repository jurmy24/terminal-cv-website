<template>
    <div class="w-1/2 h-full p-4 bg-aboutBg font-ProFontIIxNerdFontRegular">
        <div class="mb-auto m-auto max-w-lg">
            <TitleComponent />
            <p class="font-semibold mb-5">Web Developer</p>
            <img :src="image" alt="Profile Image" class="w-1/2 mx-auto" />
            <MediaLinks />
            <p>{{ about }}</p>
        </div>
    </div>
</template>

<script>
import TitleComponent from './subcomponents/Title.vue'
import MediaLinks from './subcomponents/MediaLinks.vue'
export default {
    data() {
        return {
            image: './src/assets/victor-avatar.png',
            about: "Welcome to my Terminal! I'm a student of Industrial Engineering and Management at the KTH Royal Institute of Technology, in Stockholm, currently pursuing my Master of Science in Machine Learning. I'm also studying a Bachelors degree in Mechanical Engineering to complement my digital skills with a more hands-on counterpart."
        }
    },
    components: {
        TitleComponent,
        MediaLinks
    }
}
</script>
