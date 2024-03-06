import { $fetch } from 'ofetch'
import { defineStore } from 'pinia'
import { notify } from '@/plugins/notification'

export const useTasksStore = defineStore({
  id: 'tasks',
  state: () => ({
    tasks: [],
    newTask: {}
  }),
  actions: {
    SET_TASKS(tasks) {
      this.tasks = tasks
    },
    addTask(task) {
      this.tasks.value.push(task)
    },
    removeTask(index) {
      this.tasks.value.splice(index, 1)
    },
    async updateTask(id, body) {
      const response = await $fetch(`${import.meta.env.VITE_BASE_URL}/edit/${id}`, {
        method: 'PUT',
        body: JSON.stringify(body),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      if (response === 'Task updated') {
        await this.getTasks()
        notify('Задача обновлена')
      }
    },
    async createTask(task) {
      const response = await $fetch(`${import.meta.env.VITE_BASE_URL}/add`, {
        method: 'POST',
        body: JSON.stringify(task),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      if (response === 'Task added') {
        await this.getTasks()
        notify('Задача добавлена')
      }
    },
    moveTask(task, status) {
      task.status = status
    },

    async changeStatus(id, status) {
      this.tasks.find((task) => task.id == id).status = status
    },

    getTaskById(id) {
      return this.tasks.find((task) => task.id == id) || {}
    },
    async getTasks() {
      console.log(import.meta.env.VITE_BASE_URL)
      const respnose = await $fetch(`${import.meta.env.VITE_BASE_URL}/tasks`)
      this.SET_TASKS(respnose)
    }
  },
  getters: {
    getNotAssigned() {
      return this.tasks.filter((task) => task.status === 'Not Assigned').sort((a, b) => a.id - b.id)
    },
    getInProgress() {
      return this.tasks.filter((task) => task.status === 'In Progress').sort((a, b) => a.id - b.id)
    },
    getCompleted() {
      return this.tasks.filter((task) => task.status === 'Completed').sort((a, b) => a.id - b.id)
    }
  }
})
