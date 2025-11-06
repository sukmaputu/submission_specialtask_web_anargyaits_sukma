<template>
  <div class="card">
    <div class="card-inner">
      <div class="card-front">
        <img :src="image" alt="Card Image" class="w-full h-full object-cover rounded-lg" />
      </div>
      <div class="card-back">
        <p>{{ title }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  image: { type: String, required: true },
  title: { type: String, required: true }
});
</script>

<style scoped>
.card {
  width: 300px;
  height: 200px;
  perspective: 1000px;
}

.card-inner {
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.9s;
}

.card:hover .card-inner {
  transform: rotateY(180deg);
}

.card-front,
.card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 10px;
}

.card-front {
  background-color: #1B1B1B; /* Border / secondary accent */
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #00FF6A;
  overflow: hidden;
}

.card-back {
  background-color: #FF1744; 
  color: #E0E0E0; 
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: 600;
  transform: rotateY(180deg);
  border: 2px solid #FF1744;
}
</style>


