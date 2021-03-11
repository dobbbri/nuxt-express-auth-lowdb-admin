<template>
  <section class="container">
    <div>
      <Logo />
      <h1 class="title">Produtos</h1>
      <ul class="products">
        <li v-for="(product, index) in products" :key="index" class="product">
          <nuxt-link :to="{ name: 'products-id', params: { id: product.id } }">
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
    const data = await $http.$get('/api/products')
    return { products: data }
  },

  head() {
    return {
      title: 'Users'
    }
  }
}
</script>

<style scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.title {
  margin: 30px 0;
}
.products {
  list-style: none;
  margin: 0;
  padding: 0;
}
.product {
  margin: 10px 0;
}
.button {
  display: inline-block;
  margin-top: 50px;
}
</style>
