<script setup>
const props = defineProps({
  width: {
    type: String
  },
  height: {
    type: String
  }
})
import { WaterSurfacerate } from '@/server/db.js'

const onecolor = {
  axisLineColor: 'rgba(34, 49, 46,0.8)',
  axisTickColor: 'rgba(180, 252, 221,0.2)',
  itemColor: 'rgba(97, 188, 119,0.8)',
  twoaxisLineColor: 'rgba(97, 188, 119,0.1)',
  pointerColor: 'rgb(180, 252, 221)',
  startColor: 'rgba(31, 63, 48,0.1)',
  stopColor: 'rgb(45, 118, 73,0.9)'
}
const twocolor = {
  axisLineColor: 'rgba(34, 49, 46,0.8)',
  axisTickColor: 'rgba(221, 145, 87,0.2)',
  itemColor: 'rgba(221, 145, 87,0.8)',
  twoaxisLineColor: 'rgba(221, 145, 87,0.1)',
  pointerColor: 'rgb(255, 255, 209)',
  startColor: 'rgba(94, 77, 53,0.1)',
  stopColor: 'rgb(221, 145, 87,0.9)'
}
</script>

<template>
  <div
    class="gauges"
    :style="{ width: props.width, height: props.height }"
  >
    <div class="title">
      <div
        v-for="item in WaterSurfacerate.data"
        :key="item.id"
        class="testarea"
      >
        <div class="circle" />
        <div class="text">
          {{item.title}}
        </div>
      </div>
    </div>
    <div class="main">
      <gaugeChart :colors='onecolor' :seriesData="WaterSurfacerate.data[0].value" :icon="WaterSurfacerate.data[0].icon"/>
      <gaugeChart :colors='twocolor'  :seriesData="WaterSurfacerate.data[1].value" :icon="WaterSurfacerate.data[1].icon"/>
    </div>
  </div>
</template>

<style scoped leng="scss">
.gauges {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
  /* justify-content: space-around; */
  .title {
    width: 80%;
    height: 10%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: rgb(255, 255, 255);
    .circle {
      width: 1rem;
      height: 1rem;
      background-color: rgb(244, 186, 78);
      border-radius: 50%;
      display: inline-block;
      margin-right: 1rem;
    }
    .testarea {
      width: 25%;
      display: flex;
      margin-left: 6rem;
      align-items: center;
    }
  }
  .main {
    width: 80%;
    display: flex;
    justify-content: space-around;
    margin-top: 1.5rem;
  }
}
</style>
