<template>
  <div  id="ChefProductsView">
    <table class="table table-hover">
      <thead>
        <tr>
          <th scope="col">N° de Orden</th>
          <th scope="col">Cliente</th>
          <th scope="col">Status</th>
        </tr>
      </thead>
    <tbody v-for="product in products" :key="product.id"> 
      <tbody v-for="(el, index) in $store.state.dataPedido" :key="el.id">
        <tr>
          <th>{{index+1}}</th>
          <th scope="row">{{el.user}}</th>
          <button @click.prevent="modal=true" type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">Lista de Pedidos</button>
        </tr>        
    </tbody> 
  <div v-bind="modal" v-if="modal" class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Pedido</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <thead>
          <tr>
            <th scope="col">Cantidad</th>
            <th scope="col">Orden</th>
            <th scope="col">Check</th>
          </tr>
        </thead>
          <tr  v-for="item in el.pedido" :key="item.id">
            <td>{{item.cantidad}}</td>
            <td>{{item.nombre}}</td>
            <td><input type="checkbox" aria-label="Checkbox for following text input"></td>
          </tr>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Listo</button>
      </div>
    </div>
  </div>
        </tbody>
    </table>
  </div>
</template>
<script>
import { mapMutations, mapActions, mapState } from 'vuex'
export default {
  name: 'ChefView',
  modal:false,
  products:'',
  methods:{
    ...mapMutations(['mostrarPedido']),
    ...mapActions(['editarCheck', 'getPedidos'])
  },
  computed: {
    ...mapState(['dataPedido', 'pedidoSeleccionado'])
  }, 
  created(){
    this.$store.dispatch('getPedidos');
  },
  
  
}
</script>