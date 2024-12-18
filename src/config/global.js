export default {
  global: {
    componenteFormativo:
      'Generalidades, ingredientes y aspectos higiénicos en la preparación de conservas',
    descripcionCurso:
      'Este curso virtual capacita al aprendiz en la elaboración de conservas de frutas y verduras, garantizando la inocuidad y calidad del producto final. Aprenderá sobre los principios de conservación, los métodos de esterilización, las mejores prácticas de higiene y la correcta manipulación de los alimentos. Se profundizará en la composición de las frutas y verduras, incluyendo el análisis de sustancias bioactivas y sus beneficios para la salud.  Además, se estudiarán los mecanismos de alteración de la calidad poscosecha y cómo prevenirlos para optimizar la duración y calidad de las conservas.  Al finalizar el curso, el aprendiz estará preparado para seleccionar los ingredientes adecuados, elaborar conservas de forma eficiente y aplicar prácticas de higiene y manipulación de alimentos seguras y efectivas.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      // {
      //   clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
      //   imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      // },
      // {
      //   clases: ['banner-principal-decorativo-2'],
      //   imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      // },
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
        titulo: 'Generalidades de frutas y verduras',
        desarrolloContenidos: true,
        subMenu: [
          {
            titulo: '1.1 Diferencia entre frutas y verduras',
            hash: 't_1_1',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Importancia de las frutas y verduras',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo:
          'Ingredientes y aspectos higiénicos en la preparación de conservas',
        desarrolloContenidos: true,
        subMenu: [
          {
            titulo: '3.1 Preparación de conservas',
            hash: 't_3_1',
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
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
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
  complementario: [
    {
      tema:
        'Ingredientes y aspectos higiénicos en la preparación de conservas.',
      referencia: 'Villar, L. (2010). Las Mejores conservas. Ed. Integral.',
      tipo: 'Libro',
      descarga: '/downloads/Las_mejores_conservas.pdf',
    },
    {
      tema:
        'Ingredientes y aspectos higiénicos en la preparación de conservas.',
      referencia:
        'Organización de las Naciones Unidas para la Agricultura y la Alimentación. (1993). Prevención de pérdidas de alimentos poscosecha: frutas, hortalizas, raíces y tubérculos. (Colección FAO: Capacitación, N° 17/2). Roma: FAO.',
      tipo: 'Libro',
      link: 'https://www.fao.org/4/t0073s/T0073S00.htm#Contents',
    },
    // {
    //   tema: '',
    //   referencia: '',
    //   tipo: '',
    //   descarga: '/downloads/prueba.pdf',
    // },
  ],
  glosario: [
    {
      termino: 'Antioxidantes',
      significado:
        'Sustancias que ayudan a proteger las células del daño causado por los radicales libres, que son moléculas inestables que pueden dañar el ADN y las proteínas. Los antioxidantes se encuentran en las frutas, las verduras, los frutos secos y las semillas.',
    },
    {
      termino: 'Bioactivos',
      significado:
        'Sustancias químicas que se encuentran en los alimentos y tienen efectos positivos para la salud. Los bioactivos pueden ayudar a prevenir enfermedades crónicas, como el cáncer, las enfermedades cardiovasculares y la diabetes.',
    },
    {
      termino: 'Carotenoides',
      significado:
        'Pigmentos que dan color naranja y amarillo a las frutas y verduras, como el betacaroteno que se convierte en vitamina A en el cuerpo. Los carotenoides tienen propiedades antioxidantes y pueden ayudar a prevenir el cáncer y las enfermedades cardiovasculares.',
    },
    {
      termino: 'Clorofila',
      significado:
        'Pigmento verde que se encuentra en las plantas y que les permite realizar la fotosíntesis, el proceso por el cual las plantas utilizan la luz solar para producir energía. La clorofila es responsable del color verde de las hojas, los tallos y las frutas verdes.',
    },
    {
      termino: 'Conservas',
      significado:
        'Método de preservar alimentos para evitar su deterioro o contaminación mediante procesos como la esterilización, la pasteurización o la fermentación. Las conservas permiten almacenar alimentos por largos periodos de tiempo sin que pierdan sus propiedades nutricionales y organolépticas.',
    },
    {
      termino: 'Desinfección',
      significado:
        'Proceso que elimina microorganismos patógenos de las superficies. La desinfección se puede realizar utilizando calor, productos químicos o radiación ultravioleta. Es esencial para garantizar la seguridad de los alimentos y prevenir la transmisión de enfermedades.',
    },
    {
      termino: 'Flavonoides',
      significado:
        'Pigmentos que dan color azul y morado a las frutas y verduras, como la antocianina presente en las uvas. Los flavonoides tienen propiedades antioxidantes y pueden ayudar a proteger el corazón y el cerebro.',
    },
    {
      termino: 'Frutas',
      significado:
        'Fruto de una planta con semillas, de sabor dulce, normalmente con alto contenido de azúcar. Son una fuente importante de vitaminas, minerales y fibra dietética. Las frutas se pueden consumir frescas, secas, en conserva o en zumo.',
    },
    {
      termino: 'Higiene',
      significado:
        'Conjunto de medidas que se deben tomar para prevenir la contaminación de los alimentos y la transmisión de enfermedades. La higiene alimentaria incluye el lavado de manos, el uso de guantes, la limpieza de las superficies de trabajo y la correcta manipulación de los alimentos.',
    },
    {
      termino: 'Inocuidad',
      significado:
        'Seguridad alimentaria, la ausencia de riesgos para la salud de los consumidores. Se refiere a la garantía de que los alimentos no causarán enfermedades ni daños a la salud cuando se consuman. La inocuidad alimentaria es esencial para garantizar la seguridad alimentaria.',
    },
    {
      termino: 'Minerales',
      significado:
        'Compuestos inorgánicos que el cuerpo necesita en pequeñas cantidades para funcionar correctamente. Los minerales son esenciales para el crecimiento de los huesos, la contracción muscular, la regulación del ritmo cardíaco y muchas otras funciones del cuerpo.',
    },
    {
      termino: 'Pigmentos',
      significado:
        'Sustancias químicas que dan color a los alimentos. Los pigmentos son responsables del color de las frutas, las verduras, los cereales y los productos cárnicos. Algunos pigmentos, como la clorofila y los carotenoides, tienen propiedades antioxidantes.',
    },
    {
      termino: 'Verduras',
      significado:
        'Partes comestibles de una planta que no son frutas, con sabores diversos y normalmente con un contenido de agua mayor al de las frutas. Las verduras son ricas en vitaminas, minerales y fibra, y son una fuente importante de antioxidantes.',
    },
    {
      termino: 'Vitaminas',
      significado:
        'Compuestos orgánicos que el cuerpo necesita en pequeñas cantidades para funcionar correctamente. Las vitaminas son esenciales para el crecimiento, la reparación de tejidos y el mantenimiento de las funciones del cuerpo.',
    },
  ],
  referencias: [
    {
      referencia:
        'Bartrina, J., Serra, L., Pérez, C. y Ortega, R. (2006). Frutas, verduras y salud. Barcelona, España: Elsevier.',
      link: '',
    },
    {
      referencia:
        'Cámara, M. y Torija, E. (2006). Frutas y verduras, fuentes de salud. Madrid, España: Instituto de Salud Pública.',
      link: '',
    },
    {
      referencia:
        'Hudak, R. (2009). Frutas y verduras: jardín práctico. España: Hispano Europea.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social (Resolución 00002674). (2013, 22 de julio). Diario Oficial, 48862, 2013, 25 de julio.',
      link: '',
    },
    {
      referencia:
        'Organización de las Naciones Unidas para la Alimentación y la Agricultura (FAO). (2023). Frutas y verduras [Archivo HTML]. Recuperado de https://openknowledge.fao.org/server/api/core/bitstreams/a0d8db5d-f798-43c6-8ccc-5ffe886b01d6/content/src/html/frutas-y-verduras.html',
      link:
        'https://openknowledge.fao.org/server/api/core/bitstreams/a0d8db5d-f798-43c6-8ccc-5ffe886b01d6/content/src/html/frutas-y-verduras.html',
    },
    {
      referencia:
        'Sistema para el Desarrollo Integral de la Familia del Estado de México. (2007). El sabor en la familia antología de conservación de alimentos. Toluca, México: Programa de Orientación Alimentaria.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo:
            'Responsable del Ecosistema de Recursos Educativos Digitales (RED)',
          centro: 'Dirección General',
        },
        {
          nombre: 'Miguel de Jesús Paredes Maestre',
          cargo: 'Responsable de Línea de Producción',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Ángela Viviana Páez Perilla',
          cargo: 'Experta temática',
          centro: 'Centro Agroindustrial - Regional Quindío',
        },
        {
          nombre: 'Paola Andrea Bobadilla Gutiérrez',
          cargo: 'Guionista Línea de Producción',
          centro: 'Centro Agroindustrial - Regional Quindío',
        },
        {
          nombre: 'Jairo Valencia Ebratt',
          cargo: 'Evaluador instruccional',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Jesús Antonio Vecino Valero',
          cargo: 'Diseñador de Contenidos Digitales',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga - Regional Atlántico',
        },
        {
          nombre: 'Liborio De Jesús Castañeda Valencia',
          cargo: 'Desarrollador <em>full stack junior</em>',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga - Regional Atlántico',
        },
        {
          nombre: 'Carmen Alicia Martinez Torres',
          cargo: 'Animador y Producción audiovisual',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga - Regional Atlántico',
        },
        // {
        //   nombre: 'Nombre',
        //   cargo: 'Actividad Didáctica',
        //   centro:
        //     'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga - Regional Atlántico',
        // },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga - Regional Atlántico',
        },
        {
          nombre: 'Luz Karime Amaya Cabra',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga - Regional Atlántico',
        },
        {
          nombre: 'Juan Carlos Cardona Acosta',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga - Regional Atlántico',
        },
        {
          nombre: 'Jairo Luis Valencia Ebratt',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga - Regional Atlántico',
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
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
