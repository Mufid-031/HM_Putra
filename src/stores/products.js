import { defineStore } from 'pinia'
import axios from 'axios'

export const useProductsStore = defineStore('products', {
  state: () => ({
    products: [],
    addProdct: {
      nameProduct: '',
      categoryProduct: '',
      priceProduct: '',
      categorypriceProduct: ''
    },
    editProduct: {
      nameProduct: '',
      categoryProduct: '',
      priceProduct: '',
      categorypriceProduct: '',
      idProduct: ''
    },
    searchProduct: ''
  }),
  actions: {
    async getProducts() {
      try {
        const response = await axios.get(`http://localhost:5000/api/products`)
        this.products = response.data
      } catch (error) {
        console.log(error)
      }
    },

    async addProductHandler() {
      if (
        this.addProdct.nameProduct &&
        this.addProdct.categoryProduct &&
        this.addProdct.priceProduct &&
        this.addProdct.categorypriceProduct
      ) {
        try {
          const response = await axios.post(`http://localhost:5000/api/products`, {
            headers: { 'Content-Type': 'application/json' },
            nameProduct: this.addProdct.nameProduct,
            categoryProduct: this.addProdct.categoryProduct,
            priceProduct: this.addProdct.priceProduct,
            categorypriceProduct: this.addProdct.categorypriceProduct
          })

          console.log(response)
          this.addProdct.nameProduct = ''
          this.addProdct.categoryProduct = ''
          this.addProdct.priceProduct = ''
          this.addProdct.categorypriceProduct = ''
          this.getProducts()
        } catch (error) {
          console.log(error)
          return false
        }
      }
    },
    async deleteProductHandler(id) {
      if (id) {
        try {
          const response = await axios.delete(`http://localhost:5000/api/products/${id}`)
          console.log(response)
          this.getProducts()
        } catch (error) {
          console.log(error)
          return false
        }
      }
    },
    updateInputEditProduct(name, category, price, categoryprice, id) {
      this.editProduct.nameProduct = name
      this.editProduct.categoryProduct = category
      this.editProduct.priceProduct = price
      this.editProduct.categorypriceProduct = categoryprice
      this.editProduct.idProduct = id
    },
    async editProductHandler() {
      if (
        this.editProduct.nameProduct &&
        this.editProduct.categoryProduct &&
        this.editProduct.priceProduct &&
        this.editProduct.categorypriceProduct &&
        this.editProduct.idProduct
      ) {
        try {
          const response = await axios.put(
            `http://localhost:5000/api/products/${this.editProduct.idProduct}`,
            {
              headers: { 'Content-Type': 'application/json' },
              nameProduct: this.editProduct.nameProduct,
              categoryProduct: this.editProduct.categoryProduct,
              priceProduct: this.editProduct.priceProduct,
              categorypriceProduct: this.editProduct.categorypriceProduct
            }
          )
          console.log(response)
          this.getProducts()
        } catch (error) {
          console.log(error)
          return false
        }
      }
    },
    async getProductsBySearch() {
      if (this.searchProduct) {
        try {
          const response = await axios.get(
            `http://localhost:5000/api/product?nameProduct=${this.searchProduct}`
          )
          this.products = response.data
        } catch (error) {
          console.log(error)
        }
      } else {
        this.getProducts()
      }
    }
  }
})
