<script setup>
import Point from '@/assets/images/point.svg'
const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  width: {
    type: String,
    default: ''
  },
  height: {
    type: String,
    default: ''
  },
  color: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <div
    class="circle-chart-container"
    :style="{ width: props.width, height: props.height }"
  >
    <div
      class="chart-title"
      :style="{ width: props.width }"
    >
      <img
        class="title-icon"
        :src="Point"
        alt="point"
      >
      <span class="title-text">{{ props.title }}</span>
    </div>
    <div class="chart-content">
      <div class="chart-wrapper">
        <slot />
      </div>
    </div>
  </div>
</template>

<style scoped>
.circle-chart-container {
  width: 60.5rem;
  height: 32rem;
  position: relative;
  background-color: #142222;
  border: 0.1rem solid var(--border-default);
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
}

.chart-title {
  width: 60.5rem;
  height: 4.251rem;
  border-radius: 0.8rem;
  opacity: 1;
  background: linear-gradient(180deg, rgb(58, 128, 78) 0%, rgba(20, 34, 34, 0) 100%);
  display: flex;
  align-items: center;
  font-size: 2.4rem;
  color: rgba(255, 255, 255, 1);
  font-weight: 400;
  font-family: 'SourceHanSansCN';
  border-bottom: 0.1rem solid rgba(69, 102, 85, 1);
}

.title-icon {
  display: inline-block;
  height:1.5rem;
  width: 1.5rem;
  margin: 1rem;
}

.chart-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: calc(100% - 4.2rem);
  position: relative;
}

.chart-wrapper {
  width: 100%;
  height: 95%;
  /* filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.6)); */
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
