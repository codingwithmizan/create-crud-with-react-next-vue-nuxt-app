<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="h-screen w-screen flex justify-center items-center">
    <div>
      <h2 class="text-4xl text-red-700">Nuxt Error page</h2>
      <div class="text-center mt-8">
        <RouterLink to="/" class="border p-3 rounded-lg bg-orange-600 text-white"
          >Go to Home</RouterLink
        >
      </div>
    </div>
  </div>
</template>
