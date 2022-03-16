<template>
  <div>
      <div id="footer">
      <!-- <link rel="stylesheet" href="download/font_3247002_gopb8yrvhno/iconfont.css"> -->
      <router-link to="/Home"><span class="iconfont icon-shouye"></span><a class="a1">首页</a></router-link> 
      <router-link to="/About"><span class="iconfont icon-quanzi"></span><a class="a1">doki</a> </router-link>
      <router-link to="/vip"><span class="iconfont icon-huiyuanvip"></span><a class="a1 a2">VIP会员</a></router-link>
      <router-link to="/news"><span class="iconfont icon-xiaoxi"></span><a class="a1">消息</a></router-link>
      <router-link to="/self"><span class="iconfont icon-xiaolian"></span><a class="a1 a2 a3">个人中心</a></router-link>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    #footer{
      width: 98%;
      height: 0.5rem;
      background: white;
      border-top: 0.01rem solid #ccc;
      position: fixed;
      bottom: 0;
      display: flex;
      justify-content: space-around;
      line-height: 0.5rem;
      font-size: 0.12rem;
    }
    a{
      display: block;
      height: 100%;
      text-align: center;
      color: #b2b2b7;
    }
    span{
      width: 0.16rem;
      height: 0.16rem;
      font-size: 0.28rem;
      display: block;
      transform: translateY(-0.08rem);
    }
    .a1{
    display: block;
    width: 100%;
    text-align: center;
    font-size: 0.1rem;
    transform: translateY(-0.02rem);
    margin-left: 0.03rem;
    }
  .a2{
    transform: translate(-0.08rem,-0.02rem);
  }
  .a3{
    transform: translateX(-0.1rem);
  }
  .router-link-active{
    color: #ff971d;
  }
  .router-link-active a{
    color: #ff9971;
  }
</style>