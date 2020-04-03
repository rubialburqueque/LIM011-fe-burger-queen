<template>
<div id="UserMenuOption">
<nav>
  <div class="nav nav-tabs" id="nav-tab" role="tablist">
    <a class="nav-item nav-link btn-warning active" id="nav-hamburguesa-tab" data-toggle="tab" href="#nav-hamburguesa" role="tab" aria-controls="nav-home" aria-selected="true" @click="showMenu('hamburguesas')">hamburguesas</a>
    <a class="nav-item nav-link btn-warning" id="nav-complementos-tab" data-toggle="tab" href="#nav-complementos" role="tab" aria-controls="nav-contact" aria-selected="false" @click="showMenu('complementos')">complementos</a>
    <a class="nav-item nav-link btn-warning"  id="nav-bebidas-tab" data-toggle="tab" href="#nav-bebidas" role="tab" aria-controls="nav-bebidas" aria-selected="false" @click="showMenu('bebidas')">bebidas</a>
    
  </div>
</nav>

<div class="card-group" id="nav-tabContent">
  <div class="tab-pane fade show active" id="nav-hamburguesa" role="tabpanel" aria-labelledby="nav-hamburguesa-tab">
    <HamburguesasView class="card" v-if="menuProducts.hamburguesas" /></div>
    <div class="tab-pane fade show active" id="nav-complementos" role="tabpanel" aria-labelledby="nav-complementos-tab">
    <ComplementoView class="card" v-if="menuProducts.complementos"/></div>
  <div class="tab-pane fade show active" id="nav-bebidas" role="tabpanel" aria-labelledby="nav-bebidas-tab">
    <BebidasView class="card" v-if="menuProducts.bebidas"/></div>

</div>

    <!-- <button type="button" class="btn btn-primary btn-sm" @click="$store.dispatch('getHamburguesas')">hamburguesas</button>
    <button type="button" class="btn btn-primary btn-sm" @click="$store.dispatch('getBebidas')">bebidas</button>
    <button type="button" class="btn btn-primary btn-sm" @click="$store.dispatch('getComplementos')">complemento</button> -->

</div>

</template>

<script>
import HamburguesasView from './HamburguesasView.vue'
import BebidasView from './BebidasView.vue'
import ComplementoView from './ComplementosView'


export default {
    components:{
    HamburguesasView,
    BebidasView,
    ComplementoView,

    },
    props:['user'],
    data(){
      return {
        menuProducts: {
          hamburguesas: true,
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

    },
  created(){
    this.$store.dispatch('getHamburguesas')
    this.$store.dispatch('getBebidas')
    this.$store.dispatch('getComplementos')
    this.$store.dispatch('getAdicionales')
    // eslint-disable-next-line no-console
    console.log('getAdicionales')
  },
    // mounted(){
    //     this.$store.dispatch('getHamburguesas')
    //     this.$store.dispatch('getBebidas')
    //     this.$store.dispatch('getComplementos')
    //     },
    }
</script>

<style>
body { padding-top: 40px; }
</style>