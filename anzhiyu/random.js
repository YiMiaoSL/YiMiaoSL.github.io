var posts=["2025/04/04/【project2016】project2016安装与office 365冲突问题--100%成功/","2024/05/23/第一篇文章/","2024/05/23/航空订票系统-课程设计/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };