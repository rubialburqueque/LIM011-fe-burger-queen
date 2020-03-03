import Vue from 'vue'
import Vuex from 'vuex'
import {db} from '../db';



Vue.use(Vuex)

  export default new Vuex.Store({
  el: '#root',
  state: {
    count: 1,
    menuProducts:[],
    complementos:[],
    hamburguesas:[],
    bebidas:[],
    pedido:{
      productUnit:[]
    }
  },
      
  mutations: {
    increment(state, payload){
      if(payload>0){
        state.count += parseInt(payload)
        return }
        state.count++
    },
    decrement(state){
      state.count--
    },
    setState(state,payload){
      state[payload.state] = payload.value
    },
    deleteProduct(state,payload){
      state.pedido.splice(this.index, 1); 
      state[payload.state] = payload.index
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

  }
})

