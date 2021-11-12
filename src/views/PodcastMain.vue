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
        <el-table-column prop="ep" label="集數" width="300px" />
        <el-table-column prop="apple" label="Apple Podcast" width="160px">
          <template #default="scope">
            <span v-if="scope.row.apple === ''">Apple Podcast</span>
            <el-link v-else type="info" :href= scope.row.apple target="_blank">Apple Podcast</el-link>
          </template>          
        </el-table-column>
        <el-table-column prop="spotify" label="Spotify" width="130px">
          <template #default="scope">
            <span v-if="scope.row.spotify === ''">Spotify</span>
            <el-link v-else type="success" :href= scope.row.spotify target="_blank">Spotify</el-link>
          </template>
        </el-table-column>  
        <el-table-column prop="kkbox" label="KKBOX" width="130px">
          <template #default="scope">
            <span v-if="scope.row.kkbox === ''">KKBOX</span>
            <el-link v-else type="primary" :href= scope.row.kkbox target="_blank">KKBOX</el-link>
          </template>          
        </el-table-column>
        <el-table-column prop="soundon" label="SoundOn" width="130px">
          <template #default="scope">
            <span v-if="scope.row.soundon === ''">SoundOn</span>
            <el-link v-else type="primary" :href= scope.row.soundon target="_blank">SoundOn</el-link>
          </template>          
        </el-table-column>
      </el-table>

      <!-- <iframe
        v-for="link in links"
        allow="autoplay *; encrypted-media *; fullscreen *" 
        frameborder="0" 
        height="175"
        style="width:100%;max-width:300px;overflow:hidden;background:transparent;" 
        sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"         
        src="link"
      /> -->
      <!--origin <iframe 
        allow="autoplay *; encrypted-media *; fullscreen *" 
        frameborder="0" 
        height="176" 
        style="width:100%;max-width:300px;overflow:hidden;background:transparent;" 
        sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" 
        src="https://embed.podcasts.apple.com/us/podcast/ep1-%E6%97%A5%E8%90%BD%E5%A4%A7%E9%81%93-%E6%AC%B8%E4%BD%A0%E6%80%8E%E9%BA%BC-%E4%B8%80%E5%80%8B%E4%BA%BA%E5%9C%A8%E9%80%99%E9%82%8A%E5%A3%9E%E5%A3%9E/id1592719965?i=1000540147592"
      ></iframe> -->
      <!--copy new <iframe 
        src="https://embed.podcasts.apple.com/us/podcast/ep1-%E6%97%A5%E8%90%BD%E5%A4%A7%E9%81%93-%E6%AC%B8%E4%BD%A0%E6%80%8E%E9%BA%BC-%E4%B8%80%E5%80%8B%E4%BA%BA%E5%9C%A8%E9%80%99%E9%82%8A%E5%A3%9E%E5%A3%9E/id1592719965?i=1000540147592" 
        width="300" 
        height="176" 
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      ></iframe> -->
      <!--origin <iframe 
        src="https://podcast.kkbox.com/embed/tw/episode/0p5BERsU8uXP5xWqDE?theme=light" 
        width="300" 
        max-width="300"
        height="176" 
        frameborder="0">
      </iframe> -->
      <!--copy new <iframe 
        src="https://podcast.kkbox.com/embed/tw/episode/0p5BERsU8uXP5xWqDE?theme=light" 
        width="300" 
        height="176" 
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      ></iframe> -->
      <!--template <iframe 
        src="https://open.spotify.com/embed/episode/5qrg97bxEDabBfBaVahChX?utm_source=generator" 
        width="300" 
        height="176" 
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      ></iframe> -->
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