<template>
  <div>
    <!-- Botón -->
    <button @click.prevent="ventana=true" type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
    aceptar
    </button>
    <!-- Modal -->
    <div v-bind="ventana" v-if="ventana" class="modal-dialog " role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLiveLabel"><font style="vertical-align: inherit;">
              <nameUser/>
              <p>date.toUTCString()</p>
              <input type="text" v-model="getHora" ></input>
              </font></h5>
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
          </div>
          <div class="modal-footer">
            <button @click.prevent="ventana=false" type="button" class="btn btn-secondary" data-dismiss="modal"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Cerrar</font></font></button>
            <button @click.prevent="setPedidos" type="button" class="btn btn-primary"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Guardar cambios</font></font></button>
          </div>
    </div>
</div>

</div>
</template>

<script>
import nameUser from './nameUser.vue'
import { mapMutations } from 'vuex';
export default {
  name: 'pedidohecho',
  data:function() {
  return {
    hours:0,
    minutes:0,
    seconds:0,
    ventana: false, };
  },
  components:{
    nameUser,
  },
  created(){
    this.$store.dispatch('getPedidos','setPedidos');
    this.actualizarTiempo()
  },
  methods: {
  ...mapMutations(['aumentar', 'disminuir', 'borrarMenu', 'sumarTodo',]), 
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
    getHora(){
      return this.hours+":"+this.minutes+":"+this.seconds;
    }
  }

}
</script>>