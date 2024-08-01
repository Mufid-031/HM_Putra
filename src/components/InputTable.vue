<script>
import { usePrintStore } from '@/stores/print'
import { ref } from 'vue'

export default {
  setup() {
    const printStore = usePrintStore()

    return { printStore }
  },
  data() {
    return {
      printElement: ref()
    }
  },
  methods: {
    print() {
      this.$refs.addButton.style.display = 'none'
      this.$refs.printButton.style.display = 'none'
      window.print()
      setTimeout(() => {
        this.$refs.addButton.style.display = 'block'
        this.$refs.printButton.style.display = 'block'
      }, 1000)
    },
    rupiahCurrency(price) {
      return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR'
      })
        .format(price)
        .replace(/(\.|,)00$/g, '')
    }
  },
  watch: {
    'printStore.table': function () {
      this.printStore.getTotal()
    }
  }
}
</script>

<template>
  <div class="relative overflow-x-auto" data-aos="fade-up">
    <table
      :ref="printElement"
      class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
    >
      <thead
        class="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400"
      >
        <tr>
          <th scope="col" class="px-6 py-3 rounded-s-lg">Nama Produk</th>
          <th scope="col" class="px-3 py-3">Berat /kg</th>
          <th scope="col" class="px-3 py-3">Kategori</th>
          <th scope="col" class="px-6 py-3 rounded-e-lg">Harga</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(item, index) in printStore.table"
          :key="index"
          class="bg-white dark:bg-gray-800"
        >
          <th
            scope="row"
            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            <input
              type="text"
              id="default-input"
              placeholder="udang | kerapu | kepiting"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              v-model="item.name"
              @input="printStore.getPrice(item.name, item.weight, item.category, index)"
            />
          </th>
          <td class="px-3 py-4">
            <input
              type="number"
              id="number-input"
              aria-describedby="helper-text-explanation"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="1 | 0.5 | 2.5 /kg"
              v-model="item.weight"
              @input="printStore.getPrice(item.name, item.weight, item.category, index)"
            />
          </td>
          <td class="px-3 py-4">
            <select
              id="category"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              v-model="item.category"
              @change="printStore.getPrice(item.name, item.weight, item.category, index)"
            >
              <option selected>Pilih Kategori</option>
              <option
                v-for="option in item.categoryOptions"
                :key="option"
                :value="option.toLowerCase()"
              >
                {{ option }}
              </option>
            </select>
          </td>
          <td class="px-6 py-4">{{ rupiahCurrency(item.price) || 0 }}</td>
        </tr>
      </tbody>
      <tfoot>
        <tr class="font-semibold text-gray-900 dark:text-white">
          <th scope="row" class="px-6 py-3 text-base">Total</th>
          <td class="px-6 py-3">{{ printStore.table.length }} Barang</td>
          <td class="px-6 py-3"></td>
          <td class="px-6 py-3">{{ rupiahCurrency(printStore.total) }}</td>
        </tr>
        <tr class="font-semibold text-gray-900 dark:text-white">
          <td scope="row" colspan="2" class="px-6 py-6 text-base">
            <button
              ref="addButton"
              @click="printStore.addNewTable()"
              class="bg-green-500 hover:bg-green-700 text-white font-bold w-full py-2 px-4 rounded"
            >
              Tambah
            </button>
          </td>
          <td scope="row" colspan="2" class="px-6 py-6 text-base">
            <button
              ref="printButton"
              @click="print"
              class="bg-green-500 hover:bg-green-700 text-white font-bold w-full py-2 px-4 rounded"
            >
              Print
            </button>
          </td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>
