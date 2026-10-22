<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 6
        h1 Producción y diseño de recursos educativos

      .row.justify-content-center.mb-0.align-items-center.bg-color-2(data-aos='fade-right')
        .col-sm-12.col-lg-7.px-0
          .p-4.p-md-5
            img.wcus-3.d-none.d-lg-block.mb-4(src='@/assets/curso/temas/t6/1.svg')
            p.mb-3 Una vez superada la fase de planeación y comprendida la normativa legal, se inicia la materialización de las ideas a través de la producción digital. Esta etapa requiere articular el conocimiento pedagógico con el diseño gráfico y la interactividad, dando origen a materiales estructurados que promuevan el aprendizaje autónomo.
            p.mb-0 La producción de un recurso educativo digital comprende la selección de los medios adecuados, la organización de sus contenidos y el uso de herramientas que permitan transformarlos en materiales funcionales. Para ello, es necesario reconocer las características de los formatos multimedia, la estructura de los Objetos Virtuales de Aprendizaje (OVA) y las posibilidades del prototipado y el diseño de interfaces.
        .col-sm-12.col-lg-5.d-none.d-lg-block.px-0
          img(src='@/assets/curso/temas/t6/2.png')

      Separador

      #t_6_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 6.1 Medios y formatos para la producción de contenidos digitales

      p.mb-5(data-aos='fade-right') Los contenidos educativos digitales pueden combinar textos, imágenes, audio, video y elementos interactivos para presentar información y facilitar actividades de aprendizaje. La elección de estos medios debe considerar la naturaleza del contenido, las características de la población y las condiciones tecnológicas del ambiente de formación.

      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Textos y elementos tipográficos

      .row.justify-content-center.mb-5.align-items-center(data-aos='fade-right')
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t6/3.png')
        .col-sm-12.col-lg-7
          p.mb-4 El texto permite presentar conceptos, instrucciones, explicaciones y orientaciones necesarias para desarrollar las actividades formativas. Su producción requiere organizar la información mediante títulos, párrafos y otros elementos que faciliten la lectura y permitan identificar la relación entre las ideas.
          p.mb-0 La tipografía también influye en la comprensión de los contenidos. Es importante seleccionar fuentes legibles, utilizar tamaños adecuados y mantener una jerarquía visual consistente. El uso excesivo de estilos, colores o variaciones tipográficas puede dificultar la lectura y desviar la atención de la información principal.

      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Imágenes y representaciones gráficas

      p.mb-5(data-aos='fade-right') Las imágenes permiten ilustrar procedimientos, representar objetos, identificar características y comunicar relaciones que pueden resultar difíciles de explicar exclusivamente mediante palabras. Entre sus aplicaciones educativas se encuentran las fotografías, ilustraciones, diagramas y representaciones de procesos. Desde el punto de vista técnico, pueden clasificarse en imágenes de mapa de bits y gráficos vectoriales. Las primeras están compuestas por píxeles y son apropiadas para fotografías y representaciones con variaciones de color. Los gráficos vectoriales utilizan formas geométricas y permiten modificar su tamaño sin perder definición.

      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-12
          img(src='@/assets/curso/temas/t6/4.png')

      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Audio y video educativos

      .row.justify-content-center.mb-5.align-items-center(data-aos='fade-right')
        .col-sm-12.col-lg-7
          p.mb-3 El audio puede emplearse para narraciones, explicaciones, entrevistas y orientaciones que complementen las actividades de aprendizaje. Su utilización requiere cuidar la claridad de la voz, el volumen y la ausencia de ruidos que dificulten la comprensión.
          p.mb-0 El video combina imágenes en movimiento y sonido, por lo que resulta útil para mostrar procedimientos, representar situaciones o presentar demostraciones. Su elaboración debe partir de un propósito formativo definido y considerar aspectos como la secuencia de las escenas, la duración, la calidad del sonido y la claridad de los elementos visuales.
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t6/5.png')

      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Formatos para la producción de contenidos educativos

      .bg-fondo-3.p-5.mb-5
        SlyderB(:datos="datosSlyder")
          

      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Integración de medios digitales

      .row.justify-content-center.mb-0.align-items-center(data-aos='fade-right')
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t6/11.png')
        .col-sm-12.col-lg-7
          p.mb-3 La combinación de diferentes medios debe facilitar la comprensión del contenido y evitar una presentación sobrecargada. Incorporar numerosos elementos audiovisuales o interactivos no garantiza una mejor experiencia de aprendizaje si estos no cumplen una función pedagógica.
          p.mb-3 Durante la producción es conveniente mantener coherencia entre la información textual, las imágenes y los demás elementos. Asimismo, deben considerarse características de accesibilidad, como la disponibilidad de alternativas textuales para información visual y subtítulos para contenidos audiovisuales.
          p.mb-0 Estas decisiones contribuyen a elaborar materiales comprensibles y funcionales. Los procedimientos específicos de evaluación de accesibilidad y usabilidad se profundizarán en el siguiente componente formativo.

      Separador

      #t_6_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 6.2 Objetos Virtuales de Aprendizaje (OVA) y herramientas de autor

      .bloque-texto-g.bloque-texto-g--inverso.bg-color-1.p-3.p-sm-4.p-md-5.br-3.mb-5(data-aos='fade-right')
        .bloque-texto-g__img.d-none.d-lg-block(
          :style="{'background-image': `url(${require_src('@/assets/curso/temas/t6/12.png')})`}"
        )
        .bloque-texto-g__texto.p-5.d-flex.flex-column.br-4
          p.mb-4 Un Objeto Virtual de Aprendizaje (OVA) es un conjunto de recursos digitales con un propósito educativo definido, constituido por contenidos, actividades de aprendizaje y elementos de contextualización. Se caracteriza por su posibilidad de reutilización y, cuando cumple con los estándares y requisitos técnicos correspondientes, puede integrarse en diferentes plataformas educativas.
          p.mb-0 En la formación profesional, los OVA permiten organizar contenidos alrededor de una necesidad de aprendizaje y proponer actividades relacionadas con los resultados esperados. Su estructura debe facilitar que los aprendices reconozcan el propósito del recurso, comprendan la información presentada y participen en las actividades propuestas.

      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Estructura de un Objeto Virtual de Aprendizaje

      p.mb-5(data-aos='fade-right') La organización de un OVA debe responder a su intención pedagógica y ofrecer los elementos necesarios para orientar el aprendizaje. Aunque puede adoptar diferentes diseños, es importante mantener una relación clara entre los contenidos, las actividades y los mecanismos previstos para comprobar la comprensión.

      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-12
          img(src='@/assets/curso/temas/t6/13.png')

      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Elementos de un Objeto Virtual de Aprendizaje

      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-3.d-none.d-lg-block
          img(src='@/assets/curso/temas/t6/14.png')
        .col-sm-12.col-lg-9
          TabsA.color-acento-botones
            .tarjeta.bg-color-2.p-4(titulo="Contextualización")
              p.mb-0 Presenta el tema, la finalidad del recurso y las orientaciones necesarias para comprender su relación con la actividad formativa.

            .tarjeta.bg-color-2.p-4(titulo="Contenidos educativos")
              p.mb-0 Integra conceptos, explicaciones y materiales seleccionados de acuerdo con los conocimientos que se busca desarrollar.

            .tarjeta.bg-color-2.p-4(titulo="Actividades de aprendizaje")
              p.mb-0 Propone ejercicios, situaciones o interacciones mediante los cuales el aprendiz utiliza los contenidos y desarrolla habilidades relacionadas con el propósito del recurso.

            .tarjeta.bg-color-2.p-4(titulo="Comprobación del aprendizaje")
              p.mb-0 Incorpora preguntas, ejercicios de aplicación u otros mecanismos que permiten reconocer avances en la comprensión y ofrecer retroalimentación.

            .tarjeta.bg-color-2.p-4(titulo="Información descriptiva")
              p.mb-0 Reúne datos de identificación del objeto, como su título, autor, propósito y condiciones de utilización, que facilitan su organización y posterior recuperación.

      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Herramientas de autor para contenidos educativos

      .row.justify-content-center.mb-5.align-items-center.bg-fondo-4.p-4.p-md-5.br-1(data-aos='fade-right')
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t6/15.png')
        .col-sm-12.col-lg-7
          p.mb-0 Las herramientas de autor son aplicaciones de #[i software] que permiten a los docentes e instructores diseñar, integrar y empaquetar contenidos multimedia, sin necesidad de poseer conocimientos avanzados en programación o código fuente. Existen herramientas comerciales y abiertas, como eXeLearning, H5P o Genially, cuya elección dependerá del tipo de interactividad requerida, las necesidades de los aprendices y la plataforma en la que se alojará el recurso.

      p.mb-5(data-aos='fade-right') Estas herramientas ofrecen distintas posibilidades para crear materiales educativos. Algunas permiten estructurar contenidos y exportarlos para su incorporación en plataformas de aprendizaje; otras facilitan la elaboración de actividades interactivas, presentaciones o recursos visuales.

      .titulo-sexto.color-acento-contenido(data-aos='fade-right')
        h5 Tabla 4.
        span Herramientas de autor y posibilidades educativas

      .tabla-a.color-acento-contenido.mb-5(data-aos='fade-right')
        table
          thead
            tr
              th Herramienta
              th Posibilidades de producción
              th Aspecto por considerar
          tbody
            tr
              td eXeLearning
              td Organización de contenidos educativos, actividades y recursos estructurados.
              td Revisar las alternativas de exportación y su compatibilidad con el entorno de formación.
            tr
              td H5P
              td Creación de actividades interactivas, ejercicios y presentaciones con interacción.
              td Comprobar la disponibilidad de una plataforma o entorno compatible.
            tr
              td Genially
              td Elaboración de presentaciones, infografías y contenidos visuales interactivos.
              td Verificar las condiciones de acceso, publicación y reutilización del recurso.

      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Selección de herramientas según el recurso

      .row.justify-content-center.mb-0.align-items-center(data-aos='fade-right')
        .col-sm-12.col-lg-7
          p.mb-4 La elección de una herramienta de autor debe estar relacionada con el tipo de material que se desea producir y las condiciones en las que se utilizará. No siempre es necesario recurrir a una aplicación compleja; en algunos casos, un documento interactivo o una actividad sencilla puede responder adecuadamente a la necesidad educativa.
          p.mb-0 Antes de seleccionar una herramienta, es conveniente reconocer los formatos que admite, las posibilidades de edición, los requisitos de funcionamiento y las opciones para conservar una versión editable del material. También debe considerarse si permite incorporar los elementos de accesibilidad requeridos y si su uso resulta viable para el contexto de formación.
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t6/16.png')

      Separador

      #t_6_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 6.3 Prototipado funcional y diseño de interfaces

      .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.br-3.mb-5(data-aos='fade-right')
        .bloque-texto-g__img.d-none.d-lg-block(
          :style="{'background-image': `url(${require_src('@/assets/curso/temas/t6/17.png')})`}"
        )
        .bloque-texto-g__texto.p-5.d-flex.flex-column.br-4
          p.mb-4 Antes de ensamblar el recurso definitivo, es recomendable elaborar un boceto digital o #[i wireframe] que represente la distribución de los contenidos y los elementos de navegación. A partir de esta estructura, puede desarrollarse un prototipo funcional que permita simular las interacciones previstas. Este proceso facilita la revisión de la organización del recurso y su correspondencia con el objetivo pedagógico, reduciendo los ajustes necesarios en etapas posteriores.
          p.mb-0 El prototipado facilita visualizar cómo se presentará la información y de qué manera los aprendices podrán interactuar con los contenidos. No requiere necesariamente producir todos los elementos definitivos, porque su propósito inicial es reconocer la distribución de las secciones y anticipar posibles dificultades de utilización.

      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Diseño de interfaces educativas

      .row.justify-content-center.mb-5.align-items-center(data-aos='fade-right')
        .col-sm-12.col-lg-7
          p.mb-4 La interfaz es el medio visual e interactivo a través del cual una persona accede a los contenidos y funciones de un recurso digital. Su diseño comprende la organización de menús, botones, textos, imágenes y otros elementos que facilitan la navegación.
          p.mb-0 En un recurso educativo, la interfaz debe permitir identificar claramente las actividades disponibles y comprender cómo avanzar entre los contenidos. La consistencia en la ubicación de los controles, el uso de instrucciones comprensibles y una distribución visual ordenada contribuyen a reducir dificultades de interacción.
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t6/18.png')

      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Representación de un prototipo educativo

      p.mb-4(data-aos='fade-right') Para reconocer cómo se traduce una intención pedagógica en una estructura visual, se presenta un ejemplo de prototipado de una actividad digital sobre clasificación de residuos.

      .mb-4(data-aos='fade-right')
        .d-inline-block.bg-secundario.px-4.py-2.br-1
          h4.mb-0.text-white ● Del boceto a la interacción
      

      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-10
          PasosA.color-acento-contenido(tipo="n")
            .row.align-items-center
              .col-sm-12.col-lg-10
                h4 Pantalla de inicio
                p.mb-0 El boceto contempla un título, una breve orientación y un botón que permite acceder a la actividad de clasificación de residuos.
              .col-sm-12.col-lg-2.d-none.d-lg-block
                img(src='@/assets/curso/temas/t6/19.png')

            .row.align-items-center
              .col-sm-12.col-lg-2.d-none.d-lg-block
                img(src='@/assets/curso/temas/t6/20.png')
              .col-sm-12.col-lg-10
                h4 Presentación de contenidos
                p.mb-0 Se distribuyen imágenes representativas de diferentes residuos y se incorpora una instrucción que explica la actividad que deberá realizar el aprendiz.

            .row.align-items-center
              .col-sm-12.col-lg-10
                h4 Espacio de interacción
                p.mb-0 El prototipo establece una zona donde los participantes relacionarán cada residuo con el recipiente de disposición correspondiente.
              .col-sm-12.col-lg-2.d-none.d-lg-block
                img(src='@/assets/curso/temas/t6/21.png')

            .row.align-items-center
              .col-sm-12.col-lg-2.d-none.d-lg-block
                img(src='@/assets/curso/temas/t6/22.png')
              .col-sm-12.col-lg-10
                h4 Respuesta de la actividad
                p.mb-0 Se prevé un espacio para comunicar si las asociaciones realizadas son correctas y ofrecer orientaciones que ayuden a comprender las respuestas.


      p.mb-5(data-aos='fade-right') Este ejercicio permite representar las principales pantallas y las acciones esperadas antes de producir el recurso completo. La evaluación detallada de su funcionamiento y experiencia de uso corresponderá al siguiente componente formativo.

      .titulo-sexto.color-secundario.mb-3(data-aos='fade-right')
        p.mb-0 #[b Figura 4.] Sistema integrado para el diseño de recursos educativos digitales
      .bg-color-2.p-4.mb-5.br-1
          .row.justify-content-center.mb-0
            .col-sm-12.col-lg-10
              figure.mb-0
                img(src='@/assets/curso/temas/t6/23.svg', alt='Infografía que integra legalidad, pedagogía y tecnología para diseñar RED con calidad, ética, accesibilidad y mejora continua.')

      p.mb-0(data-aos='fade-right') La articulación de estos elementos permite comprender que el desarrollo de un recurso educativo digital no depende exclusivamente de la herramienta utilizada. Su calidad requiere integrar decisiones pedagógicas, condiciones legales y posibilidades tecnológicas que respondan a las necesidades del proceso formativo.

