<template>
  <div class="home">
    <h1>🏠 Home</h1>
    <p>Đây là trang Home.</p>
    <button @click="goAbout">→ Đi About</button>
  </div>
</template>

<script>
export default {
  methods: {
    goAbout() {
      this.$router.push('/about')
    }
  }
}
</script>
