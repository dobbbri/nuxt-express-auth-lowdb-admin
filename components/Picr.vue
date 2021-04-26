<template>
  <picture>
    <source
      media="(min-width: 768px)"
      srcset="hero.jpg 1400w, hero-300x204.jpg 300w, hero-768x522.jpg 768w, hero-1024x696.jpg 1024w"
      sizes="(max-width: 1400px) 100vw, 1400px"
    />
    <img
      srcset="hero-767x460.jpg 767w, hero-560x336.jpg 560w, hero-360x216.jpg 360w"
      alt="Front page hero alt text"
      sizes="(max-width: 767px) 100vw, 767px"
    />
  </picture>
  <!-- <picture> -->
  <!--   <source media="(min-width: 1024px)" :srcset="'image/' + name + '-lg.webp'" type="image/webp" /> -->
  <!--   <source media="(min-width: 1024px)" :srcset="'image/' + name + '-lg.jpg'" /> -->
  <!--   <source media="(min-width: 640px)" :srcset="'image/' + name + '-md.webp'" type="image/webp" /> -->
  <!--   <source media="(min-width: 640px)" :srcset="'image/' + name + '-md.jpg'" /> -->
  <!--   <source type="image/webp" :srcset="'image/' + name + '-sm.webp'" /> -->
  <!--   <img :src="'image/' + name + '-sm.jpg'" :alt="title" /> -->
  <!-- </picture> -->
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
