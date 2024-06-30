<template>
    <div class="w-3/5 h-full p-4 font-mono">
        <div class="flex flex-col space-y-4">
            <TitleComponent />
            <!-- Terminal info text box -->
            <div class="flex py-6 pr-10">
                <div class="px-4">
                    <h2
                        class="px-6 py-2 border border-gray-300 rounded-md bg-textboxBgLight text-gray-800"
                    >
                        Welcome to my Terminal!
                    </h2>
                    <p
                        class="px-6 py-2 border border-gray-300 rounded-md bg-textboxBgLight text-gray-800"
                    >
                        {{ about }}
                    </p>
                    <MediaLinks />
                </div>
                <img :src="image" alt="Profile Image" class="w-1/3" />
            </div>
            <!-- Terminal info text box -->
            <div class="px-4">
                <!-- <p>{{ terminalInfo }}</p> -->
                <p
                    class="px-6 py-2 border border-gray-300 rounded-md bg-textboxBgLight text-gray-800"
                >
                    {{ terminalInfo }}
                </p>
            </div>
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
            about: "I'm a student of Industrial Engineering and Management at the KTH Royal Institute of Technology, in Stockholm, currently pursuing my Master of Science in Machine Learning. I'm also studying a Bachelors degree in Mechanical Engineering to complement my digital skills with a more hands-on counterpart.",
            terminalInfo:
                "The terminal is a command-line interface that allows you to interact with the computer using text commands. It's a powerful tool that can be used to perform a wide range of tasks, from simple file management to complex system administration. To get started, try typing 'help' to see a list of available commands. You can also"
        }
    },
    components: {
        TitleComponent,
        MediaLinks
    }
}
</script>
