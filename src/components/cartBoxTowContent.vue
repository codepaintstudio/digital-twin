<template>
  <div class="box">
    <div class="img">
      <div>
        <img
          :src="image.src"
          alt=""
        >
      </div>
      <div>
        <img
          src="../assets/images/Slice 6.png"
          alt=""
        >
      </div>
    </div>
    <div class="text">
      <p>{{ text }}</p>
      <div id="count">
        <span>{{ Math.floor(count / 10) }}</span>
        <span>{{ count % 10 }}</span>
        <div>个</div>
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">
defineProps({
    text: {
        type: String,
        default: '默认文本'
    },
    image: {
        type: Object,
        default: () => ({
            src: '',
            alt: ''
        })
    },
    count: {
        type: Number,
        default: 0
    },
})








</script>
<style scoped>
.box {
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 29rem;
    height: 100%;
}

.img {
    transform: translateX();
    margin-bottom: 10%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 12.6rem;
    height: 10.4rem;

    div {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
            width: 100%;
            height: 100%;
        }
    }

    div:nth-child(1) {
        transform: translateY(120%);
        width: 40%;
        height: 50%;
    }

}

.text {
    margin-left: 5.5rem;
    width: 20rem;
    transform: translateX(-20%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    /* font-size: 2rem; */

    p {
        width: 100%;
        font-size:2rem;
        color: #ffffff;
        margin-bottom: 5%;
        margin-left: 4%;
    }

    #count {
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 100%;
        height: 100%;

        span {
            background-image: linear-gradient(180deg, #f7ff8d 0%, #99cfb5 100%);
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            border: 0.2rem solid transparent;
            border-image: linear-gradient(180deg, #f7ff8d 0%, #99cfb5 100%) 1;
            width: 4.2rem;
            height: 5.4rem;
            font-size: 4rem;
            text-align: center;
            line-height: 5.2rem;
            display: block;
        }

        div {
            align-self: flex-end;
            color: #FFFFFF;
            font-size: 1rem;
            margin-right: 1%;
        }
    }
}
</style>