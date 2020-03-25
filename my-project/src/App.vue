<template>
<<<<<<< HEAD
  <div class="bg-light" id="app">

<UserView/>
<Chef-view/>
=======
  <div>
    <div id="input">
    <img alt="BQ logo" src="./assets/logo.png">
    <HelloWorld msg="¡Hola!"/>
    <form id="form" v-on:submit.prevent="saveUser">
    <p v-if="!nameUser">Coloca tu nombre para poder atenderte...</p>
    <input class= "form-control my-3 text-capitalize" type="text" v-model="nameUser" placeholder="Nombre">
    <form action="">
      <label>
      Hombre: <input type="radio" v-model="gender" value="m"></label>
      <label>
      Mujer: <input type="radio" v-model="gender" value="f">
      </label>
    </form>
    <p v-show="nameUser">
    <button type="button" class="btn btn-primary btn-sm" @click="signUp()">aceptar</button>
    </p>
    </form>
    <template v-if="nameUser">
    <h1>
      {{gender == 'm' ? 'Bienvenido' : 'Bienvenida'}} <th class="text-capitalize"> {{nameUser}}</th> ¿Qué se te provoca comer hoy?
      </h1>
      <div class="card" style="width: 10rem;">
      <img src="./assets/potatoes.png" class="card-img-top" alt="75px">
      <div class="card-body">
      <h5 class="card-title">Papas fritas</h5>
      <p class="card-text">Deliciosas papas amarillas crujientes y calientes. </p>
      <button  class="btn btn-primary" @click="getProduct()" href="#">Comprar</button>
      </div>
      </div>
    </template>
    </div>
    <br>
    <div id="output">
    <table class="table table-hover table-sm">
    <thead>
    <tr>
      <!-- Tu pedido:  -->
    <th scope="col">Cantidad</th>
    <th scope="col">Producto</th>
    <th scope="col">Precio Unidad</th>
    <th scope="col">Precio combo</th>
    </tr>
    </thead>
    <tbody v-for="product in products" :key="product.id">
    <tr>
      <th  scope="row">{{amount}}
      <button type="button" class="btn" @click="amount+=1">+</button>
      <button type="button" class="btn" :disabled="amount == 1" @click="amount --">-</button>
      </th>
      <th>{{product.id}}</th>
    <th>{{product.price}}</th>
    <!-- <th>{{product.price}} +2 </th> -->
    <button type="button" class="close" @click="deleteProduct(index)" aria-label="Close">
    <span aria-hidden="true">&times;</span>
    </button>
    </tr>
    </tbody>
    <!-- <strong>{{product.lot}} {{product.name}}   {{product.price*product.lot}}</strong> -->
    <h1 class="input-group-text font-weight-bold">TOTAL:s/.{{total}}</h1>
    </table>
    </div>
>>>>>>> parent of dcf4aad... backup
  </div>
</template>

<script>
<<<<<<< HEAD
import UserView from './components/UserView.vue'
import ChefView from './components/ChefView.vue'

export default {
  name:'app',
  firebase:{
    clientes:'',
  },
  components: {
    UserView,
    ChefView
    },
=======
import HelloWorld from './components/HelloWorld.vue'
import {db} from './db';

export default {
  name:'app',
  components: { HelloWorld },
>>>>>>> parent of dcf4aad... backup
  data(){
    return {
<<<<<<< HEAD
        show: true,
        nameUser: '',
        hola: '',

    }},
  created(){
    this.$store.dispatch('getHamburguesas')
    this.$store.dispatch('getBebidas')
    this.$store.dispatch('getComplementos')
    this.$store.dispatch('getAdicionales')
    // eslint-disable-next-line no-console
    console.log('getAdicionales')
},
=======
      gender: '',
      nameUser:'',
      amount: 1,
      products: [],  
      product:{
      lot: null, 
      name: null,
      price: null,
      total: 0,
      },
      users: []
    }},
  firebase: {
    users: db
    },
>>>>>>> parent of dcf4aad... backup
  methods: {
    signUp(){
 // eslint-disable-next-line no-console
      console.log(this.nameUser);
    },
    // saveUser(){
    //   db.collection("nameUser").add({
    //   nameUser: '',
    //   })
    //   .then(function(docRef) {
    //   // eslint-disable-next-line no-console
    //   console.log("Document written with ID: ", docRef.id);
    //   })
    //   .catch(function(error) {
    //   // eslint-disable-next-line no-console
    //   console.error("Error adding document: ", error);
    //   })
    //   },

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
        })})
        this.products=product;
        } catch(error){
        // eslint-disable-next-line no-console
        console.error("Error adding document: ", error);
      }},
    // removeUser() {
    //   if(confirm('¿Seguro que quieren eliminar?')){
    //     // userRef.child(nameUser['.key']).remove();
    //   this.saveUser();
    //   }},
    // async addProduct(){
    //   let algo = await db.collection('userName').get();
    // // eslint-disable-next-line no-console
    // console.log(algo.docs[1].data());
    // },
    deleteProduct(index) {
      this.products.splice(index, 1); 
      },
  },
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