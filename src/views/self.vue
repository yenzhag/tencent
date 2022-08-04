<template>
  <div>
      <div class="head">
        <a href="">
          <span class="iconfont icon-sousuo"></span>
        </a>
      </div>
      <section>
      <div class="login">
        <span class="iconfont icon-qq"></span>
       <a href=""><b class="text" >点击登录</b></a>
      </div>
      <ul class="list">
        <li v-for="(v,i) in this.$store.state.selfm.arr" :key="i">
          <a href="">{{v.name}}</a> <br>
          <span>{{v.title}}</span>
        </li>
        
      </ul>
      <div class="creation">
        <h3>
          <span>创作中心</span>
          <b>&gt;</b>
        </h3>
        <ul class="content">
          <li>
            <span class="iconfont icon-chuangzuozhongxin"></span>
            <a>创作中心</a>
          </li>
          <li>
            <span class="iconfont icon-shangchuan"></span>
            <a>上传</a>
          </li>
          <li>
            <span class="iconfont icon-wodezuopin"></span>
            <a>作品管理</a>
          </li>
          <li>
            <span class="iconfont icon-huati"></span>
            <a>热门话题</a>
          </li>
        </ul>
      </div>
      <div class="history">
        <h3>
          <span>观看历史</span>
          <b> <span style="font-size:0.1rem">更多</span>&nbsp;&nbsp;&gt;</b>
        </h3>
      <ul class="list2">
        <li v-for="(v,i) in this.$store.state.selfm.arr1" :key="i">
          <img :src="v.imgsrc">
          <p>{{v.text}}</p>
        </li>
      </ul>
      </div>
      <div class="function">
        <h3>
          <span>常用功能</span>
        </h3>
          <ul class="content">
          <li>
            <span class="iconfont icon-xiazai"></span>
            <a>下载</a>
          </li>
          <li>
            <span class="iconfont icon-shoucang"></span>
            <a>我的收藏</a>
          </li>
          <li>
            <span class="iconfont icon-touping"></span>
            <a>电视投屏</a>
          </li>
          <li>
            <span class="iconfont icon-gexingzhuangban"></span>
            <a>明星装扮</a>
          </li>
          <li>
            <span class="iconfont icon-dingdan"></span>
            <a>我的订单</a>
          </li>
        </ul>
      </div>
      <div class="welfare">
        <h3>
          <span>福利中心</span>
        </h3>
         <ul class="content">
          <li v-for="(v,i) in this.$store.state.selfm.arr2" :key="i">
            <span><img :src="v.imgsrc"></span>
            <a>{{v.title}}</a>
          </li>
        </ul>
      </div>
      <div class="vedio">
        <h3>
          <span>免流量看视频</span>
        </h3>
        <ul class="content">
          <li>
            <span class="iconfont icon-tengxunwangka"></span>
            <a>腾讯王卡</a>
          </li>
          <li>
            <span class="iconfont icon-dianhuaqia1"></span>
            <a>移动花卡</a>
          </li>
          <li>
            <span class="iconfont icon-5g"></span>
            <a>极速5G</a>
          </li>
          <li>
            <span class="iconfont icon-dianhuaqia"></span>
            <a>电信星卡</a>
          </li>
        </ul>
      </div>
       <div class="interest">
        <h3>
          <span>常用功能</span>
        </h3>
          <ul class="content">
          <li>
            <span class="iconfont icon-xiaoshuo"></span>
            <a>小说频道</a>
          </li>
          <li>
            <span class="iconfont icon-manhua"></span>
            <a>漫画频道</a>
          </li>
          <li>
            <span class="iconfont icon-shangcheng"></span>
            <a>草场地商城</a>
          </li>
          <li>
            <span class="iconfont icon-aixin"></span>
            <a>doki小窝</a>
          </li>
          <li>
            <span class="iconfont icon-zhishi"></span>
            <a>知识频道</a>
          </li>
          <li>
            <span class="iconfont icon-hongbao"></span>
            <a>小鹅送红包</a>
          </li>
          <li>
            <span class="iconfont icon-dianyingpiaoiocn"></span>
            <a>我的电影票</a>
          </li>
        </ul>
      </div>
      <div class="set">
        <a href="" v-for="(v,i) in $store.state.selfm.arr3" :key="i">
         <h3>
          <span>{{v.title}}</span>
          <b>&gt;</b>
        </h3>
        </a>
      </div>
      </section>
      <Bb/>
  </div>
</template>

<script>
export default {
   mounted(){
    this.$store.dispatch("selflink",)
  },
};
</script>

