<template>
  <div class="h-full min-h-screen w-full relative">
    <div class="container mx-auto">
      <Navbar />
      <RouterView v-slot="{ Component }">
        <template v-if="Component">
          <Transition name="fade" mode="out-in">
            <KeepAlive>
              <Suspense>
                <component :is="Component"></component>
                <template #fallback> <Loader/> </template>
              </Suspense>
            </KeepAlive>
          </Transition>
        </template>
      </RouterView>
    </div>
  </div>
</template>
<script setup>
import Loader from '../components/Loader.vue'
import Navbar from '../components/Navbar.vue'
import { RouterView } from 'vue-router'
</script>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
