<template>
  <div class="fixed w-[300px] drop-shadow-xl bg-black/20 p-4 bottom-5 right-5">
    {{ props.message }}
  </div>
</template>
<script setup>
const props = defineProps({
  message: String
})
</script>
