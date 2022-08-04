<template>
  <div class="home">
    <div class="nav">
    <router-link to="/Home/choice">精选</router-link>
    <router-link to="/Home/find">发现</router-link>
    <router-link to="/Home/life">余生</router-link>
    <router-link to="/Home/movie">漫画</router-link>
    <a>电影</a>
    <a>电视剧</a>
    <a>综艺</a>
    <a>美食</a>
    <a>军事</a>
    </div>
    <p class="p1">
    <span class="iconfont icon-pindaoguanli-cebianlan-zidingyicaidan"></span>
    </p>
    <router-view/>
    <Bb/>
  </div>
</template>

<script>

export default {
  components: {
  }
}
</script>
<style scoped>
  .nav{
    height: 0.4rem;
    background-color: white;
    display: flex;
    left: 0.05rem;
    right: 0.05rem;
    justify-content: flex-start;
    align-items: center;
    overflow-X: auto;
    position: fixed;
    border-bottom: 0.01rem solid #ebebeb;
    margin-bottom: 0.4rem;
    z-index: 999;
    margin-right: 0.34rem;
    
  }
  .nav::-webkit-scrollbar {display:none}
  .nav a{
    display: block;
    /* background-color: red; */
    flex-shrink: 0;
    margin: 0 0.1rem;
    font-size: 0.13rem;
  }
  .p1 span{
    display: block;
    color: gray;
    right: 0.1rem;
  }
  .p1{
    width: 0.4rem;
    height: 0.4rem;
    z-index: 9999;
    background-color: white;
    line-height: 0.4rem;
    text-align: center;
    position: fixed;
    right: 0.05rem;
    border-bottom: 0.01rem solid #ebebeb;
  }
  .iconfont{
    font-size: 0.16rem;
  }
  .router-link-active {
    color: #e7cd9b;
    font-size: 0.22rem !important;
  }
</style>
