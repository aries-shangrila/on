<template>
  <!-- <el-container> -->
    <el-main>
      <div class="div-collapse"> [ 本站含有大量BL作品討論內容，請斟酌閱覽。 ] </div>
      <el-collapse v-model="activeNames" @change="handleChange">
        <el-collapse-item title="始於2021春.">
          <!-- <div>全站內容皆獨自整理且網站自行開發建置，引用心得文字資料請註明網站名稱或網址。</div> -->
          <div>Copyright © 2021 aries-shangrila. All rights reserved.</div>
        </el-collapse-item>
        <el-collapse-item title="更新推薦 (ver.202111-1)" name="1">
          <div>
          <el-link type="warning" href='/novel/202106' target="_blank">📖日落大道</el-link>
           | 
          <el-link type="danger" href='/manga/202105' target="_blank">📚家族になろうよ & いつか恋になるまで</el-link>
           | 
          <el-link class="el-link-apple" href='https://open.firstory.me/user/ckvcd4qalodeg0838damj1kx7/platforms' target="_blank">🎧EP2 對話紀錄｜你長大不能喜歡女生！</el-link>
          </div>
        </el-collapse-item>     
        <el-collapse-item title="BL作品交流" name="2">
          <div>一直以來都希望可以找到適合自己看的作品，也希望可以和別人交流心得，看未來能不能用一些技術的方式推薦到心坎裡。</div>
          <div>觀看到這裡的小夥伴，有興趣的話可以寄信給我請我推薦書籍。</div>
          <div>但也希望如果有收到推薦的作品看完之後也一定要給我回饋，才知道哪裡可以改進。</div>
          <div>如果了解以上規則，也願意試試看的小夥伴，請參照以下內容發信至 9339channel@gmail.com 。</div>
          <div>*來信主旨請寫「阿梨的小本本詢問推薦書」</div>
          <div>*內文請寫下：</div>
          <div>1. 你看過喜歡的書(數量隨意、想標註為什麼喜歡也可以寫)</div>
          <div>2. 絕對不想碰到的領域</div>
          <div>3. 其他你覺得可以幫助我判斷推薦的各種資訊</div>
          <div>我看過的作品並非包山包海，如果超出我的認知範圍會請朋友幫忙推薦，回信內容也會說明的。</div>
          <div>也非常歡迎來信推薦給我你喜歡的作品🖤</div>
        </el-collapse-item>
        <el-collapse-item title="聯絡阿梨" name="3">
          <div>Email || 9339channel@gmail.com</div>
          <div>Facebook || <el-link type="primary" href='https://www.facebook.com/crushonBL' target="_blank">BL暈船仔</el-link></div>
          <div>Instagram || <el-link type="danger" href='https://www.instagram.com/crushonbl/' target="_blank">BL暈船仔</el-link></div>
          <div></div>
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
    const activeNames = ref(['1','2','3'])
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
  margin-top: 56px;
}

.el-collapse-item__header {
  color: #5B80AC;
  height: 40px;
  line-height: 40px;
  font-size: 14px;
  background-color: #ffffff65;
}

.el-collapse-item__content {
  color: #6E7376;
  padding-top: 5px;
  padding-bottom: 5px;
  font-size: 14px;
  background-color: #ffffff65;
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
  line-height: 40px;
  margin-top: 18px;
  padding-left: 2%;
  border-bottom: 1px solid var(--el-collapse-border-color);
}

.el-link-apple {
  --el-link-default-font-color:#B753E1;
  --el-link-default-active-color:#bf7ddc;
}

</style>