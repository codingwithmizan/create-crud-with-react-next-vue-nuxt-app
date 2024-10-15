<script setup lang="ts">
const config = useRuntimeConfig()
const router = useRouter();

const goToDocument = () => {
    router.push("/documents")
}
</script>

<template>
    <div>
        <h2 class="text-red-600">Home page</h2>
        <p>url:: {{ config.public.baseUrl }}</p>

        <div class="mt-10">
            <button class="border p-2 bg-white shadow" @click="goToDocument"> Go to Documents</button>
        </div>
    </div>
</template>