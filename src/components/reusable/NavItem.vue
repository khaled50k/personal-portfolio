<template>
    <a :href="href" :class="buttonClass" 
        class="block px-4 py-2 border border-transparent hover:border-shade-3 border-solid border-t-1 hover:bg-shade-4/90 font-bold text-base cursor-pointer  transition-all duration-300 ease-in-out rounded-lg">
        <slot></slot>
    </a>
</template>
  
<script setup>
import { ref, computed } from 'vue';

// Props
const props = defineProps({
    primary: Boolean,// Example prop: Indicates if it's a primary button
    mobile:Boolean, 
    disabled: Boolean, // Example prop: Indicates if the button is disabled
    href: String 
});

// Computed property for dynamic button class
const buttonClass = computed(() => ({
    'text-shade1 ': props.primary,
    'text-shade1  py-2 pl-3 pr-4  ': props.mobile,
    'bg-gradient-to-l from-yellow-300 via-blue-500 to-purple-700 text-transparent bg-clip-text': !props.primary&& !props.mobile,
    'pointer-events-none opacity-50': props.disabled,
}));

</script>
  
<style scoped>
/* Define button styles here or use Tailwind CSS classes */
</style>
  