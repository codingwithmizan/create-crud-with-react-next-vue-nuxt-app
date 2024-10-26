<script setup lang="ts">
import Navabar from "@/components/common/Navbar.vue";
</script>

<template>
  <header>
    <Navabar />
  </header>
  <main class="m-10">
    <slot />
  </main>
</template>
