<template>
  <!-- <el-container> -->
    <el-main>
      <div class="div-collapse"> [ 本站含有大量BL作品討論內容，提醒可能造成身心不適，請斟酌閱覽。 ] </div>
      <el-collapse v-model="activeNames" @change="handleChange">
        <el-collapse-item title="始於2021春.">
          <div>引用心得文字資料請註明網站名稱或網址。</div>
          <div>Copyright © 2021 alphaliouo. All rights reserved.</div>
        </el-collapse-item>       
        <el-collapse-item title="BL作品交流推廣" name="1">
          <div> [ 專屬推薦 ] </div>
          <div>可以寄信給我請我推薦書籍，但也希望如果有收到推薦的作品看完之後也給我一些回饋</div>
          <div>當然也可以推薦給我作品</div>
          <div>補文字</div>
          <div>補方式</div>
        </el-collapse-item>
        <el-collapse-item title="梨a喜好">
          <div> [ 阿梨喜好 ] </div>
          <div>最愛的作品</div>
        </el-collapse-item>
      </el-collapse>
    </el-main>
  <!-- </el-container> -->
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'OnMainIndex',
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
.el-main {
  background-color: transparent;
  color: var(--el-text-color-primary);
  padding-top: 10px;
  padding-right: 3%;
  padding-bottom: 5%;
  padding-left: 3%;
  margin-right: 0px;
  margin-bottom: 0px;
  flex-direction:column;
}

.el-collapse-item__header {
  color: #5B80AC;
  height: 40px;
  line-height: 40px;
  font-size: 14px;
}

.el-collapse-item__content {
  color: #6E7376;
  padding-top: 5px;
  padding-bottom: 5px;
  font-size: 14px;
}

.p-collapse {
  margin-top: 5px;
  margin-bottom: 5px;
}

.div-collapse {
  background-color: #5B80AC;
  color: #fff;
  font-size: 15px;
  font-weight: 500;
  height: 40px;
  line-height: 40px;
  margin-top:2%;
  padding-left: 2%;
  border-bottom: 1px solid var(--el-collapse-border-color);
}

</style>