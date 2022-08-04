<template>
  <div>
      <div class="nav">
        <div>
          <a href="">互动</a>
          <a href="">私信</a>
          <a href="" style="color:#ff6022">通知</a>
          <span></span>
        </div>
      </div>
      <div class="login">
        <p>登录账号同步最新消息</p>
        <a href="" class="a1">1秒登录</a>
      </div>
      <section>
       <img src="../../public/images/5-1.png" >
      </section>
     <Bb/>
  </div>
</template>

<script>

export default {

}
</script>

<style scoped>
  section{
    width: 100%;
    /* height: 100%; */
  }
  .nav{
    width: 100%;
    height: 0.4rem;
    /* background-color: pink; */
    overflow: hidden;
    text-align: center;
  }
  .nav div{
    width: 100%;
    height: 0.3rem;
    margin-top: 0.05rem;
    /* background-color: yellow; */
    line-height: 0.3rem;
    position: relative;
  }
  .nav a{
    display: inline-block;
    height: 100%;
    width: 0.45rem;
    font-size: 0.14rem;
    font-weight: 800;
    /* margin: 0 0.5rem; */
  }
  .nav div span{
    display: inline-block;
    width: 0.15rem;
    height: 0.03rem;
    background: #ff6022;
    position: absolute;
    bottom: 0;
    right: 1.30rem;
    border-radius: 0.02rem;
  }
  .login{
    width: 100%;
    height: 0.3rem;
    /* background-color: tan; */
    margin-top: 0.05rem;
    overflow: hidden;
  }
  .login p{
    display: inline-block;
    width: 80%;
    height: 100%;
    /* background-color: yellowgreen; */
    font-size: 0.13rem;
    line-height: 0.3rem;
    padding-left: 0.1rem;
    font-weight: 600;
  } 
  .login .a1{
    display: inline-block;
    width: 0.6rem;
    height: 0.25rem;
    background-color: #ff6022;
    font-size: 0.11rem;
    line-height: 0.25rem;
    text-align: center;
    color: white;
    border-radius: 0.3rem;
  }
  section img{
    width: 1.5rem;
    height: 1.75rem;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }
 
</style>