<style scoped>
  section{
    width: 100%;
    background-color: #f6f8fa;
    /* height: 15rem; */
    padding-top: 0.4rem;
    padding-bottom: 0.8rem;
    /* height: 100%; */
  }
  .head{
    width: 100%;
    height: 0.4rem;
    position: fixed;
    z-index: 999;
    background-color: #fffefa;
  }
  .head a{
    display: block;
    width: 0.4rem;
    height: 0.4rem;
    line-height: 0.4rem;
    float: right;
    text-align: center;
    font-size: 0.16rem;
    color: black;
  }
  .login{
    width: 100%;
    height: 0.5rem;
    background-color: #fcfef7;
    line-height: 0.5rem;
  }
  .login .icon-qq{
    display: inline-block;
    width: 0.5rem;
    height: 0.46rem;
    background-color: #fcfef7;
    text-align: center;
    color: #ebebeb;
    font-size: 0.35rem;
    vertical-align: middle;
  }
  .login .text{
    display: inline-block;
    font-size: 0.15rem;
  }
  .list{
    width: 100%;
    /* height: 0.4rem; */
    background-color: #f8fffc;
    margin-top: 0.1rem;
    /* margin-bottom: 0.2rem; */
    display: flex;
    overflow-x: auto;
  }
  .list li{
    width: 25%;
    /* height: 100%; */
    /* background-color: #f6f8fa; */
    flex-shrink: 0;
    margin: 0 0.03rem;
    position: relative;
    border: 0.02rem solid #f3f4ef;
    border-radius: 0.05rem;
    background-color: white;
    padding-left: 0.1rem;
    padding-bottom: 0.05rem;
    box-sizing: border-box;
  }
  .list::-webkit-scrollbar {display:none}
  .list li a{
    font-size: 0.12rem;
    font-weight: 800;
    color: #744d15;
  }
  .list li span{
    display: block;
    font-size: 0.09rem;
    transform: translateY(-0.01rem);
    color: #baa68a;
  }
  .creation{
    width: 97%;
    /* height: 0.8rem; */
    /* background-color: turquoise; */
    margin-top: 0.1rem;
    padding-top: 0.1rem;
    box-sizing: border-box;
    margin: 0 0.05rem;
  }
  .creation h3{
    font-size: 0.13rem;
    font-weight: 600;
    padding-left: 0.1rem;
    padding-right: 0.1rem;
    background-color: white;
    padding-top: 0.1rem;
  }
  .creation h3 b{
    float: right;
    color: #868490;
    vertical-align: middle;
    /* background-color: white; */
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
    color: #fa5f1e;
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
  .history{
    width: 97%;
    height: 1.4rem;
    margin: 0 0.05rem;
    background-color: white;
    margin-top: 0.1rem;
    padding-bottom: 0.1rem;
  }
  .history h3{
    font-size: 0.13rem;
    font-weight: 600;
    padding-left: 0.1rem;
    padding-right: 0.1rem;
    background-color: white;
    padding-top: 0.1rem;
  }
  .history h3 b{
    float: right;
    color: #868490;
  }
  .list2{
    width: 100%;
    height: 1rem;
    /* background: chartreuse; */
    display: flex;
    margin-top: 0.1rem;
    overflow-x: auto;
  }
  .list2 li{
    width: 34%;
    height: 100%;
    /* background-color: cornflowerblue; */
    flex-shrink: 0;
    margin-left: 0.1rem;
  }
  .list2::-webkit-scrollbar {display:none}
  .list2 li img{
    width: 100%;
    height: 0.7rem;
  }
  .list2 li p{
    font-size: 0.1rem;
  }
  .function{
    width: 97%;
    /* height: 0.8rem; */
    /* background-color: turquoise; */
    margin-top: 0.1rem;
    padding-top: 0.1rem;
    box-sizing: border-box;
    margin: 0 0.05rem;
  }
  .function h3{
    font-size: 0.13rem;
    font-weight: 600;
    padding-left: 0.1rem;
    padding-right: 0.1rem;
    background-color: white;
    padding-top: 0.1rem;
  }
  .function .content{
    width: 100%;
    /* height: 100%; */
    background-color: white;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    padding-bottom: 0.1rem;
  }
  .function .content li{
    width: 25%;
    flex-shrink: 0;
    text-align: center;
    /* margin: 0 0.05rem; */
   
  }
  .function .content li span{
    width: 100%;
    height: 0.3rem;
    line-height: 0.3rem;
    display: block;
    font-size: 0.25rem;
    margin-top: 0.15rem;
    color: #fa5f1e;
  }
  .function .content li a{
    display: block;
    width: 100%;
    height: 0.2rem;
    font-size: 0.1rem !important;
    font-style: normal;
    color: #252547;
    margin-top: 0.02rem;
  }
  .welfare{
    width: 97%;
    /* height: 0.8rem; */
    /* background-color: turquoise; */
    /* padding-top: 0.1rem; */
    box-sizing: border-box;
    margin: 0.1rem 0.05rem;
    margin-bottom: 0;
  }
  .welfare h3{
    font-size: 0.13rem;
    font-weight: 600;
    padding-left: 0.1rem;
    padding-right: 0.1rem;
    background-color: white;
    padding-top: 0.1rem;
  }
  .welfare .content{
    width: 100%;
    /* height: 100%; */
    background-color: white;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    padding-bottom: 0.1rem;
  }
  .welfare .content li{
    width: 25%;
    flex-shrink: 0;
    text-align: center;
    /* margin: 0 0.05rem; */
   
  }
  .welfare .content li span{
    display: block;
    width: 100%;
    height: 0.3rem;
    line-height: 0.3rem;
    display: block;
    font-size: 0.25rem;
    margin-top: 0.15rem;
    color: #fa5f1e;
  }
  .welfare .content li span img{
    display: block;
    width: 0.3rem;
    height: 0.3rem;
    margin: auto;
  }
  .welfare .content li a{
    display: block;
    width: 100%;
    height: 0.2rem;
    font-size: 0.1rem !important;
    font-style: normal;
    color: #252547;
    margin-top: 0.02rem;
  }
  .vedio{
    width: 97%;
    /* height: 0.8rem; */
    /* background-color: turquoise; */
    margin-top: 0.1rem;
    padding-top: 0.1rem;
    box-sizing: border-box;
    margin: 0 0.05rem;
  }
  .vedio h3{
    font-size: 0.13rem;
    font-weight: 600;
    padding-left: 0.1rem;
    padding-right: 0.1rem;
    background-color: white;
    padding-top: 0.1rem;
  }

  .vedio .content{
    width: 100%;
    height: 100%;
    background-color: white;
    display: flex;
    justify-content: space-around;
    padding-bottom: 0.1rem;
  }
  .vedio .content li{
    width: 0.8rem;
    /* height: 100%; */
    /* background-color: white; */
    flex-shrink: 0;
    text-align: center;
  }
  .vedio .content li span{
    width: 100%;
    height: 0.3rem;
    line-height: 0.3rem;
    display: block;
    font-size: 0.25rem;
    margin-top: 0.15rem;
    color: #fa5f1e;
  }
  .vedio .content li a{
    display: block;
    width: 100%;
    height: 0.2rem;
    font-size: 0.1rem !important;
    font-style: normal;
    color: #252547;
    margin-top: 0.02rem;
  }
  .interest{
    width: 97%;
    /* height: 0.8rem; */
    /* background-color: turquoise; */
    margin-top: 0.1rem;
    padding-top: 0.1rem;
    box-sizing: border-box;
    margin: 0 0.05rem;
  }
  .interest h3{
    font-size: 0.13rem;
    font-weight: 600;
    padding-left: 0.1rem;
    padding-right: 0.1rem;
    background-color: white;
    padding-top: 0.1rem;
  }
  .interest .content{
    width: 100%;
    /* height: 100%; */
    background-color: white;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    padding-bottom: 0.1rem;
  }
  .interest .content li{
    width: 25%;
    flex-shrink: 0;
    text-align: center;
    /* margin: 0 0.05rem; */
   
  }
  .interest .content li span{
    width: 100%;
    height: 0.3rem;
    line-height: 0.3rem;
    display: block;
    font-size: 0.25rem;
    margin-top: 0.15rem;
    color: #fa5f1e;
  }
  .interest .content li a{
    display: block;
    width: 100%;
    height: 0.2rem;
    font-size: 0.1rem !important;
    font-style: normal;
    color: #252547;
    margin-top: 0.02rem;
  }
  .set{
    width: 97%;
    /* height: 0.8rem; */
    background-color: white;
    margin-top: 0.1rem;
    padding-top: 0.05rem;
    padding-bottom: 0.05rem;
    box-sizing: border-box;
    margin: 0.1rem 0.05rem;
    /* line-height: 0.1rem; */
  }
   .set h3{
    /* width: 100%; */
    height: 0.3rem;
    font-size: 0.13rem;
    font-weight: 800;
    padding-left: 0.1rem;
    padding-right: 0.1rem;
    background-color: white;
    line-height: 0.3rem;
    margin: 0.08rem 0;
  }
  .set h3 b{
    float: right;
    color: #868490;
    vertical-align: middle;
    /* background-color: white; */
  }
  van-cell{
    width: 100%;
    height: 1rem;
    background-color: yellow;
  }
</style>