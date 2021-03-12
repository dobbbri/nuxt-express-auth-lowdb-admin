<template>
  <div>
    <Nuxt />
  </div>
</template>

<style>
.label {
  @apply block text-sm font-medium text-gray-700;
}
.imput,
.select {
  @apply w-full border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500;
}
.checkbox,
.radio {
  @apply border-gray-300 rounded text-indigo-600 focus:border-indigo-500 focus:bg-indigo-500;
}
.button {
  @apply shadow-sm inline-flex justify-center w-full px-4 py-2 text-base font-medium border rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm;
}
</style>
