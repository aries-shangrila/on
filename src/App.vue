<template>
  <el-container>   
    <el-aside>
      <el-scrollbar>
        <OnSideBar />
      </el-scrollbar>
    </el-aside>
    <el-container class="right-container">
      <el-header>
        <section> 阿梨的小本本 </section>
      </el-header>
      <el-main>
        <router-view/>
      </el-main>
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
  margin-left: 200px; /* 要是動態的 */
}

.el-header {
  color: var(--el-text-color-primary);
  text-align: start;
  font-weight: bold;
  font-size: 20px;
  line-height: var(--el-font-line-height-on);
  padding-left: 5%;
  border-bottom: 2px solid #eeB6B7;
  /* position:fixed;
  /* top:0;
  right:0;
  width: 100%;
  z-index: -1; */
}

.el-aside {
  position:absolute;
  top: 0;
  left: 0;
}

</style>