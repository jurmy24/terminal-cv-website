<template>
    <div class="sidebar-icon group">
        <slot></slot>
        <span class="sidebar-tooltip group-hover:scale-100">{{ text }}</span>
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
