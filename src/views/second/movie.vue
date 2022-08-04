<template>
  <div>
    <section>
      <div class="head">
        <span class="iconfont icon-sousuo"></span>
      </div>
       <div class="creation">

        <ul class="content">
          <li>
            <span class="iconfont icon-fenlei"></span>
            <a>分类</a>
          </li>
          <li>
            <span class="iconfont icon-paixingbang"></span>
            <a>排行榜</a>
          </li>
          <li>
            <span class="iconfont icon-wodeshujia"></span>
            <a>我的书架</a>
          </li>
          <li>
            <span class="iconfont icon-wodezhanghu"></span>
            <a>我的账户</a>
          </li>
        </ul>
      </div>
      <div class="img" v-for="(v,i) in this.$store.state.moviem.arr" :key="i">
        <img :src="v.imgsrc" >
        <p>{{v.text}}</p>
      </div>
      <h1 class="title">火爆热销</h1>

      <ul class="list2">
      <li v-for="(v,i) in this.$store.state.moviem.arr1" :key="i">
        <img :src="v.imgsrc" alt="">
        <p>{{v.text}}</p>
      </li>
      </ul>
      <div class="img1" v-for="(v,i) in this.$store.state.moviem.arr2" :key="i">
        <img :src="v.imgsrc" alt="">
        <p>{{v.text}}</p>
      </div>
      <h1 class="title">本周热推</h1>
        <ul class="list3">
      <li v-for="(v,i) in this.$store.state.moviem.arr3" :key="i">
        <img :src="v.imgsrc" alt="">
        <p>{{v.text}}</p>
      </li>
      </ul>
      <div class="img3" v-for="(v,i) in this.$store.state.moviem.arr4" :key="i">
        <img :src="v.imgsrc" alt="">
        <p>{{v.text}}</p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
    mounted(){
      this.$store.dispatch("movielink",)
    }
}
</script>

<style scoped>
  section{
    padding-top: 0.4rem;
    padding-bottom: 0.5rem;
    /* height: 7rem; */
  }
  .head{
    width: 100%;
    height: 0.3rem;
    /* background-color: aqua; */
    padding-left: 0.1rem;
    line-height: 0.3rem;
    box-sizing: border-box;
  }
  .head .icon-sousuo{
    font-size: 0.16rem;
    color: orange;
  }
   .creation{
    width: 97%;
    /* height: 0.8rem; */
    /* background-color: turquoise; */
    margin-top: 0.1rem;
    /* padding-top: 0.1rem; */
    box-sizing: border-box;
    margin: 0 0.05rem;
  }
  
  .creation .content{
    width: 100%;
    height: 100%;
    background-color: white;
    display: flex;
    justify-content: space-around;
    padding-bottom: 0.1rem;
  }
  .creation .content li{
    width: 0.8rem;
    /* height: 100%; */
    /* background-color: white; */
    flex-shrink: 0;
    text-align: center;
  }
  .creation .content li span{
    width: 100%;
    height: 0.3rem;
    line-height: 0.3rem;
    display: block;
    font-size: 0.25rem;
    margin-top: 0.15rem;
    color: #42415b;
  }
  .creation .content li a{
    display: block;
    width: 100%;
    height: 0.2rem;
    font-size: 0.1rem !important;
    font-style: normal;
    color: #252547;
    margin-top: 0.02rem;
  }
  .img{
    width: 100%;
  }
  .img img{
    display: block;
  }
  .img p{
    width: 100%;
    height: 0.2rem;
    /* background-color: yellow; */
    font-size: 0.13rem;
    font-weight: 800;
    line-height: 0.2rem;
  }
  .title{
    width: 100%;
    height: 0.2rem;
    font-size: 0.14rem;
    font-weight: 600;
    margin-top: 0.2rem;
    padding-left: 0.05rem;
  }

   .list2{
    width: 100%;
    /* height: 1.8rem; */
    /* background-color: skyblue; */
    margin-top: 0.05rem;
    display: flex;
    overflow-x: auto;
    flex-wrap: nowrap;
  }
  .list2 li{
    width: 32%;
    height: 1.9rem;
    /* background-color: red; */
    flex-shrink: 0;
    margin: 0 0.01rem;
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
  .img1{
    width: 100%;
    margin-top: 0.2rem;
  }
  .img1 img{
    display: block;
  }
  .img1 p{
    width: 100%;
    height: 0.2rem;
    /* background-color: yellow; */
    font-size: 0.13rem;
    font-weight: 800;
    line-height: 0.2rem;
  }

  .list3{
    width: 100%;
    /* height: 1.8rem; */
    /* background-color: skyblue; */
    margin-top: 0.05rem;
    display: flex;
    overflow-x: auto;
    flex-wrap: nowrap;
    /* margin-top: 0.2rem; */
  }
  .list3 li{
    width: 32%;
    height: 1.9rem;
    /* background-color: red; */
    flex-shrink: 0;
    margin: 0 0.01rem;
    text-align: center;
  }
  .list3::-webkit-scrollbar {display:none}
  .list3 li img{
    display: block;
    width: 100%;
    height: 1.7rem;
  }
  .list3 li p{
    width: 100%;
    /* height: 0.5rem; */
    font-size: 0.12rem;
  }
  .img3{
    width: 100%;
    margin-top: 0.2rem;
  }
  .img3 img{
    display: block;
  }
  .img3 p{
    width: 100%;
    height: 0.2rem;
    /* background-color: yellow; */
    font-size: 0.13rem;
    font-weight: 800;
    line-height: 0.2rem;
  }
</style>