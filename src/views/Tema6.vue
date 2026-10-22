<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 6
        h1 Producción y diseño de recursos educativos
      Separador
      #t_6_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 6.1 Medios y formatos para la producción de contenidos digitales
      Separador
      #t_6_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 6.2 Objetos Virtuales de Aprendizaje (OVA) y herramientas de autor
      Separador
      #t_6_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 6.3 Prototipado funcional y diseño de interfaces
      
        

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
