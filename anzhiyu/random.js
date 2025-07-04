var posts=["san/CF薅羊毛隧道套SaaS/","san/Internet Download Manager破解/","san/NATMap部署Web服务/","san/PVE-安装-Ubuntu/","san/Windows-JVMS-JDK管理工具/","san/Windows-node-环境安装/","san/windows破解/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };