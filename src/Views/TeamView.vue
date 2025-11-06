<template>
  <section
    class="relative bg-[#0A0A0A] text-[#E0E0E0] overflow-hidden flex flex-col items-center justify-center text-center py-24 md:py-32"
  >
    <div
      class="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-[#0F0F0F] to-[#0A0A0A] opacity-90"
    ></div>
    <div
      class="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,255,106,0.15)_0%,_transparent_70%)]"
    ></div>

    <div class="relative z-10 px-6 max-w-4xl flex flex-col items-center">
      <h1
        class="text-4xl md:text-6xl font-bold mb-6 drop-shadow-[0_0_15px_#00FF6A]"
      >
        Meet the Minds Behind <span class="text-[#00FF6A]">Anargya ITS</span>
      </h1>

      <p class="text-gray-400 text-base md:text-lg mb-10 leading-relaxed max-w-2xl">
        We are a student team from Institut Teknologi Sepuluh Nopember dedicated to 
        advancing electric vehicle technology through innovation and sustainable engineering.
      </p>

      <div class="flex justify-center">
        <a href="https://www.instagram.com/anargya.its?igsh=MWhtdWo3bW5ieGg0ag==" target="_blank" rel="noopener noreferrer">
          <button class="animated-button">
            <svg viewBox="0 0 24 24" class="arr-2" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
              ></path>
            </svg>
            <span class="text">Explore Our Team</span>
            <span class="circle"></span>
            <svg viewBox="0 0 24 24" class="arr-1" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
              ></path>
            </svg>
          </button>
        </a>
      </div>
    </div>

    <div
      class="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-[#00FF6A]/60 to-transparent"
    ></div>
  </section>

    <section class="bg-[#0A0A0A] text-[#E0E0E0] py-20">
    <div class="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center md:items-start gap-10">
      
      <div class="md:w-1/2 flex justify-center md:justify-start">
        <img 
          src="https://www.its.ac.id/news/wp-content/uploads/sites/2/2023/08/Tim-Anargya-ITS-dengan-kode-tim-E01-yang-berkompetisi-dalam-Formula-Bharat-7th-Annual-FSEV-Concept-Challenge-Pi-EV-2023-yang-digelar-secara-daring-di-India.jpeg" 
          alt="Anargya ITS Team" 
          class="rounded-xl shadow-xl max-w-full h-auto object-cover"
        />
      </div>

      <div class="md:w-1/2">
        <h2 class="text-3xl md:text-4xl font-bold mb-4 text-[#00FF6A]">
          About Anargya ITS
        </h2>
        <p class="text-gray-400 text-base md:text-lg leading-relaxed text-justify">
          Established in September 2018, Anargya ITS focuses on developing and building 
          electric race cars. As part of the Automotive Control System Excellence Center 
          (PUI-SKO) at Institut Teknologi Sepuluh Nopember, the team is creating an electric 
          formula car designed for performance and innovation. While still in development, 
          the car is expected to be ready for driving soon.
        </p>
      </div>
    </div>
  </section>


  <section class="bg-[#0A0A0A] py-20 text-[#E0E0E0]">
    <div class="max-w-7xl mx-auto px-6">
      <h2 class="text-3xl md:text-4xl font-bold mb-10 text-[#00FF6A] text-center">
        Our Team Division
      </h2>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
        <FlipCard 
          image="https://polmed.ac.id/wp-content/uploads/2021/12/electricalEngineer_P.jpeg" 
          title="Electrical" 
        />
        <FlipCard 
          image="https://2652995.fs1.hubspotusercontent-na1.net/hubfs/2652995/Automotive%20Technician%20Tool%20Box.jpeg" 
          title="Mechanical" 
        />
        <FlipCard 
          image="https://law.ugm.ac.id/wp-content/uploads/sites/9/2022/07/Administrative-Law.jpg" 
          title="Non-Technical" 
        />
      </div>
    </div>
  </section>

    <section class="bg-[#0A0A0A] text-[#E0E0E0] py-20">
    <div class="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
      
      <div 
        class="md:w-1/2 flex flex-col justify-center text-center md:text-left"
      >
        <h2 class="text-3xl md:text-4xl font-bold mb-4 text-[#00FF6A]">
          Visit Us
        </h2>
        <p class="text-gray-400 text-lg mb-2 text-justify">
          Address: Anargya ITS Team Office and Workshop
          Gedung Riset Mobil Listrik ITS,
          Gedung Riset Mobil Listrik ITS, Jl. Teknik Sipil No.2, Keputih, Sukolilo, Kota SBY, Jawa Timur 60111
          Jl. Teknik Sipil No.2, Keputih, Sukolilo, Kota SBY, Jawa Timur 60111

        </p>
        <p class="text-gray-400 text-lg mb-4">
          Province: Jawa Timur
        </p>
        <p class="text-[#00FF6A] font-semibold text-lg">
          Come and visit our secretariat to explore the world of Anargya ITS EV Team!
        </p>
      </div>

      <div 
        class="md:w-1/2 w-full h-80 md:h-96 rounded-lg overflow-hidden shadow-lg"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.5707367038162!2d112.7961921!3d-7.289581699999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fbc4896a14d5%3A0x9945af36f3c4ab28!2sSekretariat%20Anargya%20ITS%20EV%20Team!5e0!3m2!1sid!2sid!4v1762270185489!5m2!1sid!2sid"
          class="w-full h-full border-0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

    </div>
  </section>

      
    
  <section class="bg-[#0A0A0A] p-10 flex flex-col md:flex-row justify-around items-center border-b-2 border-[#1B1B1B]">
      <div class="flex-1 md:mr-5 mb-8 md:mb-0">
          <h2 class="text-3xl md:text-4xl font-bold mb-4 text-[#00FF6A]">Subscribe Our Channel</h2>
          <div class="bg-[#1B1B1B] p-4 rounded-lg border">
              <iframe width="100%" height="315" src="https://www.youtube.com/embed/egPF3TipNLU?si=yQfVkwSZjMiRnc3j" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen class="rounded-md"></iframe>
          </div>
      </div>
      <div class="flex-1 md:ml-5">
          <p class="text-gray-400 text-base text-lg leading-relaxed text-justify">
              The Tim Anargya ITS has a remarkable track record of success, including securing 1st place at the Formula Bharat 8th Annual FSEV Concept Challenge Pi-EV 2024. They have also consistently performed well at FSAE Japan, maintaining a Top 10 EV Class position in 2024 and earning the Public Relation Award and 2nd place in the Presentation Event in 2025.
              <br><br>
              Beyond their competitive achievements, Tim Anargya ITS is dedicated to public education. They are the only student research team to participate in major automotive exhibitions such as GIIAS and IIMS, demonstrating Indonesia’s dedication to advancing electric vehicle technology on a global scale.
          </p>
      </div>
  </section>

  
  <section class="bg-[#0A0A0A] text-[#E0E0E0] py-16">
    <div class="max-w-7xl mx-auto px-6">

      <h2
        class="text-4xl md:text-5xl font-bold text-center mb-10 drop-shadow-[0_0_15px_#00FF6A]"
      >
        Gallery <span class="text-[#00FF6A]">Anargya</span>
      </h2>

      <p class="text-center text-gray-400 mb-12 max-w-3xl mx-auto">
        See the moments that capture our journey in developing electric vehicle innovations 
        and our dedication in national and international competitions.
      </p>

      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
      >
        <div
          v-for="(image, index) in gallery"
          :key="index"
          class="relative group overflow-hidden rounded-2xl shadow-lg bg-[#1a1a1a] flex items-center justify-center"
        >
          <template v-if="image.src">
            <img
              :src="image.src"
              :alt="image.alt"
              class="gallery-img w-full h-64 object-cover transform group-hover:scale-110 transition-all duration-500 ease-in-out"
            />
            <div
              class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center"
            >
              <p class="text-[#00FF6A] font-semibold text-lg text-center px-2">
                {{ image.caption }}
              </p>
            </div>
          </template>

          <template v-else>
            <div
              class="w-full h-64 flex flex-col items-center justify-center text-gray-500 text-lg font-medium"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-12 w-12 mb-2 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 5h18M3 10h18M3 15h18M3 20h18"
                />
              </svg>
              Coming Soon
            </div>
          </template>
        </div>
      </div>
    </div>
  </section>

  <BackToTop />
