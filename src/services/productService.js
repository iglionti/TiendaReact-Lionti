import { products } from '../data/products'

const SIMULATED_DELAY = 1000

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products)
    }, SIMULATED_DELAY)
  })
}

export const getProductsByCategory = (categoryId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const filtered = products.filter(product => product.category === categoryId)
      resolve(filtered)
    }, SIMULATED_DELAY)
  })
}

export const getProductById = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const product = products.find(product => product.id === parseInt(id))
      resolve(product)
    }, SIMULATED_DELAY)
  })
}
