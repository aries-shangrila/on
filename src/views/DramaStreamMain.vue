<template>
  <el-container>
    <el-main>
        <div class="ntitle">廣播 | 影劇</div>
        <el-table
        :data="tableData"
        style="width: 100%"
        >   
            <el-table-column prop="push" label="" width="40px" />      
            <el-table-column prop="title" label="作品名" width="150px">
              <template #default="scope">
                <!-- <span v-if="scope.row.id === ''">{{ scope.row.title }}</span>
                <router-link class="nlink" v-else :to="{name: 'noveltextdetail', params: { id: scope.row.id }}" tag="span"> -->
                  <span>{{ scope.row.title }}</span>
                <!-- </router-link> -->
              </template>
            </el-table-column>
            <el-table-column prop="season" label="季度" width="130px" />
            <!-- <el-table-column prop="stars" label="給分" width="120px" /> -->
            <el-table-column prop="type" label="分類" width="130px" />
            <el-table-column prop="producer" label="製作公司" width="450px">
              <template #default="scope">
              <el-tag
                v-for="item in scope.row.producer"
                :key="item.label"
                :type="item.type"
                :effect="item.effect"
                size="medium"
                style="margin-right:3px;"
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
import JSONResult from '../data/DramaStreamList.json';
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

</style>