<template>
    <el-sub-menu :index="menu.index">
        <template #title>
            <i :class="menu.meta.icon" />
            <span>{{menu.meta.title}}</span>
        </template>
        <template v-for="menuItemChild in menu.children">
            <template v-if="menuItemChild.type === 'item'">
                <on-menu-item :menu="menuItemChild" />
            </template>
        </template>
    </el-sub-menu>
</template>

<script>
import onMenuItem from './OnMenuItem.vue'

export default {
name: 'on-sub-menu',
props: {
    menu: {
        type: Object
    }
},
components: {onMenuItem},
    data () {
        return {}
    }
}
</script>