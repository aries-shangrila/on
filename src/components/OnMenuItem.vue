<template>
    <el-menu-item :index="menu.path" style="min-width: auto">
        <i :class="menu.meta.icon" />
        <span>{{menu.meta.title}}</span>
    </el-menu-item>
</template>

<script>
export default {
    name: 'on-menu-item',
    props: {
        menu: {
            type: Object
        }
    },
    data () {
        return {}
    }
}
</script>
<style>
.el-menu-item.is-active{
    background: #eeB6B7;
    font-weight: 700;
    color: #fff;
}

</style>