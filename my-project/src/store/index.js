/* eslint-disable no-debugger */
import Vue from 'vue'
import Vuex from 'vuex'
import {db} from '../db';

import VueRouter from 'vue-router'


Vue.use(Vuex)
Vue.use(VueRouter)
Vue.config.productionTip = false

export default new Vuex.Store({
  state: {

    complementos:[],
    hamburguesas:[],
    bebidas:[],
    adicionales:[],
    newUser: null,
    adicionalProducts: [],
    pedido:{
      userPedido:[],
      productUnit:[],
      total: 0
    },
    dataPedido: [],
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
    }
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
  },
  getAdicionales(context){
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
  setPedidos(context){
    db.collection("pedidos").add({
      cliente: context.state.pedido.userPedido,
      fecha:new Date(),
      pedido: context.state.pedido.productUnit,
      
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
  getPedidos(context){
    try{
      const pedido = [];
      db.collection('Pedidos').orderBy('fecha')
        .get()
        .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          // eslint-disable-next-line no-console
          console.log(`${doc.id} => ${doc.data().pedido}`);
          let eventoData = {
            id: doc.id,
            cliente: doc.data().cliente,
            pedido: doc.data().pedido,
          }
          pedido.push(eventoData)
        });
        context.commit('setState',{
          state: 'dataPedido',
          value: pedido
        })
      })
    } catch(error){
      // eslint-disable-next-line no-console
      console.log(error);
      }
  },

}
})
