<template>
  <div class="flex justify-center min-h-screen px-4 py-8 bg-gray-200 sm:px-6 lg:px-8">
    <div class="w-full max-w-2xl space-y-8">
      <div class="overflow-hidden rounded-lg shadow">
        <div class="px-4 py-5 bg-white sm:p-6 space-y-4">
          <div class="flex flex-row justify-between -my-2">
            <h2 class="w-full font-sans text-2xl font-semibold text-gray-900 sm:text-xl sm:truncate">Produtos</h2>
            <nuxt-link :to="{ name: 'admin-products-add' }" class="w-auto btn btn-green"> Incluir </nuxt-link>
          </div>
          <div class="flex flex-col">
            <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                <div class="overflow-hidden border border-gray-300 rounded">
                  <table class="min-w-full divide-y divide-gray-300">
                    <thead class="bg-gray-50 to-gray-600">
                      <tr>
                        <th scope="col" class="text-left">Nome</th>
                        <th scope="col" class="text-right">Valor</th>
                        <th scope="col" class="text-center">Unidade</th>
                        <th scope="col" class="text-center">Exibir</th>
                      </tr>
                    </thead>

                    <tbody class="overflow-y-auto bg-white divide-y divide-gray-300">
                      <tr v-for="product in products" :key="product.id">
                        <td class="text-sm font-medium text-left whitespace-nowrap">
                          <nuxt-link
                            :to="{ name: 'admin-products-id', params: { id: product.id } }"
                            class="text-indigo-600 hover:text-indigo-900"
                          >
                            {{ product.name }}
                          </nuxt-link>
                        </td>

                        <td class="text-right">{{ product.amount }}</td>
                        <td class="text-center">{{ product.unit }}</td>
                        <td class="text-center">
                          <span
                            class="inline-flex text-xs font-semibold text-green-800 bg-green-100 rounded-full leading-5"
                          >
                            {{ product.show === true ? 'Sim' : 'Não' }}
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
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

  async asyncData({ $axios, $toast, $auth }) {
    return await $axios
      .$get('/api/products')
      .then((res) => {
        return { products: res }
      })
      .catch((err) =>
        $toast.show({ type: 'danger', classToast: 'bg-red-500', message: 'Erro: ' + err.response.data.error })
      )
  },

  head() {
    return {
      title: 'Produtos'
    }
  }
}
</script>
