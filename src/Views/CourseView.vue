<template>
  <div class="bg-[#0A0A0A] min-h-screen py-10 text-[#E0E0E0]">
    <div class="max-w-7xl mx-auto px-6">
      <h1
        class="text-3xl font-bold mb-8 text-[#00FF6A] text-center drop-shadow-[0_0_10px_#00FF6A]"
      >
        Register for Online Courses
      </h1>

      <div class="grid md:grid-cols-3 gap-8">
        <div
          v-for="(course, index) in paginatedCourses"
          :key="course.title"
          :ref="(el) => (cards[index] = el)"
          class="opacity-0 translate-y-8 transition-all duration-700 ease-out"
          :style="{ transitionDelay: `${index * 100}ms` }"
        >
          <div
            class="bg-[#1B1B1B] rounded-2xl border border-[#2B2B2B] shadow-lg hover:shadow-[#00FF6A]/30 transition p-5"
          >
            <div class="relative">
              <img
                :src="course.image"
                alt="course image"
                class="rounded-xl w-full h-48 object-cover opacity-90"
              />
              <span
                class="absolute top-3 left-3 bg-[#00FF6A] text-black text-xs font-bold py-1 px-3 rounded-full uppercase"
              >
                {{ course.level }}
              </span>
            </div>

            <div class="mt-4">
              <h2 class="text-lg font-semibold mb-2 text-white">
                {{ course.title }}
              </h2>
              <p class="text-sm text-gray-400 mb-2">
                {{ course.duration }} hour | {{ course.videoCount }} Video
              </p>

              <div class="flex items-center gap-2 mb-3">
                <img
                  :src="course.mentor.avatar"
                  alt="mentor"
                  class="w-10 h-10 rounded-full border border-[#00FF6A]/40"
                />
                <div>
                  <p class="font-medium text-[#E0E0E0] text-sm">
                    {{ course.mentor.name }}
                  </p>
                  <p class="text-xs text-gray-500">Teacher</p>
                </div>
              </div>

              <div class="flex items-center justify-between">
                <div>
                  <p class="line-through text-gray-600 text-sm">
                    Rp {{ formatPrice(course.originalPrice) }}
                  </p>
                  <p class="text-xl font-semibold text-[#00FF6A]">
                    Rp {{ formatPrice(course.discountPrice) }}
                  </p>
                </div>
                <div class="flex items-center text-[#FF1744] font-medium">
                  <span>⭐ {{ course.rating }}</span>
                  <span class="text-gray-400 text-sm">
                    ({{ course.reviews }})
                  </span>
                </div>
              </div>

              <button
                @click="addToCart(course)"
                class="mt-4 w-full bg-[#00FF6A] hover:bg-[#FF1744] hover:text-white text-black font-semibold py-2 rounded-lg transition-all duration-200"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>

      <nav class="flex justify-center mt-10" aria-label="Page navigation">
        <ul class="flex items-center space-x-2">
          <li>
            <button
              @click="currentPage > 1 && goToPage(currentPage - 1)"
              :disabled="currentPage === 1"
              class="px-4 py-2 rounded-md border border-[#1B1B1B] bg-[#1B1B1B] text-[#E0E0E0] hover:text-[#00FF6A] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Previous
            </button>
          </li>

          <li v-for="page in totalPages" :key="page">
            <button
              @click="goToPage(page)"
              :class="[
                'px-4 py-2 rounded-md border border-[#1B1B1B] transition',
                page === currentPage
                  ? 'bg-[#00FF6A] text-black font-bold'
                  : 'bg-[#1B1B1B] text-[#E0E0E0] hover:text-[#00FF6A]'
              ]"
            >
              {{ page }}
            </button>
          </li>

          <li>
            <button
              @click="currentPage < totalPages && goToPage(currentPage + 1)"
              :disabled="currentPage === totalPages"
              class="px-4 py-2 rounded-md border border-[#1B1B1B] bg-[#1B1B1B] text-[#E0E0E0] hover:text-[#00FF6A] disabled:opacity-50 disabled:cursor-not-allowed"
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
import { ref, computed, onMounted, watch, nextTick } from "vue";
import { useRouter } from 'vue-router'; 

const router = useRouter(); 

const itemsPerPage = 6;
const currentPage = ref(1);
const cards = ref([]);

const formatPrice = (value) => {
  const price = typeof value === 'string' ? value.replace(/\./g, '') : value;
  return new Intl.NumberFormat("id-ID").format(price);
};

