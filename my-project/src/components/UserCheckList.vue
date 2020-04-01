<template>
    <div id="UserCheckList">

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
            <th scope="row">{{ordenProduct.count}}
                <button class="btn btn-warning btn-sm" @click="increment(index), $store.dispatch('sumarTodo')">+</button>
                <button class="btn btn-warning btn-sm" :disabled="$store.state.count===0" @click="decrement(index), $store.dispatch('sumarTodo')">-</button>
            </th>
            <th class="my-0" >{{ordenProduct.name}} </th>
            <th class="my-0" >{{ordenProduct.price}}</th>
            <th>{{ordenProduct.price * ordenProduct.count}}</th>
        <button type="button" class="close" @click="deleteProduct(),$store.dispatch('sumarTodo')" aria-label="Close"></button>
        </tr>
        </tbody>
        <!-- <strong>{{product.lot}} {{product.name}}   {{product.price*product.lot}}</strong> -->
        <h3 class="font-weight-bold badge ">TOTAL:s/.{{$store.state.pedido.total}}</h3>
        </table>
    </div>
</template>

<script>
import { mapMutations, mapActions, mapState} from 'vuex';
export default {
    name:"UserCheckList",
    methods: {
        ...mapMutations(['increment', 'decrement', 'deleteProduct', 'sumarTodo' ]), 
        ...mapActions(['setPedidos', 'sumarTodo']),
     },
    computed:{
    ...mapState(['pedido'])
    },
    created(){
    this.$store.dispatch('getPedidos');
}
}
</script>
