<template>
    <div class="relative  flex flex-col items-center justify-center pt-20 md:pt-52 w-full">

        <div class="px-19 relative  ">
            <div class="flex items-start justify-center w-full top-0" :style="{ transform: `translateY(${scrollY}px)` }">
        <img src="../../assets/graphic.svg" alt="" class="w-[300px]">
            </div>
            <!-- Content container (text content) -->
            <div class="relative flex items-center flex-col text-center px-[20px]">
                <h1
                    class="text-20xl md:text-71xl font-extrabold bg-gradient-to-l text-transparent bg-clip-text from-white via-[#EFEFEF] to-[#B0B6BF] ">
                    Hi, I'm Khaled Abu Eriban
                </h1>
                <!-- <h1 class="text-71xl font-bold">Your Hero Title</h1> -->
                <p class="mt-4 text-lg md:text-13xl text-shade-2 mx-2 md:mx-20">I'm a passionate Product Designer focused on
                    crafting remarkable
                    digital
                    experiences. My aim is to blend functionality and aesthetics to create impactful solutions</p>
            </div>
        </div>

    </div>
</template>
  


<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const scrollY = ref(0);

// Function to handle scroll event
const handleScroll = () => {
  scrollY.value = window.scrollY * 0.3; // Adjust the multiplier for the desired parallax effect
};

// Add scroll event listener when the component is mounted
onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

// Remove scroll event listener when the component is unmounted
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>
