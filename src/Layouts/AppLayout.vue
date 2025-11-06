<template>
  <div class="flex flex-col min-h-screen">
    <Navbar />
    <main class="flex-1 container mx-auto p-6">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Navbar from '../components/AppNavbar.vue'
import Footer from '../components/AppFooter.vue'
</script>
