<template>
  <div class="bg-[#0A0A0A] min-h-screen py-16 text-[#E0E0E0]">
    <div class="max-w-7xl mx-auto px-6">

      <h1
        class="text-4xl md:text-5xl font-bold text-center mb-4 drop-shadow-[0_0_10px_#00FF6A]"
      >
        Our Team
      </h1>
      <p class="text-center text-gray-400 mb-12">
        Anargya ITS pioneers innovation in electric and outomotive vehicle technology.
      </p>

      <section class="mb-20">
        <h2
          class="text-2xl font-semibold mb-6 text-center inline-block px-6 pb-2"
        >
          General Manager
        </h2>

        <div
          class="flex justify-center gap-8 flex-wrap"
        >
          <div
            v-for="(member, index) in generalManager"
            :key="index"
            class="bg-[#1B1B1B] border border-[#FFD600]/50 rounded-2xl p-6 text-center shadow-lg hover:shadow-[0_0_15px_#FFD600] hover:-translate-y-1 transition-all duration-300 w-full max-w-xs"
          >
            <img
              :src="member.image"
              alt="member photo"
              class="w-28 h-28 mx-auto rounded-full mb-4 object-cover border-2 border-[#FFD600]"
            />
            <h3 class="text-lg font-bold text-[#FFD600]">
              {{ member.name }}
            </h3>
            <p class="text-sm text-gray-400 mb-1">{{ member.division }}</p>
            <p class="text-sm text-gray-500">{{ member.major }}</p>
          </div>
        </div>
      </section>

      <section class="mb-20">
        <h2
          class="text-2xl font-semibold mb-6 text-center  inline-block px-6 pb-2"
        >
          Technical Team
        </h2>

        <div
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center"
        >
          <div
            v-for="(member, index) in technicalTeam"
            :key="index"
            class="bg-[#1B1B1B] border border-[#00FF6A]/30 rounded-2xl p-6 text-center shadow-lg hover:shadow-[0_0_15px_#00FF6A] hover:-translate-y-1 transition-all duration-300 w-full max-w-xs"
          >
            <img
              :src="member.image"
              alt="member photo"
              class="w-28 h-28 mx-auto rounded-full mb-4 object-cover border-2 border-[#00FF6A]"
            />
            <h3 class="text-lg font-bold text-[#00FF6A]">
              {{ member.name }}
            </h3>
            <p class="text-sm text-gray-400 mb-1">{{ member.division }}</p>
            <p class="text-sm text-gray-500">{{ member.major }}</p>
          </div>
        </div>
      </section>

      <section>
        <h2
          class="text-2xl font-semibold mb-6 text-center  inline-block px-6 pb-2"
        >
          Non-Technical Team
        </h2>

        <div
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center mb-10"
        >
          <div
            v-for="(member, index) in nonTechnicalTeam.slice(0, 4)"
            :key="index"
            class="bg-[#1B1B1B] border border-[#FF1744]/40 rounded-2xl p-6 text-center shadow-lg hover:shadow-[0_0_15px_#FF1744] hover:-translate-y-1 transition-all duration-300 w-full max-w-xs"
          >
            <img
              :src="member.image"
              alt="member photo"
              class="w-28 h-28 mx-auto rounded-full mb-4 object-cover border-2 border-[#FF1744]"
            />
            <h3 class="text-lg font-bold text-[#FF1744]">
              {{ member.name }}
            </h3>
            <p class="text-sm text-gray-400 mb-1">{{ member.division }}</p>
            <p class="text-sm text-gray-500">{{ member.major }}</p>
          </div>
        </div>

        <div class="flex justify-center gap-8 flex-wrap">
          <div
            v-for="(member, index) in nonTechnicalTeam.slice(4)"
            :key="'bottom-' + index"
            class="bg-[#1B1B1B] border border-[#FF1744]/40 rounded-2xl p-6 text-center shadow-lg hover:shadow-[0_0_15px_#FF1744] hover:-translate-y-1 transition-all duration-300 w-full max-w-xs"
          >
            <img
              :src="member.image"
              alt="member photo"
              class="w-28 h-28 mx-auto rounded-full mb-4 object-cover border-2 border-[#FF1744]"
            />
            <h3 class="text-lg font-bold text-[#FF1744]">
              {{ member.name }}
            </h3>
            <p class="text-sm text-gray-400 mb-1">{{ member.division }}</p>
            <p class="text-sm text-gray-500">{{ member.major }}</p>
          </div>
        </div>
      </section>
    </div>
  </div>

  <BackToTop />
</template>

<script setup>
import BackToTop from "../components/BacktoTop.vue";

