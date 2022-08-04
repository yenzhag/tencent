<template>
  <div>
   <Sc/>
   <section>
   <div class="swipe">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
    <van-swipe-item v-for="(v,i) in this.$store.state.vipm.arr" :key="i"><img :src="v.imgsrc" ></van-swipe-item>
    
    </van-swipe>
    </div>
    <div class="login">
      <span class="iconfont icon-qq"></span>
      <a href="">
         <span class="s1">未登录</span>
         <span class="s2">登录后可享受VIP特权</span>
      </a>
      <img src="../../public/images/4-11.png">
    </div>
    <div class="recommend">
      <p class="name">今日专属推荐</p>
    </div>
    <ul class="list2">
      <li v-for="(v,i) in this.$store.state.vipm.arr1" :key="i">
        <img :src="v.imgsrc">
        <p>{{v.name}}</p>
      </li>
    </ul>
    <ul class="list3">
      <li v-for="(v,i) in this.$store.state.vipm.arr2" :key="i">
        <p>{{v.title}}</p>
        <h1>{{v.text}}</h1>
        <img :src="v.imgsrc">
      </li>
    </ul>
    <div class="tv">
      <h1>正在热播</h1>
      <ul class="list4">
      <li v-for="(v,i) in this.$store.state.vipm.arr3" :key="i">
        <img :src="v.imgsrc" >
        <h1>{{v.name}}</h1>
        <p>{{v.text}}</p>
      </li>
    </ul>
    </div>
   <Bb/>
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
    this.$store.dispatch("viplink",)
  },
  data() {
    return {
      current: 0,
    };
  },
  methods: {
    onChange(index) {
      this.current = index;
    },
  },
}
</script>

<style scoped>
  section{
    padding-top: 0.4rem;
    /* height: 9rem; */
    margin-bottom: 0.5rem;
  } 
  .swipe{
    overflow: hidden;
    position: relative;
  }
  .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    /* height: 1.5rem; */
    /* line-height: 150px; */
    text-align: center;
    background-color: skyblue;
    float: left;
  }
  .my-swipe .van-swipe-item img{
    display: block;
  }
  .login{
    width: 100%;
    height: 0.5rem;
    background-color: #f6f8fa;
    margin-top: 0.1rem;
    line-height: 0.5rem;
    position: relative;
   
  }

  .login .icon-qq{
    display: inline-block;
    margin-left: 0.1rem;
    font-size: 0.25rem;
    color: #ccc;
    vertical-align: middle;
  }
  .login a{
    display: inline-block;
    font-size: 0.13rem;
    transform: translate(0.09rem,-0.09rem);
  }
  .login .s1{
    display: inline-block;
    transform: translate();
    font-weight: 800;
  }
  .login .s2{
    display: inline-block;
    transform: translate(-0.38rem,0.13rem);
    font-size: 0.09rem;
    color: gray;
  }
  .login img{
    display: block;
    width: 1rem;
    height: 0.5rem;
    position: absolute;
    top: 0;
    right: 0;
  }
  .recommend{
    width: 100%;
    /* height: 5rem; */
    /* background-color: pink; */
    margin-top: 0.1rem;
  }
  .recommend .name{
    /* background-color: plum; */
    font-size: 0.14rem;
    padding-left: 0.1rem;
    font-weight: 400;
  }
  .list2{
    width: 100%;
    /* height: 1.8rem; */
    /* background-color: skyblue; */
    margin-top: 0.2rem;
    display: flex;
    overflow-x: auto;
    flex-wrap: nowrap;
  }
  .list2 li{
    width: 32%;
    height: 1.9rem;
    /* background-color: red; */
    flex-shrink: 0;
    margin: 0 0.04rem;
    text-align: center;
  }
  .list2::-webkit-scrollbar {display:none}
  .list2 li img{
    display: block;
    width: 100%;
    height: 1.7rem;
  }
  .list2 li p{
    width: 100%;
    /* height: 0.5rem; */
    font-size: 0.12rem;
  }
  .list3{
    width: 100%;
    height: 0.5rem;
    /* background-color: yellow; */
    margin-top: 0.3rem;
    margin-bottom: 0.2rem;
    display: flex;
    overflow-x: auto;
  }
  .list3::-webkit-scrollbar {display:none}
  .list3 li{
    width: 30%;
    height: 100%;
    background-color: #f6f8fa;
    flex-shrink: 0;
    margin: 0 0.05rem;
    position: relative;
  }
  .list3 li p{
    width: 0.8rem;
    font-size: 0.1rem;
    font-weight: 800;
    transform: translate(0.1rem,0.1rem);
  }
  .list3 li h1{
    width: 0.8rem;
    font-size: 0.09rem;
    font-weight: normal;
    color: #ccc;
    transform: translate(0.1rem,0.12rem);

  }
  .list3 li img{
    width: 0.3rem;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
  }
  .tv{
    width: 100%;
    /* height: 3rem; */
    /* background-color: blanchedalmond; */
  }
  .tv h1{
    font-size: 0.14rem;
    padding-left: 0.1rem;
    font-weight: 800;
  }

  .list4{
    width: 100%;
    /* height: 100%; */
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 0.05rem;
  }
  .list4 li{
    width: 49.5%;
    /* height: 2rem; */
    /* background-color: red; */
    flex-shrink: 0;
    margin: 0.05rem 0;
  }
  .list4 li img{
    display: block;
    width: 1.8rem;
    height: 1rem;
  }
  .list4 li h1{
    /* width: 100%; */
    height: 0.16rem;
    font-weight: 400;
    font-size: 0.12rem;
    padding-left: 0.07rem;
  }
  .list4 li p{
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
</style>