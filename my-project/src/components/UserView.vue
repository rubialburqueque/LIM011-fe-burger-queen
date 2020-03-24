<template>
  <div class="bg-light" id="app">
    <div class="container" id="demo">
      <transition class="row" name="fade">
        <div v-if="show">
          <img class="d-block mx-auto mb-4" alt="BQ logo" src="./assets/logo.png" width="200" height="200">
          <HelloWorld msg="¡Bienvenid@!"/>
          <user/>
          <welcomeUser />
        </div>
      </transition>
      <div class="row">
        <menuOption class="col-md-6 order-md-1" :user="nameUser"/>
        <div class="col-md-4 order-md-2 mb-4">
        <nameUser/>
          <checkList />
        </div>
      </div>
   </div>
  </div>
</template>

<script>
import user from './components/user.vue'
import HelloWorld from './components/HelloWorld.vue'
import menuOption from './components/menuOption.vue'
import checkList from './components/CheckList.vue'
import welcomeUser from './components/welcomeUser.vue'
import nameUser from './components/nameUser.vue'

export default {
  name:'app',
  firebase:{
    clientes:'',
  },
  components: {
    user,
    HelloWorld,
    menuOption,
    checkList,
    welcomeUser,
    nameUser
    },
  data(){

    return {
        show: true,
        nameUser: '',
        hola: '',

    }},
  created(){
    this.$store.dispatch('getHamburguesas')
    this.$store.dispatch('getBebidas')
    this.$store.dispatch('getComplementos')
    this.$store.dispatch('getAdicionales')
    // eslint-disable-next-line no-console
    console.log('getAdicionales')
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