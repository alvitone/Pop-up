<template>
  <Teleport to="body">
    <transition name="fade">
      <div v-if="isOpen" class="popup-overlay" @click="$emit('close')">
        <div class="popup-content" @click.stop>
          <button class="close-btn" @click="$emit('close')">×</button>
          <h2>Popup Title</h2>
          <p>This is a simple popup component!</p>
          <button class="confirm-btn" @click="$emit('close')">Got it!</button>
        </div>
      </div>
    </transition>
  </Teleport>
</template>

<script>
export default {
  props: { isOpen: Boolean },
  emits: ["close"],
};
</script>

<style scoped>
/* paste the styles from the original Popup.vue */
</style>
