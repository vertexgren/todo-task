<style scoped>
.link {
  color: black;
  text-decoration: underline;
  list-style: none;
  text-underline-offset: 5px;
  transition: all 0.3s ease;
}
.link:hover {
  text-decoration: none;
  scale: 1.1;
  text-underline-offset: 5px;
  transition: all 0.3s ease;
}
</style>
<template>
  <nav
    class="text-black mb-[100px] w-full px-5 container mx-auto flex justify-between items-center py-3"
  >
    <router-link to="/" class="text-xl xl:text-2xl font-bold">Мониторинг задач</router-link>
    <ul class="flex flex-row items-center">
      <li class="link">
        <router-link to="/" class="mx-2">Главная</router-link>
      </li>
      <li class="link">
        <router-link to="/todos" class="mx-2">Задачи</router-link>
      </li>
    </ul>
  </nav>
</template>
<script setup></script>
