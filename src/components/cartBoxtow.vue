<script setup>
const props = defineProps({
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
    <div class="chart-content">
      <div class="chart-wrappe">
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
  justify-content: center;
  align-items: center;
}

.chart-content {
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  height: calc(100% - 4.2rem);
  position: relative;
}

.chart-wrappe {
  width: 100%;
  height: 95%;
  /* filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.6)); */
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
