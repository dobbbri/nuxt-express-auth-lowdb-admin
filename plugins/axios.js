export default function ({ $axios, $toast }) {
  $axios.onRequest((config) => {
    console.log('Making request to ' + config.url)
  })

  $axios.onError((error) => {
    const message = error.response ? error.response.data.message : error.toString()
    $toast.show({
      type: 'danger',
      title: 'Erro',
      classTitle: 'text-white',
      classMessage: 'text-white',
      classClose: 'text-gray-900',
      classTimeout: 'bg-white opacity-50',
      classToast: 'bg-red-600',
      message
    })
    return Promise.resolve(false)
  })
}
