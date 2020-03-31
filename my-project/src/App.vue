<template>
  <div class="bg-light" id="app">
    <div class="container" id="demo">
      <router-view/>
      <Home/>
    </div>
  </div>
</template>

<script>
import Home from './views/Home'
export default {
  name:'app',
  components:{
    Home,
  },
 }
</script>
<style>
@import'../node_modules/bootstrap/dist/css/bootstrap.css';
#app {
  background-color: yellow;
  font-family: 'Montserrat', sans-serif;

};
</style>