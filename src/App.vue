<template>
<div class="body">
  <div class="container ">
    <Navbar />
    <RouterView />
  </div>
</div>
</template>

<script>
import {
  Navbar
} from './components'
import {
  RouterView
} from 'vue-router'
export default {
  components: {
    Navbar
  }
}
</script>

<style scoped>
  .body{
    background-color: black;
    font-family:sans-serif;
    overflow: hidden;
    display: flex;
    transition: all 0.5 ease;
  }
</style>
