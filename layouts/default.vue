<template>
  <div>
    <Nuxt />
  </div>
</template>

<style>
thead > tr > th {
  @apply px-6 py-2 text-xs font-medium tracking-wider text-left uppercase;
}

tbody > tr > td {
  @apply px-6 py-2 whitespace-nowrap text-sm text-gray-500;
}

label {
  @apply block text-sm font-medium text-gray-700;
}

[type='text'],
[type='email'],
[type='url'],
[type='password'],
[type='number'],
select {
  @apply mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm;
}

[type='checkbox'],
[type='radio'] {
  @apply focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded;
}

.button {
  @apply shadow-sm inline-flex justify-center w-full px-4 py-2 text-base font-medium border rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm;
}

.green-button {
  @apply text-white bg-green-600 border-transparent hover:bg-green-700 focus:ring-green-500 focus:border-green-500;
}

.gray-button {
  @apply text-gray-700 bg-white border-gray-300 hover:bg-gray-50 focus:ring-gray-500 focus:border-gray-500;
}

.red-button {
  @apply text-white bg-red-600 border-transparent hover:bg-red-700 focus:ring-red-500 focus:border-red-500;
}
</style>
// https://github.com/tailwindlabs/tailwindcss-forms/blob/master/src/index.js
