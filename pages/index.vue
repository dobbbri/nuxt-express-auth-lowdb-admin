<template>
  <div class="container">
    <div>
      {{ status }}
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $http }) {
    const res = await $http.$get('/api/users')
    return { status: res }
  },

  data() {
    return {
      user: {
        username: 'sergio',
        password: 'xxx'
      }
    }
  },

  created() {
    const xx = this.$http.$post('/api/users', this.user)
    console.log(xx)
  }
}
</script>
