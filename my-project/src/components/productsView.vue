<template>
<div id=productsView>
    <div></div>
<HamburguesasView v-if="menuProducts.hamburguesas"/>
<BebidasView v-if="menuProducts.bebidas"/>
<ComplementoView v-if="menuProducts.complementos" />
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
    data() {
    return {

        product:{
        lot: null, 
        name: null,
        price: null,
        total: 0,
        amount: 1,
        }};
},
    method:{
}}
</script>

<style>

</style>