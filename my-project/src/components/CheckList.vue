<template>
    <div id="checkList">
        <table class="table table-hover table-sm">
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
            <tbody v-for="ordenProduct in $store.state.pedido.productUnit" :key="ordenProduct.id">
        <tr>
        <th  scope="row">{{ $store.state.count }}
        <!-- <button type="button" class="btn" @click="amount+=1">+</button>
        <button type="button" class="btn" :disabled="amount == 1" @click="amount --">-</button> -->
        <button class="btn btn-light" @click="$store.commit('increment')">+</button>
        <button class="btn btn-light" :disabled="count===0" @click="$store.commit('decrement')">-</button>
        </th>
        <th>{{ordenProduct.name}}</th>
        <th>{{ordenProduct.price}}</th>
        <th>{{ordenProduct.price * count}}</th>
        <button type="button" class="close" @click="deleteProduct" aria-label="Close">
        <span aria-hidden="true">&times;</span>
        </button>
        </tr>
        </tbody>
        <!-- <strong>{{product.lot}} {{product.name}}   {{product.price*product.lot}}</strong> -->
        <h1 class="input-group-text font-weight-bold">TOTAL:s/.{{totalPrice}}</h1>
        </table>
    </div>
</template>

<script>
export default {
    data(){
    return {   
        user:[],
        products: [],  
        product:{
        lot: null, 
        name: null,
        price: null,
        total: 0,
        amount: 1,
        }}
    },
methods:{
    deleteProduct(x){
        this.$store.state.pedido.productUnit.splice(x, 1); 
    },
    computed: {
        count(){
            return this.$store.state.count
        },
        totalPrice() {
            return this.products.reduce((total, product) => {
            return total + Number(product.price)
            }, 0)}
}
    }}
</script>
<style>

</style>