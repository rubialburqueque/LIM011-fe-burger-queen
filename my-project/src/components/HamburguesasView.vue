<template>
    <div id="hamburguesasView" class="card">
        <div v-for="el in $store.state.hamburguesas" :key="el.id" class="card" >
            <div>
                <div class="card">
                <img :src="getImgUrl(el.img)" class = "img">
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
                    <small> Adicionales + s/.1:</small>
                        <div v-for="ad in $store.state.adicionales" :key="ad.id" >
                            <small>{{ad.name}} </small>
                            <input type="checkbox"  @click="$store.dispatch('selectProduct', ad)">
                        </div>
                    <button  type="button" class="btn btn-warning btn-sm" @click="$store.dispatch('selectProduct', el)" href="#">Comprar</button>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
    data(){
    return {
        menuProducts: {
        hamburguesas: false,
        bebidas: false,
        complementos: false,
        adicionales: false,
        }
        }
        },
    methods:{
        getImgUrl(img) {
            return img ? require('../assets/'+img) : "";
        },
        showMenu(menuProduct){
        Object.keys(this.menuProducts).forEach((el) => {
            this.menuProducts[el] = el == menuProduct;
        })
        },
        selectProduct(product){
            // eslint-disable-next-line no-unused-vars
            const ordenProduct = {
                name: product.name,
                price: product.price,
                };
        },
}}
</script>

<style lang="stylus" scoped>

</style>