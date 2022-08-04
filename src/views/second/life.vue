<template>
  <div>
    <section>
      <div v-for="(v,i) in this.$store.state.lifem.arr" :key="i"> 
      <img :src="v.imgsrc" alt="" class="img">
      <video :src="v.vediosrc" controls autoplay muted loop ></video>
      </div>
      <div class="tv">
      <h1>余生夫妇的春日恋 &nbsp;&gt;</h1>
      <ul class="list4">
      <li v-for="(v,i) in this.$store.state.lifem.arr1" :key="i">
        <img :src="v.imgsrc" >
        <!-- <h1>{{v.name}}</h1> -->
        <p>{{v.text}}</p>
      </li>
    </ul>
    </div>
    </section>
      
  </div>
</template>

<script>
export default {
  mounted(){
    this.$store.dispatch("lifelink",)
  }
}
</script>

<style scoped>
  section{
    padding-top: 0.4rem;
    margin-bottom: 0.5rem;
    background-color: #f6f3ef;
  }
  .img{
    display: block;
    width: 100%;
  }
  video {
    display: block;
    width: 3.2rem;
    height: 1.9rem;
    margin: auto;
    transform: translateY(-0.15rem);
    border-radius: 0.18rem;
  }
  h1{
    font-size: 0.13rem;
    padding-left: 0.1rem;
    font-weight: 800;
    color: #5d3930;
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
    margin-top: 0.05rem;
  }
</style>