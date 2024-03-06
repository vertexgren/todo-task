<template>
  <div class="h-full min-h-screen w-full relative">
    <div class="container mx-auto">
      <Navbar />
      <RouterView v-slot="{ Component }">
        <template v-if="Component">
          <Transition mode="out-in">
            <KeepAlive>
              <Suspense>
                <component :is="Component"></component>

                <template #fallback> Loading... </template>
              </Suspense>
            </KeepAlive>
          </Transition>
        </template>
      </RouterView>
    </div>
  </div>
</template>
<script setup>
import Navbar from '../components/Navbar.vue'
import { RouterView } from 'vue-router'
</script>
