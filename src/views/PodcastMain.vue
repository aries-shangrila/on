<template>
  <!-- <el-container> -->
    <el-main>
      <div class="div-collapse"> [ BL暈船仔 ] </div>
      <div>
        <div class="pod-p">這是一檔聊聊BL作品的podcast節目。</div>
        <div class="pod-p">阿梨｜總攻｜小芋</div>
        <div class="pod-p">歡迎與我們一起在BL汪洋大海中載浮載沉。</div>
      </div>
      <el-table
       :data="tableData"
      >
        <el-table-column prop="ep" label="集數" width="300px" />
        <el-table-column prop="apple" label="Apple Podcast" width="200px">
          <template #default="scope">
            <span v-if="scope.row.apple === ''">Apple Podcast</span>
            <el-link v-else type="info" :href= scope.row.apple target="_blank">Apple</el-link>
          </template>          
        </el-table-column>
        <el-table-column prop="spotify" label="Spotify" width="150px">
          <template #default="scope">
            <span v-if="scope.row.spotify === ''">Spotify</span>
            <el-link v-else type="success" :href= scope.row.spotify target="_blank">Spotify</el-link>
          </template>
        </el-table-column>  
        <el-table-column prop="kkbox" label="KKBOX" width="150px">
          <template #default="scope">
            <span v-if="scope.row.kkbox === ''">Spotify</span>
            <el-link v-else type="primary" :href= scope.row.kkbox target="_blank">KKBOX</el-link>
          </template>          
        </el-table-column>
      </el-table>
    </el-main>
  <!-- </el-container> -->
</template>

<script>
import { ref } from 'vue'
import JSONResult from '../data/PodcastList.json';

export default {
  name: 'PodcastMain',
  data() {
    return {
      tableData: JSONResult.tables,
      currentRow: null,
    }
  },
  
}
</script>

<style>
.pod-p{
  color: #6E7376;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 1%;
  font-size: 14px;
}
</style>