const generalManager = [
  {
    name: "Rifqi Hidayatullah",
    division: "General Manager",
    major: "Physics Eng.",
    image: "https://plus.unsplash.com/premium_photo-1727942419945-1908baae3c8e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFsZSUyMG1vZGVsfGVufDB8fDB8fHww&fm=jpg&q=60&w=3000",
  },
  {
    name: "Alya Rahmawati",
    division: "Vice General Manager",
    major: "Mechanical Eng.",
    image: "https://assets.vogue.com/photos/5f1706c03a186c2bfadbd82c/master/w_2560%2Cc_limit/00_story.jpg",
  },
];

const technicalTeam = [
  { name: "William Noah Marthin", division: "Tractive System & Controller", major: "Electrical Eng.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9RAJCq0yoMatEaCo48lr4IZilkwr3f2uX8xcVGUEqJgr2jLCO3uN1iCfnwatWG42bpw4&usqp=CAU" },
  { name: "Robi Exsaudi", division: "Electro Programming & Safety System", major: "Electrical Eng.", image: "https://sb.kaleidousercontent.com/67418/1920x1545/c5f15ac173/samuel-raita-ridxdghg7pw-unsplash.jpg" },
  { name: "Najib Al Zabir", division: "Enclosure & Thermal Management", major: "Electrical Eng.", image: "https://t4.ftcdn.net/jpg/04/31/64/75/360_F_431647519_usrbQ8Z983hTYe8zgA7t1XVc5fEtqcpa.jpg" },
  { name: "Khansa Arkha", division: "Vehicle Dynamics", major: "Electrical Eng.", image: "https://media.istockphoto.com/id/925856562/photo/young-man-portrait-on-grey.jpg?s=612x612&w=0&k=20&c=pL4PYBNgC6MfMzwJzs2y9-Ti5OAWoIu_e0b3Lpy1bjQ=" },
  { name: "Reihan Rizky", division: "Chasis & Structural Integrity", major: "Metalurgy Eng.", image: "https://media.istockphoto.com/id/1045886560/photo/portrait-of-smiling-handsome-man-in-blue-t-shirt-standing-with-crossed-arms-isolated-on-grey.jpg?s=612x612&w=0&k=20&c=TX1-1UJ3PKonFEmgs_WDZf7wtfqKVMHYjeRaYjaZ1Rc=" },
  { name: "Bagus Wicaksono", division: "Aerodiynamics & Composite", major: "Metalurgy Eng.", image: "https://media.istockphoto.com/id/1490616319/photo/portrait-of-pleased-young-man.jpg?s=612x612&w=0&k=20&c=7iD2RLSqEvdE7uTWskQNw8WzCa45o_OInwmdz6pLgGY=" },
  { name: "Andrian Prakoso", division: "Motor & Drivetrain", major: "Mechanical Eng.", image: "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&fm=jpg&q=60&w=3000" },
  { name: "Zulfiah Hermana", division: "Construction", major: "Mechanical Eng.", image: "https://media.istockphoto.com/id/1326417862/photo/young-woman-laughing-while-relaxing-at-home.jpg?s=612x612&w=0&k=20&c=cd8e6RBGOe4b8a8vTcKW0Jo9JONv1bKSMTKcxaCra8c=" },
];

const nonTechnicalTeam = [
  { name: "Dhinkara Yumna", division: "Finance", major: "Computer Science.", image: "https://plus.unsplash.com/premium_photo-1689977807477-a579eda91fa2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&fm=jpg&q=60&w=3000" },
  { name: "Azella Permata", division: "Creative", major: "Computer Science.", image: "https://media.istockphoto.com/id/1418260625/photo/headshot-portrait-beautiful-african-teenage-girl-posing-standing-indoor.jpg?s=612x612&w=0&k=20&c=RRaViSHTM-PPxBH_SmXGovajB6UJ5LDxk6AHfowDYI4=" },
  { name: "Silvia Nara", division: "Branding", major: "Visual Art.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHYM0Ch0kk7nYkcya6guzrsjz2vJMTgWvgXA&s" },
  { name: "Michaela Putri", division: "Public Relations", major: "Visual Art.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2gOf2damwBbytxOu2WYAwqNPuujQu29eWLP1ey3XBLy6XtaF9QT4q4rXsQuJOvhIioKI&usqp=CAU" },
  { name: "Farhan Dwi", division: "Marketing", major: "Economics.", image: "https://img.freepik.com/free-photo/selfie-portrait-videocall_23-2149186122.jpg?semt=ais_hybrid&w=740&q=80" },
  { name: "Laras Ayu", division: "Event Coordinator", major: "Economics.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUmOy1mjZc4-n5PfmbNy83uWFVCbLbSXgy2w&s" },
];
</script>

<style scoped>
h1,
h2 {
  text-transform: uppercase;
  letter-spacing: 2px;
}
</style>
