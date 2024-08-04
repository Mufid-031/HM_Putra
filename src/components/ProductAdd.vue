<script>
import { useProductsStore } from '../stores/products'

export default {
    setup() {
        const productsStore = useProductsStore()

        return { productsStore }
    },
}

</script>

<template>
  <form @submit.prevent="productsStore.addProductHandler" class="w-full bg-slate-800 p-10" data-aos="fade-right">
    <div class="mb-6">
      <h3 class="text-3xl font-medium text-white">Tambah Produk</h3>
    </div>
    <div class="grid gap-6 mb-6 md:grid-cols-2">
      <div>
        <label
          for="nama_produk"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Nama Produk</label
        >
        <input
          type="text"
          id="nama_produk"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Udang | Kerapu | Kakap | dll"
          required
          v-model="productsStore.addProdct.nameProduct"
        />
      </div>
      <div>
        <label
          for="kategori_produk"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Kategori Produk</label
        >
        <input
          type="text"
          id="kategori_produk"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Kecil | Sedang | Besar"
          required
          v-model="productsStore.addProdct.categoryProduct"
        />
      </div>
      <div>
        <label
          for="harga_produk"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Harga</label
        >
        <input
          type="text"
          id="harga_produk"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Rp. 160.000 | 200.000 | 250.000 | dll /kg"
          required
          v-model="productsStore.addProdct.priceProduct"
        />
      </div>
      <div>
        <label
          for="kategori_harga_produk"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Kategori Harga</label
        >
        <input
          type="tel"
          id="kategori_harga_produk"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Nelayan | Bakol"
          required
          v-model="productsStore.addProdct.categoryPriceProduct"
        />
      </div>
    </div>
    <button
      type="submit"
      class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
    >
      Tambah
    </button>
  </form>
</template>
