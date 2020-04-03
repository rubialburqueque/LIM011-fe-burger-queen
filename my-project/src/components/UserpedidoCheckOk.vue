<template>
  <div>
    <!-- Botón -->
    <button @click.prevent="ventana=true" type="button" class="btn btn-warning btn-sm" data-toggle="modal" data-target="#exampleModal">
    aceptar
    </button>
    <!-- Modal -->
    <div v-bind="ventana" v-if="ventana" class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLiveLabel"><font style="vertical-align: inherit;">
              <UserName/>
              <input type="text" v-model="getDate">
              </font>
            </h5>
            <button @click.prevent="ventana=false" type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">×</font></font></span>
            </button>
          </div>
          <div class="modal-body">
            <table class="table table-borderless ">
          <thead>
            <tr>
            <!-- Tu pedido:  -->
            <th scope="col">Cantidad</th>
            <th scope="col">Producto</th>
            <th scope="col">Precio</th>
            <th scope="col"></th>
            </tr>
          </thead>
          <!-- <tbody v-for="product in products" :key="product.id"> -->
          <tbody v-for="(ordenProduct) in $store.state.pedido.productUnit" :key="ordenProduct.id">
            <tr>
            <td scope="row">{{ordenProduct.count}}
            
            </td>
            <td class="my-0" >{{ordenProduct.name}} </td>
            <!-- <td class="my-0" >{{ordenProduct.price}}</td>-->
            <td>{{ordenProduct.price * ordenProduct.count}}</td>
            </tr>
          </tbody>
          <!-- <strong>{{product.lot}} {{product.name}}   {{product.price*product.lot}}</strong> -->
          <th class="font-weight-bold badge ">TOTAL:s/.{{$store.state.pedido.total}}</th>
        </table>
        <button @click="setOrder" type="button" class="btn btn-warning btn-sm">
        <router-link to="/" class="stretched-link text-danger">enviar a cocina</router-link> 
        </button>
          </div>
        </div>
          <div class="modal-footer">
          </div>
    </div>
  </div>
</template>

<script>
import UserName from './UserName'
import { mapMutations, mapState, mapActions } from 'vuex';
export default {
  name: 'UserpedidoCheckOk',
  data:function() {
  return {
    hours:0,
    minutes:0,
    seconds:0,
    ventana: false, };
  },
  components:{
    UserName,
  },
  created(){
    this.actualizarTiempo()
  },
  methods: {
  ...mapMutations(['sumarTodo' ]), 
  ...mapActions(['setOrder', 'sumarTodo']),
    actualizarTiempo(){
      let date = new Date(Date.now());
      this.hours = date.getHours();
      this.minutes= date.getMinutes();
      this.seconds= date.getSeconds();

      this.minutes= this.minutes>9? this.minutes:'0'+(this.minutes.toString());
      this.seconds= this.seconds>9? this.seconds:'0'+(this.seconds.toString());
    }
  },
  computed:{
    ...mapState(['pedido']),
    getDate(){
      return this.hours+":"+this.minutes+":"+this.seconds;
    },

  }

}
</script>>