<template>
  <div id="app">
    <nav style="padding:10px; background:#eee">
      <a href="#/"    style="margin-right:10px">Home</a>
      <a href="#/about">About</a>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default { name: 'App' }
</script>
