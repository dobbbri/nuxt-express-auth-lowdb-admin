<template>
  <div class="flex justify-center min-h-screen px-4 py-12 bg-gray-100 sm:px-6 lg:px-8">
    <div class="w-full max-w-md space-y-8">
      <div class="overflow-hidden rounded-lg shadow">
        <div class="px-4 py-5 bg-white sm:p-6 space-y-4">
          <h2 class="-mt-2 font-sans text-2xl font-semibold text-gray-900 sm:text-xl sm:truncate">Alterar produtos</h2>

          <input id="form.id" v-model="form.id" type="hidden" />

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
            <input
              id="form.amount"
              v-model="form.amount"
              type="text"
              autocomplete="form.amount"
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
            <button
              type="button"
              class="text-white bg-green-600 border-transparent button hover:bg-green-700 focus:ring-green-500"
              @click="save"
            >
              Gravar
            </button>
            <nuxt-link
              class="mt-3 text-gray-700 bg-white border-gray-300 button sm:mt-0 hover:bg-gray-50 focus:ring-indigo-500"
              to="/admin/products"
            >
              Voltar
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ params, $http }) {
    const res = await $http.$get(`/api/products/${params.id}`)
    return { form: res }
  },

  head() {
    return {
      title: `Alterar produto: ${this.form.name}`
    }
  },

  methods: {
    async save() {
      const msg = await this.$http.$put(`/api/products/${this.form.id}`, this.form)
      return { message: msg }
    }
  }
}
</script>
