/* eslint-disable no-debugger */
import Vue from 'vue'
import Vuex from 'vuex'
import {db} from '../db';

import VueRouter from 'vue-router'
<<<<<<< HEAD
=======

>>>>>>> 723adb7d204abda48d6c989674884af79e8a9110

Vue.use(Vuex)
Vue.use(VueRouter)
Vue.config.productionTip = false

export default new Vuex.Store({
  state: {
    complementos:[],
    hamburguesas:[],
    bebidas:[],
    adicionales:[],
<<<<<<< HEAD
    newUser: null,
    adicionalProducts: [],
    pedido:{
      userPedido:[],
      productUnit:[],
      total: 0
    }
=======
    pedidoView: false,
    newUser: '',
    pedido:{
      userPedido:[],
      productUnit:[],
      date: '',
    },
    hours:0,
    minutes:0,
    seconds:0,
    dataPedido: [],
    pedidoSelect: {
      user: '',
      index: 0,
      productPedido: []

    },
>>>>>>> 723adb7d204abda48d6c989674884af79e8a9110
  },
  mutations: {
    increment(state, index){
      state.pedido.productUnit[index].count++
    },
    decrement(state, index){
      state.pedido.productUnit[index].count--
    },
    setState(state,payload){
      state[payload.state] = payload.value
    },
    deleteProduct(state, x){
      state.pedido.productUnit.splice(x,1)
/*       state.pedido.splice(this.index, 1); 
      state[payload.state] = payload.index */
      },
    llenarOrden(state, {value}){
        state.pedido.productUnit.push(value)
    },
    sumarTodo(state, {value}){
      state.pedido.total= value
    },
    mostrarUser(state, {value}){
      state.pedido.userPedido=value
<<<<<<< HEAD
    }
=======
    },
    mostrarCliente(state, {value}){
      state.pedido.clientePedido = value
    },
    mostrarPedido(state,index){
      state.pedidoSeleccionado = state.dataPedido[index]
      state.pedidoSeleccionado.index = index
    },
>>>>>>> 723adb7d204abda48d6c989674884af79e8a9110
  },
  actions:{
    getHamburguesas(context){
      try{
        const hamburguesa = [];
        db.collection('hamburguesas')
          .get()
          .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            // eslint-disable-next-line no-console
            console.log(`${doc.id} => ${doc.data().price}`);
            let eventoData = {
            id: doc.id,
            name: doc.data().name,
            img:doc.data().img,
            count:doc.data().count,
            description: doc.data().description,
            price: doc.data().price,
            };
            hamburguesa.push(eventoData)
          });
          context.commit('setState',{
            state: 'hamburguesas',
            value: hamburguesa
          })
          return(hamburguesa)
          
      })
      } catch(error){
        // eslint-disable-next-line no-console
        console.log(error);
      }
    },
    getBebidas(context){
      try{
        const bebida = [];
        db.collection('bebidas')
          .get()
          .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            // eslint-disable-next-line no-console
            console.log(`${doc.id} => ${doc.data().price}`);
            let eventoData = {
            name: doc.data().name,
            img:doc.data().img,
            count:doc.data().count,
            description: doc.data().description,
            price: doc.data().price,
            };
            bebida.push(eventoData)
          });
          context.commit('setState',{
            state: 'bebidas',
            value: bebida
          })
            // eslint-disable-next-line no-console
          console.log(bebida)
          })
      } catch(error){
        // eslint-disable-next-line no-console
        console.log(error);
      }
    },
    getComplementos(context){
    try{
      const complemento = [];
      db.collection('complemento')
        .get()
        .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          // eslint-disable-next-line no-console
          console.log(`${doc.id} => ${doc.data().price}`);
          let eventoData = {
              name: doc.data().name,
              img:doc.data().img,
              count:doc.data().count,
              description: doc.data().description,
              price: doc.data().price
          }
          complemento.push(eventoData)
        });
        context.commit('setState',{
          state: 'complementos',
          value: complemento
        })
        
    })
    } catch(error){
      // eslint-disable-next-line no-console
      console.log(error);
    }
