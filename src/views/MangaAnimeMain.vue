<template>
  <el-container>
    <el-main>
        <div class="mtitle">漫畫 | 動畫</div>
        <el-collapse v-model="activeNames" @change="handleChange">
          <el-collapse-item title="須知（沒事就看看）">
            <div class="n-col-item">✔ 中譯名，中文官方有代理會使用官方譯名，其他自譯，非正式名。</div>
            <div class="n-col-item">✔ 漫畫連載時間較長，有些連載中的會先寫心得，之後隨連載再更新。</div>
            <div class="n-col-item">✔ tag是我想放什麼就放什麼，非官方標籤。</div>
          </el-collapse-item>
        </el-collapse>
        <el-table
        :data="tableData"
        style="width: 100%"
        >   
            <el-table-column prop="push" label="" width="40px" />     
            <el-table-column prop="title" label="作品名" width="150px">
              <template #default="scope">
                <span v-if="scope.row.id === ''">{{ scope.row.title }}</span>
                <router-link class="mlink" v-else :to="{name: 'mangaanimedetail', params: { id: scope.row.id }}" tag="span">
                  <span>{{ scope.row.title }}</span>
                </router-link>
              </template>
            </el-table-column>
            <el-table-column prop="zh-title" label="中譯" width="150px" />
            <el-table-column prop="author" label="作者" width="130px" />
            <!-- <el-table-column prop="stars" label="給分" width="120px" /> -->
            <el-table-column prop="process" label="進度" width="80px" />
            <el-table-column prop="tag" label="Tag" width="350px" />
        </el-table>
    </el-main>
  </el-container>
</template>

<script>
import { ref } from 'vue'
import JSONResult from '../data/MangaAnimeList.json';

export default {
  name: 'NovelTextMain',
  methods: {
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
    }
  },
  data() {
    return {
      tableData: JSONResult.tables,
      currentRow: null,
    }
  },
  setup() {
    const activeNames = ref(['1'])
    const handleChange = (val) => {
      console.log(val)
    }
    return {
      activeNames,
      handleChange,
    }
  },
}
</script>

<style>

.mtitle {
  font-size: 1em;
  background-color: transparent;
  color: rgb(110, 115, 118);
  text-align: start;
  font-weight: bold;
  line-height: 55px;
}

.m-div {
  background-color: #99CED4;
  color: #fff;
  height: 40px;
  line-height: 40px;
  padding-left: 2%;
  border-bottom: 1px solid var(--el-collapse-border-color);
}

.mlink {
  color:rgb(110, 115, 118);
  text-decoration-color: rgb(110, 115, 118);
}

</style>