<template>
  <div class="about">
     <div class="head">
     <div class="nav">
       <img src="/images/3-9.png">
       <span>广场</span>&nbsp;
       <a href="">动态</a>
       <span class="iconfont icon-daohang"></span>
     </div>
      <div class="input">
       <span class="iconfont icon-sousuo"></span>
       <input type="text" placeholder="广场">
      </div>
    </div>
    <section>
     <ul class="list">
       <li v-for="(v,i) in this.$store.state.aboutm.arr" :key="i">
         <img :src="v.img1src" class="img1">
         <h2>{{v.name}}</h2>
         <p>{{v.text}}</p>
         <img :src="v.img2src">
         <h3>{{v.title}}</h3>
         <span class="iconfont icon-kongxin"></span>
         <span class="iconfont icon-pinglun"></span>
         <span class="iconfont icon-fenxiang_2"></span>
       </li>
     </ul>
    <Bb/>
    </section>
  </div>
</template>
<script>
export default {
  mounted(){
    this.$store.dispatch("aboutlink",)
  }
}
</script>
<style scoped>
  section{
    padding-top: 0.76rem;
    margin-bottom: 0.5rem;
    /* height: 10rem; */
    /* background-color: springgreen; */
  }
  .head{
    width: 100%;
    position: fixed;
    overflow: hidden;
    z-index: 999;
    background-color: white;
    right: 0.02rem;
  }
  .nav{
    width: 100%;
    height: 0.4rem;
    /* background-color: palegreen; */
    border-bottom: 0.005rem solid #ccc;
  }
  .nav img{
    width: 0.4rem;
    height: 0.4rem;
    vertical-align: middle;
  }
  .nav span{
    display: inline-block;
    font-size: 0.2rem;
    transform: translateY(0.04rem);
  }
  .nav a{
    font-size: 0.11rem;
    color: grey;
  }
  .icon-daohang{
    display: inline-block;
    vertical-align: middle;
    transform: translateX(2.33rem) !important;
    color: grey !important;
  }
  .input{
    width: 100%;
    height: 0.35rem;
    /* background-color: hotpink; */
    padding-left: 0.12rem;
    display: flex;
    
  }
  .input .icon-sousuo{
    font-size: 0.16rem;
  }
  .input span{
    display: inline-block;
    margin-top: 0.1rem;
    vertical-align: middle;
    color: gray;
  }
  .input input{
    width: 100%;
    margin-left: 0.1rem;
    border: none;
    height: 100%;
    outline: none;
    font-size: 0.13rem !important;
  }
  .list li{
    border-bottom: 0.01rem solid #ccc;
  }
  .list li .img1{
    width: 0.4rem;
    vertical-align: middle;
  }
  .list li h2{
    font-weight: 400;
    font-size: 0.13rem;
    display: inline-block;
  }
  .list li p{
    display: block;
    font-size: 0.14rem;
  }
  .list li h3{
    padding-left: 0.05rem;
    font-weight: normal;
    width: 0.8rem;
    background-color: #ccc;
    color: grey;
    height: 0.16rem;
    line-height: 0.16rem;
    border-radius: 0.2rem;
    font-size: 0.11rem;
    display: inline-block;
  }
  .icon-kongxin{
    display: inline-block;
    vertical-align: middle;
    transform: translateX(2rem);
  }
  .icon-pinglun{
    display: inline-block;
    transform: translateX(2.17rem);
    vertical-align: middle;
  }
  .icon-fenxiang_2{
    display: inline-block;
    transform: translateX(2.3rem);
    vertical-align: middle;
    color: grey;
  }
</style>
