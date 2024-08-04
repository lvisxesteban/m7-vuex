<template>
  <div class="container">
    <div class="row py-4 my-4 text-center">
      <h1 class="fw-bold">Tienda 32Bits</h1>
      <h2 class="fw-semibold">Lista de videojuegos</h2>
      <!--<button @click="getProductos">Obtener productos</button>-->
    </div>
    <div>
      <table class="table">
        <thead>
          <th scope="col">Código</th>
          <th scope="col">Nombre</th>
          <th scope="col">Stock</th>
          <th scope="col">Precio</th>
          <th scope="col">Acciones</th>
        </thead>
        <tbody class="table-group-divider">
          <!--Itera sobre cada producto en el estado del store de Vuex-->
          <tr v-for="(item, key) in $store.state.productos" :key="key">
            <td>{{ item.codigo }}</td>
            <td>{{ item.nombre }}</td>
            <td>{{ item.stock }}</td>
            <td>$ {{ item.precio }}</td>
            <td>

              <div class="btn-group" role="group"><!-- Botones para restar y sumar stock -->
                <button @click="
                  updateProductoAction({ indice: key, operacion: 'restar' })
                  " class="btn btn-primary">
                  -
                </button>
                &nbsp;
                <button @click="
                  updateProductoAction({ indice: key, operacion: 'sumar' })
                  " class="btn btn-primary">
                  +
                </button>
              </div>

            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'App',
  components: {},
  methods: { // Mapeamos las acciones del store de Vuex a métodos del componente
    ...mapActions(['getProductos', 'updateProductoAction']),
  },
  mounted() {
    this.getProductos(); // Llama a la acción para obtener productos cuando el componente se monta
  },
};
</script>

<style>
/*.encabezados {
  text-align: center;
}

table {
  text-align: center;
  width: 100%;
}

th,
tr td {
  border: 1px solid;
}*/
</style>
