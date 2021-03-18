<template>
  <div>
    <admin-header />

    <div class="flex justify-center min-h-screen px-4 py-8 bg-gray-200 sm:px-6 lg:px-8">
      <div class="w-full max-w-md space-y-8">
        <div class="overflow-hidden rounded-lg shadow">
          <div class="px-4 py-5 bg-white sm:p-6 space-y-4">
            <h2 class="-mt-2 font-sans text-2xl font-semibold text-gray-900 sm:text-xl sm:truncate">
              Adicionar produtos
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
              <button type="button" class="button green-button" @click="save">Adicionar</button>
              <nuxt-link class="button gray-button" to="/admin/products"> Cancelar </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  middleware: ['auth'],

  data() {
    return {
      form: {
        name: '',
        unity: '',
        amount: 0,
        show: true
      }
    }
  },

  head() {
    return {
      title: `Adicionar produto: ${this.form.name}`
    }
  },

  methods: {
    async save() {
      const res = await this.$axios.$post('api/products/', this.form)
      alert(res.message)
      this.$router.push('/admin/products')
    }
  }
}
</script>
