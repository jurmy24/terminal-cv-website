<template>
    <div class="sidebar-icon group">
        <slot></slot>
        <span class="sidebar-tooltip group-hover:scale-100 md:block hidden">{{ text }}</span>
    </div>
</template>

<script>
export default {
    name: 'SideBarIcon',
    props: {
        text: {
            type: String,
            default: 'tooltip'
        }
    }
}
</script>
