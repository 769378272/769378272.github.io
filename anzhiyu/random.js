var posts=["san/CF薅羊毛隧道套SaaS/","san/PVE-安装-Ubuntu/","san/hello-world/","san/windows破解/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };