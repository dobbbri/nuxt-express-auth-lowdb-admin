<template>
  <div>
    <nuxt-link to="/admin" class="button gray-button">Login</nuxt-link>
    <button class="button red-button" @click="importData">import</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        username: 'admin',
        password: 'admin'
      },
      products: [
        {
          show: true,
          name: 'Asa de Frango',
          unit: 'Kilo',
          amount: '18,99'
        },
        {
          show: true,
          name: 'Alcatra',
          unit: 'Kilo',
          amount: '35,99'
        },
        {
          show: true,
          name: 'Bife Especial',
          unit: 'Kilo',
          amount: '29,99'
        },
        {
          show: true,
          name: 'Bife Mole',
          unit: 'Kilo',
          amount: '30,99'
        },
        {
          show: true,
          name: 'Bisteca Lombo',
          unit: 'Kilo',
          amount: '18,99'
        },
        {
          show: true,
          name: 'Bisteca Copa',
          unit: 'Kilo',
          amount: '17,99'
        },
        {
          show: true,
          name: 'Bucho',
          unit: 'Kilo',
          amount: '16,99'
        },
        {
          show: true,
          name: 'Capa do Contra Filé',
          unit: 'Kilo',
          amount: '27,99'
        },
        {
          show: true,
          name: 'Chuleta do Contra Filé',
          unit: 'Kilo',
          amount: '33,99'
        },
        {
          show: true,
          name: 'Chuleta Gaúcha',
          unit: 'Kilo',
          amount: '23,49'
        },
        {
          show: true,
          name: 'Chuletinha',
          unit: 'Kilo',
          amount: '24,99'
        },
        {
          show: true,
          name: 'Contra Filé',
          unit: 'Kilo',
          amount: '38,99'
        },
        {
          show: true,
          name: 'Costela Minguinha',
          unit: 'Kilo',
          amount: '20,99'
        },
        {
          show: true,
          name: 'Costela Suina',
          unit: 'Kilo',
          amount: '20,99'
        },
        {
          show: true,
          name: 'Costela Paulista',
          unit: 'Kilo',
          amount: '22,99'
        },
        {
          show: true,
          name: 'Costelão',
          unit: 'Kilo',
          amount: '21,99'
        },
        {
          show: true,
          name: 'Coxa de Frango',
          unit: 'Kilo',
          amount: '8,49'
        },
        {
          show: true,
          name: 'Coxão Duro',
          unit: 'Kilo',
          amount: '30,99'
        },
        {
          show: true,
          name: 'Coxão Mole',
          unit: 'Kilo',
          amount: '31,49'
        },
        {
          show: true,
          name: 'Coxinha da Asa',
          unit: 'Kilo',
          amount: '15,99'
        },
        {
          show: true,
          name: 'Cupin',
          unit: 'Kilo',
          amount: '29,99'
        },
        {
          show: true,
          name: 'Filé de Frango',
          unit: 'Kilo',
          amount: '13,99'
        },
        {
          show: true,
          name: 'Filé Mignom',
          unit: 'Kilo',
          amount: '38,99'
        },
        {
          show: true,
          name: 'Fraldinha',
          unit: 'Kilo',
          amount: '31,49'
        },
        {
          show: true,
          name: 'Frango Inteiro',
          unit: 'Peça',
          amount: '7,49'
        },
        {
          show: true,
          name: 'Frango a Passarinho',
          unit: 'Kilo',
          amount: '8,99'
        },
        {
          show: true,
          name: 'Figado',
          unit: 'Kilo',
          amount: '13,99'
        },
        {
          show: true,
          name: 'Kibe crú',
          unit: 'Kilo',
          amount: '21,99'
        },
        {
          show: true,
          name: 'Linguiça Mista',
          unit: 'Kilo',
          amount: '11,99'
        },
        {
          show: true,
          name: 'Linguiça Cuiabana',
          unit: 'Kilo',
          amount: '19,99'
        },
        {
          show: true,
          name: 'Linguiça Toscana',
          unit: 'Kilo',
          amount: '15,99'
        },
        {
          show: true,
          name: 'Miolo da Paleta',
          unit: 'Kilo',
          amount: '29,99'
        },
        {
          show: true,
          name: 'Miolo de Acém',
          unit: 'Kilo',
          amount: '27,99'
        },
        {
          show: true,
          name: 'Mocotó',
          unit: 'Kilo',
          amount: '10,95'
        },
        {
          show: true,
          name: 'Músculo',
          unit: 'Kilo',
          amount: '26,99'
        },
        {
          show: true,
          name: 'Ossobuco',
          unit: 'Kilo',
          amount: '22,99'
        },
        {
          show: true,
          name: 'Panceta',
          unit: 'Kilo',
          amount: '22,99'
        },
        {
          show: true,
          name: 'Patinho',
          unit: 'Kilo',
          amount: '30,99'
        },
        {
          show: true,
          name: 'Pernil Fatiado',
          unit: 'Kilo',
          amount: '16,99'
        },
        {
          show: true,
          name: 'Pernil Picado',
          unit: 'Kilo',
          amount: '14,99'
        },
        {
          show: true,
          name: 'Picadão bovino',
          unit: 'Kilo',
          amount: '26,99'
        },
        {
          show: true,
          name: 'Picadão suino',
          unit: 'Kilo',
          amount: '14,99'
        },
        {
          show: true,
          name: 'Picanha',
          unit: 'Kilo',
          amount: '54,99'
        },
        {
          show: true,
          name: 'Ponta de Agulha',
          unit: 'Kilo',
          amount: '19,99'
        },
        {
          show: true,
          name: 'Rabada',
          unit: 'Kilo',
          amount: '22,99'
        },
        {
          show: true,
          name: 'Tirinhas Strogonoff',
          unit: 'Kilo',
          amount: '27,99'
        },
        {
          show: false,
          name: 'Toscana do Shopping',
          unit: 'Kilo',
          amount: '12,99'
        },
        {
          show: true,
          name: 'Toscana com Queijo',
          unit: 'Kilo',
          amount: '17,99'
        },
        {
          show: true,
          name: 'Toucinho',
          unit: 'Kilo',
          amount: '14,99'
        },
        {
          show: true,
          name: 'Tulipa temperada',
          unit: 'Kilo',
          amount: '27,99'
        }
      ]
    }
  },

  methods: {
    importData() {
      this.$axios.$post('/api/users', this.user).then((res) => console.log(res))

      this.products.forEach((product) => {
        this.$axios.$post('/api/products', product).then((res) => console.log(res))
      })
    }
  }
}
</script>
