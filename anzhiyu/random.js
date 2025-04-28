var posts=["2024/05/23/航空订票系统-课程设计/","2024/05/23/第一篇文章/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };