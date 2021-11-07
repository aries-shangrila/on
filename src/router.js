import { createWebHistory, createRouter } from 'vue-router';

const routes = [
  { 
    // 1 首頁
    path: '/', 
    index: '1',
    type: 'item',
    component: () => import('./views/OnMainIndex.vue'),
    meta: { title: '首頁', icon: 'el-icon-house' } 
  },
  { 
    // 2 心得 
    path: '/', 
    index: '2',
    type: 'submenu',
    component: () => import('./components/Layout.vue'),
    meta: { title: '耽美心得', icon: 'el-icon-collection' },
    children: [
      { 
        // 2-1 小說文本
        path: '/noveltext', 
        index: '2-1',
        type: 'item',
        component: () => import('./views/NovelTextMain.vue'),
        meta: { title: '小說 | 文本'}, 
      },
      {
        path: '/noveltext/:id',
        index: '2-1-1',
        name: 'noveltextdetail',
        component: () => import('./views/NovelTextDetail.vue'),
      },
      { 
        // 2-2 漫畫動畫
        path: '/mangaanime', 
        index: '2-2',
        type: 'item',
        component: () => import('./views/MangaAnimeMain.vue'),
        meta: { title: '漫畫 | 動畫'}  
      },
      {
        path: '/mangaanime/:id',
        index: '2-2-1',
        name: 'mangaanimedetail',
        component: () => import('./views/MangaAnimeDetail.vue'),
      },
      { 
        // 2-3 廣播影劇
        path: '/dramastream', 
        index: '2-3',
        type: 'item',
        component: () => import('./views/DramaStreamMain.vue'),
        meta: { title: '廣播 | 影劇'}  
      }
    ]
  },
  { 
    // 3 寶藏庫
    path: '/treasurevault', 
    index: '3',
    type: 'item',
    component: () => import('./views/TreasureVault.vue'),
    meta: { title: '梨a寶藏庫', icon: 'el-icon-sunrise' }
  },
  { 
    // 4 風花雪月
    path: '/starrysky', 
    index: '4',
    type: 'item',
    component: () => import('./components/Empty.vue'),
    meta: { title: '那些年的風花雪月', icon: 'el-icon-moon-night' }
  },
  { 
    // 5 Podcast
    path: '/podcast', 
    index: '5',
    type: 'item',
    component: () => import('./views/PodcastMain.vue'),
    meta: { title: '神仙愛情海', icon: 'el-icon-mic' }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;