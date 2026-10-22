<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .bg-full-width.bg-fondo-1.mb-0
      .p-full-width
        .row.justify-content-center.mb-5.align-items-end
          .col-sm-12.col-lg-4.d-none.d-lg-block
            img(src='@/assets/curso/temas/intro/1.png', alt='')
          .col-sm-12.col-lg-8
              p.mb-3 En la actualidad, el entorno educativo experimenta una transformación constante impulsada por un vasto ecosistema digital. Este componente formativo aborda la evolución de la tecnología en la educación, analizando cómo ha pasado de ser un conjunto de herramientas de información (TIC) a convertirse en un medio estratégico para la construcción del conocimiento (TAC) y la participación ciudadana (TEP), junto con las habilidades necesarias para gestionar la abundante información disponible en la red.

              p.mb-3 Comprender esta transición y dominar la gestión de la información permite al aprendiz dejar de ser un consumidor pasivo de tecnología para convertirse en un estratega digital, capaz de filtrar información útil, optimizar su tiempo y diseñar experiencias de aprendizaje significativas que respondan a las necesidades y la realidad de sus aprendices.

              p.mb-0 A partir de esta base, el componente integra la planeación y curación de contenidos con el diseño y desarrollo de recursos educativos digitales. Se abordan los PLE y REA, la búsqueda y organización de información, la identidad y seguridad digital, la ruta metodológica para concebir y planear un recurso, la propiedad intelectual, las licencias abiertas, la citación de fuentes, los OVA, las herramientas de autor, la producción de contenidos multimedia y el prototipado funcional, de manera que el recurso final sea pedagógico, navegable, reutilizable y legalmente compartible.



    .row.justify-content-center.align-items-center           
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
