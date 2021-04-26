<template>
  <img
    :src="'/image/' + name + '-sm.jpg'"
    srcset="'/image/' + name + '-lg.jpg 1024w, /image/' + name + '-md.jpg 640w, /image/' + name + '-sm.jpg 320w"
    sizes="100vw"
    :alt="title"
  />
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    }
  }
}
</script>