const courses = [
  {
    title: "IoT Programming using Raspberry Pi",
    level: "Beginner",
    duration: 12,
    videoCount: 50,
    image: "https://eu-images.contentstack.com/v3/assets/blt69509c9116440be8/blt4c2eb0cc3626b514/64cb56d8c31d6d00538bfb84/iStock_000031220858_Full.jpg",
    mentor: {
      name: "William Noah Marthin",
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9RAJCq0yoMatEaCo48lr4IZilkwr3f2uX8xcVGUEqJgr2jLCO3uN1iCfnwatWG42bpw4&usqp=CAU",
    },
    originalPrice: "360.000",
    discountPrice: 129000,
    rating: "4.8",
    reviews: 234,
  },
  {
    title: "Building 3D vehicle designs",
    level: "Intermediate",
    duration: 18,
    videoCount: 85,
    image: "https://www.3ds.com/assets/invest/2022-04/tm-vehicle-concept-design-vehicle-styling-packaging1156x710px.jpg",
    mentor: {
      name: "Robi Exsaudi",
      avatar: "https://sb.kaleidousercontent.com/67418/1920x1545/c5f15ac173/samuel-raita-ridxdghg7pw-unsplash.jpg",
    },
    originalPrice: "420.000",
    discountPrice: 169000,
    rating: "4.9",
    reviews: 145,
  },
  {
    title: "Building a vehicle safety system",
    level: "Beginner",
    duration: 20,
    videoCount: 120,
    image: "https://cdn.britannica.com/72/56172-050-5FB3ECCC/Air-bags-safety-systems-automobiles.jpg",
    mentor: {
      name: "Robi Exsaudi",
      avatar: "https://sb.kaleidousercontent.com/67418/1920x1545/c5f15ac173/samuel-raita-ridxdghg7pw-unsplash.jpg",
    },
    originalPrice: "500.000",
    discountPrice: 199000,
    rating: "4.7",
    reviews: 300,
  },
  {
    title: "Autodcad Tutorial",
    level: "Intermediate",
    duration: 14,
    videoCount: 70,
    image: "https://i.ytimg.com/vi/EQ-F86xBtko/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCDUqFsY-76uiytzOTdH5GzuI7hfg",
    mentor: {
      name: "Najib Al Zabir",
      avatar: "https://t4.ftcdn.net/jpg/04/31/64/75/360_F_431647519_usrbQ8Z983hTYe8zgA7t1XVc5fEtqcpa.jpg",
    },
    originalPrice: "399.000",
    discountPrice: 149000,
    rating: "4.6",
    reviews: 210,
  },
  {
    title: "Simulink Matlab Tutorial",
    level: "Intermediate",
    duration: 25,
    videoCount: 95,
    image: "https://www.mathworks.com/products/simulink-online/_jcr_content/mainParsys/band_copy_copy_1993480963/mainParsys/columns_copy_copy/2e914123-2fa7-423e-9f11-f574cbf57caa/image_copy.adapt.full.medium.png/1758716032547.png",
    mentor: {
      name: "Najib Al Zabir",
      avatar: "https://t4.ftcdn.net/jpg/04/31/64/75/360_F_431647519_usrbQ8Z983hTYe8zgA7t1XVc5fEtqcpa.jpg",
    },
    originalPrice: "600.000",
    discountPrice: 259000,
    rating: "4.9",
    reviews: 412,
  },
  {
    title: "Basic Arduino Tutorial",
    level: "Beginner",
    duration: 10,
    videoCount: 45,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ8grjhBEm71Vhsk_u4xaEnERRnmvbof-T6Q&s",
    mentor: {
      name: "Najib Al Zabir",
      avatar: "https://t4.ftcdn.net/jpg/04/31/64/75/360_F_431647519_usrbQ8Z983hTYe8zgA7t1XVc5fEtqcpa.jpg",
    },
    originalPrice: "300.000",
    discountPrice: 119000,
    rating: "4.8",
    reviews: 128,
  },
  {
    title: "Cable Management Fundamental",
    level: "Beginner",
    duration: 16,
    videoCount: 60,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRChsYfFNfAP7uFkRDGXGnEM_nOCvFNv1oYtA&s",
    mentor: {
      name: "Khansa Arkha",
      avatar: "https://media.istockphoto.com/id/925856562/photo/young-man-portrait-on-grey.jpg?s=612x612&w=0&k=20&c=pL4PYBNgC6MfMzwJzs2y9-Ti5OAWoIu_e0b3Lpy1bjQ=",
    },
    originalPrice: "320.000",
    discountPrice: 139000,
    rating: "4.5",
    reviews: 182,
  },
  {
    title: "PCB Design with KiCad",
    level: "Intermediate",
    duration: 15,
    videoCount: 55,
    image: "https://www.kicad.org/img/frontpage/kicad_pcbnew.png",
    mentor: {
      name: "Khansa Arkha",
      avatar: "https://media.istockphoto.com/id/925856562/photo/young-man-portrait-on-grey.jpg?s=612x612&w=0&k=20&c=pL4PYBNgC6MfMzwJzs2y9-Ti5OAWoIu_e0b3Lpy1bjQ=",
    },
    originalPrice: "400.000",
    discountPrice: 159000,
    rating: "4.7",
    reviews: 134,
  },
  {
    title: "Automotive Introduction",
    level: "Beginner",
    duration: 13,
    videoCount: 48,
    image: "https://upload.wikimedia.org/wikipedia/commons/9/9f/002_Production_line_-_car_assembly_line_in_General_Motors_Manufacturing_Poland_-_Gliwice%2C_Poland.jpg",
    mentor: {
      name: "Reihan Rizky",
      avatar: "https://media.istockphoto.com/id/1045886560/photo/portrait-of-smiling-handsome-man-in-blue-t-shirt-standing-with-crossed-arms-isolated-on-grey.jpg?s=612x612&w=0&k=20&c=TX1-1UJ3PKonFEmgs_WDZf7wtfqKVMHYjeRaYjaZ1Rc=",
    },
    originalPrice: "350.000",
    discountPrice: 129000,
    rating: "4.6",
    reviews: 99,
  },
  {
    title: "Python for Microcontroller",
    level: "Intermediate",
    duration: 22,
    videoCount: 110,
    image: "https://i.ytimg.com/vi/5LbgyDmRu9s/maxresdefault.jpg",
    mentor: {
      name: "Reihan Rizky",
      avatar: "https://media.istockphoto.com/id/1045886560/photo/portrait-of-smiling-handsome-man-in-blue-t-shirt-standing-with-crossed-arms-isolated-on-grey.jpg?s=612x612&w=0&k=20&c=TX1-1UJ3PKonFEmgs_WDZf7wtfqKVMHYjeRaYjaZ1Rc=",
    },
    originalPrice: "550.000",
    discountPrice: 219000,
    rating: "4.9",
    reviews: 387,
  },
  {
    title: "Basic Embedded System",
    level: "Intermediate",
    duration: 19,
    videoCount: 80,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/DHCOM_Computer_On_Module_-_AM35x.jpg/1200px-DHCOM_Computer_On_Module_-_AM35x.jpg",
    mentor: {
      name: "Kania Putri",
      avatar: "https://dummyimage.com/100x100/00FF6A/000000&text=K",
    },
    originalPrice: "480.000",
    discountPrice: 179000,
    rating: "4.8",
    reviews: 201,
  },
  {
    title: "C++ Programming",
    level: "Intermediate",
    duration: 20,
    videoCount: 100,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyZUQx3FfRxbRmZp_ET7t8fbPQV2flyQun3A&s",
    mentor: {
      name: "Bagus Wicaksono",
      avatar: "https://media.istockphoto.com/id/1490616319/photo/portrait-of-pleased-young-man.jpg?s=612x612&w=0&k=20&c=7iD2RLSqEvdE7uTWskQNw8WzCa45o_OInwmdz6pLgGY=",
    },
    originalPrice: "520.000",
    discountPrice: 189000,
    rating: "4.7",
    reviews: 276,
  },
  {
    title: "Digital Signal Processing",
    level: "Intermediate",
    duration: 24,
    videoCount: 115,
    image: "https://www.researchgate.net/publication/339163533/figure/fig1/AS:857229544673281@1581390858798/Digital-signal-processing-circuit-diagram.png",
    mentor: {
      name: "Bagus Wicaksono",
      avatar: "https://media.istockphoto.com/id/1490616319/photo/portrait-of-pleased-young-man.jpg?s=612x612&w=0&k=20&c=7iD2RLSqEvdE7uTWskQNw8WzCa45o_OInwmdz6pLgGY=",
    },
    originalPrice: "530.000",
    discountPrice: 209000,
    rating: "4.9",
    reviews: 421,
  },
  {
    title: "MicroPython Programming",
    level: "Beginner",
    duration: 12,
    videoCount: 52,
    image: "https://hackaday.com/wp-content/uploads/2022/08/hadimg_belay_feat.jpeg?w=800",
    mentor: {
      name: "Andrian Prakoso",
      avatar: "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&fm=jpg&q=60&w=3000",
    },
    originalPrice: "310.000",
    discountPrice: 129000,
    rating: "4.6",
    reviews: 155,
  },
  {
    title: "Tractive System Tutorial",
    level: "Intermediate",
    duration: 21,
    videoCount: 105,
    image: "https://www.mdpi.com/hardware/hardware-02-00010/article_deploy/html/images/hardware-02-00010-g001.png",
    mentor: {
      name: "Andrian Prakoso",
      avatar: "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&fm=jpg&q=60&w=3000",
    },
    originalPrice: "540.000",
    discountPrice: 219000,
    rating: "4.8",
    reviews: 297,
  },
  {
    title: "Electronic Soldering Techniques",
    level: "Beginner",
    duration: 8,
    videoCount: 30,
    image: "https://www.techspray.com/content/images/thumbs/0002118_ultimate-guide-to-electronic-soldering.png",
    mentor: {
      name: "Zulfiah Hermana",
      avatar: "https://media.istockphoto.com/id/1326417862/photo/young-woman-laughing-while-relaxing-at-home.jpg?s=612x612&w=0&k=20&c=cd8e6RBGOe4b8a8vTcKW0Jo9JONv1bKSMTKcxaCra8c=",
    },
    originalPrice: "250.000",
    discountPrice: 99000,
    rating: "4.5",
    reviews: 87,
  },
  {
    title: "Vehicle Dynamics",
    level: "Intermediate",
    duration: 17,
    videoCount: 75,
    image: "https://ars.els-cdn.com/content/image/3-s2.0-B012227410500048X-gr14.gif",
    mentor: {
      name: "Zulfiah Hermana",
      avatar: "https://media.istockphoto.com/id/1326417862/photo/young-woman-laughing-while-relaxing-at-home.jpg?s=612x612&w=0&k=20&c=cd8e6RBGOe4b8a8vTcKW0Jo9JONv1bKSMTKcxaCra8c=",
    },
    originalPrice: "490.000",
    discountPrice: 179000,
    rating: "4.8",
    reviews: 260,
  },
  {
    title: "Construction Vehicle Tutorial",
    level: "Intermediate",
    duration: 19,
    videoCount: 90,
    image: "https://i.ytimg.com/vi/JFaWNe8jcMc/maxresdefault.jpg",
    mentor: {
      name: "Khansa Arkha",
      avatar: "https://media.istockphoto.com/id/925856562/photo/young-man-portrait-on-grey.jpg?s=612x612&w=0&k=20&c=pL4PYBNgC6MfMzwJzs2y9-Ti5OAWoIu_e0b3Lpy1bjQ=",
    },
    originalPrice: "520.000",
    discountPrice: 189000,
    rating: "4.7",
    reviews: 312,
  },
];

const totalPages = computed(() => Math.ceil(courses.length / itemsPerPage));
const paginatedCourses = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  return courses.slice(start, start + itemsPerPage);
});

const goToPage = (page) => {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
};

const addToCart = (course) => {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  const existingItemIndex = cart.findIndex(item => item.title === course.title);

  if (existingItemIndex > -1) {
    cart[existingItemIndex].quantity++;
  } else {
    cart.push({ ...course, quantity: 1 });
  }

  localStorage.setItem('cart', JSON.stringify(cart));
  alert(`${course.title} telah ditambahkan ke keranjang!`);
  
  router.push('/checkout'); 
};

const observeCards = () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(
            "opacity-100",
            "translate-y-0",
            "transition-all",
            "duration-700",
            "ease-out"
          );
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  cards.value.forEach((el) => el && observer.observe(el));
};

onMounted(() => nextTick(() => observeCards()));

watch(paginatedCourses, async () => {
  await nextTick();
  cards.value = [];
  await nextTick();
  observeCards();
});
</script>

<style scoped>
button {
  box-shadow: 0 0 10px rgba(0, 255, 106, 0.2);
}
button:hover {
  box-shadow: 0 0 15px rgba(0, 255, 106, 0.5);
}
</style>