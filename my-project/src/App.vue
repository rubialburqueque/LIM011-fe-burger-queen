<template>
  <div class="bg-light" id="app">
<<<<<<< HEAD

=======
    <div class="container" id="demo">
      <router-view/>
    </div>
>>>>>>> 723adb7d204abda48d6c989674884af79e8a9110
  </div>
</template>

<script>
<<<<<<< HEAD
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
=======

export default {
  name:'app',
 }
>>>>>>> 723adb7d204abda48d6c989674884af79e8a9110
</script>
<style>
@import'../node_modules/bootstrap/dist/css/bootstrap.css';
#app {
  background-color: yellow;
  font-family: 'Montserrat', sans-serif;

};
</style>