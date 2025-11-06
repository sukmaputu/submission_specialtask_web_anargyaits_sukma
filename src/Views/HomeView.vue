<template>
  <section
    class="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#0A0A0A] text-[#E0E0E0]"
    :style="backgroundStyle"
  >
    <div class="absolute inset-0 bg-black/40"></div>
    <div class="relative z-10 max-w-4xl text-center px-4 md:px-6">
      <h1 class="text-4xl md:text-6xl font-extrabold leading-tight text-[#00FF6A] drop-shadow-[0_0_10px_#00FF6A]">
        Welcome to Anargya ITS
      </h1>
      <p class="mt-4 text-lg md:text-xl text-[#E0E0E0]/90">
        Empowering the future of mobility through Anargya’s electric automotive innovation.
      </p>

      <div class="mt-12 flex justify-center">
        <a href="https://www.instagram.com/anargya.its?igsh=MWhtdWo3bW5ieGg0ag==" target="_blank" rel="noopener noreferrer"
        >
          <button
            class="explore-btn flex items-center gap-3 w-[150px] h-[52px] rounded-full text-[#131313] font-semibold bg-[#A1FF14] shadow-md pl-5 transition-all duration-500 hover:bg-[#C0FF14] active:scale-95"
          >
            <svg
              class="explore-icon h-[28px] transition-transform duration-[1500ms]"
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="currentColor"
                d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm50.7-186.9L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"
              />
            </svg>
            <span class="text-lg">Explore</span>
          </button>
        </a>
      </div>
    </div>
  </section>

  <section class="bg-[#0A0A0A] text-[#E0E0E0] min-h-[70vh] flex flex-col md:flex-row items-center justify-center px-4 md:px-16 py-16 gap-12">
      <div class="flex-1 flex justify-center items-center order-first md:order-first">
        <div class="loader"></div>
      </div>

      <div class="flex-1 text-center md:text-left space-y-4 order-last md:order-last">
        <h2 class="text-3xl md:text-5xl font-bold text-[#00FF6A] drop-shadow-[0_0_10px_#00FF6A]">
          Introduce Us
        </h2>
        <p class="text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto md:mx-0 text-justify">
        Anargya ITS is a student research team from Institut Teknologi Sepuluh Nopember (ITS) 
        that focuses on developing electric formula cars. The team designs, builds, and tests 
        its own electric vehicles to compete on the international stage at Formula Society of 
        Automotive Engineers (FSAE) Japan. The members are ITS students from various 
        departments who collaborate to design, assemble and test cars.        
      </p>
      </div>
  </section>

  <section
    class="bg-[#0A0A0A] text-[#E0E0E0] min-h-[80vh] flex flex-col items-center justify-center px-4 py-16"
  >
    <h2
      class=" text-3xl md:text-5xl font-bold text-[#00FF6A] mb-10 text-center drop-shadow-[0_0_10px_#00FF6A]"
    >
      3D Preview of Our Car
    </h2>

    <div
      class="w-full max-w-6xl aspect-video rounded-2xl overflow-hidden shadow-lg border border-[#1B1B1B]"
    >
      <iframe
        title="Anargya F1 Concept"
        class="w-full h-full"
        frameborder="0"
        allowfullscreen
        mozallowfullscreen="true"
        webkitallowfullscreen="true"
        allow="autoplay; fullscreen; xr-spatial-tracking"
        xr-spatial-tracking
        execution-while-out-of-viewport
        execution-while-not-rendered
        web-share
        src="https://sketchfab.com/models/057679fc5a32411fa7fd6e43c16badae/embed"
      ></iframe>
    </div>

    <p class="text-sm text-[#888] mt-4 text-center px-4">
      Model source by
      <a
        href="https://sketchfab.com/heynic"
        target="_blank"
        rel="nofollow"
        class="text-[#00FF6A] hover:underline"
        >vecarz</a
      >
      on
      <a
        href="https://sketchfab.com"
        target="_blank"
        rel="nofollow"
        class="text-[#00FF6A] hover:underline"
        >Sketchfab</a
      >
    </p>
  </section>

  <section
    class="bg-[#0A0A0A] text-[#E0E0E0] py-20 px-4 md:px-16 flex flex-col md:flex-row items-center justify-center md:gap-4 gap-12"
  >
    <div
      class="md:w-[48%] text-center md:text-left flex flex-col items-center md:items-start space-y-4 order-last md:order-first"
    >
      <h2 class="text-3xl md:text-5xl font-bold text-[#00FF6A] drop-shadow-[0_0_10px_#00FF6A]">
        Eco-Friendly Innovation
      </h2>
      <p class="text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto md:mx-0 text-justify">
        Anargya ITS is a student-led automotive team from Institut Teknologi Sepuluh Nopember 
        that focuses on developing electric race cars powered by clean energy. Through 
        innovation and precision engineering, the team strives to push the boundaries of 
        sustainable mobility while contributing to a greener future for the automotive world.
      </p>
    </div>

    <div class="tree-container md:w-[35%] flex justify-center mt-10 md:mt-0 order-first md:order-last">
      <div class="tree">
        <div class="branch" style="--x:0">
          <span style="--i:0;"></span>
          <span style="--i:1;"></span>
          <span style="--i:2;"></span>
          <span style="--i:3;"></span>
        </div>
        <div class="branch" style="--x:1">
          <span style="--i:0;"></span>
          <span style="--i:1;"></span>
          <span style="--i:2;"></span>
          <span style="--i:3;"></span>
        </div>
        <div class="branch" style="--x:2">
          <span style="--i:0;"></span>
          <span style="--i:1;"></span>
          <span style="--i:2;"></span>
          <span style="--i:3;"></span>
        </div>
        <div class="branch" style="--x:3">
          <span style="--i:0;"></span>
          <span style="--i:1;"></span>
          <span style="--i:2;"></span>
          <span style="--i:3;"></span>
        </div>
        <div class="stem">
          <span style="--i:0;"></span>
          <span style="--i:1;"></span>
          <span style="--i:2;"></span>
          <span style="--i:3;"></span>
        </div>
        <span class="shadow"></span>
      </div>
    </div>
  </section>

  <section class="bg-[#0A0A0A] py-16">
    <div class="max-w-full mx-auto px-4 text-center">
      <h2 class="text-4xl font-bold text-[#00FF6A] mb-10 drop-shadow-[0_0_10px_#00FF6A]">
        Cars Collection
      </h2>

      <div class="relative overflow-hidden rounded-2xl shadow-lg max-w-4xl mx-auto">
        <div
          class="flex transition-transform duration-700 ease-in-out"
          :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
        >
          <div
            v-for="(image, index) in images"
            :key="index"
            class="flex-shrink-0 w-full h-[300px] md:h-[500px] flex justify-center items-center bg-[#1B1B1B]"
          >
            <img
              :src="image"
              alt="Carousel Image"
              class="object-cover w-full h-full rounded-2xl"
            />
          </div>
        </div>

        <button
          @click="prevSlide"
          class="absolute top-1/2 left-3 transform -translate-y-1/2 bg-[#00FF6A]/20 hover:bg-[#00FF6A]/40 text-white p-2 md:p-3 rounded-full backdrop-blur-sm text-lg md:text-xl"
        >
          ‹
        </button>
        <button
          @click="nextSlide"
          class="absolute top-1/2 right-3 transform -translate-y-1/2 bg-[#00FF6A]/20 hover:bg-[#00FF6A]/40 text-white p-2 md:p-3 rounded-full backdrop-blur-sm text-lg md:text-xl"
        >
          ›
        </button>

        <div class="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
          <span
            v-for="(image, index) in images"
            :key="index"
            class="w-2 h-2 md:w-3 md:h-3 rounded-full cursor-pointer"
            :class="index === currentIndex ? 'bg-[#00FF6A]' : 'bg-gray-500'"
            @click="goToSlide(index)"
          ></span>
        </div>
      </div>
    </div>
  </section>

  <section class="bg-[#0A0A0A] py-12">
    <h2
      class="text-3xl md:text-4xl font-bold text-center text-[#00FF6A] mb-8 drop-shadow-[0_0_10px_#00FF6A]"
    >
      Our Sponsors
    </h2>

    <marquee
      behavior="scroll"
      direction="left"
      scrollamount="10"
      class="flex items-center space-x-10 md:space-x-20 overflow-hidden py-4"
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/9/97/Logo_PLN.png"
        alt="PLN"
        class="h-24 md:h-40 w-auto mx-5 md:mx-10 object-contain inline-block transition-transform duration-300 hover:scale-110"
      />
      <img
        src="https://www.rumahpromosi.co.id/wp-content/uploads/2019/11/logo-pertamina.png"
        alt="Pertamina"
        class="h-24 md:h-40 w-auto mx-5 md:mx-10 object-contain inline-block transition-transform duration-300 hover:scale-110"
      />
      <img
        src="https://images.seeklogo.com/logo-png/48/1/nippon-paint-logo-png_seeklogo-484086.png"
        alt="Nippon Paint"
        class="h-24 md:h-40 w-auto mx-5 md:mx-10 object-contain inline-block transition-transform duration-300 hover:scale-110"
      />
      <img
        src="https://esqtraining.com/wp-content/uploads/2020/10/Logo-Inalum-MIND-ID.png"
        alt="Inalum"
        class="h-24 md:h-40 w-auto mx-5 md:mx-10 object-contain inline-block transition-transform duration-300 hover:scale-110"
      />
      <img
        src="https://vectorseek.com/wp-content/uploads/2023/12/PT.-BUMA-Logo-Vector.svg-.png"
        alt="Buma"
        class="h-24 md:h-40 w-auto mx-5 md:mx-10 object-contain inline-block transition-transform duration-300 hover:scale-110"
      />
      <img
        src="https://simbelmawa.kemdikbud.go.id/v2/static/media/simbelmawa.44182aeb.png"
        alt="Simbelmawa"
        class="h-24 md:h-40 w-auto mx-5 md:mx-10 object-contain inline-block transition-transform duration-300 hover:scale-110"
      />
      <img
        src="https://mpsoft.fi/wp-content/uploads/2022/11/Solidworks_logo.png"
        alt="Sponsor 7"
        class="h-24 md:h-40 w-auto mx-5 md:mx-10 object-contain inline-block transition-transform duration-300 hover:scale-110"
      />
    </marquee>
  </section>

 <BackToTop />