</template>

<script>
export default {
  name: 'Tema6',
  data: () => ({
    datosSlyder: [
      {
        titulo: 'Documentos y texto',
        texto:
          'Los formatos DOCX, ODT y PDF permiten elaborar y compartir diferentes tipos de documentos. Los archivos editables facilitan modificaciones posteriores, mientras que el PDF suele utilizarse para distribuir materiales conservando su presentación.',

        imagen: '@/assets/curso/temas/t6/6.png',
      },

      {
        titulo: 'Imágenes',
        texto:
          'JPEG se utiliza principalmente en fotografías; PNG permite incorporar transparencias; SVG es adecuado para gráficos vectoriales; y WebP ofrece opciones de compresión para contenidos visuales digitales.',

        imagen: '@/assets/curso/temas/t6/7.png',
      },

      {
        titulo: 'Audio',
        texto:
          'MP3 y AAC son formatos de audio comprimido utilizados para distribuir grabaciones. WAV permite trabajar con audio sin compresión y puede resultar útil durante procesos de edición.',

        imagen: '@/assets/curso/temas/t6/8.png',
      },

      {
        titulo: 'Video',
        texto:
          'MP4 y WebM son formatos empleados para distribuir contenidos audiovisuales. Su elección debe considerar la compatibilidad con la plataforma educativa, los dispositivos y las necesidades de reproducción.',

        imagen: '@/assets/curso/temas/t6/9.png',
      },

      {
        titulo: 'Recursos interactivos',
        texto:
          'Los recursos interactivos pueden integrar preguntas, actividades de asociación, recorridos y elementos de navegación. Su funcionamiento depende de la herramienta utilizada, el formato de exportación y las características de la plataforma donde serán consultados.',

        imagen: '@/assets/curso/temas/t6/10.png',
      },
    ],
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
