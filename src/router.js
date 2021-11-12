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
        path: '/novel', 
        index: '2-1',
        type: 'item',
        component: () => import('./views/NovelMain.vue'),
        meta: { title: '原耽 | 小說'}, 
      },
      {
        path: '/novel/:id',
        index: '2-1-1',
        name: 'noveldetail',
        component: () => import('./views/NovelDetail.vue'),
      },
      { 
        // 2-2 漫畫動畫
        path: '/manga', 
        index: '2-2',
        type: 'item',
        component: () => import('./views/MangaMain.vue'),
        meta: { title: '漫畫 | 網漫'}  
      },
      {
        path: '/manga/:id',
        index: '2-2-1',
        name: 'mangadetail',
        component: () => import('./views/MangaDetail.vue'),
      },
      { 
        // 2-3 廣播影劇
        path: '/drama', 
        index: '2-3',
        type: 'item',
        component: () => import('./views/DramaMain.vue'),
        meta: { title: '廣播劇'}  
      }
    ]
  },
  { 
    // 3 Podcast
    path: '/podcast', 
    index: '3',
    type: 'item',
    component: () => import('./views/PodcastMain.vue'),
    meta: { title: '神仙愛情海', icon: 'el-icon-mic' }
  },
  { 
    // 4 寶藏庫
    path: '/treasurevault', 
    index: '4',
    type: 'item',
    component: () => import('./views/TreasureVault.vue'),
    meta: { title: '梨a寶藏庫', icon: 'el-icon-sunrise' }
  },
  { 
    // 9 風花雪月
    path: '/history', 
    index: '9',
    type: 'item',
    component: () => import('./views/HistoryMain.vue'),
    meta: { title: '那些年的風花雪月', icon: 'el-icon-moon-night' }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;