</template>

<script setup>
import { computed, ref } from 'vue'
import BackToTop from "../components/BacktoTop.vue";

const bgImage = ref('https://www.its.ac.id/news/wp-content/uploads/sites/2/2024/07/Purwarupa-mobil-listrik-Tim-Anargya-ITS-yang-berhasil-meraih-juara-1-pada-kompetisi-Formula-Bharat-Pi-EV-2024.jpg') 

const backgroundStyle = computed(() => ({
  backgroundImage: bgImage.value
    ? `url(${bgImage.value})`
    : 'linear-gradient(135deg, #0A0A0A 0%, #1B1B1B 100%)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
}))

const images = ref([
  "https://www.its.ac.id/news/wp-content/uploads/sites/2/2024/08/Mobil-Anargya-Formula-EV-Mark-4.0-yang-akan-berlaga-pada-Formula-Society-of-Automotive-Engineers-FSAE-Japan-2024.jpg",
  "https://www.its.ac.id/news/wp-content/uploads/sites/2/2023/08/Purwarupa-mobil-listrik-dari-Tim-Anargya-ITS-yang-dilombakan-dalam-Formula-Bharat-7th-Annual-FSEV-Concept-Challenge-Pi-EV-2023-secara-daring.jpeg",
  "https://www.its.ac.id/news/wp-content/uploads/sites/2/2019/03/91d863ce-3cde-412f-826a-af48e994ba7a.jpg",
  "https://liputanbangsa.com/wp-content/uploads/2023/08/ototrend.jpg",
  "https://www.its.ac.id/news/wp-content/uploads/sites/2/2023/08/Mobil-Anargya-EV-Mark-3.0-yang-akan-bertanding-pada-ajang-FSAE-Japan-2023-di-Shizouka-Jepang-pada-28-Agustus-%E2%80%93-2-September-2023-mendatang.jpg"
]);

