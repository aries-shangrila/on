<template>
  <el-container v-if="jsonData !== null">
    <el-main>
      <div>
        <el-breadcrumb separator-class="el-icon-caret-right" class="breadtitle">
            <el-breadcrumb-item :to="{ path: '/novel' }">原耽 | 小說</el-breadcrumb-item>
            <el-breadcrumb-item>{{title}}</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="div-main">
          <div class="div-sec">
            <div style="padding-right:3%; padding-bottom:1%;">
              <div id=0 style="padding-top:2%;" />
              <p>{{stars}}</p>  
              <template v-if="plus!=''">         
                <p>加分點</p>
                <ul>
                  <li v-for="good in plus" :key="good" class="point">{{good}}</li>
                </ul>
              </template>
              <template v-if="minus!=''">
                <p>減分點</p>
                <ul>
                  <li v-for="nogood in minus" :key="nogood" class="point">{{nogood}}</li>
                </ul>
              </template>
            </div>
            <el-divider><i class="el-icon-star-on"></i></el-divider>
            <div v-for="topic in topics" :key="topic.id" >
              <div v-bind:id="topic.id" style="padding-top:5%;" />
              <h3># {{topic.point}}</h3>
              <div v-html="topic.content" class="topic-content" />
            </div>
            <div id=99 style="padding-top:5%;" />
            <el-divider><i class="el-icon-star-on"></i></el-divider>
            <div style="padding-top:5%;" />
            <!-- <div v-html="section3" style="padding-bottom:8%;"></div> -->
            <template v-if="podcast!=''">
              <div v-html="section3" style="padding-bottom:5%;"></div>
              <el-divider id=100><i class="el-icon-star-on"></i></el-divider>
              <el-select v-model="selectPodcast" style="width:100%;max-width:300px;" placeholder="收聽此作品Podcast">
                <el-option
                  v-for="item in podcast"
                  :key="item.key"
                  :label="item.label"
                  :value="item.value"
                  @click.native="showPodcast(item.link)"
                >
                </el-option>
              </el-select>
              <div>
              <iframe
                showPodcast
                allow="autoplay *; encrypted-media *; fullscreen *" 
                frameborder="0" 
                height="175"
                style="width:100%;max-width:300px;overflow:hidden;background:transparent;" 
                sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation"         
                :src="srclink"
              />
              </div>
            </template>
            <div v-else v-html="section3" style="padding-bottom:8%;"></div>
          </div>
          <aside class="toc-wrapper">
            <nav class="toc-content">
              <ul class="toc-items">
                <li class="toc-item">
                  <a href="#0" class="toc-link">加減分</a>
                </li>
                <li v-for="topic in topics" :key="topic.id" class="toc-item">
                  <a v-bind:href="topic.link" class="toc-link">{{topic.point}}</a>
                </li>
                <li class="toc-item">
                  <a href="#99" class="toc-link">結語</a>
                </li>
                <li class="toc-item" v-if="podcast!=''">
                  <a href="#100" class="toc-link">Podcast</a>
                </li>
              </ul>
              <div class="toc-marker" style="opacity: 1; top:55px;"></div>
            </nav>
          </aside>
        </div>
      </div>
      <el-backtop style="color: #6E7376" />
    </el-main>
  </el-container>
</template>

<script>
import { ref, toRef } from 'vue'
import { useMeta } from 'vue-meta'

export default {
  name: 'NovelDetail',
  created(){
    this.getJsonData(this.$route.params.id)
  },
  setup () {
    useMeta({ title: '小說耽美心得'})
    return{
      selectPodcast: ref('')
    }
  },
  data() { 
    return {
      jsonData: "",
      title: "",
      stars: "",
      plus: [],
      minus: [],
      section3: "",
      topics: [],
      podcast: [],
      srclink:""
    }
  },
  methods: {
    getJsonData(id) {
      fetch(`../src/data/${id}.json`)
      .then((response) => {
        this.jsonData = response.json()
        //console.log(this.jsonData)
        this.jsonData.then((res)=>{
          this.title = res.title
          this.stars = res.stars
          this.plus = res.plus
          this.minus = res.minus
          this.section3 = res.section3
          this.topics = res.topics
          this.podcast = res.podcast
        })
      })
    },
    showPodcast(link){
      this.srclink = link;
    },
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
    }
  },
}
</script>

