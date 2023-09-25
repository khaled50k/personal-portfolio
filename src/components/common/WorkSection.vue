<template>
    <section books class="relative  flex flex-col items-start justify-center px-[20px] md:px-[80px] pt-[80px] pb-[90px] ">
        <div class="header">
            <h2 class="text-shade1 text-13xl lg:text-29xl">My work</h2>
            <p class="mt-4 text-base lg:text-lg  text-shade-2 md:max-w-[750px] ">Here's a glimpse of some of my recent and
                exciting projects. Each of them reflects my focus on user-centered design and my commitment to excellence in
                user experience.</p>
        </div>
        <div class="projects flex flex-col gap-7 md:gap-10 w-full my-11 lg:my-14">
            <project v-for="repo in githubRepos" :key="repo.id" :title="repo.name" :date="repo.created_at" category="Product Design"
        :description="repo.description" buttonText="Read case study" imageSrc="https://cdn.stability.ai/assets/org-MTLbMUxyw4fP2wBxWvpe0eOY/00000000-0000-0000-0000-000000000000/1a13c913-4e0f-2d47-46ec-6f5b0c54e231">
      </project>



        </div>
    </section>
</template>

<script setup>
import Project from '../reusable/Project.vue';
import axios from 'axios';
import { ref, onMounted } from 'vue';

const githubRepos = ref([]);

onMounted(async () => {
  try {
    // Make an API request to fetch your GitHub repositories
    const response = await axios.get('https://api.github.com/users/khaled50k/repos');

    // Store the repository data in githubRepos
    githubRepos.value = response.data;
  } catch (error) {
    console.error('Error fetching GitHub repositories:', error);
  }
});
</script>

<style></style>