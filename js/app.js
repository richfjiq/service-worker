// if ('serviceWorker' in navigator) {
//   console.log('We can use it');
// }

// confirm if we can use Service Worker
if (navigator.serviceWorker) {
  // console.log('We can use Service Worker.');
  navigator.serviceWorker.register('/sw.js');
}
