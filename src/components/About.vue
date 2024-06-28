<template>
    <div class="about-me">
        <h1>{{ name }}</h1>
        <img :src="image" alt="Profile Image" />
        <p>{{ about }}</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: 'Your Name',
            image: '/path/to/profile-image.jpg',
            about: 'Some text about yourself'
        }
    }
}
</script>

<style scoped>
.about-me {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
}
</style>
