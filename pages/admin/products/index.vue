<template>
  <section class="container">
    <div>
      <h1 class="title">Produtos</h1>
      <ul class="products">
        <li v-for="(product, index) in products" :key="index" class="product">
          <nuxt-link :to="{ name: 'admin-products-id', params: { id: product.id } }">
            {{ product.name }}, {{ product.amount }}
          </nuxt-link>
        </li>
      </ul>
      <nuxt-link class="button" to="/"> Homepage </nuxt-link>
    </div>
  </section>
</template>

<script>
export default {
  async asyncData({ $http }) {
    const res = await $http.$get('/api/products')
    return { products: res }
  },

  head() {
    return {
      title: 'Produtos'
    }
  }
}
</script>
