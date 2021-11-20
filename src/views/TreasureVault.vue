<template>
  <!-- <el-container> -->
    <el-main>
      <div class="div-collapse"> [ 梨a寶藏庫 ] ٩(●ᴗ●)۶ </div>
      <div>
        <div class="pod-p">阿梨心中五星作品，排序不分先後。</div>
        <div class="pod-p">應該很難寫出心得(會試著寫寫看但不保證)，私心想要讓他們見光(?)，所以在這裡留個版面。</div>
      </div>
      <el-table
       :data="tableData"
      >
        <el-table-column prop="push" label="" width="70px" />
        <el-table-column prop="title" label="作品名" width="150px">
          <template #default="scope">
            <span v-if="scope.row.id === ''">{{ scope.row.title }}</span>
            <el-link class="nlink" v-else :to="{name: 'noveldetail', params: { id: scope.row.id }}" tag="span">
              <span>{{ scope.row.title }}</span>
            </el-link>
          </template>
        </el-table-column>
        <el-table-column prop="" label="文案" width="130px" align="center">
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
        <el-table-column prop="wordcount" label="作品字數" width="150px" :formatter="thousandFormat" />
        <el-table-column prop="comment" label="阿梨想說一句" width="300px">
          <template #default="scope">
            <div v-html="scope.row.comment" />
          </template>
        </el-table-column>
        <!-- <el-table-column prop="tags" label="類型" width="100px">
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
        </el-table-column> -->
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
    const dialogVisible = ref(false)
    return {
      dialogVisible,
    }
  },
  data() {
    return {
      tableData: JSONResult.tables,
      currentRow: null,
      links: JSONResult.tables.links,
    }
  },
  methods: {
    thousandFormat (row, column, wordcount) {    
      var parts = wordcount.toString().split('.');
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      return parts.join('.');  
    },
    showOutline (row){  
      this.dialogVisible = true;
      this.outline = row.outline;
    }
  },
  
}
</script>

<style>
.el-table {
  --el-table-row-hover-background-color: transparent;
}

.el-dialog .el-dialog__body {
    padding: 2% 5%;
    font-size: 1em;
}

.el-dialog .el-dialog__header {
    padding-top: 5%;
    padding-left: 5%;
}

.pod-p{
  color:#98878F;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 1%;
  font-size: 14px;
}

@media screen and (max-width:768px){
  .el-dialog{
    width:80%;
  }
}
</style>