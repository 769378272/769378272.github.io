var posts=["san/CF薅羊毛隧道套SaaS/","san/Internet Download Manager破解/","san/PVE-安装-Ubuntu/","san/NATMap部署Web服务/","san/Windows-JVMS-JDK管理工具/","san/Windows-node-环境安装/","san/windows破解/","san/使用 Sealos 一键搭建 Kubernetes 集群/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };