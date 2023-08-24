<template>
<div id="navbar" class="d-flex flex-column flex-md-row align-items-center py-3 mb-4">
  <a @click="toHomeHandler" class="d-flex align-items-center link-body-emphasis text-decoration-none">
    <span class="logo">
      <span class="menu-text">#</span>Firdavs
    </span>
  </a>

  <nav class="d-inline-flex mt-2 mt-md-0 ms-md-auto">
    <RouterLink class="me-3 py-2 routerLink text-decoration-none" :to="{name:'home'}"><span class="menu-text">#</span>Home</RouterLink>
    <RouterLink class="me-3 py-2 routerLink text-decoration-none" :to="{name:'about'}"><span class="menu-text">#</span>About</RouterLink>
    <RouterLink class="me-3 py-2 routerLink text-decoration-none" :to="{name:'skill'}"><span class="menu-text">#</span>Skills</RouterLink>
  </nav>
</div>
</template>

<script>
import { logo } from '../constans';
export default {
  data(){
    return {
      logo
    }
  },
  methods:{
    toHomeHandler(){
      return this.$router.push('/')
    }
  }
}
</script>

<style scoped>
  #navbar{
    border: 2px solid #23d94b;
    border-left: none;
    border-right: none;
    border-top: none;
    /* border-bottom-color:2px solid #C778DD; */
  }
.logo{
    color: aliceblue;
    cursor: pointer ;
    font-weight: bold;
    font-size: 1.6rem;
  }
  .routerLink{
    color: aliceblue;
  }
  .menu-text{
      color: #23d94b;
  }
</style>
