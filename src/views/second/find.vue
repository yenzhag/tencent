<template>
  <div>
    <section>
    <ul class="list">
      <li v-for="(v,i) in this.$store.state.findm.arr" :key="i">
        <img :src="v.imgsrc">
        <p>
          <b class="s1">
            <span class="iconfont icon-qq"></span>
            <span>{{v.name}}</span>&nbsp;&nbsp;&nbsp;
            <span class="iconfont icon-jiahao"></span>
          </b>
          <b class="s2">
              <span class="iconfont icon-bofang_o"></span>&nbsp;
              <span class="text">{{v.text}}</span>
          </b>
          <b class="s3">
            <span class="iconfont icon-kongxin"></span>
            <span class="num">{{v.dianzan}}</span>&nbsp;&nbsp;
            <span class="iconfont icon-pinglun"></span>
            <span>{{v.pinlun}}</span>
          </b>
        </p>
      </li>
    </ul>
    </section>
      
  </div>
</template>

<script>
export default {
  mounted(){
    //发送请求通过actions
    this.$store.dispatch("findlink",)
  }
}
</script>

<style scoped>
  section{
    padding-top: 0.4rem;
    margin-bottom: 0.5rem;
    /* background-color: turquoise; */
  }
  .list{
    width: 100%;
    /* height: 1rem; */
  }
  .list li{
    margin-top: 0.05rem;
  }
  .s1{
    font-size: 0.1rem;
    vertical-align: middle;
    display: inline-block;
    width: 1.2rem;
    /* background-color: yellow; */
    border-radius: 0.2rem;
    font-weight: normal;
    /* padding-left: 0.05rem; */
  }
  .s1 span{
    vertical-align: middle;
  }
  .icon-jiahao{
    color: orange;
    font-size: 0.15rem;
  }
  .s2{
    display: inline-block;
    width: 0.7rem;
    /* background-color: palegreen; */
    font-weight: normal;
    font-size: 0.12rem;
    margin-left: 0.1rem;
    border-radius: 0.2rem;
  }
  .icon-bofang_o{
    color: orange;
  }
  .text{
    font-size: 0.12rem;
  }
  .s3{
    display: inline-block;
    width: 0.9rem;
    padding-left: 0.6rem;
    /* background-color: orchid; */
    margin-left: 0.1rem;
    font-weight: normal;
    font-size: 0.12rem;
    vertical-align: middle;
  }
</style>