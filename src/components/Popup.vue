<template>
  <Teleport to="body">
    <transition name="fade">
      <div v-if="isOpen" class="popup-overlay" @click="$emit('close')">
        <div class="popup-content" @click.stop>
          <button class="close-btn" @click="$emit('close')">×</button>
          <h2>Popup Title</h2>
          <p>
            This is a simple popup component! Click outside or the close button
            to dismiss it.
          </p>
          <button class="confirm-btn" @click="$emit('close')">Got it!</button>
        </div>
      </div>
    </transition>
  </Teleport>
</template>

<script>
export default {
  props: {
    isOpen: {
      type: Boolean,
      required: true,
    },
  },
  emits: ["close"],
};
</script>

<style scoped>
.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.popup-content {
  background-color: white;
  border-radius: 12px;
  padding: 2rem;
  max-width: 500px;
  width: 90%;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
  position: relative;
  animation: slideIn 0.3s ease-out;
}

@keyframes slideIn {
  from {
    transform: translateY(-50px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 28px;
  cursor: pointer;
  color: #666;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  transition: all 0.2s ease;
}

.close-btn:hover {
  background-color: #f0f0f0;
  color: #000;
}

h2 {
  margin: 0 0 1rem 0;
  color: #333;
  font-size: 1.5rem;
}

p {
  color: #666;
  margin: 0 0 1.5rem 0;
  line-height: 1.6;
}

.confirm-btn {
  padding: 10px 24px;
  font-size: 14px;
  font-weight: bold;
  color: white;
  background-color: #667eea;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
}

.confirm-btn:hover {
  background-color: #5568d3;
  transform: translateY(-1px);
}

.confirm-btn:active {
  transform: translateY(0);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
