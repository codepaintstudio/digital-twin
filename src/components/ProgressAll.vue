<script setup>
const props = defineProps({
  data:{
    type: Array,
    default: () => ['','','']
  },
  colors:{
    type: Array,
    default: () => ['linear-gradient(to right,#2C5655,#69CB82)','linear-gradient(to right,#2C5655,#69CB82)','linear-gradient(to right,#2C5655,#69CB82)']
  },
  icon: String,
  progress: String,
  name: String,
  width:{
    type: String,
    default: '100%'
  },
  height:{
    type: String,
    default: '100%'
  },
  isMax:{
    type: Boolean,
    default: false
  },
  progwidth:{
    type: String,
    default: '60%'
  }
})
const allProps= computed(()=>{
  return {
    data: props.data,
    colors: props.colors,
    icon: props.icon,
    progress: props.progress,
    name: props.name,
    width: props.width,
    height: props.height,
    isMax: props.isMax,
    progwidth: props.progwidth
  }
})
</script>

<template>
  <div
    class="bardiv"
    :style="{width: allProps.width, height: allProps.height}"
  >
    <div
      v-for="item,index in allProps.data"
      :key="item?.id"
      class="progressbars"
      :style="{width: allProps.width}"
    >
      <div
        v-if="props?.icon"
        class="icons"
      >
        <radar :icon="allProps.icon[index]" />
      </div>
      <div
        class="propgresss"
        :style="{width: allProps.icon?allProps.progwidth:allProps.width}"
      >
        <ProgressBar
          :gradient-color="allProps.colors[index]"
          :name="item.title"
          :description="item.land"
          :percentage="item.land"
          :width="allProps.icon?allProps.progwidth:allProps.width"
          :is-max="allProps.isMax"
        />
      </div>
    </div>
  </div>
</template>

<style scoped leng="scss">
.bardiv {
  width: 100%;
  height: 100%;
  /* background-color: #333; */
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  .progressbars {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .icons {
      width: 6.4rem;
      height: 6.4rem;
      display: flex;
      margin-right: 1rem;
      margin-left: -2rem;
    }
  }
}
</style>
