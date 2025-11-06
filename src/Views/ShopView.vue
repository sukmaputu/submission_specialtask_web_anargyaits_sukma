<template>
  <div class="min-h-screen bg-[#0A0A0A] text-[#E0E0E0] p-6">
    <header class="text-center mb-10">
      <h1 class="text-4xl font-bold text-[#00FF6A] drop-shadow-[0_0_10px_#00FF6A]">
        Anargya Marketplace
      </h1>
      <p class="text-[#E0E0E0]/70 mt-2">
        Find futuristic products from the DummyJSON API
      </p>
    </header>

    <div v-if="loading" class="flex justify-center items-center h-64">
      <div class="loader">
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
      </div>
    </div>

    <div
      v-else
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
    >
      <div
        v-for="(product, index) in paginatedProducts"
        :key="product.id"
        class="border border-[#1B1B1B] rounded-2xl p-4 hover:border-[#00FF6A] hover:shadow-[0_0_15px_#00FF6A] bg-[#0F0F0F] transition-transform duration-500 hover:-translate-y-1"
        :data-aos="shouldAnimateItem(index) ? 'fade-up' : undefined"
        :data-aos-delay="shouldAnimateItem(index) && (index % itemsPerPage >= 4) ? (index % itemsPerPage - 4) * 100 : undefined"
        :data-aos-duration="shouldAnimateItem(index) ? '700' : undefined"
      >
        <img
          :src="product.thumbnail"
          :alt="product.title"
          class="w-full h-48 object-cover rounded-lg mb-3"
        />
        <h2 class="text-lg font-semibold mb-1">{{ product.title }}</h2>
        <p class="text-sm text-[#E0E0E0]/70 line-clamp-2">
          {{ product.description }}
        </p>

        <div class="flex justify-between items-center mt-3">
          <span class="text-[#00FF6A] font-bold">${{ product.price }}</span>
          <span class="text-sm text-[#FF1744]">⭐ {{ product.rating }}</span>
        </div>

        <button
          class="mt-4 w-full bg-[#00FF6A] text-black font-semibold py-2 rounded-lg hover:bg-[#FF1744] hover:text-white transition duration-300"
        >
          Buy Now
        </button>
      </div>
    </div>

    <div v-if="!loading" class="flex justify-center mt-12 space-x-3">

      <button
        @click="prevPage"
        :disabled="currentPage === 1"
        class="px-4 py-2 rounded-lg border border-[#1B1B1B] text-[#E0E0E0]/80 transition-all duration-300
               hover:border-[#00FF6A] hover:text-[#00FF6A] hover:shadow-[0_0_15px_#00FF6A]
               disabled:opacity-40 disabled:hover:shadow-none"
      >
        Previous
      </button>

      <button
        v-for="page in totalPages"
        :key="page"
        @click="goToPage(page)"
        :class="[
          'px-4 py-2 rounded-lg border border-[#1B1B1B] transition-all duration-300',
          currentPage === page
            ? 'bg-[#00FF6A] text-black font-bold shadow-[0_0_15px_#00FF6A]'
            : 'text-[#E0E0E0]/80 hover:border-[#00FF6A] hover:text-[#00FF6A] hover:shadow-[0_0_10px_#00FF6A]'
        ]"
      >
        {{ page }}
      </button>

      <button
        @click="nextPage"
        :disabled="currentPage === totalPages"
        class="px-4 py-2 rounded-lg border border-[#1B1B1B] text-[#E0E0E0]/80 transition-all duration-300
               hover:border-[#00FF6A] hover:text-[#00FF6A] hover:shadow-[0_0_15px_#00FF6A]
               disabled:opacity-40 disabled:hover:shadow-none"
      >
        Next
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, nextTick, watch } from "vue";
import AOS from "aos";
import "aos/dist/aos.css";

const products = ref([]);
const loading = ref(true);
const currentPage = ref(1);
const itemsPerPage = 8;

onMounted(async () => {
  try {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    products.value = data.products;
  } catch (error) {
    console.error("Gagal memuat data produk:", error);
  } finally {
    const minimumLoadingTime = 2000; 
    
    setTimeout(async () => {
      loading.value = false;
      await nextTick();
      AOS.init({
        once: false,
        offset: 100,
        duration: 800,
        easing: "ease-out-cubic",
      });
    }, minimumLoadingTime);
  }
});

const totalPages = computed(() =>
  Math.ceil(products.value.length / itemsPerPage)
);

const paginatedProducts = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return products.value.slice(start, end);
});

const shouldAnimateItem = () => {
  if (currentPage.value === 1) {
    return false;
  }
  return true;
};

const goToPage = async (page) => {
  currentPage.value = page;
  window.scrollTo({ top: 0, behavior: "smooth" });
  await nextTick();
  AOS.refresh();
};

const nextPage = async () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
    window.scrollTo({ top: 0, behavior: "smooth" });
    await nextTick();
    AOS.refresh();
  }
};

const prevPage = async () => {
  if (currentPage.value > 1) {
    currentPage.value--;
    window.scrollTo({ top: 0, behavior: "smooth" });
    await nextTick();
    AOS.refresh();
  }
};

watch(paginatedProducts, async () => {
  await nextTick();
  AOS.refresh();
});
</script>

<style scoped>
button:hover:not(:disabled) {
  box-shadow: 0 0 12px #00ff6a, 0 0 24px #00ff6a;
}

.loader {
  display: flex;
  justify-content: center; 
  align-items: center;  
  gap: 8px; 
}

.loader .dot {
  height: 20px;
  width: 20px;
  border-radius: 50%;
  border: 2px solid #00FF6A; 
  background: #00FF6A; 
  animation: jump 0.8s ease-in-out infinite alternate;
}

@keyframes jump {
  100% {
    background: #00FF6A; 
    transform: translateY(-2rem) scale(1.2); 
    box-shadow: 0 0 15px #00FF6A; 
  }
}

.loader .dot:nth-child(1) {
  animation-delay: 0.1s;
}

.loader .dot:nth-child(2) {
  animation-delay: 0.2s;
}

.loader .dot:nth-child(3) {
  animation-delay: 0.3s;
}

.loader .dot:nth-child(4) {
  animation-delay: 0.4s;
}

.loader .dot:nth-child(5) {
  animation-delay: 0.5s;
}
</style>