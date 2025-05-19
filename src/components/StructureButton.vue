<script setup>
const isActive = ref(1)

const buttonClick = value => {
  isActive.value = value
}

const data =[
  {
    id: 1,
    name: '目标定位',
    icon: '../src/assets/images/路径 3.png'
  },
  {
    id: 2,
    name: '空间结构',
    icon: '../src/assets/images/P20.svg'
  },
  {
    id: 3,
    name: '生态结构',
    icon: '../src/assets/images/P21.svg'
  },
  {
    id: 4,
    name: '主要交通',
    icon: '../src/assets/images/P22.svg'
  },
  {
    id: 5,
    name: '核心指标',
    icon: '../src/assets/images/P23.svg'
  }
]
</script>

<template>
  <div class="bus">
    <button v-for="i in data" :key="i.id" @click="buttonClick(i.id)" :class="['button', { buttonClick: isActive === i.id }]">
      <img :src="i?.icon" alt="" class="icon" />
      <div class="test">{{i.name}}</div>
    </button>
  </div>
</template>

<style scoped>
.bus {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;

  .button {
    width: 22.882rem;
    height: 13.375rem;
    border-radius: 1rem;
    opacity: 1;
    border: 0.1rem solid #82c3a1;
    background: #1c3829d6;
    box-shadow: inset 0 0 1.1rem 0 #48a861;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: all 0.3s;
  }

  .test {
    width: 11.2rem;
    /* height: 38.00016rem; */
    opacity: 1;
    color: #ffffff;
    font-size: 2.8rem;
    font-weight: 400;
    font-family: 'SourceHanSansCN';
    text-align: left;
  }

  .icon {
    width: 4.5rem;
    height: 4.5rem;
    opacity: 1;
    /* background: #e9fdf2; */
  }
}

.buttonClick {
  background: linear-gradient(180deg, #419156 0%, #1c382900 100%) !important;
  box-shadow: inset 0 0 1.1rem 0 #48a861 !important;
}
</style>
