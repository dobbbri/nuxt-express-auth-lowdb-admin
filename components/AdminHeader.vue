<template>
  <header class="text-gray-600 body-font">
    <div class="container flex items-center px-5 py-1 mx-auto">
      <a class="flex items-center font-medium text-gray-900 title-font md:mb-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          class="w-10 h-10 p-2 text-white bg-indigo-500 rounded-full"
          viewBox="0 0 24 24"
        >
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
        </svg>
        <span class="hidden ml-3 text-xl md:block">Administração</span>
        <span class="ml-2 text-xl md:hidden">{{ $auth.loggedIn ? 'Adm.' : 'Administração' }}</span>
      </a>
      <nav class="flex flex-wrap items-center justify-center ml-auto text-base">
        <nuxt-link v-if="$auth.loggedIn" class="ml-4 hover:text-indigo-500" to="/admin/products">Produtos</nuxt-link>
        <nuxt-link v-if="$auth.loggedIn" class="ml-4 hover:text-indigo-500" to="/admin/password"
          >Alterar Senha</nuxt-link
        >
        <button type="button" class="btn btn-red" style="width: auto" @click="logout">Sair</button>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  methods: {
    async logout() {
      await this.$auth.logout()
      this.$router.push('/')
    }
  }
}
</script>
