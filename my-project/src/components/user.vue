<template>
  <div>
    <p>
      <input  class="form-control" v-model="$store.state.newUser" placeholder="Coloca tu nombre para poder atenderte..."> 
    </p>
    <p>
      <button @click="$store.dispatch('addUser',{value: $store.state.newUser})">aceptar</button>
    </p>
  </div>
</template>

<script>
import{ mapMutations } from 'vuex'
export default {
methods:{
  ...mapMutations(['mostrarUser'])
/*   addUser() {
    if(!this.newUser) return;
    this.user.push(this.newUser);
    this.$store.state.pedido.userPedido = this.user;
    this.newUser = '';
  }, */ 
}
}
</script>
