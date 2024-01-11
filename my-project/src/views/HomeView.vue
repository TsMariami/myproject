<script setup>
import Gallery from '@/components/Gallery.vue';
import Main from '@/components/Main.vue';
import About from '@/components/About.vue';
</script>

<template>
  <Main />
  <div>
    <h1 class="text-7xl font-semibold my-32 flex justify-center">გალერეა</h1>
    <Gallery />
    <a class="flex justify-center mt-6"> <span>______</span> მეტის ნახვა <span>______</span></a>
  </div>
  <div class="mb-6">
    <h2 class="text-7xl font-semibold my-32 flex justify-center">მხატვრის შესახებ </h2>
    <About />
  </div>
</template>