<<<<<<< HEAD
  },
  getAdicionales(context){
=======
    },
    getAdicionales(context){
>>>>>>> 723adb7d204abda48d6c989674884af79e8a9110
    try{
      const adicional = [];
      db.collection('adicional')
        .get()
        .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          // eslint-disable-next-line no-console
          console.log(`${doc.id} => ${doc.data().price}`);
          let eventoData = {
          id: doc.id,
          name: doc.data().name,
          img:doc.data().img,
          count:doc.data().count,
          description: doc.data().description,
          price: doc.data().price,
          };
          adicional.push(eventoData)
        });
        context.commit('setState',{
          state: 'adicionales',
          value: adicional
        })
        return(adicional)
        
    })
    } catch(error){
      // eslint-disable-next-line no-console
      console.log(error);
    }
<<<<<<< HEAD
  },
  addUser(context, payload){
    let user= null;
    if(!context.newUser){
      user=context.newUser
    }
    context.commit('mostrarUser', payload)
    // eslint-disable-next-line no-console
    console.log(user)
  },
  selectProduct(context, product){
    const orden = {
      count: product.count,
      name: product.name,
      price: product.price,
      
    };
    const payload = {value: orden}

    context.commit('llenarOrden', payload)
    context.dispatch('sumarMenu')
  },
  sumarMenu(context) {
    let totales = 0;
    context.state.pedido.productUnit.forEach((unit) => {
      totales += unit.price*unit.count;
    });
    const payload = {value: totales}
    context.commit('sumarTodo', payload);
    // eslint-disable-next-line no-console
    console.log(totales) ;
  },
=======
    },
    addUser(context, payload){
      let user= null;
      if(!context.newUser){
        user=context.newUser
      }
      context.commit('mostrarUser', payload)
      // eslint-disable-next-line no-console
      console.log(user)
    },
    selectProduct(context, product){
      const products = context.state.pedido.productUnit.filter(productUnit => productUnit.name === product.name)
      if (products.length === 0) {
      const orden = {
        count: product.count,
        name: product.name,
        price: product.price,
        status: false
      
      };
      const payload = {value: orden}

      context.commit('llenarOrden', payload)
      context.dispatch('sumarMenu')
      }
    },
    sumarTodo(context) {
      let totales = 0;
      context.state.pedido.productUnit.forEach((unit) => {
        totales += unit.price*unit.count;
      });
      const payload = {value: totales}
      context.commit('sumarTodo', payload);
      // eslint-disable-next-line no-console
      console.log(totales) ;
    },
    setOrder(context){
      db.collection("pedido").add({
        user: context.state.pedido.userPedido,
        order: context.state.pedido.productUnit,
        date: new Date(),
        })
        .then(function(docRef) {
        // eslint-disable-next-line no-console
        console.log(" Documento escrito con ID: ", docRef.id);
        
        })
        .catch(function(error) {
        // eslint-disable-next-line no-console
        console.error(" Error al agregar documento: ", error);
        });
    },
    getOrder(context){
      try{
        const pedido = [];
        db.collection('pedido').orderBy('date')
          .get()
          .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            // eslint-disable-next-line no-console
            console.log(`${doc.id} => ${doc.data().pedido}`);
            let eventoData = {
              id: doc.id,
              user: doc.data().user,
              count: doc.data().count,
              order: doc.data().order,
              date: doc.data().date,
              status: doc.data().status
            }
            pedido.push(eventoData)
          });
          context.commit('setState',{
            state: 'dataPedido',
            value: pedido
          })
          // eslint-disable-next-line no-console
          console.log(pedido)
          })
      } catch(error){
        // eslint-disable-next-line no-console
        console.log(error);
        }
    },
>>>>>>> 723adb7d204abda48d6c989674884af79e8a9110
  }
})
