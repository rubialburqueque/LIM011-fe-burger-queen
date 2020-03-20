<template>
    <div id="bebidasView" class="card">
        <div v-for="el in $store.state.bebidas" :key="el.id" class="card" >
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
                    <button  type="button" class="btn btn-lg btn-primary btn-block" @click="$store.dispatch('selectProduct', el)" href="#">Comprar</button>
                </div>
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