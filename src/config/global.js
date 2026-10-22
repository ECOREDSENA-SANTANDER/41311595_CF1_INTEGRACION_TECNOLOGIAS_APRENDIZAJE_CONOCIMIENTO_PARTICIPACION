export default {
  global: {
    Name: 'Gestión de información, integración de tecnologías y diseño de recursos educativos digitales',
    Description:
      'Este componente aborda la evolución de las TIC, TAC y TEP, la gestión y curación de información, los entornos personales de aprendizaje, los recursos educativos abiertos, la identidad y seguridad digital. Integra derechos de autor, licenciamiento, citación, diseño y producción de recursos educativos digitales mediante herramientas de autor, formatos multimedia y prototipado funcional.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.svg',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.svg',
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Evolución tecnológica educativa',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Ecosistema digital para el aprendizaje',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Gestión de la información',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Curación de contenidos digitales',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Búsqueda, organización y almacenamiento de información',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Identidad, reputación y seguridad digital',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo:
          'Ruta metodológica para el diseño y desarrollo de un Recurso Educativo Digital',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Propiedad intelectual y normativa digital',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Producción y diseño de recursos educativos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo:
              'Medios y formatos para la producción de contenidos digitales',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo:
              'Objetos Virtuales de Aprendizaje (OVA) y herramientas de autor',
            hash: 't_6_2',
          },
          {
            numero: '6.3',
            titulo: 'Prototipado funcional y diseño de interfaces',
            hash: 't_6_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Curación de contenidos',
      significado:
        'proceso de búsqueda, selección, organización, contextualización y distribución de información relevante, mediante criterios de confiabilidad y pertinencia pedagógica.',
    },
    {
      termino: 'Derechos de autor',
      significado:
        'normas jurídicas que protegen las creaciones intelectuales y reconocen derechos morales y patrimoniales a sus autores.',
    },
    {
      termino: 'Herramienta de autor',
      significado:
        'aplicación informática que permite diseñar, integrar y producir recursos educativos digitales, sin requerir conocimientos avanzados de programación.',
    },
    {
      termino: 'Identidad digital',
      significado:
        'conjunto de datos, publicaciones e interacciones que representan a una persona en los entornos digitales.',
    },
    {
      termino: 'Infoxicación',
      significado:
        'sobrecarga de información que dificulta identificar, seleccionar y comprender contenidos relevantes.',
    },
    {
      termino: 'Interoperabilidad',
      significado:
        'capacidad de un recurso o sistema digital para funcionar o intercambiar información con otros entornos tecnológicos compatibles.',
    },
    {
      termino: 'Licencias <i>creative commons</i> (cc)',
      significado:
        'licencias que permiten a los autores establecer condiciones para el uso, distribución y, según corresponda, adaptación de sus obras.',
    },
    {
      termino: 'OVA',
      significado:
        'objeto virtual de aprendizaje; recurso digital estructurado con contenidos, actividades y elementos de contextualización, diseñado para apoyar el aprendizaje y favorecer su reutilización.',
    },
    {
      termino: 'PLE',
      significado:
        'entorno personal de aprendizaje; conjunto de herramientas, fuentes de información y conexiones que una persona utiliza para gestionar su aprendizaje.',
    },
    {
      termino: 'Prototipo',
      significado:
        'representación preliminar de un recurso digital que permite revisar su diseño y, cuando incorpora interacciones, comprobar inicialmente su funcionamiento.',
    },
    {
      termino: 'REA',
      significado:
        'recursos educativos abiertos; materiales de enseñanza, aprendizaje o investigación que se encuentran en dominio público o cuentan con una licencia abierta.',
    },
    {
      termino: 'Seguridad digital',
      significado:
        'conjunto de prácticas y mecanismos destinados a proteger información, dispositivos y cuentas frente a riesgos tecnológicos.',
    },
    {
      termino: 'TAC',
      significado:
        'tecnologías del aprendizaje y el conocimiento; enfoque pedagógico que orienta el uso de las tic hacia el aprendizaje y la construcción del conocimiento.',
    },
    {
      termino: 'TEP',
      significado:
        'tecnologías para el empoderamiento y la participación; enfoque de utilización tecnológica que promueve la participación, la colaboración y la transformación social.',
    },
    {
      termino: 'TIC',
      significado:
        'tecnologías de la información y las comunicaciones; conjunto de herramientas, dispositivos, redes y aplicaciones utilizados para procesar, almacenar y transmitir información.',
    },
  ],
  referencias: [
    {
      referencia:
        '<i>American Psychological Association</i>. (2020). <i>Publication manual of the American Psychological Association</i> (7th ed.).',
    },
    {
      referencia:
        'Congreso de Colombia. (1982). Ley 23 de 1982, sobre derechos de autor.',
    },
    {
      referencia:
        'Congreso de Colombia. (2009). Ley 1273 de 2009, por medio de la cual se modifica el Código Penal, se crea un nuevo bien jurídico tutelado denominado «de la protección de la información y de los datos» y se preservan integralmente los sistemas que utilicen las tecnologías de la información y las comunicaciones.',
    },
    {
      referencia:
        'Congreso de Colombia. (2018). Ley 1915 de 2018, por la cual se modifica la Ley 23 de 1982 y se establecen otras disposiciones en materia de derecho de autor y derechos conexos.',
    },
    {
      referencia:
        '<i>Creative Commons</i>. (s. f.). Licencias <i>Creative Commons</i>.',
    },
    {
      referencia:
        'Fundación Telefónica. (2013). Identidad digital: El nuevo usuario en el mundo digital.',
    },
    {
      referencia:
        'Guzmán, J. L., Álvarez, W. E., & Oviedo, M. A. (2017). Las tecnologías de la información y la comunicación en la formación para el trabajo: Un relato desde el Servicio Nacional de Aprendizaje – SENA, Colombia. Tecnología y Productividad, 3(3), 53–61.',
    },
    {
      referencia:
        '<i>Microsoft Azure</i>. (s. f.). ¿Qué es el almacenamiento en la nube?',
    },
    {
      referencia:
        'Ministerio de Educación Nacional. (2012). Recursos educativos digitales abiertos: Colombia.',
    },
    {
      referencia:
        'Ministerio de Educación Nacional. (2013). Competencias TIC para el desarrollo profesional docente.',
    },
    {
      referencia:
        'Ministerio de Tecnologías de la Información y las Comunicaciones. (2020). Cómo prevenir los riesgos en el entorno digital: 10 recomendaciones en el Día del Internet Seguro.',
    },
    {
      referencia:
        'Organización de las Naciones Unidas para la Educación, la Ciencia y la Cultura. (2019a). Marco de competencias de los docentes en materia de TIC (versión 3).',
    },
    {
      referencia:
        'Organización de las Naciones Unidas para la Educación, la Ciencia y la Cultura. (2019b). Recomendación sobre los Recursos Educativos Abiertos (REA).',
    },
    {
      referencia:
        'Servicio Nacional de Aprendizaje. (2018). Las TIC en el contexto educativo.',
    },
    {
      referencia:
        'Servicio Nacional de Aprendizaje. (2020). De la frustración al empoderamiento, mi Caja TIC de herramientas. Academia Internacional SENA.',
    },
    {
      referencia:
        'Servicio Nacional de Aprendizaje. (2024). Guía pedagógica y didáctica para la incorporación de la tecnología en los procesos formativos/educativos. Centro de Gestión Tecnológica de Servicios.',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional G06. Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Edison Eduardo Mantilla Cuadros',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Claudia Patricia Bermúdez Ardila',
          cargo: 'Experta temática',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Angélica Varón Quintero',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Julian Fernando Vanegas Vega',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Lizeth Karina Manchego Suarez',
          cargo: 'Desarrolladora <em>full stack</em>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Maria Alejandra Vera Briceño',
          cargo: 'Animadora y productora audiovisual',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: '--',
          cargo: 'Validadora y vinculadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: '--',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
