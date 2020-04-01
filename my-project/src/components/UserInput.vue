<template>
  <div id="UserInput">
    <p>
      <input  class="form-control" v-model="$store.state.newUser" placeholder="Coloca tu nombre para poder atenderte..."> 
    </p>
    <p>
      <button @click="$store.dispatch('addUser',{value: $store.state.newUser})">aceptar</button>
    </p>
  </div>
</template>

<script>
import{ mapMutations, mapActions } from 'vuex'
export default {
  name: "UserInput",
  data(){
    return {
        nameUser: '',
          }
    },
  methods:{
  ...mapMutations(['mostrarUser']),
  ...mapActions(['addUser']),
  },

}
</script>
