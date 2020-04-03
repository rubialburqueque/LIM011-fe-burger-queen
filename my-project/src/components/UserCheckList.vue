<template>
<<<<<<< HEAD
    <div id="checkList">

        <table class="list-group mb-3">
        
        <thead>
        <tr>
        <!-- Tu pedido:  -->
        <th scope="col">Cantidad</th>
        <th scope="col">Producto</th>
        <th scope="col">Precio Unidad</th>
        <th scope="col">Precio combo</th>
        </tr>
=======
    <div id="UserCheckList">

        <table class="table table-hover mb-3">
        <thead>
            <tr>
                <!-- Tu pedido:  -->
                <th scope="col">Cantidad</th>
                <th scope="col">Producto</th>
                <th scope="col">Precio Unidad</th>
                <th scope="col">Precio combo</th>
                <th scope="col"></th>
            </tr>
>>>>>>> 723adb7d204abda48d6c989674884af79e8a9110
        </thead>
        <!-- <tbody v-for="product in products" :key="product.id"> -->
            <tbody v-for="(ordenProduct, index) in $store.state.pedido.productUnit" :key="ordenProduct.id">
        <tr>
<<<<<<< HEAD
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
=======
            <th scope="row">{{ordenProduct.count}}
                <button class="btn btn-warning btn-sm" @click="increment(index), $store.dispatch('sumarTodo')">+</button>
                <button class="btn btn-warning btn-sm" :disabled="$store.state.count===0" @click="decrement(index), $store.dispatch('sumarTodo')">-</button>
            </th>
            <th class="my-0" >{{ordenProduct.name}} </th>
            <th class="my-0" >{{ordenProduct.price}}</th>
            <th>{{ordenProduct.price * ordenProduct.count}}</th>
            <th><button type="button" class="close" @click="deleteProduct(),$store.dispatch('sumarTodo')" aria-label="Close"><span aria-hidden="true">&times;</span></button></th>
>>>>>>> 723adb7d204abda48d6c989674884af79e8a9110
        </tr>
        </tbody>
        <!-- <strong>{{product.lot}} {{product.name}}   {{product.price*product.lot}}</strong> -->
        <h3 class="font-weight-bold badge ">TOTAL:s/.{{$store.state.pedido.total}}</h3>
        </table>
<<<<<<< HEAD
=======
    <UserCheckOk/>
>>>>>>> 723adb7d204abda48d6c989674884af79e8a9110
    </div>
</template>

<script>
<<<<<<< HEAD
import { mapMutations } from 'vuex';
export default {
  methods: {
  ...mapMutations(['increment', 'decrement', 'deleteProduct', 'sumarTodo' ]), 
  },
=======
import UserCheckOk from './UserpedidoCheckOk'
import { mapMutations, mapActions, mapState} from 'vuex';
export default {
    name:"UserCheckList",
    components:{
    UserCheckOk,
    },
    methods: {
        ...mapMutations(['increment', 'decrement', 'deleteProduct', 'sumarTodo' ]), 
        ...mapActions(['setOrder', 'sumarTodo']),
     },
    computed:{
    ...mapState(['pedido'])
    },
    created(){
    this.$store.dispatch('getOrder');
}
>>>>>>> 723adb7d204abda48d6c989674884af79e8a9110
}
</script>
