<script>
import { useProductsStore } from '../stores/products'

export default {
  setup() {
    const productsStore = useProductsStore()

    return { productsStore }
  },
  methods: {
    rupiahCurrency(price) {
      return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR'
      })
        .format(price)
        .replace(/(\.|,)00$/g, '')
    }
  },
  mounted() {
    this.productsStore.getProducts()
  },
  watch: {
    'this.productsStore.searchProduct': function () {
      this.productsStore.getProductsBySearch()
    }
  }
}
</script>

<template>
  <div class="grid gap-6 pt-6 md:py-8 md:px-20 md:grid-cols-1 bg-gray-900">
    <div class="mb-6 grid gap-6 md:grid-cols-2">
      <select
        data-aos="fade-right"
        id="category"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option selected>Pilih Kategori</option>
        <option value="nelayan">Nelayan</option>
        <option value="bakol">Bakol</option>
      </select>
      <input
        data-aos="fade-left"
        type="text"
        id="cari_produk"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Udang | Kerapu | Kakap | dll"
        required
        v-model="productsStore.searchProduct"
        @input="productsStore.getProductsBySearch()"
      />
    </div>
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg" data-aos="fade-up">
      <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead
          class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
        >
          <tr>
            <th scope="col" class="px-6 py-3">Nama Produk</th>
            <th scope="col" class="px-6 py-3">Kategori Produk</th>
            <th scope="col" class="px-6 py-3">Kategori Harga</th>
            <th scope="col" class="px-6 py-3">Harga</th>
            <th scope="col" class="px-6 py-3">
              <span class="sr-only">Edit</span>
            </th>
          </tr>
        </thead>
        <tbody v-if="productsStore.products.length == 0">
          <tr
            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 h-36"
          >
            <td colspan="5" class="text-center text-2xl">Tidak ada data</td>
          </tr>
        </tbody>
        <tbody v-else>
          <tr
            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            v-for="product in productsStore.products"
            :key="product.id"
          >
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              {{ product.nameProduct.toUpperCase() }}
            </th>
            <td class="px-6 py-4">{{ product.categoryProduct.toUpperCase() }}</td>
            <td class="px-6 py-4">{{ product.categorypriceProduct.toUpperCase() }}</td>
            <td class="px-6 py-4">{{ rupiahCurrency(product.priceProduct) }}</td>
            <td class="px-6 py-4 text-right">
              <button
                @click="
                  productsStore.updateInputEditProduct(
                    product.nameProduct,
                    product.categoryProduct,
                    product.priceProduct,
                    product.categorypriceProduct,
                    product._id
                  )
                "
                class="font-medium text-green-600 dark:text-green-500"
              >
                Edit
              </button>
              |
              <button
                @click="productsStore.deleteProductHandler(product._id)"
                class="font-medium text-red-600 dark:text-red-500"
              >
                Hapus
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
