<template>
  <!-- <el-container> -->
    <el-main>
      <div class="div-collapse"> [ 梨a寶藏庫 ] </div>
      <div>
        <div class="pod-p">我自己心裡有幾本是看完之後愛不釋手，可能也很難寫出心得的作品。</div>
        <div class="pod-p">私心想要讓他們見光(?)，所以在這裡留個版面給他們。</div>
        <div class="pod-p">排序不分先後。</div>
      </div>
      <el-table
       :data="tableData"
      >
        <el-table-column prop="title" label="作品名" width="180px" />
        <el-table-column prop="comment" label="" width="360px" />
      </el-table>
    </el-main>
  <!-- </el-container> -->
</template>

<script>
import { ref } from 'vue'
import JSONResult from '../data/TreasureList.json';
import { useMeta } from 'vue-meta'

export default {
  name: 'PodcastMain',
  setup () {
    useMeta({ title: 'Podcast'})
  },
  data() {
    return {
      tableData: JSONResult.tables,
      currentRow: null,
      links: JSONResult.tables.links,
    }
  },
  
}
</script>

<style>
.el-table {
  --el-table-row-hover-background-color:var(--el-color-error-lighter);
}

.pod-p{
  color:#98878F;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 1%;
  font-size: 14px;
}
</style>