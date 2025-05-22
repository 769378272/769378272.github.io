var posts=["san/这是一篇篇新的博文/","san/HEXO/","san/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };