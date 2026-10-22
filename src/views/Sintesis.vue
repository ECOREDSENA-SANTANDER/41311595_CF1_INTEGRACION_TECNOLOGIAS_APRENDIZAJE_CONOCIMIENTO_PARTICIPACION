<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p A lo largo de este componente se abordó la evolución de las tecnologías aplicadas a la educación, el ecosistema digital para el aprendizaje, la gestión y curación de la información, así como la ruta para el diseño y producción de recursos educativos digitales. Estos elementos se complementan con criterios de propiedad intelectual, herramientas de autor, Objetos Virtuales de Aprendizaje (OVA) y prototipado funcional, orientados a integrar la tecnología con una intención pedagógica, ética y pertinente para el contexto formativo.

    .row.justify-content-center
      .col-lg-10.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Mapa conceptual con seis ejes temáticos sobre tecnologías educativas, gestión de información y diseño de recursos digitales.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
