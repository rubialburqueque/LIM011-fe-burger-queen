<template>
  <div class="container" id="home">
      <div>
          <img class="d-block mx-auto mb-4" alt="BQ logo" src="../assets/logo.png" width="200" height="200">
          <HelloWorld msg="¡Bienvenid@!"/>
      </div>
      <div id="nav">
        <router-link to="/usuario">Usuario</router-link> 
        <router-link to="/chef">Chef</router-link> 
      </div>
  </div>
</template>
<script>
import HelloWorld from '../components/HelloWorld.vue'
export default {
  components: {
    HelloWorld,
  }
}
</script>