<template>
  <div class="bg-light" id="app">

  </div>
</template>

<script>
import UserView from './components/UserView.vue'
import ChefView from './components/ChefView.vue'

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