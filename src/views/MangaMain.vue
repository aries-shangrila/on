<template>
  <el-container>
    <el-main>
        <div class="mtitle">漫畫 | 網漫</div>
        <el-collapse v-model="activeNames" @change="handleChange">
          <el-collapse-item title="須知（戳戳收合）" name="1">
            <div class="n-col-item">✔ 中文官方有代理會使用官方中譯名，沒有就自譯，非正式名。</div>
            <div class="n-col-item">✔ 漫畫連載時間較長，有些連載中的會先寫心得，之後隨連載再更新。</div>
            <div class="n-col-item">✔ tag是我想放什麼就放什麼，非官方標籤。</div>
          </el-collapse-item>
        </el-collapse>
        <el-table
        :data="tableData"
        style="width: 100%"
        @row-click="openDetailPage"
        >   
            <el-table-column prop="push" label="" width="40px" />
            <el-table-column prop="pic" label="" width="80px">
              <template #default="scope">
                  <el-image
                    v-if="scope.row.id != ''"
                    style="width: 60px; height: 60px"
                    :src="'../src/assets/' + scope.row.id + '.png'"
                    onerror="this.src='../src/assets/artboard.png'"
                  ></el-image>
                  <el-image
                    v-else
                    style="width: 60px; height: 60px"
                    :src="'../src/assets/artboard.png'"
                  ></el-image>
              </template>
            </el-table-column>  
            <el-table-column prop="title" label="作品名" width="150px">
              <template #default="scope">
                <span v-if="scope.row.id === ''">{{ scope.row.title }}</span>
                <el-link class="mlink" v-else :to="{name: 'mangadetail', params: { id: scope.row.id }}" tag="span">
                  <span>{{ scope.row.title }}</span>
                </el-link>
              </template>
            </el-table-column>
            <el-table-column prop="zh-title" label="譯名" width="150px" />
            <el-table-column prop="author" label="作者" width="130px" />
            <!-- <el-table-column prop="stars" label="給分" width="120px" /> -->
            <el-table-column prop="process" label="進度" width="80px" />
            <el-table-column prop="tags" label="Tag" width="200px">
              <template #default="scope">
              <el-tag
                v-for="item in scope.row.tags"
                :key="item.label"
                :type="item.type"
                :effect="item.effect"
                size="medium"
                style="margin:3px;"
              >
                {{ item.label }}
              </el-tag>
              </template>
            </el-table-column>
        </el-table>
    </el-main>
  </el-container>
</template>

<script>
import { ref } from 'vue'
import JSONResult from '../data/MangaList.json';
import { useMeta } from 'vue-meta'

export default {
  name: 'MangaMain',
  methods: {
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
    },
    openDetailPage (row){
      this.$router.push("/manga/"+row.id);
    }
  },
  data() {
    return {
      tableData: JSONResult.tables,
      currentRow: null,
    }
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
.el-table {
  --el-table-row-hover-background-color:var(--el-color-error-lighter);
}

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
  --el-link-default-font-color:#6E7376;
  --el-link-default-active-color:#5B80AC;
}

.n-col-item {
  color: #5B80AC;
}

</style>