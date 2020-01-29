<template>
  <div>
    <div id="nav">
      <img alt="BQ logo" src="./assets/logo.png">
    <HelloWorld msg="Burguer Queen"/>
    <button>cliente</button>
    <button>cocina</button>
    <br>
    <button ref="potatoes" @click="agregarProducto($ref)"><img src="./assets/potatoes.png">comprar</button>
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
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
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
        // total: 0
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
},
computed: {
        total(){
        let sumaTotal = 0;
        for(const producto of this.productos){
            sumaTotal = sumaTotal + (producto.precio*producto.cantidad);
        }
        return sumaTotal;
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
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>