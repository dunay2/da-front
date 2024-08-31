<template>
  <div id="app">
    <CanvasMain />
  </div>
</template>

<script>
import CanvasMain from './components/CanvasMain.vue';

export default {
  name: 'App',
  components: {
    CanvasMain
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
