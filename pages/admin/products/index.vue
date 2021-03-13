<template>
  <div class="flex justify-center min-h-screen px-4 py-12 bg-gray-100 sm:px-6 lg:px-8">
    <div class="w-full max-w-2xl space-y-8">
      <div class="overflow-hidden rounded-lg shadow">
        <div class="px-4 py-5 bg-white sm:p-6 space-y-4">
          <div class="flex flex-row justify-between -my-2">
            <h2 class="w-full font-sans text-2xl font-semibold text-gray-900 sm:text-xl sm:truncate">Produtos</h2>
            <nuxt-link
              :to="{ name: 'admin-products-add' }"
              class="text-white truncate bg-green-600 border-transparent button hover:bg-green-700 focus:ring-green-500"
            >
              Adicionar
            </nuxt-link>
          </div>
          <div class="flex flex-col">
            <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                <div class="overflow-hidden border border-gray-300 rounded">
                  <table class="min-w-full divide-y divide-gray-300">
                    <thead class="bg-gray-50 to-gray-600">
                      <tr>
                        <th scope="col">Nome</th>
                        <th scope="col">Valor</th>
                        <th scope="col">Unidade</th>
                        <th scope="col">Exibe?</th>
                      </tr>
                    </thead>

                    <tbody class="overflow-y-auto bg-white divide-y divide-gray-300">
                      <tr v-for="(product, index) in products" :key="index">
                        <td class="text-sm font-medium whitespace-nowrap">
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
                            {{ product.show }}
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
  async asyncData({ $http }) {
    const res = await $http.$get('/api/products')
    return { products: res }
  },

  head() {
    return {
      title: 'Produtos'
    }
  }
}
</script>
