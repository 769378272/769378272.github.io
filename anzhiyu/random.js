var posts=["san/hello-world/","san/PVE-安装-Ubuntu/","san/windows破解/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };