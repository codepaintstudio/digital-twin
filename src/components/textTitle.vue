<script setup>
import P9 from '@/assets/images/P9.png'
import P16 from '@/assets/images/P16.svg'
import P17 from '@/assets/images/P17.svg'

const props = defineProps({
  data: {
    type: Object,
  }
})
const icon =ref( [P16,P9,P17])
</script>

<template>
  <div class="text">
    <div class="title">
      <span>"</span><h1 :style="{margin: '0 2rem'}">{{data?.slogan}}</h1><span>"</span>
    </div>
    <div :style="{ fontWeight:200,color:'rgb(151, 154, 154)', marginBottom:'1rem',marginTop:'3rem'}">{{data?.smallSlogan}}</div>
    <div class="main">
      <div
        v-for="item,index in data?.peculiarity"
        :key="item.id"
        class="but"
      >
        <img
          :src="icon[index]"
          alt=""
        >
        <div class="test">{{item.test}}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.text{
  margin-top: 1rem;
  width: 100%;
  height: 100%;
  display: flex;
  font-family: "SourceHanSansCN";
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  font-size: 1.68rem;
  color: #FFF;
  letter-spacing: 0.5rem;
  .title{
    font-size: 2rem;
    display: flex;
    height: 25%;
  }
  span{
    color:rgb(133, 200, 159);
    font-size: 2.98rem;
  }
  .main{
    width:85%;
    height: 20%;
    /* background-color: bisque; */
    display: flex;
    align-items: center;
    justify-content: space-around;
     margin-bottom:2rem;
  }
  .but{
    margin-top: 2rem;
    width: 17.8rem;
    height: 4.719rem;
    border-radius: 2.35rem;
    opacity: 1;
    border: 0.1rem solid #608671;
    background-color: rgba(33, 50, 42,0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.854rem;
  }
  img{
    margin-right: 1rem;
    width: 2.192rem;
    height:  1.854rem;
  }
}
</style>
