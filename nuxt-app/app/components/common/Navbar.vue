<script setup lang="ts">
const { locale, locales } = useI18n();
const switchLocalePath = useSwitchLocalePath();
const localePath = useLocalePath()
const availableLocales = computed(() => {
  return locales.value.filter((i) => i.code !== locale.value);
});

console.log("locale::", locale.value);

const navLinks = [
  { id: 1, path: "/", label: "Home" },
  { id: 2, path: "/about", label: "About" },
  { id: 3, path: "/contact", label: "Contact" },
  { id: 4, path: "/users", label: "Users" },
];
</script>

<template>
  <nav class="h-20 border flex items-center shadow">
    <div class="pl-10 uppercase font-semibold !text-green-700">nuxt app</div>
    <div class="flex justify-between w-full pr-10">
      <ul class="flex gap-6 pl-16">
        <li v-for="link in navLinks" :key="link.id">
          <NuxtLink :to="localePath(link.path)">{{ link.label }}</NuxtLink>
        </li>
      </ul>

      <div>
        <NuxtLink
          v-for="locale in availableLocales"
          :key="locale.code"
          :to="switchLocalePath(locale.code)"
        >
          {{ locale.name }}
        </NuxtLink>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.router-link-exact-active {
  color: #ea580c;
}
</style>
