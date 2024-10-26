<script setup lang="ts">
const { locale, t } = useI18n();
const switchLocalePath = useSwitchLocalePath();
const router = useRouter();

const setEnglish = () => {
  router.push(switchLocalePath("en"));
};

const setBangla = () => {
  router.push(switchLocalePath("bn"));
};
</script>

<template>
  <div>
    <h2>Contact page</h2>
    <p>local:: {{ locale }}</p>

    <div>
      <p>Nmae: {{ t("name") }}</p>
      <p>Nmae: {{ t("age") }}</p>
      <p>Nmae: {{ t("city") }}</p>
    </div>

    <div>
      <button class="border p-2 rounded" @click="setEnglish">English</button>
      <button class="border p-2 rounded" @click="setBangla">Bangla</button>
    </div>
  </div>
</template>
