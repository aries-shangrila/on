<template>
  <!-- <el-container> -->
    <el-main>
      <div class="div-collapse"> [ BL暈船仔 ] </div>
      <div>
        <div class="pod-p">這是一檔聊BL的podcast節目。</div>
        <div class="pod-p">阿梨｜總攻｜小芋</div>
        <div class="pod-p">在BL汪洋大海中載浮載沉，在神仙愛情中暈船(⁎⁍̴̛ᴗ⁍̴̛⁎)</div>
      </div>
      <el-table
       :data="tableData"
      >
        <el-table-column prop="ep" label="集數" width="250px" />
        <el-table-column prop="apple" label="Apple Podcast" width="150px">
          <template #default="scope">
            <span v-if="scope.row.apple === ''">Apple Podcast</span>
            <el-link v-else class="el-link-apple" :href= scope.row.apple target="_blank">Apple Podcast</el-link>
          </template>          
        </el-table-column>
        <el-table-column prop="spotify" label="Spotify" width="100px">
          <template #default="scope">
            <span v-if="scope.row.spotify === ''">Spotify</span>
            <el-link v-else type="success" :href= scope.row.spotify target="_blank">Spotify</el-link>
          </template>
        </el-table-column>  
        <el-table-column prop="kkbox" label="KKBOX" width="100px">
          <template #default="scope">
            <span v-if="scope.row.kkbox === ''">KKBOX</span>
            <el-link v-else type="primary" :href= scope.row.kkbox target="_blank">KKBOX</el-link>
          </template>          
        </el-table-column>
        <el-table-column prop="soundon" label="SoundOn" width="100px">
          <template #default="scope">
            <span v-if="scope.row.soundon === ''">SoundOn</span>
            <el-link v-else type="primary" :href= scope.row.soundon target="_blank">SoundOn</el-link>
          </template>          
        </el-table-column>
      </el-table>
    </el-main>
  <!-- </el-container> -->
</template>

<script>
import { ref } from 'vue'
import JSONResult from '../data/PodcastList.json';
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
  --el-table-row-hover-background-color:transparent;
}

.el-link-apple {
  --el-link-default-font-color:#B753E1;
  --el-link-default-active-color:#bf7ddc;
}

.pod-p{
  color:#98878F;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 1%;
  font-size: 14px;
}
</style>