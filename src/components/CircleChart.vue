<template>
  <div
    ref="chartRef"
    class="chart-wrapper"
    :style="{width: props.width,height: props.height}"
  />
</template>

<script setup>
import * as echarts from 'echarts'
import { formatter } from 'element-plus'
import { onMounted, ref, watch } from 'vue'
import { PxToRem } from '@/utils/AutoRem'

const props = defineProps({
  width: {
    type: String,
    default: ''
  },
  height: {
    type: String,
    default: ''
  },
  title: {
    type: String,
    required: true
  },
  centerValue: {
    type: [Number, String],
    required: true
  },
  centerLabel: {
    type: String,
    default: '总计数据'
  },
  dataItems: {
    type: Array,
    required: true,
    default: () => []
  },
  roseType: {
    type: String,
    default: undefined,
  },
  showPercentage: {
    type: Boolean,
    default: true
  },
  valueUnit: {
    type: String,
    default: ''
  },
  showTooltip: {
    type: Boolean,
    default: true
  },
  showLabel: {
    type: Boolean,
    default: true
  },
  showLegend: {
    type: Boolean,
    default: true
  },
  legend: {
    type: String,
    default: 'bottom'
  },
  isCong:{
    type: Boolean,
    default: false
  },
  radius: {
    type: Array,
    default:() => ['33%', '45%']
  },
  center:{
    type: Array,
    default: ()=>['50%', '50%']
    },
  radiusCong:{
      type: Array,
      default:()=>['33%', '50%']
  },
  titleLeft:{
    type: String,
    default:'center'
  },
  LabelRight:{
    type:String,
    default:'0%'
  },
  legendGap:{
    type: [String, Number],
    default: 10
  },
  isCircle:{
    type: Boolean,
    default: true
  },
  titleTop:{
    type: String,
  }
})

const colors = [
  {
    startColor:'#42A5D5',
    stopColor: '#53BA9D',
  },
  {
    startColor:'#92D06D',
    stopColor: '#42D39C'
  },
  {
    startColor:'#C29955',
    stopColor: '#D2B942'
  }
] 

const chartRef = ref(null)
let chartInstance = null

const initChart = () => {
  if (!chartRef.value) return
  chartInstance = echarts.init(chartRef.value)
  updateChart()
  window.addEventListener('resize', handleResize)
}

const handleResize = () => {
  if (chartInstance) {
    chartInstance.resize()
    initChart()
  }
}
console.log(props.isCong);


