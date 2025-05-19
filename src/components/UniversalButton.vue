<template>
    <button :style="{
        justifyContent: justifyContent,
        fontSize: Font_size,
        width,
        height,
        background: bgColor,
        borderRadius: border_radius,
        border: Border,
        boxShadow,
        color,
        margin
    }">
        <span v-if="image.src" :style="{
            width: image.width,
            height: image.height,
        }">
            <img v-if="image.src" :src="image.src" alt="">
        </span>
        <span :style="{ margin }">
            {{ text }}
        </span>
    </button>
</template>
<script setup lang="ts">
defineProps({
    image: {
        type: Object,
        default: {
            src: null,
            alt: '',
            width: "15%",
            height: '15%'
        }
    },
    text: {
        type: String,
        default: '示范区'
    },
    bgColor: {
        type: String,
        default: `#253334`
    },
    width: {
        type: String,
        default: '28%'
    }, height: {
        type: String,
        default: '25%'
    },

    border_radius: {
        type: String,
        default: '10px'
    },
    Border: {
        type: String,
        default: '0.5px solid #678680'
    },
    boxShadow: {
        type: String,
        default: 'inset 0 0 4px 0px #64d195f0'
    },
    color: {
        type: String,
        default: '#a5a4a4'
    },
    Font_size: {
        type: String,
        default: ''
    },
    justifyContent: {
        type: String,
        default: 'center'
    },
    margin: {
        type: String,
        default: '0 0 0 0'
    }
})
</script>
<style scoped>
button {

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border: none;
    cursor: pointer;
    text-align: center;

    span:first-child {
        display: flex;
        margin-right: 0.3rem;
        align-items: end;
    }

}

img {
    width: 100%;
    height: 100%;

}
</style>