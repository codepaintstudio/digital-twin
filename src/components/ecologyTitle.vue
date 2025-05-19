<script setup>
const props = defineProps({
  data:{
    type:Object,
    default:()=>{}
  },
  width:{
    type:String,
    default:'80%'
  },
  height:{
    type:String,
    default:'80%'
  }
})
</script>

<template>
  <div
    class="ecologyTitle"
    :style="{width:props.width,height:props.height}"
  >
    <div
      v-for="item in props.data"
      :key= "item.id"
      class="container"
    >
      <div class="titleBox">
        <div class="icon" />
        <div class="title">
          {{item.title}}
        </div>
      </div>
   
    <div class="main">
      <div class="title1" v-for="iten in item?.space" :key="iten.id">{{iten.title}}</div>
    </div>
   </div>
  </div>
</template>

<style scoped leng="scss">
.ecologyTitle {
  width: 100%;
  height: 100%;
  /* background-color: antiquewhite; */
  font-family: "SourceHanSansCN";
  padding: 1.999rem;
  font-size: 1.6rem;
  color: #fff;
  .container {
    width: 100%;
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: start;
  }

}
.titleBox{
  display: flex;
  width: 100%;
  height: 10%;
  /* justify-content: center; */
  align-items: center;
  .icon{
      width: 0.6rem;
      height: 0.6rem;
      background-color: rgb(244, 186, 78);
      border-radius: 50%;
      margin-right: 0.9rem;
  }
  .title{
    width: 14.799rem;
    height: 1.8rem;
    border-radius: 0.9rem;
    opacity: 1;
    background: linear-gradient(90deg, #2a553a 0%, #73737300 100%);
    line-height: 0px;
    padding-left: 1rem;
  }
}
.main{
  width: 80%;
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  .title1{
    width: 8.9rem;          
    height: 3.5rem;
    border-radius: 1.75rem;
    opacity: 1;
    background: linear-gradient(270deg, #73737300 0%, #366543 100%);
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
