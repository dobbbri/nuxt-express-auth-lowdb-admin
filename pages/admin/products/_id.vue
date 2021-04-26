<template>
  <div class="flex justify-center min-h-screen px-4 py-8 bg-gray-200 sm:px-6 lg:px-8">
    <div class="w-full max-w-md space-y-8">
      <div class="overflow-hidden rounded-lg shadow">
        <div class="px-4 py-5 bg-white sm:p-6 space-y-4">
          <h2 class="-mt-2 font-sans text-2xl font-semibold text-gray-900 sm:text-xl sm:truncate">
            Alterar/Excluir produto
          </h2>

          <div>
            <label for="form.name">Nome:</label>
            <input
              id="form.name"
              v-model="form.name"
              type="text"
              autocomplete="form.name"
              placeholder="Informe o nome do produto"
              required
              autofocus
            />
          </div>

          <div>
            <label for="form.amount">Valor:</label>
            <currency-input
              id="form.amount"
              v-model="form.amount"
              class="input"
              placeholder="Informe o valor do produto"
              required
            />
          </div>

          <div>
            <label for="form.unit">Unidade:</label>
            <select id="form.unit" v-model="form.unit" class="select">
              <option>Kilo</option>
              <option>Peça</option>
            </select>
          </div>

          <div class="flex items-center">
            <input id="form.show" v-model="form.show" type="checkbox" class="checkbox" />
            <label for="form.show" class="ml-2 font-medium text-gray-700"> Exibir na lista de produtos </label>
          </div>

          <div class="sm:flex sm:flex-row-reverse">
            <button type="button" class="sm:w-auto btn btn-green" @click="save">Alterar</button>
            <button type="button" class="mt-4 sm:mt-0 sm:w-auto sm:mx-2 btn btn-red" @click="confirm">Excluir</button>
            <nuxt-link class="mt-4 sm:mt-0 sm:w-auto btn btn-gray" to="/admin/products"> Cancelar </nuxt-link>
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

  async asyncData({ params, $axios, $toast, $auth }) {
    return await $axios
      .$get(`/api/products/${params.id}`)
      .then((res) => {
        return { form: res }
      })
      .catch((err) =>
        $toast.show({ type: 'danger', classToast: 'bg-red-500', message: 'Erro: ' + err.response.data.error })
      )
  },

  data() {
    return {
      form: {
        name: '',
        unit: 'Kilo',
        amount: 0,
        show: true
      }
    }
  },

  head() {
    return {
      title: `Produto: ${this.form.name}`
    }
  },

  methods: {
    async save() {
      this.$nuxt.$loading.start()
      await this.$axios
        .$put(`/api/products/${this.form.id}`, this.form)
        .then((res) => {
          this.$toast.show({ type: 'success', classToast: 'bg-green-500', message: res.message })
        })
        .catch((err) =>
          this.$toast.show({ type: 'danger', classToast: 'bg-red-500', message: 'Erro: ' + err.response.data.error })
        )
        .finally(() => {
          this.$nuxt.$loading.finish()
          this.$router.push('/admin/products')
        })
    },

    confirm() {
      this.$modal.show({
        type: 'danger',
        title: 'Confirme a exclusão',
        body: 'Esta ação é permanente e não poderá ser desfeita.',
        primary: { label: 'Confirmar', theme: 'red', action: () => this.remove() },
        secondary: { label: 'Cancelar', theme: 'white', action: () => null }
      })
    },

    async remove() {
      this.$nuxt.$loading.start()
      await this.$axios
        .$delete(`api/products/${this.form.id}`)
        .then((res) => {
          this.$toast.show({ type: 'success', classToast: 'bg-green-500', message: res.message })
          this.$router.push('/admin/products')
        })
        .catch((err) =>
          this.$toast.show({ type: 'danger', classToast: 'bg-red-500', message: 'Erro: ' + err.response.data.error })
        )
        .finally(() => this.$nuxt.$loading.finish())
    }
  }
}
</script>
