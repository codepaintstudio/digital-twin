<template>
    <div class="box">
        <div class="box_1" v-for="i in Array">
            <div class="img">
                <img :src="i.image.src" alt="">
            </div>
            <UniversalButton :color="'#fff'"  :text="i.text" :width="'100%'" :height="'16%'":border_radius="'20px'" :Font_size="'2rem'"></UniversalButton>
        </div>

    </div>
</template>
<script setup lang="ts">
import UniversalButton from './UniversalButton.vue';
const Array = [{
    text: "一厅三片",
    image: {
        src: "../src/assets/images/Slice1.svg",
        alt: ""
    }
},
{
    text: "十字双轴",
    image: {
        src: "../src/assets/images/Slice2.svg",
        alt: ""
    },
},
{
    text: "小镇网格",
    image: {
        src: "../src/assets/images/Slice3.svg",
        alt: ""
    }
}

]
</script>
<style scoped lang="scss">
.box {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;

    .img {
        z-index: -1;
        width: 80%;
        height: 50%;
transform: translateY(10%);
        img {
            width: 100%;
            height: 100%;

        }
    }
    .box_1 {
        width: 30%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
}
</style>