<template>
  <div class="relative  ">
    <div class="absolute top-0 left-0  inset-0 flex items-center justify-center z-50 pointer-events-none">
      <div
        style="width:100%;height:100%;background-size:160px;background-repeat:repeat;background-image:url('https://framerusercontent.com/images/rR6HYXBrMmX4cRpXfXUOvpvpB0.png');opacity:0.04;border-radius:0">
      </div>

    </div>
    <!-- Your content goes here -->
    <div class=" z-10 ">
      <header class="md:min-h-[100vh] w-full ">
        <NavBar></NavBar>
        <hero-section class=""></hero-section>
      </header>
      <main class="w-full ">
        <work-section id="myWork" ref="myWork"></work-section>
        <about-me-section id="aboutMe" ref="aboutMe"></about-me-section>
        <skills-section id="mySkills" ref="mySkills"></skills-section>
        <contact-section id="contact" ref="contact"></contact-section>
      </main>
      <Footer></Footer>
    </div>
  </div>
</template>

<script setup>
import AboutMeSection from './components/common/AboutMeSection.vue';
import ContactSection from './components/common/ContactSection.vue';
import Footer from './components/common/Footer.vue';
import HeroSection from './components/common/HeroSection.vue';
import SkillsSection from './components/common/SkillsSection.vue';
import WorkSection from './components/common/WorkSection.vue';
import NavBar from './components/shared/NavBar.vue';

</script>

<style></style>