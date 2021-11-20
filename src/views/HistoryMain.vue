<template>
  <!-- <el-container> -->
    <el-main>
      <div class="div-collapse"> [ 更新歷程 ] </div>
      <template v-for="item in items" :key="item.index">
        <div class="div-item-a" v-if="item.index%2==0" > {{item.description}} </div>
        <div class="div-item-b" v-else > {{item.description}} </div>
      </template>
    </el-main>
  <!-- </el-container> -->
</template>

<script>
import { ref } from 'vue'
import JSONResult from '../data/HistoryList.json';
import { useMeta } from 'vue-meta'

export default {
  name: 'HistoryMain',
  setup () {
    useMeta({ title: '更新歷程'})
  },
  data() {
    return {
      jsonData: "",
      items: []
    }
  },
  methods: {
    getData(){
      fetch(`../src/data/HistoryList.json`)
      .then((response) => {
        this.jsonData = response.json()
        console.log(this.jsonData)
          this.jsonData.then(res=> {
          this.items = res.items
        })
      })
    }
  },
  mounted() {
    this.getData();
  },
  
}
</script>

<style>

.div-item-a {
  background-color: transparent;
  color: #98878F;
  font-size: 15px;
  line-height: 40px;
  padding-left: 2%;
  border-bottom: 1px solid var(--el-collapse-border-color);
}

.div-item-b {
  background-color: var(--el-color-error-lighter);
  color: #98878F;
  font-size: 15px;
  line-height: 40px;
  padding-left: 2%;
  border-bottom: 1px solid var(--el-collapse-border-color);

}

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