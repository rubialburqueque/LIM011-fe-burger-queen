<template>
    <div id="complementosView" class="row row-cols-1 row-cols-md-3">
        <div class="col mb-4">
        <div v-for="el in $store.state.complementos" :key="el.id" class="card" style="width: 10rem;">
            <!-- <img class="card-img-top" :src="'https://firebasestorage.googleapis.com/v0/b/burguer-queen-rubi.appspot.com/o/'+el.img"  alt="85px"> -->
            <div class="card-body" >
                <h5 class="card-title">{{el.name}}</h5>
                <p class="card-text">{{el.description}}</p>
                <p class="card-text">s/.{{el.price}}</p>
                <button  class="btn btn-primary" @click="selectProduct(el)" href="#">Comprar</button>
                <!-- <button  class="btn btn-primary" @click="showMenu('hamburguesas')>Comprar</button> -->
            </div>
        </div>
        </div>
    </div>
</template>

<script>
export default {
    methods:{
        selectProduct(product){
        const ordenProduct = {
            name: product.name,
            price: product.price,
            };

    this.$store.state.pedido.productUnit.push(ordenProduct)
        }
}}
</script>
<style>
.card-columns {
    column-count: 4;
}
</style>