<style>

.el-breadcrumb__inner.is-link:hover{
  color:#eeB6B7;
}

.el-select .el-input.is-focus .el-input__inner {
    border-color: #eeB6B7;
}

.el-select:hover .el-input__inner {
    border-color: #eeB6B7;
}

.el-select .el-input__inner {
    border-color: #eeB6B7;
}

.el-select .el-input__inner:focus {
    border-color: #eeB6B7;
}

.el-select-dropdown__item.selected{
  color:#fff;
}

.el-select-dropdown__item.selected.hover{
  background-color:#eeB6B7;
}

.breadtitle {
  font-size: 1em;
  background-color: #fff;
  color: #6E7376;
  text-align: start;
  font-weight: bold;
  line-height: 55px;
}

.el-divider__text {
  background-color: transparent;
}

.div-main {
  background-color:#F7F5E6; 
  padding:10px 30px 10px 30px; 
  display:flex;
}

.div-sec {
  padding:0 2%;
  line-height:24px; 
  flex:0.7;
}

.point {
  padding: 3px 2px;
}

blockquote {
  border-left: 3px solid #eeB6B7;
  padding-left: 14px;
  margin-left: 14px;
}

.topic-content {
  padding-left: 3%;
  padding-right: 3%;
}

.toc-wrapper {
  display: flex;
  /* padding-left: 2%; */
  flex: 0.3;
  justify-content: flex-end;
}

.toc-content {
  position: fixed;
  top: 130px;
  padding: 4px 12px 4px 0px;
  margin-bottom: 20px;
}

.toc-heading {
  font-size: 12px;
  color: var(--text-color-light);
  font-weight: bold;
  text-transform: uppercase;
  margin-top: 0;
}

.toc-items {
  padding: 0;
  margin: 12px 0 0;
  line-height: 1.2;
  position: -webkit-sticky;
  /* white-space: nowrap; */
}

.toc-item {
  margin-top: 10px;
  font-size: 14px;
  line-height: 1.5;
  color: inherit;
  list-style: none;
  border-left: 3px solid #b3c0d1;
  padding-left: 14px;
  white-space: pre-wrap;
  width:200px;
}

/* .toc-marker {
  position: absolute;
  background-color: aquamarine;
  border-radius: 4px;
  width: 4px;
  height: 14px;
  top: 30px;
  left: 0;
  z-index: 0;
} */

.toc-link {
  text-decoration: inherit;
  color: #6E7376;
}

.toc-link.active {
    color: var(--brand-color);
}

@media screen and (max-width:1100px){
  .toc-item {
    width: 180px;
  }
}

@media screen and (max-width:1000px){
  .toc-item {
    width: 170px;
  }
}

@media screen and (max-width:975px){
  .toc-item {
    width: 160px;
  }
}

@media screen and (max-width:930px){
  .toc-item {
    width: 150px;
  }
}

@media screen and (max-width:910px){
  .toc-item {
    width: 145px;
  }
}

@media screen and (max-width:890px){
  .toc-item {
    width: 140px;
  }
}

@media screen and (max-width:860px){
  .toc-item {
    width: 130px;
  }
}

@media screen and (max-width:848px){
  .toc-item {
    width: 120px;
  }
}

@media screen and (max-width:820px){
  .toc-item {
    width: 110px;
  }
}

@media screen and (max-width:780px){
  .toc-item {
    width: 100px;
  }
}

@media screen and (max-width:768px){
  .toc-wrapper{
    display: none;
  }
  .div-sec{
    flex: 1;
  }
}
/* 
@media screen and (max-width:443px){

} */

</style>

