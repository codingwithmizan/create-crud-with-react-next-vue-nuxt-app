<script setup lang="ts">
const config = useRuntimeConfig()
</script>

<template>
    <div>
        <h2>Home page</h2>
        <p>url:: {{ config.public.baseUrl }}</p>
    </div>
</template>