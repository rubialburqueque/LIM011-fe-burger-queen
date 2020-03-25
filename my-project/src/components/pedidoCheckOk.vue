<template>
  <div>


<!-- Modal -->
<div class="modal fade" id="exampleModalScrollable" tabindex="-1" role="dialog" aria-labelledby="exampleModalScrollableTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-scrollable" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalScrollableTitle">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
 <table class="list-group mb-3">
        
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
        <th scope="row">{{ordenProduct.count}}
        <button class="btn btn-light" @click="increment(index), $store.dispatch('sumarMenu')">+</button>
        <button class="btn btn-light" :disabled="$store.state.count===0" @click="decrement(index), $store.dispatch('sumarMenu')">-</button>
        </th>
        <h6 class="my-0" >{{ordenProduct.name}} </h6>
        <h6 class="my-0" >{{ordenProduct.price}}</h6>
        <th>{{ordenProduct.price * ordenProduct.count}}</th>
        <button type="button" class="close" @click="deleteProduct(),$store.dispatch('sumarMenu')" aria-label="Close">
        <span aria-hidden="true">&times;</span>
        </button>
        </tr>
        </tbody>
        <!-- <strong>{{product.lot}} {{product.name}}   {{product.price*product.lot}}</strong> -->
        <h3 class="font-weight-bold badge ">TOTAL:s/.{{$store.state.pedido.total}}</h3>
        </table>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>



     
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
  name: 'pedidohecho',
  methods: {
  ...mapMutations(['aumentar', 'disminuir', 'borrarMenu', 'sumarTodo',]), 
  },
  created(){
    this.$store.dispatch('getPedidos');
    
  },
}
</script>>