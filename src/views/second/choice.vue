<template>
  <div>
    <section>
    <div class="search">
      <div class="input">
        <span class="iconfont icon-sousuo"></span>
        <input type="text" placeholder="钢铁侠2">
      </div>
      <div class="font">
        <span class="iconfont icon-youxi"></span>
        <span class="iconfont icon-xiazai"></span>
        <span class="iconfont icon-shijian"></span>
        <span class="iconfont icon-vip-line" style="color:orange"></span>
      </div>
    </div>
    <div class="wipe">
      <h5 v-if="this.$store.state.choicem.arr.length==0">请等待</h5>
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white" v-else>
        <van-swipe-item v-for="(v,i) in this.$store.state.choicem.arr" :key="i">
          <img :src="v.imgsrc">
          <p>{{v.name}}</p>
        </van-swipe-item>

      </van-swipe>
    </div>
    <h1 class="title">重磅热播</h1>
    <ul class="list">
      <li v-for="(v,i) in this.$store.state.choicem.arr1" :key="i">
        <img :src="v.imgsrc" >
        <h1>{{v.name}}</h1>
        <p>{{v.title}}</p>
      </li>
    </ul>
    </section>
  </div>
  
</template>
<script>
import Vue from 'vue';
import { Swipe, SwipeItem } from 'vant';

Vue.use(Swipe);
Vue.use(SwipeItem);
export default {
  mounted(){
    //发送请求通过actions
    this.$store.dispatch("choicelink",)
  }
}
</script>

<style scoped>
  section{
    padding-top: 0.4rem;
    margin-bottom: 0.5rem;
    /* height: 10rem; */
    /* background-color: springgreen; */
  }
  .search{
    width: 100%;
    height: 0.4rem;
    /* background-color: pink; */
    display: flex;
  }
  .input{
    width: 60%;
    height: 100%;
    /* background-color: greenyellow; */
    line-height: 0.4rem;
  }
  .input input{
    font-size: 0.12rem;
  }
  .input span{
    font-size: 0.16rem;
    vertical-align: middle;
    color: orange;
  }
  .input input{
    border: none;
    width: 85%;
    height: 0.3rem;
    vertical-align: middle;
    transform: translateX(0.06rem);
    outline: none;
  }
  .font{
    width: 40%;
    height: 100%;
    /* background-color: palegreen; */
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
  .font span{
    font-size: 0.2rem;
    color: grey;
  }
  .wipe{
    overflow: hidden;
  }
  .my-swipe{
    overflow: hidden;
  }
  .my-swipe .van-swipe-item {
    /* color: #fff; */
    /* font-size: 0.2rem; */
    /* line-height: 0.9rem; */
    /* text-align: center; */
    /* background-color: #39a9ed; */
    float: left;
  }
  .my-swipe .van-swipe-item img{
    display: block;
  }
  .wipe p{
    font-size: 0.14rem;
    text-indent: 0.1rem;
  }
  .list{
    width: 100%;
    /* height: 100%; */
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .list li{
    width: 49.5%;
    /* height: 2rem; */
    /* background-color: red; */
    flex-shrink: 0;
    margin: 0.05rem 0;
  }
  .list li img{
    display: block;
    width: 1.8rem;
    height: 1rem;
  }
  .list li h1{
    /* width: 100%; */
    height: 0.16rem;
    font-weight: 400;
    font-size: 0.12rem;
    padding-left: 0.07rem;
  }
  .list li p{
    /* width: 100%; */
    height: 0.13rem;
    font-size: 0.1rem;
    padding-left: 0.07rem;
    color: gray;
  }
  .title{
    height: 0.3rem;
    /* background-color: yellow; */
    font-size: 0.16rem;
    padding-left: 0.1rem;
    line-height: 0.3rem;
    font-weight: 400;
    margin-top: 0.05rem;
  }
</style>>
