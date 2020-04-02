<template>
  <div class="bg-light" id="app">
    <div class="container" id="demo">
      <router-view/>
    </div>
  </div>
</template>

<script>

export default {
  name:'app',
 }
</script>
<style>
@import'../node_modules/bootstrap/dist/css/bootstrap.css';
#app {
  background-color: yellow;
  font-family: 'Montserrat', sans-serif;

};
</style>