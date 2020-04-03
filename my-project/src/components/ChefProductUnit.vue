<template>
    <div id="ChefProductUnit" >
     <th scope="row">{{el.order}}</th>
     <div v-for="product in pedidoSelect" :key="product.id"></div>
      <th>{{product.count}}</th>
      <th>{{product.name}}</th>
   </div>
</template>

<script>
import { mapMutations, mapActions, mapState } from 'vuex'
export default {
  name: 'ChefProductsView',
  modal:false,
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
