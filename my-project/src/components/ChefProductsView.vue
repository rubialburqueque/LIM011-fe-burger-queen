<template>
  <div  id="ChefProductsView">
    <table class="table table-hover">
      <thead>
        <tr>
          <th scope="col"></th>
          <th scope="col">N° de Orden</th>
          <th scope="col">Usuario</th>
          <th scope="col">Cantidad</th>
          <th scope="col">Producto</th>
          <th scope="col">Hora de Pedido</th>
          <th scope="col">Status</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody v-for="(el, index) in $store.state.dataPedido" :key="el.id">
        <tr>
          <th scope="row"><input type="checkbox" class="form-check-input" @click="estado=true"></th>
          <th scope="row">{{index + 1}}</th>
          <th scope="row">{{el.user}}</th>
          <th scope="row"><ChefProductUnit/></th>
          <th scope="row">{{el.order}}</th>
          <th scope="row">{{el.date}}</th>          
          <th scope="row" v-bind="estado" v-if="estado"> Pedido Listo</th>
          <th scope="row" v-bind="estado" v-else>En proceso</th>
          <th scope="row"> <button type="button" class="close" aria-label="Close">x</button><th/>
        </tr>        
      </tbody> 
    </table>
  </div>
</template>
<script>
import { mapMutations, mapActions, mapState } from 'vuex'
export default {
  name: 'ChefProductsView',
  estado: false,
  methods:{
    ...mapMutations(['mostrarPedido']),
    ...mapActions(['setOrder'])
  },
  computed: {
    ...mapState(['dataPedido','pedidoSelect'])
  }, 
  created(){
    this.$store.dispatch('getOrder');
  },
  
  
}
</script>