<template>
<div id="UserMenuOption">
<nav>
  <div class="nav nav-tabs" id="nav-tab" role="tablist">
    <a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true" @click="showMenu('hamburguesas')">hamburguesa</a>
    <a class="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false" @click="showMenu('bebidas')">bebidas</a>
    <a class="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false" @click="showMenu('complementos')">complemento</a>
  </div>
</nav>

<div class="card-group" id="nav-tabContent">
  <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
    <HamburguesasView class="card" v-if="menuProducts.hamburguesas" /></div>
  <div class="tab-pane fade show active" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
    <BebidasView class="card" v-if="menuProducts.bebidas"/></div>
  <div class="tab-pane fade show active" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
    <ComplementoView class="card" v-if="menuProducts.complementos"/></div>
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