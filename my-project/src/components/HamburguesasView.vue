<template>
    <div id="hamburguesasView" class="card">
        <div>
        <div v-for="el in $store.state.hamburguesas" :key="el.id" class="card" >
            <!-- <img class="card-img-top" :src="'https://firebasestorage.googleapis.com/v0/b/burguer-queen-rubi.appspot.com/o/'+el.img"  alt="85px"> -->
            <div class="card-body" >
                <h5 class="card-title">{{el.name}}</h5>
                <p class="card-text">{{el.description}}</p>
                <p class="card-text">s/.{{el.price}}
                <p> Adicionales + s/.1:</p>
                <p>queso: <input type="number"  v-model="increment">
                huevo: <input type="number"   v-model="increment">
                </p>
                <button  class="btn btn-primary" @click="selectProduct(el)" href="#">Comprar</button>
                <!-- <button  class="btn btn-primary" @click="showMenu('hamburguesas')>Comprar</button> -->
            </div>
        </div>
        </div>
    </div>
</template>
<script>
    export default {
    props:['user','gender'],
    data(){
    return {
        menuProducts: {
        hamburguesas: false,
        bebidas: false,
        complementos: false,
        }
        }
        },
    methods:{
        showMenu(menuProduct){
        Object.keys(this.menuProducts).forEach((el) => {
            this.menuProducts[el] = el == menuProduct;
        })
    },
    selectProduct(product){
        const ordenProduct = {
            name: product.name,
            price: product.price,
            };
        // getImg(img){
        //         return img('../assets/'+ img);
        //     },

    this.$store.state.pedido.productUnit.push(ordenProduct)
        }
    }
}
</script>