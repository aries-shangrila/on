<template>
  <el-container v-if="jsonData !== null">
    <el-main>
      <div>
        <el-breadcrumb separator-class="el-icon-caret-right" class="breadtitle">
            <el-breadcrumb-item :to="{ path: '/noveltext' }">小說 | 文本</el-breadcrumb-item>
            <el-breadcrumb-item>{{title}}</el-breadcrumb-item>
        </el-breadcrumb>
        <!-- background-image:url(../src/assets/sli100.png);-->
        <div style="background-color:#F7F5E6; padding:10px 30px 10px 30px; display:flex;">
          <div style="padding-right:14px; line-height:24px; flex:0.7;">
            <div style="padding-right:3%; padding-bottom:1%;">
              <div id=0 style="padding-top:2%;" />
              <p>{{stars}}</p>           
              <p>加分點</p>
              <ul>
                <li v-for="good in plus" class="point">{{good}}</li>
              </ul>
              <p>減分點</p>
              <ul>
                <li v-for="nogood in minus" class="point">{{nogood}}</li>
              </ul>
            </div>
            <el-divider><i class="el-icon-star-on"></i></el-divider>
            <div v-for="topic in topics" >
              <div v-bind:id="topic.id" style="padding-top:2%;" />
              <h3># {{topic.point}}</h3>
              <div v-html="topic.content" class="topic-content" />
            </div>
            <el-divider><i class="el-icon-star-on"></i></el-divider>
            <div id=99 style="padding-top:1%;" />
            <div v-html="section3" style="padding-bottom:8%;"></div>
          </div>
          <aside class="toc-wrapper">
            <nav class="toc-content">
              <ul class="toc-items">
                <li class="toc-item">
                  <a href="#0" class="toc-link">加減分</a>
                </li>
                <li v-for="topic in topics" class="toc-item">
                  <a v-bind:href="topic.link" class="toc-link">{{topic.point}}</a>
                </li>
                <li class="toc-item">
                  <a href="#99" class="toc-link">結語</a>
                </li>
              </ul>
              <div class="toc-marker" style="opacity: 1; top:55px;"></div>
            </nav>
          </aside>
        </div>
      </div>
    </el-main>
  </el-container>
  <el-backtop style="color: #6E7376" />
</template>

<script>
import { ref, toRef } from 'vue'

export default {
  name: 'NovelTextDetail',
  created(){
    this.getJsonData(this.$route.params.id)
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
    }
  },
  methods: {
    getJsonData(id) {
      fetch(`../src/data/${id}.json`)
      .then((response) => {
        this.jsonData = response.json()
        console.log(this.jsonData)
        this.jsonData.then((res)=>{
            this.title = res.title
            this.stars = res.stars
            this.plus = res.plus
            this.minus = res.minus
            this.section3 = res.section3
            this.topics = res.topics
        })
      })
    },
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
    }
  },
}
</script>

<style>

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
  padding-bottom: 3%;
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

</style>

