<template>
  <div class="container">
    <nuxt-link class="button" to="/admin/products"> Produtos </nuxt-link>
  </div>
</template>

<script>
export default {
  asyncData({ error, $http }) {
    return $http
      .$get('/api/users/')
      .then((res) => {
        return { user: res }
      })
      .catch((err) => {
        error({ statusCode: err.status, message: err.message })
      })
  },

  head() {
    return {
      title: `Usuário: ${this.user.username}`
    }
  }
}
</script>
