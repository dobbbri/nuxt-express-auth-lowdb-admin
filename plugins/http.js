export default function ({ error, $http }) {
  $http.onRequest((config) => {
    console.log('Making request to ' + config.url)
  })

  $http.onError((err) => {
    error({ statusCode: err.status, message: err.message })
  })
}