</template>

<style scoped>
.animated-button {
  position: relative;
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 16px 36px;
  border: 4px solid transparent;
  font-size: 16px;
  background-color: #0A0A0A;
  border-radius: 100px;
  font-weight: 600;
  color: #00FF6A;
  box-shadow: 0 0 0 2px #00FF6A;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
}

.animated-button svg {
  position: absolute;
  width: 24px;
  fill: #00FF6A;
  z-index: 9;
  transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
}

.animated-button .arr-1 {
  right: 16px;
}

.animated-button .arr-2 {
  left: -25%;
}

.animated-button .circle {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 20px;
  height: 20px;
  background-color: #00FF6A;
  border-radius: 50%;
  opacity: 0;
  transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
}

.animated-button .text {
  position: relative;
  z-index: 1;
  transform: translateX(-12px);
  transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
}

.animated-button:hover {
  box-shadow: 0 0 0 12px transparent;
  color: #0A0A0A;
  border-radius: 12px;
}

.animated-button:hover .arr-1 {
  right: -25%;
}

.animated-button:hover .arr-2 {
  left: 16px;
}

.animated-button:hover .text {
  transform: translateX(12px);
}

.animated-button:hover svg {
  fill: #0A0A0A;
}

.animated-button:active {
  scale: 0.95;
  box-shadow: 0 0 0 4px #00FF6A;
}

