<template>
  <div class="container" id="home">
      <div>
          <img class="d-block mx-auto mb-4" alt="BQ logo" src="../assets/logo.png" width="200" height="200">
          <HelloWorld msg="¡Bienvenid@!" class="stretched-link text-danger"/>
      </div>
      <div class="btn-group " role="group" aria-label="Basic example">
        <button type="button" class="btn btn-outline-warning" >
        <router-link to="/usuario" class="stretched-link text-danger">Usuario</router-link> 
        </button>
        <button type="button" class="btn btn-outline-warning">
        <router-link to="/chef" class="stretched-link text-danger">Chef</router-link> 
        </button>
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