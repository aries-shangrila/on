<template>
  <el-container>
    <el-main>
        <div class="ntitle">小說 | 文本</div>
        <el-collapse v-model="activeNames" @change="handleChange">
          <el-collapse-item title="須知（隨戳沒毛病）">
            <div class="n-col-item">✔ 看的多、寫的少，產心得速度極為緩慢。</div>
            <div class="n-col-item">✔ 棄文不會寫。</div>
          </el-collapse-item>
        </el-collapse>
        <div class="n-item">✔ 點進心得鐵爆雷，不想被炸就停在這頁就好，一生只有一次，別犯賤。</div>
        <el-table
        :data="tableData"
        style="width: 100%"
        >   
            <el-table-column prop="push" label="" width="40px" />      
            <el-table-column prop="title" label="作品名" width="180px">
              <template #default="scope">
                <span v-if="scope.row.id === ''">{{ scope.row.title }}</span>
                <router-link class="nlink" v-else :to="{name: 'noveltextdetail', params: { id: scope.row.id }}" tag="span">
                  <span>{{ scope.row.title }}</span>
                </router-link>
              </template>
            </el-table-column>
            <el-table-column prop="author" label="作者" width="100px" />
            <!-- <el-table-column prop="stars" label="給分" width="120px" /> -->
            <el-table-column prop="top" label="攻" width="80px" />
            <el-table-column prop="bot" label="受" width="80px" />
            <el-table-column prop="wordcount" label="作品字數" width="100px" :formatter="thousandFormat" />
            <el-table-column prop="oneword" label="不爆雷一句話推薦(節錄心得)" width="300px" />
        </el-table>
    </el-main>
  </el-container>
</template>

<script>
import { ref } from 'vue'
import JSONResult from '../data/NovelTextList.json';
import { useMeta } from 'vue-meta'

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
  setup() {
    useMeta({ title: '耽美心得'})
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

.n-col-item {
  color: #5B80AC;
}

.n-item {
  color:#F56C6C;
  font-size: 14px;
}

</style>