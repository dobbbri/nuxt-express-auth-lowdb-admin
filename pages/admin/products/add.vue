<template>
  <div class="flex items-center justify-center min-h-screen px-4 py-12 bg-gray-50 sm:px-6 lg:px-8">
    <div class="w-full max-w-md space-y-8">
      <form action="#" method="POST">
        <div class="overflow-hidden shadow sm:rounded-md">
          <div class="px-4 py-5 bg-white sm:p-6">
            <div class="mt-1">
              <label for="form.name" class="label">Nome:</label>
              <input
                id="form.name"
                type="text"
                name="form.name"
                placeholder="Informe o nome do produto"
                required
                class="input"
              />
            </div>

            <div class="mt-1">
              <label for="form.unity" class="label">Unidade:</label>
              <select id="form.unity" name="form.unity" class="select">
                <option>Kilo</option>
                <option>Peça</option>
              </select>
            </div>

            <div class="mt-1">
              <label for="form.amount" class="label">Valor:</label>
              <input
                id="form.amount"
                type="text"
                name="form.amount"
                placeholder="Informe o valor do produto"
                required
                class="input"
              />
            </div>

            <div class="mt-1">
              <input id="form.show" name="form.show" type="checkbox" class="checkbox" />
              <label for="form.show" class="block ml-2 text-sm text-gray-700"> Exibir na lista de produtos </label>
            </div>
          </div>

          <div class="px-4 py-3 bg-gray-50 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              type="button"
              class="text-white bg-green-600 border-transparent button hover:bg-green-700 focus:ring-green-500"
            >
              Gravar
            </button>
            <button
              type="button"
              class="text-gray-700 bg-white border-gray-300 button hover:bg-gray-50 focus:ring-indigo-500"
            >
              Voltar
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
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

  methods: {
    async save() {
      const res = await this.$http.$post('api/v1/brands', this.form)
      alert(res.message)
    }
  }
}
</script>
