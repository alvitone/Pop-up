<template>
  <div class="app-container">
    <h1>Vue Popup Demo</h1>
    <button @click="openPopup" class="btn">Open Popup</button>
    <Popup :isOpen="popupOpen" @close="closePopup" />
  </div>
</template>

<script>
import { ref } from "vue";
import Popup from "./components/Popup.vue";

export default {
  components: {
    Popup,
  },
  setup() {
    const popupOpen = ref(false);

    const openPopup = () => {
      popupOpen.value = true;
    };

    const closePopup = () => {
      popupOpen.value = false;
    };

    return {
      popupOpen,
      openPopup,
      closePopup,
    };
  },
};
</script>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

h1 {
  color: white;
  margin-bottom: 2rem;
  font-size: 2.5rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.btn {
  padding: 12px 32px;
  font-size: 16px;
  font-weight: bold;
  color: white;
  background-color: #ff6b6b;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.btn:hover {
  background-color: #ff5252;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
}

.btn:active {
  transform: translateY(0);
}
</style>
