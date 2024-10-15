<script setup lang="ts">
const route = useRoute();
definePageMeta({
  validate: async (route) => {
    return typeof route.params.id === "string" && /^\d+$/.test(route.params.id);
  },
});
</script>

<template>
  <div>
    <h2>User Details</h2>
    <p>User ID: {{ $route.params.id }}</p>
    <p>User ID2: {{ route.params.id }}</p>
  </div>
</template>
