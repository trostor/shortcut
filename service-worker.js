// service-worker.js

self.addEventListener('install', event => {
  console.log('Service Worker 安裝完成');
});

self.addEventListener('fetch', event => {
  // 這裡可以做離線緩存（進階功能）
  // 目前我們先不做，保持簡單
});
