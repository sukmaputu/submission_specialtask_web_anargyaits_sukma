<script setup>
import api from './services/api.js'
import { ref, onMounted } from 'vue'

const users = ref([])

onMounted(async () => {
  try {
    const response = await api.get('/users')
    users.value = response.data
    console.log(response.data)
  } catch (error) {
    console.error('Error fetching users:', error)
  }
})
</script>

<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold mb-4">Testing</h1>
    <ul>
      <li v-for="user in users" :key="user.id" class="mb-2">
        {{ user.name }} ({{ user.email }})
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
