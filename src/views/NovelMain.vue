<template>
  <el-container>
    <el-main>
        <div class="ntitle">原耽 | 小說</div>
        <el-collapse v-model="activeNames" @change="handleChange">
          <el-collapse-item title="須知（戳戳收合）" name="1">
            <div class="n-col-item">✔ 非文字工作者，CD時間需要很久，產心得速度極為緩慢。</div>
            <div class="n-col-item">✔ tag是我想放什麼就放什麼，會參考原作但不一定會使用。</div>
            <div class="n-col-item">✔ 棄文不會寫。</div>
            <div class="n-col-item">✔ 基本上有出現在這裡的一定是我覺得不錯的(才會寫心得)，特別推薦的找🧡</div>
          </el-collapse-item>
        </el-collapse>
        <div class="n-item">✔ 點進心得鐵爆雷，不想被炸就停在這頁就好，一生只有一次，別犯賤。</div>
        <el-table
        :data="tableData"
        style="width: 100%"
        @row-click="openDetailPage"
        >   
            <el-table-column prop="push" label="" width="40px" />      
            <el-table-column prop="title" label="作品名" width="180px">
              <template #default="scope">
                <span v-if="scope.row.id === ''">{{ scope.row.title }}</span>
                <el-link class="nlink" v-else :to="{name: 'noveldetail', params: { id: scope.row.id }}" tag="span">
                  <span>{{ scope.row.title }}</span>
                </el-link>
              </template>
            </el-table-column>
            <el-table-column prop="" label="文案" width="80px" align="center">
              <template #default="scope">
              <el-button
                size="mini"
                type="warning"
                plain
                @click.stop
                @click="showOutline(scope.row)"
                >
                文案</el-button>
              </template>
            </el-table-column>
            <el-table-column prop="author" label="作者" width="100px" />
            <!-- <el-table-column prop="stars" label="給分" width="120px" /> -->
            <el-table-column prop="top" label="攻" width="80px" />
            <el-table-column prop="bot" label="受" width="80px" />
            <el-table-column prop="wordcount" label="作品字數" width="100px" :formatter="thousandFormat" />
            <el-table-column prop="oneword" label="不爆雷一句話推薦(節錄心得)" width="300px" />
        </el-table>
        <el-dialog
          v-model="dialogVisible"
          title="大綱"
          width="50%"
        >
          <div v-html = "outline" />
          <template #footer>
            <span class="dialog-footer">
              <el-button type="danger" size="small" @click="dialogVisible = false"
                >看完了</el-button
              >
            </span>
          </template>
        </el-dialog>
    </el-main>
  </el-container>
</template>

<script>
import { ref } from 'vue'
import JSONResult from '../data/NovelList.json';
import { useMeta } from 'vue-meta'

export default {
  name: 'NovelMain',
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
    openDetailPage (row){
      this.$router.push("/novel/"+row.id);
    },
    showOutline (row){  
      this.dialogVisible = true;
      this.outline = row.outline;
    },
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
    },
  },
  setup() {
    useMeta({ title: '耽美心得'})
    const activeNames = ref(['1'])
    const handleChange = (val) => {
      console.log(val)
    }
    const dialogVisible = ref(false)
    return {
      activeNames,
      handleChange,
      dialogVisible,
    }
  },
}
</script>

<style>
.el-table {
  --el-table-row-hover-background-color:var(--el-color-error-lighter);
  --el-table-header-background-color:transparent;
  --el-table-background-color:transparent;
  --el-table-tr-background-color:transparent;
}

.el-dialog .el-dialog__body {
    padding: 2% 5%;
    font-size: 1em;
}

.el-dialog .el-dialog__header {
    padding-top: 5%;
    padding-left: 5%;
}

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
  --el-link-default-font-color:#6E7376;
  --el-link-default-active-color:#5B80AC;
}

.n-col-item {
  color: #5B80AC;
}

.n-item {
  color:#F56C6C;
  font-size: 14px;
  margin-bottom: 2px;
}

@media screen and (max-width:768px){
  .el-dialog{
    width:80%;
  }
}

</style>