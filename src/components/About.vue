<template>
    <!-- o h-screen flex-grow p-4 -->
    <div
        class="absolute top-20 right-0 w-1/2 h-full overflow-y-auto mr-10 p-4 font-mono border-black border-2"
    >
        <div class="flex flex-col space-y-4">
            <TitleComponent />
            <img :src="image" alt="Profile Image" class="w-1/2 border-black border-2" />
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
