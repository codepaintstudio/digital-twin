<script setup>
const props = defineProps({
  icon: {
    type: String,
    default: ''
  }
})
console.log(props.icon,111)
</script>

<template>
  <div class="radarCarts">
    <span class="item" />
    <img
      :src="props.icon"
      alt=""
    >
    <span class="mask"></span>
  </div>
</template>

<style scoped leng="scss">
.radarCarts {
  position: relative;
  background: transparent;
  background: linear-gradient(rgba(26, 40, 40, 0.85));

  width: 6.4rem;
  height: 6.4rem;
  border-radius: 50%;
  border: 0.01rem solid rgba(76, 96, 87, 0.85);
  /* box-shadow: 25px 25px 75px rgba(160, 163, 164, 0.75); */
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  &::after {
    content: '';
    /* z-index: 100; */
    position: absolute;
    inset: 0.35rem;
    border-radius: 50%;
    border: 0.25rem solidrgba(26, 40, 40, 0.85);
    /* box-shadow: inset -5px -5px 25px rgba(0,0,0,0.75); */
    box-shadow:
      inset -0.1rem -0.1rem 1rem rgba(68, 118, 85, 0.85),
      inset 0.1rem 0.1rem 1.5rem rgba(68, 118, 85, 0.85);
  }
  .item {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 50%;
    height: 100%;
    background: transparent;
    transform-origin: top left;
    /* border-top: 1px dashed #141414; */
    animation: rotate 2s linear infinite;
  }
  img{
    width: 50%;
    height: 50%;
  }
}
</style>
