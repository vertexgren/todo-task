<template>
  <div>
    <Teleport to="body">
      <Transition name="fade">
        <div
          v-if="props.openned"
          class="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-md z-50"
        >
          <aside
            class="flex justify-center min-h-[500px] flex-col relative text-2xl border-2 border-black items-center transition-all duration-75 ease-out overflow-hidden"
          >
            <div class="absolute top-5 right-5">
              <button
                class="border-2 border-black p-2 text-base hover:border-2 transition-all duration-100 ease-in"
                @click="close()"
              >
                Закрыть
              </button>
            </div>
            <div class="p-5">
              <div class="text-2xl">Создание задачи</div>
              <form class="flex flex-col items-center pt-10" @submit.prevent="handleSave()">
                <input
                  class="border-2 border-black p-2 w-full text-base focus:outline-none"
                  type="text"
                  required
                  v-model="name"
                  placeholder="Название задачи"
                />
                <input
                  class="border-2 border-black p-2 w-full mt-2 text-base focus:outline-none"
                  type="text"
                  required
                  v-model="description"
                  placeholder="Описание задачи"
                />
                <button
                  class="border-2 border-black p-2 text-base w-full mt-2 hover:border-2 transition-all duration-100 ease-in"
                >
                  Создать
                </button>
              </form>
            </div>
          </aside>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<script setup>
import { useTasksStore } from '@/stores/taskStore'
import { ref } from 'vue'
import { defineProps, defineEmits } from 'vue'
const taskStore = useTasksStore()
const props = defineProps({
  openned: {
    type: Boolean,
    required: true
  },
  status: {
    type: String,
    required: true,
    default: 'Not Assigned'
  }
})

const name = ref('')
const description = ref('')
const emits = defineEmits(['close'])
const close = () => {
  emits('close')
}

async function handleSave() {
  const task = {
    title: name.value,
    description: description.value,
    status: props.status
  }
  await taskStore.createTask(task)
  close()
}
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
