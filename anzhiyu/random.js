var posts=["san/CF薅羊毛隧道套SaaS/","san/NATMap部署Web服务/","san/windows破解/","san/PVE-安装-Ubuntu/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };