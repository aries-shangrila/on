<template>
  <el-container>
    <el-main>
        <div class="ntitle">小說 | 文本</div>
        <div class="n-div">
          <span>這裡要有一些勸世警語</span>
        </div>
        <el-table
        :data="tableData"
        style="width: 100%"
        >   
            <el-table-column prop="push" label="" width="40px" />      
            <el-table-column prop="title" label="作品名" width="180px">
              <template #default="scope">
                <span v-if="scope.row.id === ''">{{ scope.row.title }}</span>
                <router-link class="nlink" v-else :to="{name: 'title', params: { id: scope.row.id }}" tag="span">
                  <span>{{ scope.row.title }}</span>
                </router-link>
              </template>
            </el-table-column>
            <el-table-column prop="author" label="作者" width="100px" />
            <el-table-column prop="stars" label="給分" width="120px" />
            <el-table-column prop="top" label="攻" width="70px" />
            <el-table-column prop="bot" label="受" width="70px" />
            <el-table-column prop="wordcount" label="字數" width="80px" :formatter="thousandFormat" />
        </el-table>
    </el-main>
  </el-container>
</template>

<script>
import { ref } from 'vue'
import JSONResult from '../data/NovelTextList.json';

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
  methods: {
    thousandFormat (row, column, wordcount) {    
      var parts = wordcount.toString().split('.');
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      return parts.join('.');  
    },
  },
}
</script>

<style>

.ntitle {
  font-size: 1em;
  background-color: transparent;
  color: rgb(110, 115, 118);
  text-align: start;
  font-weight: bold;
  line-height: 55px;
}

.nlink {
  color:rgb(110, 115, 118);
  text-decoration-color: rgb(110, 115, 118);
}

.n-div {
  background-color: #99CED4;
  color: #fff;
  height: 40px;
  line-height: 40px;
  padding-left: 3%;
  border-bottom: 1px solid var(--el-collapse-border-color);
}

</style>