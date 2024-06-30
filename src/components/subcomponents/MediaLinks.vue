<template>
    <div class="flex space-x-10 justify-center">
        <a :href="githubLink" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <GithubIcon class="size-10" />
        </a>
        <a :href="linkedinLink" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <LinkedinIcon class="size-10" />
        </a>
    </div>
</template>

<script>
import GithubIcon from '../icons/Github.vue'
import LinkedinIcon from '../icons/LinkedIn.vue'

export default {
    components: {
        GithubIcon,
        LinkedinIcon
    },
    data() {
        return {
            githubLink: 'https://github.com/jurmy24',
            linkedinLink: 'https://www.linkedin.com/in/victor-oldensand/'
        }
    },
    name: 'MediaLinks'
}
</script>
