<template>
  <div id="UserView">
    <router-link to="/">Home</router-link> 
    <userInput/>
    <UserWelcome />
      <div class="row">
        <UserMenuOption class="col-md-6 order-md-1" :user="UserName"/>
        <div class="col-md-4 order-md-2 mb-4">
          <UserName/>
          <UserCheckList />
        </div>
      </div>
  </div>
</template>
<script>
import userInput from './components/userInput.vue'
import UserWelcome from './components/UserWelcome.vue'
import UserMenuOption from './components/UserMenuOption.vue'
import UserName from './components/UserName.vue'
import UserCheckList from './component/UserCheckList.vue'
export default {
  data(){
    return {
        nameUser: '',
        hola: '',
          }
    },
  components: {
    userInput,
    UserWelcome,
    UserMenuOption,
    UserName,
    UserCheckList,
    },
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