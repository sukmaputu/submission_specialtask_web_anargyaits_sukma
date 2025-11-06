<script setup>
  import { ref } from 'vue'

  const isOpen = ref(false)
  function toggleMenu() {
    isOpen.value = !isOpen.value
  }

  function closeMenu() {
    isOpen.value = false
  }
</script>


<template>
  <nav class="bg-[#0A0A0A] text-[#00FF6A] shadow px-6 py-3 flex justify-between items-center">
    <h1 class="text-xl font-bold">Anargya ITS</h1>

    <button 
      @click="toggleMenu" 
      class="md:hidden focus:outline-none text-[#00FF6A] hover:text-gray-200 transition"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path v-if="!isOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16" />
        <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>

    <ul class="hidden md:flex space-x-6">
      <li class="relative group">
        <router-link to="/" class="hover:text-gray-200 transition">Home</router-link>
        <span class="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#00FF6A] transition-all duration-300 group-hover:w-full"></span>
      </li>
      <li class="relative group">
        <router-link to="/team" class="hover:text-gray-200 transition">Team</router-link>
        <span class="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#00FF6A] transition-all duration-300 group-hover:w-full"></span>
      </li>
      <li class="relative group">
        <router-link to="/member" class="hover:text-gray-200 transition">Member</router-link>
        <span class="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#00FF6A] transition-all duration-300 group-hover:w-full"></span>
      </li>
      <li class="relative group">
        <router-link to="/achievement" class="hover:text-gray-200 transition">Achievement</router-link>
        <span class="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#00FF6A] transition-all duration-300 group-hover:w-full"></span>
      </li>
      <li class="relative group">
        <router-link to="/course" class="hover:text-gray-200 transition">Course</router-link>
        <span class="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#00FF6A] transition-all duration-300 group-hover:w-full"></span>
      </li>
      <li class="relative group">
        <router-link to="/shop" class="hover:text-gray-200 transition">Shop</router-link>
        <span class="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#00FF6A] transition-all duration-300 group-hover:w-full"></span>
      </li>
    </ul>

    <transition name="fade">
      <div 
        v-if="isOpen" 
        class="fixed inset-0 bg-black bg-opacity-50 z-40" 
        @click="closeMenu"
      ></div>
    </transition>

    <transition name="slide-left">
      <div 
        v-if="isOpen"
        class="fixed top-0 left-0 h-full w-64 bg-[#0F0F0F] shadow-lg z-50 p-6 flex flex-col space-y-4"
      >
        <button @click="closeMenu" class="self-end mb-4 text-gray-400 hover:text-[#00FF6A]">
        </button>
        <router-link @click="closeMenu" to="/" class="hover:text-gray-200">Home</router-link>
        <router-link @click="closeMenu" to="/team" class="hover:text-gray-200">Team</router-link>
        <router-link @click="closeMenu" to="/member" class="hover:text-gray-200">Member</router-link>
        <router-link @click="closeMenu" to="/achievement" class="hover:text-gray-200">Achievement</router-link>
        <router-link @click="closeMenu" to="/course" class="hover:text-gray-200">Course</router-link>
        <router-link @click="closeMenu" to="/shop" class="hover:text-gray-200">Shop</router-link>
      </div>
    </transition>
  </nav>
</template>

<style scoped>
  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.3s ease;
  }
  .fade-enter-from, .fade-leave-to {
    opacity: 0;
  }

  .slide-left-enter-active,
  .slide-left-leave-active {
    transition: transform 0.3s ease, opacity 0.3s ease;
  }
  .slide-left-enter-from,
  .slide-left-leave-to {
    transform: translateX(-100%);
    opacity: 0;
  }
</style>


