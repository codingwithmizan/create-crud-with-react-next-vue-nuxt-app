<script setup lang="ts">
const route = useRoute();
</script>

<template>
  <div>
    <h2>Catch all routes page</h2>
    <p>{{ route.params }}</p>
  </div>
</template>
