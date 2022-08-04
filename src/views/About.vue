<template>
  <div class="about">
     <div class="head">
     <div class="nav">
       <img src="../../public/images/3-9.png">
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
         <span class="iconfont icon-kongxin"><i class="i1">{{v.dianzan}}</i></span>
         <span class="iconfont icon-pinglun"><i class="i1">{{v.pinlun}}</i></span>
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
    border-bottom: 0.005rem solid #ebebeb;
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
    border-bottom: 0.01rem solid #ebebeb;
    padding: 0.1rem 0;
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
    margin: 0.1rem;
  }
  .list li h3{
    padding-left: 0.05rem;
    font-weight: normal;
    width: 0.8rem;
    background-color: #f6f8fa;
    color: gray;
    height: 0.16rem;
    line-height: 0.16rem;
    border-radius: 0.2rem;
    font-size: 0.11rem;
    display: inline-block;
  }
  .icon-kongxin{
    display: inline-block;
    vertical-align: middle;
    transform: translateX(1.7rem);
  }
  .icon-pinglun{
    display: inline-block;
    transform: translateX(1.8rem);
    vertical-align: middle;
  }
  .icon-fenxiang_2{
    display: inline-block;
    transform: translateX(2rem);
    vertical-align: middle;
    color: grey;
  }
  .i1{
    font-size: 0.1rem;
    vertical-align: top;
    color: gray;

  }
</style>
