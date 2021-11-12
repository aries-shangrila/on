<template>
  <!-- <el-container> -->
    <el-main>
      <div class="div-collapse"> [ 梨a寶藏庫 ] </div>
      <div>
        <div class="pod-p">阿梨心中五星作品，排序不分先後。</div>
        <div class="pod-p">應該很難寫出心得，但私心想要讓他們見光(?)，所以在這裡留個版面。</div>
      </div>
      <el-table
       :data="tableData"
      >
        <el-table-column label="" width="40px">⭐</el-table-column>> 
        <el-table-column prop="title" label="作品名" width="180px" />
        <el-table-column prop="tags" label="類型" width="100px">
          <template #default="scope">
            <el-tag
              v-for="item in scope.row.tags"
              :key="item.label"
              :type="item.type"
              :effect="item.effect"
              size="small"
              style="margin-right:3px;"
            >
              {{ item.label }}
            </el-tag>
            </template>
        </el-table-column>
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
    useMeta({ title: '梨a寶藏庫'})
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