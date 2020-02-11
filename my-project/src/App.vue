<template>
  <div>
    <div id="input">
    <img alt="BQ logo" src="./assets/logo.png">
    <HelloWorld msg="Burguer Queen"/>
    <label> Nombre del cliente:</label>
    <input class= "form-control my-3" type="text" v-model="user"> 
    <button class="btn btn-info" id="button" @click="saveUser('test')">Guardar</button>
    <button  @click="getProduct()"><img src="./assets/potatoes.png">comprar</button>
    <button  @click="getProduct()"><img src="./assets/hamburguer.png">comprar</button>
    <button  @click="getProduct()"><img src="./assets/cola.png">comprar</button>
    </div>
    <br>
    <div id="output">
    <tr v-for="us in users" :key="us">
      <a v-bind:href="us.name" target="_blanck">{{us.name}}</a>
    </tr>
    <button class="btn btn-danger" @click="pintaNombreUsuario(us)">Eliminar</button>
    <table>
    <thead>
    <tr>
      <th scope="col">Producto</th>
      <th scope="col">Cantidad</th>
      <th scope="col">Precio</th>
    </tr>
    <tbody v-for="product in products" :key="product.id">
    <tr>
      <th scope="row">{{product.id}}</th>
      <th>{{product.name}}</th>

      <th>{{product.price}}</th>
    </tr>
    </tbody>
    </thead>
    <strong>{{product.lot}}    {{product.name}}   {{product.price*product.lot}}</strong>
    <button @click="product.lot+=1">+</button>
    <button @click="deleteProduct(index)">x</button>
    <h1>TOTAL:s/.{{total}}</h1>
    </table>
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import {db} from './db';

export default {
  name:'app',
  components: { HelloWorld },
  data(){
    return {
      user:'',
      products: [],  
      product:{
      lot: null, 
      name: null,
      price: null,
      },
      users: []
    }},

  methods: {
    saveUser(name){
      db.collection("userName").add({
      user: name,
      moso: ''
      })
      .then(function(docRef) {
      // eslint-disable-next-line no-console
      console.log("Document written with ID: ", docRef.id);
      })
      .catch(function(error) {
      // eslint-disable-next-line no-console
      console.error("Error adding document: ", error);
      })
      },
      async getProduct(){
        try{
        const product=[];
        db.collection("hamburguesas").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
          // eslint-disable-next-line no-console
          console.log(`${doc.id} => ${doc.data().price}`)
          let eventDta= doc.data();
          eventDta.id=doc.id;
          product.push(eventDta)
      })
      })
      this.products=product;
        } catch(error){
      // eslint-disable-next-line no-console
      console.error("Error adding document: ", error);
      }
    // newProduct() {},
    // removeUser() {
    //   if(confirm('¿Seguro que quieren eliminar?')){
    //     // userRef.child(nameUser['.key']).remove();
    //   this.saveUser();
    //   }},
    // addProduct: async function(){
    //   let algo = await db.collection('userName').get();
    // // eslint-disable-next-line no-console
    // console.log(algo.docs[1].data());
    // },
    // deleteProduct(index) {
    //   this.products.splice(index, 1); 
    //   },
  }},
  computed: {
      total() {
      let sumaTotal = 0;
      for(const product of this.products){
      sumaTotal = sumaTotal + (product.precio*product.cantidad);}
      return sumaTotal
      }
  },
}
</script>
<style>
@import'../node_modules/bootstrap/dist/css/bootstrap.css';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
};
#nav {
  padding: 30px;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}
#nav a.router-link-exact-active {
  color: #42b983;
};
</style>