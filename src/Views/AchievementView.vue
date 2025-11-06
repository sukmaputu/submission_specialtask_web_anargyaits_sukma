<template>
  <div class="bg-[#0A0A0A] min-h-screen py-12 text-[#E0E0E0]">
    <div class="max-w-6xl mx-auto px-6">
      <h1
        class="text-3xl md:text-4xl font-bold text-center text-[#00FF6A] drop-shadow-[0_0_10px_#00FF6A] mb-10"
      >
        Achievements of Anargya ITS Team
      </h1>

      <div class="grid md:grid-cols-2 gap-8">
        <div
          v-for="(achievement, index) in paginatedAchievements"
          :key="achievement.year + achievement.title"
          :ref="(el) => (cards[index] = el)"
          class="opacity-0 translate-y-10 transition-all duration-700 ease-out"
          :style="{ transitionDelay: `${index * 100}ms` }"
        >
          <div
            class="bg-[#1B1B1B] border border-[#2B2B2B] rounded-2xl p-6 hover:shadow-[0_0_15px_#00FF6A55] transition-all duration-300"
          >
            <div class="mb-4">
              <img
                v-if="achievement.image"
                :src="achievement.image"
                :alt="achievement.title"
                class="w-full h-48 object-cover rounded-xl border border-[#2B2B2B]"
              />
            </div>

            <div class="flex flex-col md:flex-row justify-between items-start md:items-center">
              <h2 class="text-xl font-semibold text-white mb-2 md:mb-0">
                {{ achievement.title }}
              </h2>
              <span
                class="text-sm bg-[#00FF6A] text-black font-bold px-3 py-1 rounded-full"
              >
                {{ achievement.year }}
              </span>
            </div>

            <p class="text-[#00FF6A] font-medium mt-3">
              {{ achievement.award }}
            </p>
            <p class="text-gray-400 text-sm mt-2 leading-relaxed">
              {{ achievement.description }}
            </p>

            <a
              v-if="achievement.link"
              :href="achievement.link"
              target="_blank"
              class="inline-block mt-4 text-[#FF1744] hover:text-[#00FF6A] font-semibold text-sm transition-all"
            >
              Visit site →
            </a>
          </div>
        </div>
      </div>

      <nav aria-label="Page navigation example" class="mt-12 flex justify-center">
        <ul class="flex gap-3 flex-wrap justify-center">
          <li>
            <button
              @click="prevPage"
              :disabled="currentPage === 1"
              class="pagination-btn"
            >
              Previous
            </button>
          </li>

          <li v-for="page in totalPages" :key="page">
            <button
              @click="goToPage(page)"
              :class="['pagination-btn', page === currentPage ? 'active' : '']"
            >
              {{ page }}
            </button>
          </li>

          <li>
            <button
              @click="nextPage"
              :disabled="currentPage === totalPages"
              class="pagination-btn"
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, nextTick } from "vue";

const cards = ref([]);
const currentPage = ref(1);
const itemsPerPage = 4;

