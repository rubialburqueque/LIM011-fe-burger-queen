<template>
  <div id="app">


    <div id="demo">
    <transition name="fade">
    <div v-if="show">
    <img class="text-center" alt="BQ logo" src="./assets/logo.png">
    <HelloWorld msg="¡Hola!"/>
    <!-- <h1>numero {{ $store.state.count }}</h1> -->
    <form id="form" v-on:submit.prevent="addUser">
    <input class= "form-control my-3" type="text" v-model="nameUser" placeholder="Coloca tu nombre para poder atenderte...">
    <form id="gender">
      Hombre: <input type="radio" v-model="gender" value="m">
      Mujer: <input type="radio" v-model="gender" value="f">
    </form>
    <p v-show="nameUser">
    <button type="button" class="btn btn-primary btn-sm" @click="addUser">aceptar</button>
        <button class="btn btn-primary btn-sm" @click="show = !show" >aceptar</button>
    </p>
    </form>
    </div>
    </transition>
    <template v-if="nameUser">
    <menuOption :user="nameUser" :gender="gender"/>
    </template>
<checkList/>
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import menuOption from './components/menuOption.vue'
import checkList from './components/CheckList'

export default {
  name:'app',
  components: {
    HelloWorld,
    menuOption,
    checkList,
    },
  data(){

    return {
        show: true,
        nameUser: '',
        hola: '',
        gender: '',
    }},
  created(){
    this.$store.dispatch('getHamburguesas')
    this.$store.dispatch('getBebidas')
    this.$store.dispatch('getComplementos')
},
  methods: {
    addUser(){
      return("nameUser")
  },

}
}
</script>
<style>
@import'../node_modules/bootstrap/dist/css/bootstrap.css';
#app {
  background-color: yellow;
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
};
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0
}
</style>