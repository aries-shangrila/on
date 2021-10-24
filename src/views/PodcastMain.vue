<template>
  <!-- <el-container> -->
    <el-main>
      <div class="div-collapse"> [ BL暈船仔 ] </div>
      <div>
        <p>這是一檔闔家歡樂的podcast節目。</p>
      </div>
      <el-table>
        <el-table-column prop="ep" label="集數" width="200px" />
        <el-table-column prop="apple" label="Apple" width="100px" />
        <el-table-column prop="spotify" label="Spotify" width="100px" />
        <el-table-column prop="kkbox" label="KKBOX" width="100px" />    
      </el-table>
    </el-main>
  <!-- </el-container> -->
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'PodcastMain',
  
}
</script>

<style>

</style>