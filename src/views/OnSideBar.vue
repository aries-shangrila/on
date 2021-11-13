<template>
  <!-- <el-container direction="vertical"> -->
    <el-radio-group v-model="isCollapse" class="switchbutton">
      <!-- <i 
        @click="isCollapse=false"
        v-show="isCollapse" 
        class="el-icon-s-unfold" 
      >
      </i>
      <i 
        @click="isCollapse=true" 
        v-show="!isCollapse" 
        class="el-icon-s-fold"
      >
      </i> -->
    </el-radio-group>
    <el-menu
    active-text-color="#303133"
    default-active="/"
    :default-openeds="['2']"
    text-color="#6E7376"
    :collapse="false"
    @open="handleOpen"
    @close="handleClose"
    :router="true"
    class="el-menu-normal"
    >
    <template v-for="menuItem in menuList">
      <template v-if="menuItem.type === 'item'">
        <on-menu-item :menu="menuItem"></on-menu-item>
      </template>
      <template v-if="menuItem.type === 'submenu'">
        <on-sub-menu :menu="menuItem"></on-sub-menu>
      </template>
    </template>
    </el-menu>
    <el-menu
    active-text-color="#303133"
    default-active="/"
    :default-openeds="['2']"
    text-color="#6E7376"
    :collapse="true"
    :router="true"
    class="el-menu-rwd"
    >
    <template v-for="menuItem in menuList">
      <template v-if="menuItem.type === 'item'">
        <on-menu-item :menu="menuItem"></on-menu-item>
      </template>
      <template v-if="menuItem.type === 'submenu'">
        <on-sub-menu :menu="menuItem"></on-sub-menu>
      </template>
    </template>
    </el-menu>
  <!-- </el-container> -->
</template>

<script>
import { ref } from 'vue'
import onMenuItem from '../components/OnMenuItem.vue'
import onSubMenu from '../components/OnSubMenu.vue'

export default {
  name: 'OnSideBar',
  computed: {
    menuList() {
      return this.$router.options.routes
    }
  },
  methods: {
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
    }
  },
  components: {onMenuItem, onSubMenu},
    data () {
    return {}
  },
  setup() {
    const isCollapse = ref(true)
    const handleOpen = (key, keyPath) => {
      console.log(key, keyPath)
    }
    const handleClose = (key, keyPath) => {
      console.log(key, keyPath)
    }
    return {
      isCollapse,
      handleOpen,
      handleClose,
    }
  }
}
</script>

<style>

.el-menu {
  border-color: transparent;
  background-color: transparent;
  --el-menu-item-hover-fill:var(--el-color-error-lighter);
  --el-menu-hover-background-color:var(--el-color-error-lighter);
}

.el-menu-rwd {
  display: none;
}

.switchbutton {
  height: 56px;
  width: 63px;
  text-align:center;
}

.el-icon-s-unfold{
  font-size: 18px;
  line-height: 56px;
  color: #6E7376;
  display: none;
}

.el-icon-s-fold{
  font-size: 18px;
  line-height: 56px;
  color: #6E7376;
  display: none;
}

@media screen and (max-width:768px){
  .el-icon-s-unfold{
    display: initial;
  }
  .el-icon-s-fold{
    display: initial;
  }
  .el-menu-normal {
    display: none;
  }

  .el-menu-rwd {
    display: initial;
  }
}

@media screen and (max-width:443px){

}

</style>