<template>
  <div class="container">
    <nuxt-link class="button" to="/admin/products"> Produtos </nuxt-link>
  </div>
</template>

<script>
export default {
  async asyncData({ $http }) {
    const res = await $http.$get('/api/users/')
    return { user: res }
  },

  head() {
    return {
      title: `Usuário: ${this.user.username}`
    }
  }
}
</script>
