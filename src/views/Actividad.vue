<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: <ActividadController :cuestionario="cuestionario"/>
      // Para parrafo usar: <ActividadController :parrafo="parrafo"/>
      #Actividad                
      <ActividadController :cuestionario="cuestionario"/>
  
  </template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Microcontroladores y sensores',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> validar la apropiación de conceptos sobre integración tecnológica, ecosistema digital, gestión y curación de información, diseño de recursos educativos digitales, propiedad intelectual, OVA, herramientas de autor y prototipado funcional.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Qué debe considerar un Recurso Educativo Digital para articularse de manera coherente con el proceso de enseñanza?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Metodologías activas y las necesidades del contexto de aprendizaje.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Únicamente la cantidad de herramientas tecnológicas disponibles.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Solo el diseño gráfico y los elementos decorativos de la interfaz.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Exclusivamente la plataforma donde será publicado.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Qué concepto corresponde a un material elaborado mediante herramientas tecnológicas con fines pedagógicos que facilita los procesos de enseñanza y aprendizaje?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Recurso Educativo Digital.', esCorrecta: true },
            {
              id: 'b',
              texto: 'Entorno Personal de Aprendizaje.',
              esCorrecta: false,
            },
            { id: 'c', texto: 'Licencia Creative Commons.', esCorrecta: false },
            { id: 'd', texto: 'Curación de contenidos.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Cuál afirmación describe correctamente las Tecnologías del Aprendizaje y el Conocimiento (TAC)?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Orientan el uso de las TIC hacia la construcción del conocimiento y el aprendizaje significativo.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Se limitan al acceso y transmisión de información digital.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Se orientan principalmente a la participación y transformación social.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Se utilizan para establecer las condiciones legales de uso de una obra.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Qué describe mejor un Entorno Personal de Aprendizaje (PLE)?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Un programa informático único para dictar clases.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Un conjunto de herramientas, fuentes y conexiones que una persona usa para gestionar su aprendizaje.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Una licencia para reutilizar contenidos educativos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Un repositorio institucional de documentos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Cuál es la característica principal de un Recurso Educativo Abierto (REA)?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Solo puede consultarse dentro de una institución.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Puede usarse, adaptarse y compartirse bajo una licencia abierta.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Debe adquirirse mediante una licencia comercial.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'No admite ningún tipo de modificación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Cuál afirmación describe correctamente las licencias Creative Commons?',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Prohíben totalmente compartir una obra.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Reservan todos los derechos exclusivamente para el autor.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Permiten compartir una obra bajo condiciones definidas por su autor.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Eliminan siempre la obligación de reconocer la autoría.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Cuál es la función principal de las TIC en el ámbito educativo según el componente?',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Facilitar el acceso a datos y apoyar procesos de comunicación.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Sustituir por completo la mediación pedagógica.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Definir las condiciones legales de las obras.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Evaluar únicamente la usabilidad de los recursos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Qué finalidad caracteriza a las Tecnologías para el Empoderamiento y la Participación (TEP)?',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Automatizar únicamente tareas administrativas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Promover participación, colaboración y transformación social.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Organizar exclusivamente referencias bibliográficas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Limitar la interacción de los aprendices con otros usuarios.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto: '¿Qué elementos convergen en un ecosistema digital educativo?',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Personas, metodologías, dispositivos y recursos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Solo equipos de cómputo y conexión a internet.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Únicamente plataformas y licencias de uso.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Autores, editoriales y normas de citación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Cómo se denomina la sobrecarga producida por la gran cantidad de información disponible en internet?',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Interoperabilidad.', esCorrecta: false },
            { id: 'b', texto: 'Infoxicación.', esCorrecta: true },
            { id: 'c', texto: 'Prototipado.', esCorrecta: false },
            { id: 'd', texto: 'Accesibilidad.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            '¿Qué diferencia a la curación de contenidos de una búsqueda simple en internet?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Evalúa la fiabilidad de las fuentes y añade valor pedagógico a la información.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Almacena cualquier resultado sin revisar su pertinencia.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Elimina la necesidad de citar las fuentes consultadas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Se limita a compartir enlaces sin organizarlos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            '¿Qué se evalúa principalmente durante la fase de selección en la curación de contenidos?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La veracidad, actualidad y pertinencia de la información.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'El diseño gráfico y el color de la interfaz.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La velocidad de conexión del usuario.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La cantidad de archivos almacenados.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            '¿Cuál es el propósito de la contextualización dentro de la curación de contenidos?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Añadir análisis, resúmenes o cuestionamientos que faciliten la comprensión.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Publicar de inmediato todo el material encontrado.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Eliminar cualquier adaptación pedagógica del contenido.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Convertir automáticamente la información en una licencia abierta.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            '¿Qué acciones corresponden a la fase de análisis y planeación de un Recurso Educativo Digital?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Diagnosticar la necesidad, caracterizar a los aprendices y definir objetivos formativos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Publicar el recurso y medir su impacto final.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Empaquetar archivos multimedia sin definir objetivos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Seleccionar únicamente colores y tipografías de la interfaz.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto:
            '¿Qué actividad corresponde a la fase de diseño y prototipado de un Recurso Educativo Digital?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Estructurar el guion, diseñar la interfaz y crear una versión preliminar funcional.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Realizar únicamente la publicación del recurso terminado.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Comprobar exclusivamente los derechos patrimoniales del autor.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Aplicar la evaluación final en un contexto real.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 16,
          texto:
            '¿Qué incluye la fase de desarrollo y pruebas de funcionamiento de un Recurso Educativo Digital?',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Integrar multimedia y licencias, citar fuentes y probar navegación, compatibilidad y usabilidad.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Definir solamente la población objetivo del recurso.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Seleccionar únicamente una metodología activa de enseñanza.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Crear la licencia de una obra sin desarrollar el recurso.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 17,
          texto:
            'Si una imagen aparece públicamente en un buscador de internet, ¿qué debe asumirse sobre sus derechos de autor?',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Que está protegida, salvo que se indique una condición distinta de uso.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Que pertenece automáticamente al dominio público.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Que puede modificarse sin reconocer a su autor.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Que no requiere verificar licencia ni condiciones de uso.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 18,
          texto:
            '¿Para qué se emplean las normas APA en los procesos formativos?',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Para citar autores y estructurar referencias bibliográficas.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Para diseñar interfaces gráficas interactivas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Para definir la navegación de un prototipo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Para asignar licencias abiertas a todas las obras.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 19,
          texto:
            '¿Qué característica identifica a un Objeto Virtual de Aprendizaje (OVA)?',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Integra contenidos, actividades y contextualización, y puede reutilizarse en distintas plataformas.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Es únicamente un archivo de texto sin propósito educativo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Solo funciona en una plataforma y no puede reutilizarse.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Se limita a almacenar enlaces sin actividades de aprendizaje.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 20,
          texto:
            '¿Qué permite hacer una herramienta de autor en la producción de recursos educativos digitales?',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Diseñar, integrar y empaquetar contenidos multimedia sin requerir programación avanzada.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Sustituir la definición de objetivos pedagógicos del recurso.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Garantizar automáticamente que todo contenido sea de dominio público.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Eliminar la necesidad de realizar pruebas de navegación y usabilidad.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado:
        'Ha superado la actividad y demuestra sólidos conocimientos sobre el componente formativo.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
