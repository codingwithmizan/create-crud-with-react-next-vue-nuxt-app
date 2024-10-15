<script setup lang="ts">
// import { Icon } from "@iconify/vue";
import nuxtLogo from './assets/images/nuxt-logo.png'
const navLinks = [
  { id: 1, path: "/", label: "Home" },
  { id: 2, path: "/about", label: "About" },
  { id: 3, path: "/contact", label: "Contact" },
  { id: 4, path: "/users", label: "Users" },
];
</script>

<template>
  <nav class="h-20 border flex items-center shadow">
    <div class="pl-10 uppercase font-semibold !text-green-700">
      <!-- <Icon class="text-2xl" icon="lucide:home" /> -->
       <!-- <NuxtImg :src="nuxtLogo" width="80"/> -->
        nuxt app
    </div>
    <ul class="flex gap-6 pl-16">
      <li v-for="link in navLinks" :key="link.id">
        <NuxtLink :to="link.path">{{ link.label }}</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.router-link-exact-active {
  color: #ea580c;
}
</style>
