self.addEventListener('fetch', (event) => {
  // if (event.request.url.includes('style.css')) {
  //   event.respondWith(fetch(null));
  // } else {
  //   event.respondWith(fetch(event.request));
  // }
  // if (event.request.url.includes('.jpg')) {
  //   console.log(event.request.url);
  //   // let photoReq = fetch('img/main.jpg');
  //   // let photoReq = fetch(event.request.url);
  //   let photoReq = fetch(event.request);
  //   event.respondWith(photoReq);
  // }
  // --------------------- modify css file ---------------------
  // if (event.request.url.includes('style.css')) {
  //   let response = new Response(
  //     `
  //       body {
  //         background-color: #FF0000 !important;
  //         color: pink;
  //       }
  //     `,
  //     {
  //       headers: {
  //         'Content-Type': 'text/css',
  //       },
  //     }
  //   );
  //   event.respondWith(response);
  // }
  // --------------------- modify image request ---------------------
  // if (event.request.url.includes('main.jpg')) {
  //   let img = fetch('img/main-patas-arriba.jpg');
  //   event.respondWith(img);
  // }

  const resp = fetch(event.request).then((resp) => {
    // if (resp.ok) return resp;
    // else return fetch('img/main.jpg');
    return resp.ok ? resp : fetch('img/main.jpg');
  });

  event.respondWith(resp);
});
