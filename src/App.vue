<template>
  <div class="screen-container">
    <router-view />
  </div>
</template>

<style lang="scss">
.screen-container {
  width: 512rem;
  height: 144rem;
  position: absolute;
  background-image: url('@/assets/images/default-bg.jpg');
}
</style>