.animated-button:hover .circle {
  width: 220px;
  height: 220px;
  opacity: 1;
}
.gallery-img {
  transition: transform 0.4s ease, filter 0.4s ease;
}
</style>

<script setup>
import BackToTop from "../components/BacktoTop.vue";
const gallery = [
  {
    src: "https://www.its.ac.id/news/wp-content/uploads/sites/2/2024/09/Mobil-besutan-tim-Anargya-ITS-Anargya-EV-Mark-4.0-yang-diperiksa-oleh-juri-FSAE-Japan-2024-pada-tahap-EV-Inspection.jpg",
    alt: "Pengujian kendaraan di track",
    caption: "Vehicle Inspections",
  },
  {
    src: "https://www.its.ac.id/news/wp-content/uploads/sites/2/2024/08/1-2.jpg",
    alt: "Tim Anargya ITS",
    caption: "Anargya ITS Team with Their Latest Prototype",
  },
  {
    src: "https://static.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/p1/1061/2024/09/18/ITS-Anargya-1-3762895036.jpeg",
    alt: "",
    caption: "Track Testing",
  },
  {
    src: "https://www.suarasurabaya.net/wp-content/uploads/2023/09/DriverTimAnargyaITSDhaifanWiraLaksonodariDepartemenTeknikElektroITSsaatmengendaraimobilAnargyaEVMark3.0siapberlagadiFSAEJapan2023_copy_1280x720.jpg-840x493.webp",
    alt: "",
    caption: "Race Launch on the Track",
  },
  {
    src: "https://www.its.ac.id/news/wp-content/uploads/sites/2/2024/07/Salah-satu-anggota-Tim-Anargya-ITS-kiri-saat-memberikan-pemaparan-kepada-pengunjung-GIIAS-2024.jpg",
    alt: "",
    caption: "Open Booth at GIIAS 2024",
  },
  {
    src: "https://www.its.ac.id/news/wp-content/uploads/sites/2/2025/09/Screenshot-2025-09-15-203310.jpg",
    alt: "",
    caption: "Presentation Sesion",
  },
  {
    src: "https://images.genpi.co/resize/1280x860-100/uploads/jatim/arsip/normal/2021/12/09/dari-kiri-mobil-anargya-mark-20-antasena-hydra-nogogeni-qgw5.webp",
    alt: "",
    caption: "Exhibition at GIIAS 2024",
  },
  {
    src: "https://suarajatimpost.com/uploads/images/202408/image_870x_66c805cd9d1ac.webp",
    alt: "",
    caption: "FSAE Japan 2024",
  },
];
import FlipCard from '../components/FlipCard.vue'
</script>