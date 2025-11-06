<template>
  <div class="loader-container">
    <div class="truckWrapper">
      <div class="truckBody">
        <svg viewBox="0 0 200 80" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="30" width="100" height="30" rx="5" ry="5" fill="#00FF6A" />
          <rect x="110" y="40" width="60" height="20" rx="5" ry="5" fill="#FF1744" />
          <rect x="30" y="20" width="40" height="10" rx="3" ry="3" fill="#E0E0E0" />
        </svg>
      </div>

      <div class="truckTires">
        <svg class="tire" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" fill="#1B1B1B" stroke="#E0E0E0" stroke-width="2" />
          <circle cx="12" cy="12" r="4" fill="#00FF6A" />
        </svg>
        <svg class="tire" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" fill="#1B1B1B" stroke="#E0E0E0" stroke-width="2" />
          <circle cx="12" cy="12" r="4" fill="#00FF6A" />
        </svg>
      </div>

      <!-- Jalan -->
      <div class="road"></div>

      <!-- Tiang lampu -->
      <svg class="lampPost" viewBox="0 0 10 100">
        <rect x="4" y="0" width="2" height="100" fill="#E0E0E0" />
      </svg>
    </div>

    <!-- Animasi tulisan Loading -->
    <p class="loading-text">
      Loading<span class="dot">.</span><span class="dot">.</span><span class="dot">.</span>
    </p>
  </div>
</template>

<script setup>
</script>

<style scoped>
:root {
  --bg-color: #0a0a0a;
  --green: #00ff6a;
  --red: #ff1744;
  --text: #e0e0e0;
  --border: #1b1b1b;
}

.loader-container {
  width: 100vw;
  height: 100vh;
  background-color: var(--bg-color);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.truckWrapper {
  width: 200px;
  height: 100px;
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  justify-content: flex-end;
  overflow: hidden;
}

.truckBody {
  width: 130px;
  animation: motion 0.6s ease-in-out infinite;
}
@keyframes motion {
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(5px) rotate(1deg);
  }
}

.truckTires {
  width: 130px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px 0 15px;
  position: absolute;
  bottom: 0;
}
.tire {
  width: 24px;
  height: 24px;
  animation: spin 0.5s linear infinite;
}
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.road {
  width: 100%;
  height: 2px;
  background-color: #282828;
  position: relative;
  bottom: 0;
  align-self: flex-end;
  border-radius: 3px;
}
.road::before,
.road::after {
  content: "";
  position: absolute;
  height: 100%;
  background-color: #282828;
  border-radius: 3px;
  animation: roadAnimation 3s linear infinite;
}
.road::before {
  width: 20px;
  right: -50%;
  border-left: 10px solid white;
}
.road::after {
  width: 10px;
  right: -65%;
  border-left: 4px solid white;
}

.lampPost {
  position: absolute;
  bottom: 0;
  right: -80%;
  height: 90px;
  animation: roadAnimation 3s linear infinite;
}
@keyframes roadAnimation {
  0% {
    transform: translateX(0px);
  }
  100% {
    transform: translateX(-350px);
  }
}

.loading-text {
  margin-top: 30px;
  font-size: 20px;
  font-weight: 600;
  color: var(--text);
  letter-spacing: 2px;
  display: flex;
  align-items: center;
  gap: 2px;
  text-shadow: 0 0 8px #00ff6a;
}

.dot {
  animation: blink 1.4s infinite;
}

.dot:nth-child(1) {
  animation-delay: 0.2s;
}
.dot:nth-child(2) {
  animation-delay: 0.4s;
}
.dot:nth-child(3) {
  animation-delay: 0.6s;
}

@keyframes blink {
  0%, 80%, 100% {
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
}
</style>
