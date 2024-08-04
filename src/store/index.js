import { createStore } from 'vuex';

export default createStore({
  state: {
    productos: null,
  },
  getters: {},
  mutations: {
    initProductos(state, productos) {
      state.productos = productos;
    },
    updateProducto(state, payload) {
      // { indice: 0, operacion: restar }
      console.log(payload);
      if (payload.operacion == 'sumar') {
        state.productos[payload.indice].stock++;
      } else {
        state.productos[payload.indice].stock--;
      }
    },
  },
  actions: {
    getProductos(context) {
      fetch('../juegos.json')
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          context.commit('initProductos', data);
          console.log(data);
        })
        .catch((err) => console.log(err));
    },
    updateProductoAction(context, payload) {
      context.commit('updateProducto', payload);
    },
  },
  modules: {},
});
