<template>
  <div id="UserView">
    <div id="UserInput">
    <p><input  class="form-control" v-model="$store.state.newUser" placeholder="Coloca tu nombre para poder atenderte..."></p>
    <p><button @click.prevent="pedidoView=false,$store.dispatch('addUser',{value: $store.state.newUser})">aceptar</button>
    </p>
    </div>
      <div v-bind="pedidoView" v-if="pedidoView" class="row">
        <UserWelcome/>
        <UserMenuOption class="col-md-6 order-md-1"/>
        <div class="col-md-4 order-md-2 mb-4">
          <UserName/>
          <UserCheckList/>
        </div>
      </div>
  </div>
</template>
<script>
import{ mapMutations, mapActions } from 'vuex'
import UserWelcome from '../components/UserWelcome'
import UserMenuOption from '../components/UserMenuOption'
import UserName from '../components/UserName'
import UserCheckList from '../components/UserCheckList'
export default {
  name: "UserVuew",
  data:function() {
  return {
    pedidoView: false,
    nameUser: '',
    }
    },
    components: {
    UserWelcome,
    UserMenuOption,
    UserName,
    UserCheckList,
    },
    methods:{
    ...mapMutations(['mostrarUser']),
    ...mapActions(['addUser']),
  },
}
</script>