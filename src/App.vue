<script setup>
import { ref, onMounted } from 'vue'
import api from './services/api.js'
import { isLoading } from './store/loading'
import AppLoading from './components/AppLoading.vue'
import AppLayout from './Layouts/AppLayout.vue'

const users = ref([])

onMounted(async () => {
  try {
    isLoading.value = true
    const response = await api.get('/users')
    users.value = response.data
    console.log(response.data)
  } catch (error) {
    console.error('Error fetching users:', error)
  } finally {
    setTimeout(() => {
      isLoading.value = false
    }, 500)
  }
})
</script>

<template>
  <div class="relative min-h-screen bg-black text-white">
    <!-- Loading Overlay -->
    <AppLoading v-if="isLoading" />

    <!-- Layout utama -->
    <AppLayout>
      <router-view />
    </AppLayout>
  </div>
</template>
