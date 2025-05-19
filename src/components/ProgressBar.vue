<script setup>
import {PxToRem} from '@/utils/AutoRem'
const props = defineProps({
  isMax: {
    type: Boolean,
    default: false
  },
  percentage: {
    type: [String,Number],
    default: '0'
  },
  name: {
    type: String,
    default: '测试'
  },
  description: {
    type: [Number, String],
    default: '30'
  },
  gradientColor: {
    type: String
  },
  width: {
    type: String,
    default: '44.8rem'
  },
  height: {
    type: String,
    default: '2.47rem'
  },
  ortherProps: {
    type: Object,
    default: () => ({})
  }
})
const progressStyle = computed(() => {
  return {
    width: props.width,
    height: props.height,
    gradientColor: props.gradientColor,
    percentage: props.percentage,
    name: props.name,
    description: props.description,
    isMax: props.isMax,
    ...props.ortherProps
  }
})
onMounted(() => {
  const progress = document.querySelectorAll('.el-progress-bar__outer')
  progress.forEach(item => {
    item.style.background = 'rgba(26, 40, 40)'
    item.style.border = '0.1px solid rgba(56, 65, 67,0.8)'
  })
})
</script>

<template>
  <div class="progress-bar">
    <div
      class="box"
      :style="{ width: progressStyle.width, height: progressStyle.height }"
    >
      <div class="name">
        {{ progressStyle.name }}
      </div>
      <div class="description">
        {{ isMax?'≥':'' }}{{ description }}%
      </div>
    </div>
    <el-progress
      :text-inside="true"
      :style="{ width: progressStyle.width, height: progressStyle.height}"
      :stroke-width="PxToRem(14)"
      :percentage="percentage"
      status="success"
      :color="progressStyle.gradientColor"
      :show-text="false"
      class="progress"
    />
  </div>
</template>

<style scoped lang="scss">
.progress-bar {
  z-index: 100;
  width: 45.000192rem;
  height: 6rem;
  // background-color: rgb(17, 26, 27, 0.4);
  overflow: hidden;
  .box {
    display: flex;
    width: 100%;
    font-size: 1.6rem;
    justify-content: space-between;
    // margin-bottom: 25px;
    color: rgb(255, 255, 255);
  }
}
</style>
