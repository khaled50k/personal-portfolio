<template>
  <div class="flex bg-shade-4 flex-col group lg:flex-row p-3 md:p-10 gap-4 rounded-lg border border-solid border-t-1 border-transparent hover:border-shade-3 transition-all duration-300 ease-in-out">
    <div class="flex-1 flex flex-col justify-between order-2 lg:order-1 gap-7 lg:gap-0">
      <div class="flex flex-col gap-4 lg:gap-7 justify-between">
        <h3 class="text-shade1 text-lg lg:text-13xl">{{ title }}</h3>
        <p class="text-shade1 text-sm lg:text-base">{{ formatDate(date) }} - {{ category }}</p>
        <p class="text-shade-2 text-sm lg:text-lg leading-tight lg:leading-normal">{{ description }}</p>
      </div>
      <Button primary class="max-w-full lg:max-w-fit">{{ buttonText }}</Button>
    </div>
    <div class="flex-1 flex flex-col w-full order-1 lg:order-2">
      <div class="flex flex-col gap-3 w-full justify-end items-center lg:items-end">
        <div class="relative overflow-hidden rounded-2xl lg:max-w-[400px] justify-end items-end">
          <img
            class="rounded-2xl w-full h-full transform transition-transform group-hover:scale-105 duration-300 ease-in-out"
            :src="imageSrc"
            :alt="title"
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Button from './Button.vue';


const props = defineProps({
  title: String,
  date: String,
  category: String,
  description: String,
  buttonText: String,
  imageSrc: String,
});

const formatDate = (timestamp) => {
  const dateObj = new Date(timestamp);
  const year = dateObj.getFullYear();
  const month = String(dateObj.getMonth() + 1).padStart(2, '0');
  const day = String(dateObj.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};
</script>

<style scoped></style>
