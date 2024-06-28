<template>
    <div class="w-1/2 h-full p-4 bg-blue-600">
        <h1>{{ name }}</h1>
        <img :src="image" alt="Profile Image" />
        <p>{{ about }}</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: 'Victor Oldensand',
            image: './src/assets/victor-avatar.png',
            about: "Welcome to my Terminal! I'm a student of Industrial Engineering and Management at the KTH Royal Institute of Technology, in Stockholm, currently pursuing my Master of Science in Machine Learning. I'm also studying a Bachelors degree in Mechanical Engineering to complement my digital skills with a more hands-on counterpart."
        }
    }
}
</script>
