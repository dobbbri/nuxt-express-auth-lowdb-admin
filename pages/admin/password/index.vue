<template>
  <div class="flex justify-center min-h-screen px-4 py-8 bg-gray-200 sm:px-6 lg:px-8">
    <div class="w-full max-w-md space-y-8">
      <div class="overflow-hidden rounded-lg shadow">
        <div class="px-4 py-5 bg-white sm:p-6 space-y-4">
          <h2 class="-mt-2 font-sans text-2xl font-semibold text-gray-900 sm:text-xl sm:truncate">Alterar senha</h2>

          <div>
            <label for="form.password">Senha Atual:</label>
            <input
              id="form.password"
              v-model="form.password"
              type="password"
              placeholder="Informe a sua senha atual"
              required
              autofocus
            />
          </div>

          <div>
            <label for="form.newPassword">Nova Senha:</label>
            <input
              id="form.newPassword"
              v-model="form.newPassword"
              type="password"
              placeholder="Informe a sua nova senha"
              required
            />
          </div>

          <div class="sm:flex sm:flex-row-reverse">
            <button type="button" class="sm:w-auto sm:ml-2 btn btn-green" @click="save">Alterar</button>
            <nuxt-link class="mt-4 sm:mt-0 sm:w-auto btn btn-gray" to="/admin/products">Cancelar</nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'admin',

  middleware: ['auth'],

  data() {
    return {
      form: {
        password: '',
        newPassword: ''
      }
    }
  },

  head() {
    return {
      title: `Trocar a senha do ${this.$auth.user.username}`
    }
  },

  methods: {
    async save() {
      await this.$axios
        .$put('api/users/', this.form)
        .then((res) => {
          this.$toast.show({ type: 'success', classToast: 'bg-green-500', message: res.message })
          this.$router.push('/admin/products')
        })
        .catch((err) =>
          this.$toast.show({ type: 'danger', classToast: 'bg-red-500', message: 'Erro: ' + err.response.data.error })
        )
    }
  }
}
</script>
