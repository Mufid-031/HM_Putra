<script>
import AdminJumbotron from '../components/AdminJumbotron.vue'
import ProductsTable from '../components/ProductsTable.vue'
import ProductAdd from '../components/ProductAdd.vue'
import ProductEdit from '../components/ProductEdit.vue'

export default {
  components: {
    AdminJumbotron,
    ProductsTable,
    ProductAdd,
    ProductEdit
  }
}
</script>

<template>
  <AdminJumbotron />
  <div class="grid gap-6 pt-6 md:py-8 md:px-20 md:grid-cols-2 bg-gray-900">
    <ProductAdd />
    <ProductEdit />
  </div>
  <ProductsTable />
</template>
