<template>
  <div class="about">
    <h1>ℹ️ About</h1>
    <p>Đây là trang About.</p>
    <button @click="goBack">← Quay lại</button>
  </div>
</template>

<script>
export default {
  methods: {
    goBack() {
      // lùi router
      this.$router.back()
    }
  }
}
</script>
