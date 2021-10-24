<template>
  <el-container>
    <el-aside class="sidebar">
      <!-- <el-scrollbar> -->
        <OnSideBar />
      <!-- </el-scrollbar> -->
    </el-aside>
    <el-container class="right-container">
      <el-header>
        <section class="header-section"> 阿梨的小本本 </section>
      </el-header>
      <!-- <el-main> -->
        <router-view/>
      <!-- </el-main> -->
    </el-container>
  </el-container>
</template>

<script lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import OnSideBar from './views/OnSideBar.vue'
import OnMainIndex from './views/OnMainIndex.vue'
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'App',
  components: {
    OnSideBar,
    OnMainIndex,
  },
})
</script>

<style>

.right-container {

}

.el-header {
  /* line-height: var(--el-font-line-height-on); */
  border-bottom: 2px solid #eeB6B7;
  height: 56px;
}

.header-section {
  color: var(--el-text-color-primary);
  text-align: start;
  font-weight: bold;
  font-size: 20px;
  line-height: 56px;
}

.sidebar {
  width: auto;
  overflow: auto;
}

</style>