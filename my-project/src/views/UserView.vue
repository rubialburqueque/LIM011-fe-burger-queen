<template>
  <div id="UserView">
    <div id="UserInput">
    <p>
      <input  class="form-control" v-model="$store.state.newUser" placeholder="Coloca tu nombre para poder atenderte..."> 
    </p>
    <p>
      <button @click="$store.dispatch('addUser',{value: $store.state.newUser})">aceptar</button>
    </p>
    </div>
    <UserWelcome/>
      <div class="row">
        <UserMenuOption class="col-md-6 order-md-1"/>
        <div class="col-md-4 order-md-2 mb-4">
          <UserName/>
          <UserCheckList/>
        </div>
      </div>
  </div>
</template>
<script>

import UserWelcome from '../components/UserWelcome'
import UserMenuOption from '../components/UserMenuOption'
import UserName from '../components/UserName'
import UserCheckList from '../components/UserCheckList'
export default {
  name: "UserVuew",
  components: {
    UserWelcome,
    UserMenuOption,
    UserName,
    UserCheckList,
    },
}
</script>