const achievements = [
  {
    year: 2023,
    title: "FSAE Japan 2023",
    award: "3rd Place in Business Plan and the View Drawing Award.",
    description:
      "Anargya ITS won two awards at the international FSAE Japan 2023 competition with their electric car, Anargya EV Mark 3.0",
    link: "https://www.its.ac.id/news/2023/09/04/anargya-its-sukses-sabet-gelar-juara-di-fsae-jepang-2023/",
    image: "https://www.its.ac.id/news/wp-content/uploads/sites/2/2023/09/Mobil-Anargya-EV-Mark-3.0-saat-dilakukan-inspeksi-oleh-para-juri-FSAE-Japan-2023-sebelum-berlomba-1536x864.jpeg",
  },
  {
    year: 2024,
    title: "FSAE Japan 2024",
    award: "3rd Place in the Presentation Event & Top 10 in the EV Class.",
    description:
      "Anargya ITS upheld its success at FSAE Japan 2024 as Indonesia’s sole representative.",
    link: "https://www.its.ac.id/news/2024/09/17/tim-anargya-its-pertahankan-gelar-juara-di-fsae-japan-2024/",
    image: "https://www.its.ac.id/news/wp-content/uploads/sites/2/2024/09/Tim-Anargya-ITS-yang-sukses-meraih-juara-III-cabang-lomba-Presentation-Event-dan-Top-10-untuk-kelas-EV-pada-FSAE-Japan-2024.jpg",
  },
  {
    year: 2024,
    title: "Formula Bharat Pi-EV 2024",
    award: "1st Place Electric Car Prototype.",
    description:
      "Anargya ITS won the Formula Bharat Pi-EV 2024 competition with their innovative electric car prototype",
    link: "https://kemdiktisaintek.go.id/kabar-dikti/purwarupa-mobil-listrik-tim-anargya-its-meraih-juara-1-pada-kompetisi-formula-bharat-pi-ev-2024/",
    image: "https://kemdiktisaintek.go.id/wp-content/uploads/2024/07/Tim-Anargya-ITS-yang-berhasil-menjuarai-kompetisi-Formula-Bharat-Pi-EV-2024.jpg",
  },
  {
    year: 2025,
    title: "FSAE Japan 2025",
    award: "2nd Place in the EV Presentation Event and 1st Place",
    description:
      "Outstanding achievement at FSAE Japan 2025, driven by eco-friendly innovations and strong publicity strategies.",
    link: "https://www.its.ac.id/news/2025/09/15/tim-anargya-its-kembali-torehkan-prestasi-di-fsae-japan-2025/",
    image: "https://www.its.ac.id/news/wp-content/uploads/sites/2/2025/09/dari-kiri-Moh-Ardi-Candra-Daffana-Adiel-Hadrian-dan-Farah-Zamir-Salsabila-dari-Tim-Anargya-ITS-yang-berlaga-di-FSAE-Japan-2025-1536x1023.jpg",
  },
  {
    year: 2025,
    title: "FSAE Japan 2025 (Publication)",
    award: "2nd Place in the EV Presentation Event and 1st Place",
    description:
      "Outstanding achievement at FSAE Japan 2025, driven by eco-friendly innovations and strong publicity strategies.",
    link: "https://indonesiasatu.co.id/tim-anargya-its-juara-2-fsae-japan-2025-raih-penghargaan-pr",
    image: "https://www.its.ac.id/news/wp-content/uploads/sites/2/2025/09/Anggota-Tim-Anargya-ITS-Farah-Zamir-Salsabila-saat-mempresentasikan-strategi-bisnis-tim-dalam-Presentation-Event-kelas-Electric-Vehicle-FSAE-Japan-2025.jpg",
  },
];

const totalPages = computed(() => Math.ceil(achievements.length / itemsPerPage));
const paginatedAchievements = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  return achievements.slice(start, start + itemsPerPage);
});

const goToPage = (page) => {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page;
    nextTick(() => observeCards());
  }
};

const nextPage = () => goToPage(currentPage.value + 1);
const prevPage = () => goToPage(currentPage.value - 1);

const observeCards = () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100", "translate-y-0");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  cards.value.forEach((el) => el && observer.observe(el));
};

onMounted(() => nextTick(() => observeCards()));
</script>

<style scoped>
.pagination-btn {
  background-color: #1b1b1b;
  color: #e0e0e0;
  border: 1px solid #2b2b2b;
  border-radius: 8px;
  padding: 8px 16px;
  font-weight: 500;
  transition: all 0.2s ease;
}

.pagination-btn:hover:not(:disabled) {
  color: #00ff6a;
  background-color: #111;
  box-shadow: 0 0 10px #00ff6a88, 0 0 20px #00ff6a55;
  transform: translateY(-2px);
}

.pagination-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.pagination-btn.active {
  background-color: #00ff6a;
  color: #000;
  font-weight: bold;
  box-shadow: 0 0 10px #00ff6a, 0 0 20px #00ff6a88;
}
</style>
