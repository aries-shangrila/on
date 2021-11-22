<template>
  <el-container v-if="jsonData !== null">
    <el-main>
      <div>
        <el-breadcrumb separator-class="el-icon-caret-right" class="breadtitle">
            <el-breadcrumb-item :to="{ path: '/manga' }">漫畫 | 網漫</el-breadcrumb-item>
            <el-breadcrumb-item>{{title}}</el-breadcrumb-item>
        </el-breadcrumb>
        <div style="background-color:#F7F5E6; padding:10px 30px 10px 30px;">
          <div style="padding:0 2%; line-height:24px;">
            <div style="padding-right:3%; padding-bottom:1%;">
              <div id=0 style="padding-top:2%;" />
              <el-tag
                v-for="item in tags"
                :key="item.label"
                :type="item.type"
                :effect="item.effect"
                size="medium"
                style="margin:3px;"
              >
                {{ item.label }}
              </el-tag>
              <p>{{stars}}</p>           
            </div>
            <el-divider><i class="el-icon-star-on"></i></el-divider>
            <div id=99 style="padding-top:1%;" />
            <div v-html="section3" style="padding-bottom:8%;"></div>
          </div>
        </div>
      </div>
    </el-main>
  </el-container>
  <el-backtop style="color: #6E7376" />
</template>

<script>
import { ref, toRef } from 'vue'
import { useMeta } from 'vue-meta'

export default {
  name: 'MangaDetail',
  created(){
    this.getJsonData(this.$route.params.id)
  },
  setup () {
    useMeta({ title: '漫畫耽美心得'})
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
      tags: []
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
          this.tags = res.tags
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

.el-breadcrumb__inner.is-link:hover{
  color:#eeB6B7
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

.point {
  padding: 3px 2px;
}

blockquote {
  border-left: 3px solid #b3c0d1;
  padding-left: 14px;
  margin-left: 14px;
}

.topic-content {
  padding-left: 3%;
  padding-right: 3%;
  padding-bottom: 3%;
}


</style>

