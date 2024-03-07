<template>
  <div class="w-full px-5">
    <header class="text-4xl text-center font-semibold">Список задач</header>
    <div class="flex w-full mt-[40px] gap-5">
      <div
        class="w-full flex flex-1 justify-between p-5 flex-col xl:flex-row border-2 border-black"
      >
        <div
          class="flex flex-col basis-1/3 gap-2 p-2 h-full"
          @dragover="handleDragOver($event, 'Not Assigned')"
          @dragend="handleDragEnd"
          @drop="handleDrop($event, 'Not Assigned')"
        >
          <h1 class="text-2xl font-semibold text-center">Не назначены</h1>
          <div class="flex justify-end" @click="handleAdd('Not Assigned')">
            <button class="text-sm">Добавить +</button>
          </div>
          <div class="grid grid-cols-1 gap-2 overflow-auto max-h-[500px]">
            <div
              v-for="task in taskStore.getNotAssigned"
              :key="task.id"
              :id="task.id"
              draggable="true"
              @click="handleEdit(task.id)"
              @dragstart="handleDragStart($event)"
              @drag="handleDrag"
              class="p-2 bg-slate-400 relative cursor-pointer"
            >
              <h1 class="text-xl font-semibold">{{ task.title }}</h1>
              <p>{{ task.description }}</p>
              <div class="absolute top-0 right-0 z-[2] cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 21 21">
                  <path
                    fill="#888888"
                    fill-rule="evenodd"
                    d="M7 5h2v2H7zm5 0h2v2h-2zM7 9h2v2H7zm5 0h2v2h-2zm-5 4h2v2H7zm5 0h2v2h-2z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div
          class="flex flex-col basis-1/3 gap-2 p-2 h-full"
          @dragover="handleDragOver($event, 'In Progress')"
          @drop="handleDrop($event, 'In Progress')"
        >
          <h1 class="text-2xl font-semibold text-center">В процессе</h1>
          <div class="flex justify-end" @click="handleAdd('In Progress')">
            <button class="text-sm">Добавить +</button>
          </div>
          <div class="grid grid-cols-1 gap-2 overflow-auto max-h-[500px]">
            <div
              v-for="task in taskStore.getInProgress"
              :key="task.id"
              :id="task.id"
              draggable="true"
              @click="handleEdit(task.id)"
              @dragstart="handleDragStart($event)"
              @drag="handleDrag"
              class="p-2 bg-green-400 relative cursor-pointer"
            >
              <h1 class="text-xl font-semibold">{{ task.title }}</h1>
              <p>{{ task.description }}</p>
              <div class="absolute top-0 right-0 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 21 21">
                  <path
                    fill="#888888"
                    fill-rule="evenodd"
                    d="M7 5h2v2H7zm5 0h2v2h-2zM7 9h2v2H7zm5 0h2v2h-2zm-5 4h2v2H7zm5 0h2v2h-2z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div
          class="flex flex-col basis-1/3 gap-2 p-2 h-full"
          @dragover="handleDragOver($event, 'Completed')"
          @dragend="handleDragEnd"
          @drop="handleDrop($event, 'Completed')"
        >
          <h1 class="text-2xl font-semibold text-center">Завершенные</h1>
          <div class="flex justify-end" @click="handleAdd('Completed')">
            <button class="text-sm">Добавить +</button>
          </div>
          <div class="grid grid-cols-1 gap-2 h-fit overflow-auto max-h-[500px]">
            <div
              v-for="task in taskStore.getCompleted"
              :key="task.id"
              :id="task.id"
              @click="handleEdit(task.id)"
              draggable="true"
              @dragstart="handleDragStart($event)"
              @drag="handleDrag()"
              class="p-2 bg-stone-200 relative cursor-pointer"
            >
              <h1 class="text-xl font-semibold">{{ task.title }}</h1>
              <p>{{ task.description }}</p>
              <div class="absolute top-0 right-0 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 21 21">
                  <path
                    fill="#888888"
                    fill-rule="evenodd"
                    d="M7 5h2v2H7zm5 0h2v2h-2zM7 9h2v2H7zm5 0h2v2h-2zm-5 4h2v2H7zm5 0h2v2h-2z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      id="editWindow"
      class="fixed top-0 right-0 h-full min-h-full transition-all duration-100 ease-out z-[2] border-2 bg-gray-100 flex justify-center overflow-hidden"
      :class="editing ? 'w-full xl:w-1/5' : 'w-0'"
    >
      <div class="p-5" id="editWindow">
        <header class="text-2xl font-semibold">Редактирование задачи</header>
        <form class="flex flex-col items-center pt-10" @submit.prevent="updateTask()">
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
          <div class="flex gap-5">
            <button
              type="submit"
              class="border-2 border-black p-2 text-base w-full mt-2 hover:border-2 transition-all duration-100 ease-in"
            >
              Сохранить
            </button>
            <button
              type="button"
              class="border-2 border-black p-2 text-base w-full mt-2 hover:border-2 transition-all duration-100 ease-in"
              @click="deleteTask()"
            >
              Удалить
            </button>
          </div>
        </form>
      </div>
    </div>
    <TodoTeleport key="add" :openned="adding" :status="status" @close="adding = !adding" />
  </div>
</template>

<script setup>
import { useTasksStore } from '@/stores/taskStore'
import TodoTeleport from './AddTeleport.vue'
import { ref } from 'vue'
import { onMounted } from 'vue'
const taskStore = useTasksStore()

const editing = ref(false)
const adding = ref(false)
const editingIndex = ref(null)
const name = ref('')
const status = ref('')
const description = ref('')

await taskStore.getTasks()

const handleDrag = () => {}

const draggedItemId = ref(null)

const handleDragStart = (e) => {
  draggedItemId.value = e.target.id
}

const handleDragEnd = async () => {
  if (draggedItemId.value) {
    const task = taskStore.getTaskById(draggedItemId.value)
    body = {
      status: task.status
    }
    await taskStore.updateTask(draggedItemId.value, body)
  }
}

const handleDragOver = (e, status) => {
  e.preventDefault()
  taskStore.changeStatus(draggedItemId.value, status)
}
const handleDrop = (e, status) => {
  e.preventDefault()
  const task = taskStore.getTaskById(draggedItemId.value)
  if (task) {
    taskStore.moveTask(task, status)
    const body = {
      status: status
    }
    taskStore.updateTask(task.id, body)
  }
}

const deleteTask = () => {
  taskStore.deleteTask(editingIndex.value)
  editing.value = false
  editingIndex.value = null
}
const handleEdit = (id) => {
  if (editing.value && editingIndex.value === id) {
    editing.value = false
    editingIndex.value = null
  } else {
    editing.value = true

    editingIndex.value = id
    const task = taskStore.getTaskById(editingIndex.value)
    name.value = task.title
    description.value = task.description
  }
}

const updateTask = () => {
  const body = {
    title: name.value,
    description: description.value
  }
  taskStore.updateTask(editingIndex.value, body)

  editing.value = false
  editingIndex.value = null

  notification.$notify('Задача успешно обновлена')
}

const handleAdd = (taskStatus) => {
  status.value = taskStatus
  adding.value = true
}

onMounted(() => {
  window.addEventListener('click', (e) => {
    if (editing.value) {
      if (e.target.id === 'editWindow') {
        editing.value = false
        editingIndex.value = null
      }
    }
  })
})
</script>

<style scoped>
.dragging {
  opacity: 0.5;
  border: 2px dashed black;
}
</style>
