<template>
    <div id="checkList">

        <table class="table table-hover mb-3">
        
          <thead>
            <tr>
            <!-- Tu pedido:  -->
            <th scope="col">Cantidad</th>
            <th scope="col">Producto</th>
            <th scope="col">Precio Unidad</th>
            <th scope="col">Precio combo</th>
            </tr>
          </thead>
          <!-- <tbody v-for="product in products" :key="product.id"> -->
          <tbody v-for="(ordenProduct, index) in $store.state.pedido.productUnit" :key="ordenProduct.id">
            <tr>
            <td scope="row">{{ordenProduct.count}}
            <button class="btn-group-vertical btn-group-sm" role="group" @click="increment(index), $store.dispatch('sumarMenu')">+</button>
            <button class="btn-group-vertical btn-group-sm" role="group" :disabled="$store.state.count===0" @click="decrement(index), $store.dispatch('sumarMenu')">-</button>
            </td>
            <td class="my-0" >{{ordenProduct.name}} </td>
            <td class="my-0" >{{ordenProduct.price}}</td>
            <td>{{ordenProduct.price * ordenProduct.count}}</td>
            <button type="button" class="close" @click="deleteProduct(),$store.dispatch('sumarMenu')" aria-label="Close">
            <span aria-hidden="true">&times;</span>
            </button>
            </tr>
          </tbody>
          <!-- <strong>{{product.lot}} {{product.name}}   {{product.price*product.lot}}</strong> -->
          <h2 class="font-weight-bold badge ">TOTAL:s/.{{$store.state.pedido.total}}</h2>
        </table>
          <pedido-chek-ok/>
    </div>
</template>

<script>
import pedidoChekOk from './pedidoCheckOk.vue';
import { mapMutations } from 'vuex';
export default {
  methods: {
  ...mapMutations(['increment', 'decrement', 'deleteProduct', 'sumarTodo' ]), 
  },
  components: {
    pedidoChekOk,

  },
}
</script>
