<script setup lang="ts">
definePageMeta({
  layout:"global"
})
const { t } = useI18n();
</script>

<template>
  <div>
    <h2>About page</h2>
    <div>
      <!-- <p>{{ $t("name") }}</p>
      <p>{{ $t("age") }}</p>
      <p>{{ $t("city") }}</p> -->

      <p>{{ t("name") }}</p>
    </div>
  </div>
</template>