const updateChart = () => {
  if (!chartInstance) return

  const chartWidth = chartRef.value?.offsetWidth || 400

  chartInstance.setOption({
    backgroundColor: 'transparent',
    title: {
      text: `{a|${String(props.centerValue)}}\n{b|${ props.centerLabel}}`,
      top: props.titleTop?props.titleTop:'center',
      x: props.titleLeft,
      textStyle:{
        rich:{
          a:{
              fontSize: PxToRem(24),
              color: '#fff',
              fontWeight:'400',
          },
          b:{
              fontSize: PxToRem(16),
              color: '#fff',
              padding: [PxToRem(10),-PxToRem(15)]
          }
        }
      }
    },
    series: [
      {
        z: 10,
        name: props.title,
        type: 'pie',
        radius: props.radius,
        center: props.center,
        width: chartWidth,
        roseType: props.roseType,
        padAngle: PxToRem(1),
        avoidLabelOverlap: true,
        itemStyle: {
          borderRadius: PxToRem(1)
          // borderWidth: 8,
          // borderColor: 'rgba(133, 208, 106, .1)'
        },
        label: props.isCircle?{
          normal: {
            position: 'inside',
            backgroundColor: 'white',
            width: PxToRem(5),
            height: PxToRem(5),
            borderRadius: PxToRem(5),
            padding: PxToRem(1),
            margin: PxToRem(1),
            formatter: ''
          }
        }:{
          show: false
        },
        data: props.dataItems.map((item,index) => {
          return {
            value: item.percentage,
            name: item.label,
            itemStyle: {
              shadowBlur: PxToRem(10),
              shadowColor: 'rgba(0, 0, 0, 0.2)',
              color: {
                type: 'linear',
                x: 0, // 渐变起始点 x 坐标（0=左，1=右）
                y: 0, // 渐变起始点 y 坐标（0=上，1=下）
                x2: 1, // 渐变结束点 x 坐标
                y2: 0, // 渐变结束点 y 坐标（设置为水平渐变）
                colorStops: [
                  {
                    offset: 0,
                    color: colors[index].startColor
                  },
                  {
                    offset: 1,
                    color: colors[index].stopColor 
                  }
                ]
              }
            }
          }
        }),
        emphasis: {
          scale: true,
          scaleSize: PxToRem(10),
          itemStyle: {
            shadowBlur: PxToRem(10),
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      },
      props.isCong?{
        z: 1,
        type: 'pie',
        radius: props.radiusCong,
        center: props.center,
        width: chartWidth,
        roseType: props.roseType,
        padAngle: PxToRem(1),
        avoidLabelOverlap: false,
        label: props.showPercentage
              ? {
                  show: true,
                  position: 'outer',
                  alignTo: 'none',
                  formatter: params => {
                    const value = props.showPercentage
                      ? params.percent + '%'
                      : params.value + (props.valueUnit || '')
                    return `{name|${params.name}}\n{value|${value}}`
                  },
                  edgeDistance: PxToRem(10),
                  lineHeight: PxToRem(27),
                  rich: {
                    name: {
                      opacity: 1 ,
                      fontSize: PxToRem(16),
                      color: '#fff',
                      padding: [PxToRem(4), 0]
                    },
                    value: {
                      fontSize: PxToRem(20),
                      color: '#FFF',
                      fontWeight: 'normal',
                      padding: [PxToRem(6), 0],
                      opacity: 1
                    }
                  }
                }
              : {
                  show: false
                },
            labelLine: props.showPercentage
              ? {
                  show: true,
                  length: PxToRem(25),
                  length2: PxToRem(20),
                  lineStyle: {
                    color: 'rgba(255,255,255,0.5)',
                    width: PxToRem(1.2)
                  }
                }
              : {
                  show: false
                },
            labelLayout: props.showPercentage
              ? params => {
                  const isLeft = params.labelRect.x < chartWidth / 2
                  const points = params.labelLinePoints
                  points[2][0] = isLeft
                    ? params.labelRect.x
                    : params.labelRect.x + params.labelRect.width
                  return { labelLinePoints: points, draggable: true }
                }
              : {},
            data: props.dataItems.map((item,index) => {
              return {
                value: item.percentage,
                name: item.label,
                itemStyle: {
                      shadowBlur: PxToRem(10),
                      shadowColor: 'rgba(0, 0, 0, 0.2)',
                      opacity: 0.5, // 整体透明度设为50
                      color: {
                    type: 'linear',
                    x: 0, // 渐变起始点 x 坐标（0=左，1=右）
                    y: 0, // 渐变起始点 y 坐标（0=上，1=下）
                    x2: 1, // 渐变结束点 x 坐标
                    y2: 0, // 渐变结束点 y 坐标（设置为水平渐变）
                    colorStops: [
                      {
                        offset: 0,
                        color: colors[index].startColor
                      },
                      {
                        offset: 1,
                        color: colors[index].stopColor 
                      }
                    ]
                  } 
                }
              }
            })
      }:{}
    ],
    tooltip: {
      show: true,
      trigger: 'item',
      formatter: params => {
        const value = props.showPercentage
          ? params.percent + '%'
          : params.value + (props.valueUnit || '')
        return `${params.name}: ${value}`
      },
      backgroundColor: 'var(--bg-gradient)',
      borderColor: 'var(--border-default)',
      borderWidth: PxToRem(1),
      padding: [PxToRem(8), PxToRem(12)],
      textStyle: {
        color: 'var(--text-primary)',
        fontSize: PxToRem(14)
      }
    },
    legend: {
      show: props.showLegend,
      ...(props.legend === 'right'
        ? {
            right: props.LabelRight,
            top: 'middle',
            orient: 'vertical'
          }
        : {
            bottom: '10%',
            orient: 'horizontal'
          }),
      itemWidth: PxToRem(26),
      itemHeight: PxToRem(10),
      itemGap: PxToRem(15),
      // textStyle: {
      //   color: 'rgba(255,255,255,0.6)',
      //   fontSize: 14,
      //   padding: [0, 0, 0, 6]
      // },
      formatter: function(name){
        console.log(name);
        const targetItem = props.dataItems.find(item => item.label === name)
        const value = targetItem?.value
        const unit = targetItem?.unit
        return `{title|${name}xxxxxx}\n{value|${value}}{unit|${unit}}`;
      },
      textStyle:{
        color: '#ffffff',
        rich:{
          title:{
            fontSize: PxToRem(16),
            lineHeight:PxToRem(30),// 控制第一行高度
            padding:[PxToRem(0),0,PxToRem(0),PxToRem(0)],
            verticalAlign:'middle',
            fontWeight:'200'
          },
          value:{
            fontSize: PxToRem(24),
            lineHeight: PxToRem(24),
            // padding:[PxToRem(30),0,0,PxToRem(10)],
            verticalAlign:'middle',
            fontWeight:'400'
          },
          unit:{
            fontSize: PxToRem(24),
            lineHeight: (24),
            // padding:[PxToRem(30),0,0,PxToRem(10)],
            verticalAlign:'middle',
            fontWeight:'200'
          }
        }
      }
    }
  })
}

onMounted(() => {
  initChart()
})

onBeforeUnmount(() => {
  if (chartInstance) {
    chartInstance.dispose()
    chartInstance = null
  }
  window.removeEventListener('resize', handleResize)
})

watch(() => [props.dataItems, props.centerValue, props.centerLabel], updateChart, { deep: true })
</script>

<style scoped>
.chart-wrapper {
  width: 60.5rem;
  height: 28rem;
  /* filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.6)); */
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
