<template>
  <section class="container">
    <div>
      <h1 class="title">Produto</h1>
      <h2 class="info">{{ product.name }}, {{ product.amount }}</h2>
      <nuxt-link class="button" to="/admin/products"> Voltar </nuxt-link>
    </div>
  </section>
</template>

<script>
export default {
  async asyncData({ params, $http }) {
    const res = await $http.$get(`/api/products/${params.id}`)
    return { product: res }
  },

  data() {
    return {
      form: {}
    }
  },

  head() {
    return {
      title: `Produto: ${this.product.name}`
    }
  },

  methods: {
    async save() {
      const msg = await this.$http.$put(`/api/products/${this.form._id}`, this.form)
      return { message: msg }
    }
  }
}
</script>
