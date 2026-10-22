<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 5
        h1 Propiedad intelectual y normativa digital

      .row.justify-content-center.mb-5.align-items-center.bg-color-2(data-aos='fade-right')
        .col-sm-12.col-lg-5.d-none.d-lg-block.px-0
          img(src='@/assets/curso/temas/t5/1.png')
        .col-sm-12.col-lg-7.px-0
          .p-4.p-md-5
            img.wcus-3.d-none.d-lg-block.mb-4(src='@/assets/curso/temas/t5/2.svg')
            p.mb-3 La creación de recursos educativos digitales implica constantemente el uso, adaptación o combinación de información existente en la web, como textos, imágenes, videos o audios. Por tal motivo, es indispensable que los creadores de contenido educativo conozcan y apliquen la normativa vigente sobre propiedad intelectual, asegurando un comportamiento ético y legal en los entornos virtuales.
            p.mb-0 En los procesos formativos, el respeto por los derechos de autor comprende tanto la protección de los materiales creados por los instructores como el uso responsable de obras elaboradas por terceros. Esto requiere identificar las condiciones de utilización de cada recurso, reconocer su procedencia y aplicar criterios adecuados de citación y referenciación.

      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Derechos de autor en la red

      .row.justify-content-center.mb-4.align-items-center(data-aos='fade-right')
        .col-sm-12.col-lg-7
          p.mb-4 El derecho de autor es el conjunto de normas jurídicas que protegen las creaciones originales del intelecto humano, otorgando a sus autores derechos morales y patrimoniales sobre sus obras. En el ámbito digital, que una imagen o texto esté disponible públicamente en un buscador de internet no significa que sea de dominio público; como regla general, las obras originales están protegidas por derechos de autor desde su creación.
          p.mb-0 Los derechos morales protegen el vínculo del autor con su obra e incluyen, entre otros, el reconocimiento de su autoría y el respeto por su integridad. Los derechos patrimoniales permiten autorizar o restringir determinados usos económicos, como la reproducción, distribución, comunicación pública y transformación, de acuerdo con la legislación aplicable.
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t5/3.png')

      p.mb-5(data-aos='fade-right') En Colombia, la Ley 23 de 1982 establece disposiciones sobre derechos de autor y la Ley 1915 de 2018 introdujo modificaciones al régimen nacional de protección. Estas normas deben considerarse cuando se utilizan obras protegidas para producir materiales educativos digitales, sin desconocer las excepciones y limitaciones legalmente previstas.

      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Uso de contenidos de terceros

      .tarjeta.bg-fondo-4.p-4.p-md-5.mb-5(data-aos='fade-right')
        .row.justify-content-center.align-items-center
          .col-sm-12.col-lg-5.d-none.d-lg-block
            img(src='@/assets/curso/temas/t5/4.png')
          .col-sm-12.col-lg-6
            p.mb-4 La incorporación de textos, fotografías, ilustraciones, grabaciones u otros materiales en un recurso educativo requiere identificar quién es su titular y bajo qué condiciones puede utilizarse. La disponibilidad de una obra para consulta o descarga no constituye, por sí misma, una autorización para modificarla, distribuirla o incorporarla a nuevos productos.
            p.mb-0 En este proceso, es importante distinguir entre reconocer la autoría y contar con autorización para utilizar una obra. La citación permite identificar la fuente de información, pero no reemplaza los permisos que puedan ser necesarios para reproducir o adaptar contenidos protegidos.

      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Licencias Creative Commons (CC)

      p.mb-4(data-aos='fade-right') Las licencias Creative Commons permiten a los autores otorgar permisos estandarizados para el uso y la distribución de sus obras. Según la licencia seleccionada, pueden autorizar también su adaptación, bajo condiciones específicas como el reconocimiento de la autoría, el uso no comercial o la obligación de compartir las adaptaciones bajo la misma licencia.
      p.mb-5(data-aos='fade-right') Estas licencias facilitan la identificación de los usos autorizados, pero sus condiciones pueden variar. Algunas permiten realizar adaptaciones, mientras que otras restringen la creación de obras derivadas o determinados usos comerciales. Por ello, antes de incorporar materiales licenciados a un RED, es necesario verificar los permisos específicos de cada obra.

      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-12
          img(src='@/assets/curso/temas/t5/5.png')

      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Condiciones de las licencias Creative Commons

      .row.justify-content-center.mb-5.align-items-center(data-aos='fade-right')
        .col-sm-12.col-lg-8
          AcordionA(tipo="b" clase-tarjeta="tarjeta bg-card")
            .row(titulo="Reconocimiento (BY)")
              .col-12
                p.mb-0 Se debe reconocer la autoría de la obra, identificar su fuente y señalar los cambios realizados cuando corresponda.

            .row(titulo="Compartir Igual (SA)")
              .col-12
                p.mb-0 Las adaptaciones deben distribuirse bajo la misma licencia o una compatible, conforme a las condiciones aplicables.

            .row(titulo="No Comercial (NC)")
              .col-12
                p.mb-0 No se autoriza el uso de la obra con fines principalmente comerciales, de acuerdo con el alcance establecido por la licencia.

            .row(titulo="Sin Derivadas (ND)")
              .col-12
                p.mb-0 Permite compartir la obra original, pero no autoriza compartir versiones adaptadas o modificadas.
        .col-sm-12.col-lg-4.d-none.d-lg-block
          img(src='@/assets/curso/temas/t5/6.png')

      p.mb-5(data-aos='fade-right') Las condiciones anteriores se combinan para conformar las diferentes licencias Creative Commons. Su identificación permite determinar si un material puede incorporarse a una actividad educativa, modificarse o compartirse posteriormente.

      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Estándares de citación y referenciación

      .row.justify-content-center.mb-4.align-items-center(data-aos='fade-right')
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t5/7.png')
        .col-sm-12.col-lg-7
          p.mb-4 Además del licenciamiento, la integridad académica exige dar crédito explícito a las fuentes de información utilizadas. En los procesos formativos, se emplean las normas de la American Psychological Association (APA), las cuales establecen pautas para citar autores dentro del texto y estructurar las referencias bibliográficas, contribuyendo a prevenir el plagio.
          p.mb-0 La citación permite reconocer las ideas, datos y contenidos procedentes de otras fuentes, mientras que la lista de referencias proporciona la información necesaria para identificar las obras consultadas. Ambas cumplen funciones complementarias y deben mantener correspondencia entre sí.

      p.mb-5(data-aos='fade-right') En la elaboración de un recurso educativo digital, las fuentes utilizadas deben documentarse desde la etapa de producción. Esto facilita reconocer las contribuciones de otros autores, mantener la trazabilidad de los materiales incorporados y evitar omisiones al consolidar las referencias finales.

      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Aplicación de la normativa en un recurso educativo digital

      .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.br-3.mb-5(data-aos='fade-right')
        .bloque-texto-g__img.d-none.d-lg-block(
          :style="{'background-image': `url(${require_src('@/assets/curso/temas/t5/8.png')})`}"
        )
        .bloque-texto-g__texto.p-5.d-flex.flex-column.br-4
          p.mb-4 Un instructor que prepara una presentación interactiva sobre prevención de riesgos laborales encuentra fotografías, fragmentos de documentos técnicos y una ilustración publicada con licencia abierta. Antes de incorporarlos, debe revisar su procedencia, identificar las condiciones de utilización y determinar si puede reproducirlos o adaptarlos.
          p.mb-0 Si necesita modificar la ilustración, deberá comprobar que su licencia permita realizar adaptaciones. También tendrá que reconocer la autoría y registrar las fuentes consultadas mediante el sistema de citación correspondiente. Estas verificaciones contribuyen a producir un material pedagógicamente pertinente y respetuoso de los derechos de terceros.

      .titulo-sexto.color-secundario.mb-3(data-aos='fade-right')
        p.mb-0 #[b Figura 3.] Propiedad intelectual en la red

      .bg-color-2.p-4.mb-5.br-1
          .row.justify-content-center.mb-0
            .col-sm-12.col-lg-10
              figure.mb-0
                img(src='@/assets/curso/temas/t5/9.svg', alt='Infografía con tres aspectos de la propiedad intelectual: derechos de autor, licencias Creative Commons y normas APA.')

      p.mb-0(data-aos='fade-right') La protección de las creaciones, la revisión de las condiciones de licenciamiento y el reconocimiento de las fuentes contribuyen al desarrollo de recursos educativos digitales que pueden utilizarse y compartirse de manera responsable.

</template>

<script>
export default {
  name: 'Tema5',
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