const currentIndex = ref(0);

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % images.value.length;
};

const prevSlide = () => {
  currentIndex.value =
    (currentIndex.value - 1 + images.value.length) % images.value.length;
};

const goToSlide = (index) => {
  currentIndex.value = index;
};
</script>

<style scoped>
.explore-btn:hover .explore-icon {
  transform: rotate(250deg);
}

.loader {
  position: relative;
  width: 120px;
  height: 90px;
  margin: 0 auto;
  transform: scale(0.8); 
}

@media (min-width: 768px) { 
  .loader {
    transform: scale(1); 
  }
}

.loader:before {
  content: "";
  position: absolute;
  bottom: 30px;
  left: 50px;
  height: 30px;
  width: 30px;
  border-radius: 50%;
  background: #00ff6a;
  animation: loading-bounce 0.5s ease-in-out infinite alternate;
}

.loader:after {
  content: "";
  position: absolute;
  right: 0;
  top: 0;
  height: 7px;
  width: 45px;
  border-radius: 4px;
  box-shadow: 0 5px 0 #e0e0e0, -35px 50px 0 #e0e0e0, -70px 95px 0 #e0e0e0;
  animation: loading-step 1s ease-in-out infinite;
}

/* Animasi melompat */
@keyframes loading-bounce {
  0% {
    transform: scale(1, 0.7);
  }
  40% {
    transform: scale(0.8, 1.2);
  }
  60% {
    transform: scale(1, 1);
  }
  100% {
    bottom: 140px;
  }
}

