<template>
  <metainfo>
    <template v-slot:title="{ content }">{{ content ? `${content} | 阿梨的小本本` : `阿梨的小本本` }}</template>
  </metainfo>
  <el-container>
    <el-aside>
      <!-- <el-scrollbar> -->
        <OnSideBar />
      <!-- </el-scrollbar> -->
    </el-aside>
    <el-container>
      <el-header>
        <section class="header-section"> 阿梨的小本本 </section>
      </el-header>
      <!-- <el-main> -->
        <el-container style="height:750px; width:960px; overflow:auto;">
        <router-view />
        </el-container>
      <!-- </el-main> -->
    </el-container>
  </el-container>
</template>

<script lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import OnSideBar from './views/OnSideBar.vue'
import OnMainIndex from './views/OnMainIndex.vue'
import { defineComponent, ref } from 'vue'
import { useMeta } from 'vue-meta'

export default defineComponent({
  name: 'App',
  setup () {
    useMeta({
      title: '',
      htmlAttrs: { lang: 'zh-Hant', amp: true }
    })
  },
  components: {
    OnSideBar,
    OnMainIndex,
  },
})
</script>

<style>

.el-header {
  /* line-height: var(--el-font-line-height-on); */
  border-bottom: 2px solid #eeB6B7;
  height: 56px;
  position: fixed;
  background-color: white;
  z-index: 1;
  width: 100%;
}

.el-aside {
  /* position: fixed; */
  height: 100%;
  /* background: white;
  z-index: 1; */
  width: auto;
  /* overflow-y: auto; */
}

.header-section {
  color: var(--el-text-color-primary);
  text-align: start;
  font-weight: bold;
  font-size: 20px;
  line-height: 56px;
}


</style>