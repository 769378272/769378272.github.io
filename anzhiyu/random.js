var posts=["2025/05/19/这是一篇篇新的博文/","2025/05/19/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };