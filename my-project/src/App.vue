<template>
  <div id="app">
    <img alt="BQ logo" src="./assets/logo.png">
    <HelloWorld msg="Burguer Queen"/>
    <button>cliente</button>
    <button>cocina</button>
    <br>
    <button name="potatoes" @click="agregarProducto($name)"><img src="./assets/potatoes.png">comprar</button>
    <button name="hamburguer" @click="agregarProducto($name)"><img src="./assets/hamburguer.png">comprar</button>
    <button name="cola" @click="agregarProducto($name)"><img src="./assets/cola.png">comprar</button>
    <input type="text" v-model="nuevoProducto">
    <button @click="agregarProducto">Agregar</button>
    <ul v-for="(producto, index) in productos" :key="index">
      <li>
      <strong>{{producto.cantidad}}    {{producto.nombre}}   {{producto.precio*producto.cantidad}}</strong>
      <button @click="producto.cantidad+=1">+</button>
      <button @click="eliminarProducto(index)">x</button>
      </li>
    </ul>
    <h1>TOTAL:s/.{{total}}</h1>
    </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  data() {
    return{
        titulo: 'Monto total',
        productos: [],
        nuevoProducto: '',
        total: 0
    }

  },
  methods: {
        agregarProducto (){
        this.productos.push({
            nombre: this.$name, cantidad: 1, precio: 10.00 });
        this.nuevoProducto= '';
        },
                eliminarProducto(index){
        this.productos.splice(index, 1);
        },
computed: {
        sumarCantidadDePrductos(){
        // this.total = 0;
        for(producto of this.productos){
            this.total = this.total + producto.precio;
        }
        return this.total;
        }

    },
  name: 'app',
  components: {
    HelloWorld
  }
}

</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>