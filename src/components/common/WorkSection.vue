<template>
    <section books class="relative  flex flex-col items-start justify-center px-[20px] md:px-[80px] ">
        <div class="header">
            <h2 class="text-shade1 text-13xl lg:text-29xl">My work</h2>
            <p class="mt-4 text-base lg:text-lg  text-shade-2 md:max-w-[750px] ">Here's a glimpse of some of my recent and
                exciting projects. Each of them reflects my focus on user-centered design and my commitment to excellence in
                user experience.</p>
        </div>
        <div class="projects flex flex-col gap-7 md:gap-10 w-full my-11 lg:my-14">
            <project title="Ecommerce" date="2023 - Product design" category="Product Design"
                description="Transformed an e-commerce website with a modern redesign, optimizing the shopping journey and elevating brand identity. Resulted in improved user engagement, increased sales, and a seamless shopping experience."
                buttonText="Read case study" imageSrc="https://framerusercontent.com/images/UOkCrb46kyb5K07y2BVkCpvcSQ8.png">
            </project>
            <project title="Ecommerce" date="2023 - Product design" category="Product Design"
                description="Transformed an e-commerce website with a modern redesign, optimizing the shopping journey and elevating brand identity. Resulted in improved user engagement, increased sales, and a seamless shopping experience."
                buttonText="Read case study" imageSrc="https://framerusercontent.com/images/UOkCrb46kyb5K07y2BVkCpvcSQ8.png">
            </project>
            <project title="Ecommerce" date="2023 - Product design" category="Product Design"
                description="Transformed an e-commerce website with a modern redesign, optimizing the shopping journey and elevating brand identity. Resulted in improved user engagement, increased sales, and a seamless shopping experience."
                buttonText="Read case study" imageSrc="https://framerusercontent.com/images/UOkCrb46kyb5K07y2BVkCpvcSQ8.png">
            </project>


        </div>
    </section>
</template>

<script setup>
import Project from '../reusable/Project.vue';

</script>

<style></style>