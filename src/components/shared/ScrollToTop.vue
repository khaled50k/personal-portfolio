<template>
  <div v-if="showArrow" class="fixed bottom-4 right-4 z-10">
    <button @click="scrollToTop" class="hover:bg-accent-1-darker p-2 cursor-pointer bg-accent-1 text-white font-bold rounded-full flex items-center transition-all duration-300 ease-in-out animate-bounce" :style="{ animationDelay: delay + 'ms' }"
>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
      </svg>
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const showArrow = ref(false);
const delay = ref(0); // Initialize delay to 0ms

// Function to scroll to the top of the page
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth', // Add smooth scrolling behavior
  });
};

// Function to check scroll position and show/hide the arrow
const checkScrollPosition = () => {
  if (window.scrollY > 200) {
    showArrow.value = true;
    // Increase delay for each visible arrow to avoid overlaps
    delay.value += 100; // adjust as needed for desired spacing
  } else {
    showArrow.value = false;
    delay.value = 0; // reset delay when hidden
  }
};

// Listen for scroll events
onMounted(() => {
  window.addEventListener('scroll', checkScrollPosition);
});

// Remove the event listener when the component is unmounted
onBeforeUnmount(() => {
  window.removeEventListener('scroll', checkScrollPosition);
});
</script>

<style scoped>
.hover\:bg-accent-1-darker:hover {
  background-color: #7f4aff; /* You can adjust the color value as needed */
}

/* Bouncing animation with delay */
.animate-bounce {
  animation: bounce 1s infinite cubic-bezier(0.42, 0, 1, 1); /* Smoother easing */
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-8px); /* Reduced bounce height */
  }
  60% {
    transform: translateY(-4px);
  }
}
</style>
