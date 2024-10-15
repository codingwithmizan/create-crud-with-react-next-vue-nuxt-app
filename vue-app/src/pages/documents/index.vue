<script setup lang="ts">

import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
  <div>
    <h2>Documents page</h2>
    <p>Routes: {{ route.params }}</p>
  </div>
</template>
