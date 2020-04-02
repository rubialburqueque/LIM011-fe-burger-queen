<template>
    <div id="complementosView" class="card">
        <div v-for="el in $store.state.complementos" :key="el.id" class="card" >
            <div>
                <div class="card">
                <!-- <img src="" class="card-img-top" alt="">
                --><!--<img class="card-img-top" :src="getImg(el.img)" v-bind:alt="el.nombre"> -->
                <!-- <img class="card-img-top" :src="'https://firebasestorage.googleapis.com/v0/b/burguer-queen-rubi.appspot.com/o/'+el.img"  alt="85px"> -->
                    <div class="card-body">
                        <ul>
                            <li class=" d-flex justify-content-between ">
                                <div>
                                <h5 class="card-title">{{el.name}}</h5>
                                <small class="text-muted">{{el.description}}</small>
                                
                                </div>
                                <span class="text-muted" >s/.{{el.price}}</span>                          
                            </li>
                        </ul>
                    </div>
                <div class="card-footer list-group-item d-flex justify-content-between ">
                    <button  type="button" class="btn btn-warning btn-sm" @click="$store.dispatch('selectProduct', el)" href="#">Comprar</button>
                </div>
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