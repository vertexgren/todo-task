<script setup>
import { computed } from 'vue'
import defaultLayout from '@/layouts/defaultLayout.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const currentLayout = computed(() => {
  return router.currentRoute.value.meta.layout || defaultLayout
})
</script>

<template>
  <component :is="currentLayout"></component>
</template>

<style scoped></style>
