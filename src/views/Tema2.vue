<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 2
        h1 Ecosistema digital para el aprendizaje
      


      .row.justify-content-center.mb-5.align-items-center.bg-color-2(data-aos='fade-right')
        .col-sm-12.col-lg-7.px-0
          .p-4.p-md-5
            img.wcus-3.d-none.d-lg-block.mb-4(src='@/assets/curso/temas/t2/1.svg')
            p.mb-3 Un ecosistema digital educativo es un entorno interconectado donde convergen personas, metodologías, dispositivos y recursos con el objetivo de facilitar el flujo continuo de aprendizaje. Comprender y gestionar este ecosistema es fundamental para optimizar los procesos formativos, destacando elementos esenciales para el desarrollo autónomo, como la curación de contenidos, los entornos personales de aprendizaje y los recursos educativos abiertos.
            p.mb-0 Para que este ecosistema funcione de manera articulada, es necesario reconocer que las herramientas digitales cumplen funciones diferentes. Algunas permiten acceder a información, otras facilitan su organización y otras favorecen la creación colectiva de conocimiento. El instructor debe seleccionar los recursos según las características de la población, los resultados de aprendizaje y las condiciones tecnológicas del ambiente de formación.
        .col-sm-12.col-lg-5.d-none.d-lg-block.px-0
          img(src='@/assets/curso/temas/t2/2.png')

      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Entorno Personal de Aprendizaje (PLE)

      .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.br-3.mb-5(data-aos='fade-right')
        .bloque-texto-g__img.d-none.d-lg-block(
          :style="{'background-image': `url(${require_src('@/assets/curso/temas/t2/3.png')})`}"
        )
        .bloque-texto-g__texto.p-5.d-flex.flex-column.br-4
          p.mb-0 El Entorno Personal de Aprendizaje (PLE, por sus siglas en inglés, #[i Personal Learning Environment]) se define como el conjunto integrado de fuentes de información, conexiones y herramientas informáticas que una persona utiliza habitualmente para gestionar su propio aprendizaje. Un PLE no es un #[i software] específico, sino un enfoque metodológico en el que cada persona decide qué recursos consultar, con quién interactuar en red y cómo organizar la información para construir su conocimiento.

      p.mb-4(data-aos='fade-right') En el contexto de la formación profesional, un PLE permite organizar los recursos que cada persona utiliza para aprender y actualizar sus conocimientos. Puede integrar bibliotecas digitales, comunidades académicas, aplicaciones de organización y espacios de intercambio de experiencias. Su configuración responde a las necesidades individuales, por lo que puede modificarse a medida que cambian los intereses y objetivos de formación.
      p.mb-5(data-aos='fade-right') Para el instructor, reconocer estos entornos representa una oportunidad de promover la autonomía. Esto implica orientar a los aprendices para que identifiquen fuentes pertinentes, establezcan conexiones con comunidades de conocimiento y utilicen herramientas que faciliten la organización de sus actividades, sin depender exclusivamente de los materiales proporcionados en el ambiente de formación.

      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Recursos Educativos Abiertos (REA)

      .row.justify-content-center.mb-5.align-items-center(data-aos='fade-right')
        .col-sm-12.col-lg-9
          p.mb-4 Los REA son materiales de enseñanza, aprendizaje e investigación en cualquier soporte que se encuentran en el dominio público o que han sido publicados bajo una licencia abierta. Su condición de recursos abiertos permite acceder a ellos, utilizarlos, adaptarlos y redistribuirlos conforme a los permisos y condiciones establecidos en las licencias correspondientes, favoreciendo el acceso al conocimiento.
          p.mb-4 Estos recursos pueden adoptar diferentes presentaciones, como documentos, materiales audiovisuales, actividades de aprendizaje, guías y otros contenidos digitales. Su incorporación a una experiencia formativa requiere revisar la pertinencia pedagógica, la claridad de la información, las condiciones de accesibilidad y los permisos establecidos para su utilización.
          p.mb-0 Es importante distinguir entre un recurso disponible gratuitamente y un recurso educativo abierto. La posibilidad de consultar un material sin pagar no significa que esté autorizada su modificación o redistribución. Por ello, antes de adaptar un REA, se deben identificar las condiciones de su licencia y reconocer la autoría correspondiente.
        .col-sm-12.col-lg-3.d-none.d-lg-block
          img(src='@/assets/curso/temas/t2/4.png')

      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Comunicación y colaboración en entornos digitales

      .row.justify-content-center.mb-5.align-items-center(data-aos='fade-right')
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t2/5.png')
        .col-sm-12.col-lg-7
          p.mb-4 La comunicación digital permite intercambiar información y establecer relaciones entre los participantes de un proceso formativo mediante plataformas y herramientas tecnológicas. En los ambientes de aprendizaje, favorece el acompañamiento, la retroalimentación y la interacción entre instructores y aprendices, tanto en actividades individuales como colectivas.
          p.mb-0 La comunicación y la colaboración en entornos digitales requieren seleccionar canales adecuados, establecer acuerdos de participación y organizar responsabilidades. Su implementación debe considerar los propósitos de aprendizaje, la disponibilidad de los participantes y las condiciones de acceso, de manera que las interacciones contribuyan a la construcción conjunta de conocimiento.

      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Modalidades de comunicación en ambientes digitales

      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-3.d-none.d-lg-block
          img(src='@/assets/curso/temas/t2/6.png')
        .col-sm-12.col-lg-9
          TabsA.color-acento-botones
            .tarjeta.bg-color-2.p-4(titulo="Comunicación síncrona")
              p.mb-0 Durante una videoconferencia, el instructor presenta una situación problemática y organiza grupos de discusión para que los participantes propongan soluciones y reciban orientación inmediata.

            .tarjeta.bg-color-2.p-4(titulo="Comunicación asíncrona")
              p.mb-0 En un foro de discusión, los aprendices analizan un caso, publican sus argumentos y comentan las propuestas de sus compañeros durante un periodo establecido.

            .tarjeta.bg-color-2.p-4(titulo="Construcción colaborativa")
              p.mb-0 Un equipo elabora una guía digital mediante un documento compartido. Cada integrante desarrolla una sección y participa en la revisión colectiva antes de consolidar la versión final.

            .tarjeta.bg-color-2.p-4(titulo="Seguimiento y retroalimentación")
              p.mb-0 El instructor utiliza comentarios en la plataforma educativa para señalar fortalezas, formular recomendaciones y orientar mejoras sobre los productos entregados.

      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Ecosistema digital para el aprendizaje

      .row.justify-content-center.mb-5.pt-3(data-aos='fade-right')
        .col-sm-12.col-lg-4.mb-4.mb-lg-0
          .tarjeta-eco.tarjeta-eco--azul.h-100
            .tarjeta-eco__numero 1
            .tarjeta-eco__header
              h4.mb-0 Curación de contenidos
              img.tarjeta-eco__icon(src='@/assets/curso/temas/t2/7.svg')
            .tarjeta-eco__body
              ul.lista-ul--color.mb-0
                li.d-flex
                  i.fas.fa-cus-1
                  p.mb-0 Buscar
                li.d-flex
                  i.fas.fa-cus-1
                  p.mb-0 Filtrar
                li.d-flex
                  i.fas.fa-cus-1
                  p.mb-0 Organizar
                li.d-flex
                  i.fas.fa-cus-1
                  p.mb-0 Contextualizar
                li.d-flex.mb-0
                  i.fas.fa-cus-1
                  p.mb-0 Compartir

        .col-sm-12.col-lg-4.mb-4.mb-lg-0
          .tarjeta-eco.tarjeta-eco--amarillo.h-100
            .tarjeta-eco__numero 2
            .tarjeta-eco__header
              h4.mb-0 Entorno personal de aprendizaje (PLE)
              img.tarjeta-eco__icon(src='@/assets/curso/temas/t2/8.svg')
            .tarjeta-eco__body
              ul.lista-ul--color.mb-0
                li.d-flex
                  i.fas.fa-cus-2
                  p.mb-0 Herramientas
                li.d-flex
                  i.fas.fa-cus-2
                  p.mb-0 Fuentes
                li.d-flex.mb-0
                  i.fas.fa-cus-2
                  p.mb-0 Conexiones

        .col-sm-12.col-lg-4
          .tarjeta-eco.tarjeta-eco--morado.h-100
            .tarjeta-eco__numero 3
            .tarjeta-eco__header
              h4.mb-0 Recursos educativos abiertos (REA)
              img.tarjeta-eco__icon(src='@/assets/curso/temas/t2/9.svg')
            .tarjeta-eco__body
              ul.lista-ul--color.mb-0
                li.d-flex
                  i.fas.fa-cus-3
                  p.mb-0 Usar
                li.d-flex
                  i.fas.fa-cus-3
                  p.mb-0 Adaptar
                li.d-flex.mb-0
                  i.fas.fa-cus-3
                  p.mb-0 Compartir

      p.mb-0(data-aos='fade-right') La integración de estos elementos permite al instructor orientar experiencias de aprendizaje que favorezcan la autonomía, el acceso responsable a la información y el aprovechamiento pedagógico de los recursos digitales.

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
