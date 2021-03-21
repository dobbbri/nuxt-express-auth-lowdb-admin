<template>
  <div class="flex justify-center min-h-screen px-4 py-8 bg-gray-200 sm:px-6 lg:px-8">
    <div class="w-full max-w-sm space-y-8">
      <div class="overflow-hidden rounded-lg shadow">
        <div class="px-4 py-5 bg-white sm:p-6 space-y-4">
          <h2 class="-mt-2 font-sans text-2xl font-semibold text-gray-900 sm:text-xl sm:truncate">Identificação</h2>

          <div>
            <label for="form.name">Usuário:</label>
            <input
              id="form.username"
              v-model="form.username"
              type="text"
              placeholder="Informe o seu usuário"
              required
              autofocus
            />
          </div>

          <div>
            <label for="form.password">Senha:</label>
            <input
              id="form.password"
              v-model="form.password"
              type="password"
              placeholder="Informe a sua senha"
              required
            />
          </div>

          <div class="w-full">
            <button type="button" class="btn btn-green" style="margin-left: 0; width: 100%" @click="login">
              Entrar
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'admin',

  data() {
    return {
      form: {
        username: 'admin',
        password: 'admin'
      }
    }
  },

  head() {
    return {
      title: 'Autenticação'
    }
  },

  computed: {
    isDisabled() {
      return !this.form.username || !this.form.password
    }
  },

  methods: {
    async login() {
      await this.$auth
        .loginWith('local', { data: this.form })
        .then(() => {
          this.$toast.show({ type: 'success', title: 'Sucesso:', message: `Bem-vindo ${this.$auth.user.username}` })
          this.$router.push('/admin/products')
        })
        .catch((err) => this.$toast.show({ type: 'danger', title: 'Erro:', message: err.response.data.error }))
    }
  }
}
</script>
