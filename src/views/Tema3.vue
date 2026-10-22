<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 3
        h1 Gestión de la información
      Separador
      #t_3_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 3.1 Curación de contenidos digitales
      Separador
      #t_3_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 3.2 Búsqueda, organización y almacenamiento de información
      Separador
      #t_3_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 3.3 Identidad, reputación y seguridad digital
      
        

  </template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