/* Animasi langkah */
@keyframes loading-step {
  0% {
    box-shadow: 0 10px 0 rgba(0, 0, 0, 0), 0 10px 0 #e0e0e0,
      -35px 50px 0 #e0e0e0, -70px 90px 0 #e0e0e0;
  }
  100% {
    box-shadow: 0 10px 0 #e0e0e0, -35px 50px 0 #e0e0e0,
      -70px 90px 0 #e0e0e0, -70px 90px 0 rgba(0, 0, 0, 0);
  }
}

@keyframes carGlowPulse {
  0%, 100% {
    text-shadow: 0 0 8px #00ff6a, 0 0 20px #00ff6a;
  }
  50% {
    text-shadow: 0 0 4px #00ff6a, 0 0 10px #00ff6a;
  }
}

@keyframes glowPulse {
  0%, 100% {
    text-shadow: 0 0 10px #00ff6a, 0 0 20px #00ff6a;
  }
  50% {
    text-shadow: 0 0 5px #00ff6a, 0 0 10px #00ff6a;
  }
}

.eco-section-title {
  text-shadow: 0 0 10px #00ff6a, 0 0 20px #00ff6a;
  animation: glowPulse 3s infinite ease-in-out;
}

@keyframes glowPulse {
  0%, 100% {
    text-shadow: 0 0 10px #00ff6a, 0 0 20px #00ff6a;
  }
  50% {
    text-shadow: 0 0 5px #00ff6a, 0 0 10px #00ff6a;
  }
}

.tree-container {
  display: flex;
  justify-content: center;
  align-items: center;
  perspective: 800px;
}

.tree {
  position: relative;
  width: 50px;
  height: 50px;
  transform-style: preserve-3d;
  transform: rotateX(-20deg) rotateY(30deg);
  animation: treeAnimate 5s linear infinite;
  transform: scale(0.7); 
}

@media (min-width: 768px) { 
  .tree {
    transform: rotateX(-20deg) rotateY(30deg) scale(1); 
  }
}


@keyframes treeAnimate {
  0% {
    transform: rotateX(-20deg) rotateY(360deg);
  }
  100% {
    transform: rotateX(-20deg) rotateY(0deg);
  }
}

.tree div {
  position: absolute;
  top: -50px;
  left: 0;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transform: translateY(calc(25px * var(--x))) translateZ(0px);
}

.tree div.branch span {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, #69c069, #77dd77);
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
  border-bottom: 5px solid #00000019;
  transform-origin: bottom;
  transform: rotateY(calc(90deg * var(--i))) rotateX(30deg) translateZ(28.5px);
}

.tree div.stem span {
  position: absolute;
  top: 110px;
  left: calc(50% - 7.5px);
  width: 15px;
  height: 50%;
  background: linear-gradient(90deg, #bb4622, #df7214);
  border-bottom: 5px solid #00000019;
  transform-origin: bottom;
  transform: rotateY(calc(90deg * var(--i))) translateZ(7.5px);
}

.shadow {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  filter: blur(20px);
  transform-style: preserve-3d;
  transform: rotateX(90deg) translateZ(-65px);
}

marquee img {
  display: inline-block;
  vertical-align: middle;
  transition: transform 0.3s ease-in-out;
}
marquee img:hover {
  transform: scale(1.1);
}
</style>