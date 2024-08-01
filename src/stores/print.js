import { defineStore } from 'pinia'
import axios from 'axios'

export const usePrintStore = defineStore('print', {
  state: () => ({
    bluePrint: [
      {
        name: 'udang',
        category: ["Tingkat 1", "Tingkat 2", "Tingkat 3", "Tingkat 4", "Tingkat 5", "Tingkat 6"],
      },
      {
        name: 'laosan',
        category: ["SP-B", "SP", "KT", "LJN"],
      },
      {
        name: 'gl',
        category: ["GL", "GL-K"]
      }
    ],
    table: [
      {
        name: '',
        weight: 0,
        category: '',
        price: 0,
        categoryOptions: []
      },
      {
        name: '',
        weight: 0,
        category: '',
        price: 0,
        categoryOptions: []
      },
      {
        name: '',
        weight: 0,
        category: '',
        price: 0,
        categoryOptions: []
      }
    ],
    total: 0
  }),
  actions: {
    addNewTable() {
      this.table.push({
        name: '',
        weight: 0,
        category: '',
        price: 0,
        categoryOptions: []
      })
    },
    async getPrice(name, weigth, category, index) {
      this.getCategoryByName(name, index)
      if (name && weigth && category) {
        try {
          const response = await axios.get(
            `http://localhost:5000/api/print?nameProduct=${name}&categoryProduct=${category}`
          )

          this.table[index].price = response.data[0].priceProduct * parseFloat(weigth)
          console.log(this.table[index])
        } catch (error) {
          console.log(error)
        } finally {
          this.getTotal()
        }
      }
    },
    getTotal() {
      let tempTotal = 0
      this.table.forEach((item) => {
        tempTotal += item.price
      })

      this.total = tempTotal
    },
    getCategoryByName(name, index) {
      this.bluePrint.map((item) => {
        if (item.name === name) {
          this.table[index].categoryOptions = item.category
        }
      })
    }
  }
})
