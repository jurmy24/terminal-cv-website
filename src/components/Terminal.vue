<template>
  <div class="terminal-side">
    <pre>Last login: {{ currentDate }} on random computer</pre>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentDate: new Date().toLocaleString()
    }
  }
}
</script>

<style scoped>
.terminal-side {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 50vw;
  background-color: black;
  color: white;
  padding: 1rem;
  font-family: monospace;
  font-size: 14px;
}
</style>
