<template>
  <eChart
    :width="width"
    :height="height"
    :theme="theme"
    :option="chartOption"
  />
</template>

<script setup>
import { computed } from 'vue'
import eChart from './echart.vue'
import { PxToRem } from '@/utils/AutoRem'

const props = defineProps({
  // 尺寸配置
  width: {
    type: String,
    default: '60.5rem'
  },
  height: {
    type: String,
    default: '24.5rem'
  },

  // 数据配置
  xAxisData: {
    type: Array,
    required: true
  },
  seriesData: {
    type: Array,
    required: true,
  },

  // 样式配置
  theme: {
    type: String,
    default: 'light'
  },
  colors: {
    type: Array,
    default: () => ['#5470c6', '#91cc75', '#fac858', '#ee6666']
  },

  // 功能配置
  title: String,
  showLegend: {
    type: Boolean,
    default: true
  },
  horizontal: {
    type: Boolean,
    default: false
  },
  stack: {
    type: [Boolean, String],
    default: false
  }
})

// 生成图表配置
const chartOption = computed(() => ({
  backgroundColor: 'rgba(19, 28, 25,0.6)',
  title: {
    // text: props.title,
    left: 'center',
    textStyle: {
      fontSize: PxToRem(16),
      fontWeight: 'bold'
    }
  },
  tooltip: {
    trigger: 'axis'
    // axisPointer: {
    //   type: 'shadow'
    // }
  },
  legend: props.showLegend
    ? {
        data: props.seriesData?.map(s => s.name),
        top: PxToRem(10),
        right: PxToRem(10),
        itemGap: PxToRem(50)
      }
    : undefined,
  grid: {
    top: '25%',
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: {
    type: props.horizontal ? 'value' : 'category',
    data: props.horizontal ? undefined : props.xAxisData,
    axisLabel: {
      // rotate: 45
      show:false
    },
    axisLine: {
      show: false
    },
    axisTick: {
      show: false
    }
  },
  yAxis: {
    type: props.horizontal ? 'category' : 'value',
    data: props.horizontal ? props.xAxisData : undefined,
    axisLabel: {
      formatter: '{value}%'
    },
    name: '百分比',
    nameGap: PxToRem(20),
    max: 100
  },
  series: props.seriesData?.map((series, index) => ({
    name: series.name,
    type: 'bar',
    data: series.data,
    barWidth: '15%', // 设置柱状图的宽度
    stack: props.stack ? (typeof props.stack === 'string' ? props.stack : 'stack') : undefined,
    itemStyle: {
      color: {
        type: 'linear', // 设置渐变类型为线性渐变
        x: 0, // 渐变的起始位置
        y: 0, // 渐变的起始位置
        x2: 0, // 渐变的结束位置
        y2: 1, // 渐变的结束位置
        colorStops: [
          {
            offset: 0, // 渐变的结束颜色
            color: series.color || props.colors[index % props.colors.length]
          },
          {
            offset: 1, // 渐变的起始颜色
            color: series.offsetColor // 透明
          }
        ]
      },
      borderRadius: [PxToRem(50), PxToRem(50), 0, 0]
    },
    ...(props.horizontal && {
      label: {
        show: true,
        position: 'right'
      }
    })
  }))
}))
</script>
