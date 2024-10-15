<script setup lang="ts">
import Navbar from "@/components/common/Navbar.vue";
</script>

<template>
  <div>
    <header>
      <Navbar />
    </header>
    <main class="h-[calc(100vh-80px)] bg-gray-100 p-10">
    <RouterView/>
    </main>
  </div>
</template>
