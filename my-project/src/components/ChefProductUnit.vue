<template>
    <div id="ChefProductUnit" >
      <p>hola desde chef</p>
     <tr  v-for="item in pedidoSeleccionado.itemsPedido" :key="item.index">
      <th>{{[item.count]}}</th>
      <th>{{item.name}}</th>
     </tr>
   </div>
</template>
<script>
import { mapMutations, mapActions, mapState } from 'vuex'
export default {
  name: 'ChefProductsView',
  modal:false,
  methods:{
    ...mapMutations(['mostrarPedido']),
    ...mapActions(['getOrder', 'editarCheck'])
  },
  computed: {
    ...mapState(['dataPedido','pedidoSeleccionado'])
  }, 
  created(){
    this.$store.dispatch('getOrder');
  },
  
  
}
</script>
