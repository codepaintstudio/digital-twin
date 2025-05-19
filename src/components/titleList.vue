<script setup>
import { Tickets } from '@element-plus/icons-vue';
const props = defineProps({
  title: {
    type: String,
    default: '标题'
  },
  list: {
    type: Array,
    default: ()=>["","","",'']
  },
  width: {
    type: String,
    default: '100%'
  },
  height: {
    type: String,
    default: '100%'
  }
})
console.log(props.list)
</script>
<template>
  <div class="titleList" :style="{ width: props.width, height: props.height }">
    <div class="list" v-for="item in props.list" :key="item?.id">
      <el-icon class="icon" color="#8cd3d5">
        <Tickets :style="{
          width: '1.6rem',
          height: '2.134rem'
        }" />
      </el-icon>
      <div class="test">{{item?.title}}</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.titleList {
  width: 90%;
  height: 100%;
  // background-color: red;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  .list {
    width: 45.2rem;
    height: 3.213rem;
    background: linear-gradient(90deg, #1e3227 0%, #73737300 100%);
    display: flex;
    justify-content: start;
    align-items: center;
    color: #fff;
    border-radius: 2rem;

    .icon {
      width: 1.6rem;
      height: 2.134rem;
      margin-left: 2rem;
      margin-right: 0.5rem;
    }

    .test {
      font-size: 1.852rem;
      font-weight: 350;
      opacity: 1;
      font-family: "SourceHanSansCN";
      letter-spacing: 0.5rem;
    }
  }
}
</style>
