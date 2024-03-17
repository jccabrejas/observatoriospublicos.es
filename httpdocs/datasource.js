// Tipo de observatorio según su origen, financiación y/o composición
const types = [
  {
    key: 'public',
    name: 'Público',
  },
  {
    key: 'mixed',
    name: 'Público-privado',
  },
]

const scopes = [
  {
    key: 'estatal',
    name: 'Estatal',
  },
  {
    key: 'ayuntamiento',
    name: 'Ayuntamiento',
  },
  {
    key: 'cataluna',
    name: 'Cataluña',
  },
  {
    key: 'madrid',
    name: 'Madrid',
  },
  {
    key: 'murcia',
    name: 'Murcia',
  },
  {
    key: 'pais-vasco',
    name: 'País Vasco',
  },
]

const observatories = [
  // {
  //   name: '', // Nombre del observatorio
  //   website: '', // Sitio web
  //   email: '', // Correo electrónico,
  //   parents: [], // Organismos públicos de los que depende
  //   scope: '', // Ámbito territorial: estatal, comunidad autónoma o ayuntamiento,
  //   type: '', // Si es público o público-privado
  //   docs: [], // Muestra de algunos de sus últimos informes publicados
  //   members: [], // Algunos Organismos que lo componen, si es el caso
  //   comment: '', //
  //   from_date: '', // Inicio de actividad. Fecha de creación o fecha del anuncio
  //   to_date: '', // Cese de actividad. Fecha de última actividad conocida
  //   is_active: '', // 'Sí' si está en activo. Si no está en activo, no especificar esta propiedad
  // },

  {
    name: 'Observatorio contra el Fraude y la Corrupción Sanitaria',
    parents: ['Ministerio de Sanidad'],
    comment: `<a
        href="https://twitter.com/Monica_Garcia_G/status/1768227454223565199"
        >Anunciado</a
      >
      por la ministra de Sanidad el 14 de marzo de 2024.`,
    scope: 'estatal',
    type: 'public',
  },
  {
    name: 'Observatorio de Salud de las Mujeres',
    parents: [
      'Ministerio de Sanidad',
      'Secretaría de Estado de Sanidad',
      'Dirección General de Salud Pública',
    ],
    website: 'https://www.observatoriosaludmujeres.es',
    scope: 'estatal',
    type: 'public',
  },
  {
    name: 'Observatorio del ferrocarril en España',
    parents: ['Ministerio de Transportes y Movilidad Sostenible'],
    docs: [
      {
        name: 'Informe 2022',
        url: 'https://cdn.transportes.gob.es/portal-web-transportes/ferroviario/observatorio/ofe_2022_feb2024_v3.3_prot.pdf',
      },
      {
        name: 'Informe 2021',
        url: 'https://cdn.mitma.gob.es/portal-web-drupal/ferroviario/observatorio/ofe_2021_feb2023_v2.pdf',
      },
      {
        name: 'Informe 2020',
        url: 'https://cdn.mitma.gob.es/portal-web-drupal/ferroviario/observatorio/ofe_2020.pdf',
      },
      {
        name: 'Informe 2019',
        url: 'https://cdn.mitma.gob.es/portal-web-drupal/ferroviario/observatorio/ofe_2019_mar2021.pdf',
      },
      {
        name: 'Informe 2018',
        url: 'https://cdn.mitma.gob.es/portal-web-drupal/ferroviario/observatorio/ofe2018_rev.pdf',
      },
    ],
    website:
      'https://www.transportes.gob.es/ferrocarriles/observatorios/observatorio-del-ferrocarril-en-espana',
    scope: 'estatal',
    type: 'public',
  },
  {
    name: "Observatori Municipal de l'Habitatge d'Alcoi",
  },
  {
    name: 'Observatorio Autonómico dos Ríos de Galicia',
  },
  {
    name: 'Observatorio da Sociedade da Información e a Modernización de Galicia',
  },
  {
    name: 'Observatorio da Violencia no Contorno Laboral',
  },
  {
    name: 'Observatorio de Administración Electrónica',
  },
  {
    name: 'Observatorio de Igualdad de Oportunidades entre Mujeres y Hombres',
  },
  {
    name: 'Observatorio de la Cadena Alimentaria',
  },
  {
    name: 'Observatorio de la Ciencia Ciudadana',
  },
  {
    name: 'Observatorio de la Gestión Empresarial en Biodiversidad',
  },
  {
    name: 'Observatorio de la Infancia de España',
    website:
      'https://observatoriodelainfancia.mdsocialesa2030.gob.es/queEs/home.htm',
  },
  {
    name: 'Observatorio de la Infancia de Andalucía',
  },
  {
    name: 'Observatorio de la Infancia de Cataluña / Observatori dels Drets dels Infants',
  },
  {
    name: 'Observatorio de la Infancia y la Adolescencia de Asturias',
  },
  {
    name: 'Observatorio de Infancia del País Vasco',
  },
  {
    name: 'Observatorio de Infancia de Cantabria',
  },
  {
    name: 'Observatorio de la Infancia y la Adolescencia de les Illes Balears',
  },
  {
    name: 'Observatorio de la Lectura y el Libro',
  },
  {
    name: 'Observatorio de la Realidad Social de Navarra',
    website: 'https://www.observatoriorealidadsocial.es/es/',
  },
  {
    name: 'Observatorio de las Ocupaciones del Servicio Público de Empleo Estatal',
    website:
      'https://www.sepe.es/HomeSepe/que-es-el-sepe/comunicacion-institucional/publicaciones/publicaciones-oficiales/listado-pub-mercado-trabajo/observatorio-ocupaciones.html',
    email: 'observatorio.ocupacional@sepe.es',
    type: 'public',
    scope: 'estatal',
  },
  {
    name: 'Observatorio de Museos de España',
  },
  {
    name: 'Observatorio de Precios y Mercados de la Junta de Andalucía',
  },
  {
    name: 'Observatorio de Salud Pública de Cantabria',
  },
  {
    name: 'Observatorio de Salud y Cambio Climático',
  },
  {
    name: 'Observatorio de Vivienda y Suelo',
  },
  {
    name: 'Observatorio del Ferrocarril en España',
  },
  {
    name: 'Observatorio del Medio Ambiente Urbano',
  },
  {
    name: 'Observatorio del Transporte y la Logística en España',
    website: 'https://otle.transportes.gob.es',
  },
  {
    name: 'Observatorio do Sector Lácteo de Galicia',
  },
  {
    name: 'Observatorio Español contra la LGBTfobia',
  },
  {
    name: 'Observatorio Español de Acuicultura',
  },
  {
    name: 'Observatorio Español de I+D+I (ICONO)',
  },
  {
    name: 'Observatorio Español de la Economía Social',
  },
  {
    name: 'Observatorio Español de las Drogas y las Adicciones',
  },
  {
    name: 'Observatorio Español del Mercado del Vino',
  },
  {
    name: 'Observatorio Español del Racismo y la Xenofobia',
  },
  {
    name: 'Observatorio Estatal de Condiciones de Trabajo',
  },
  {
    name: 'Observatorio Estatal de Familias',
  },
  {
    name: 'Observatorio Estatal de la Convivencia Escolar',
  },
  {
    name: 'Observatorio Estatal de la Dependencia',
  },
  {
    name: 'Observatorio Estatal de la Discapacidad',
  },
  {
    name: 'Observatorio Estatal de los Servicios Deportivos a las Administraciones Públicas',
  },
  {
    name: 'Observatorio de la Comunidad de Castilla y León (Sección de Género)',
    website:
      'https://familia.jcyl.es/web/es/mujer/observatorio-comunidad-seccion-genero.html',
    type: 'public',
    scope: 'castilla-y-leon',
  },
  {
    name: 'Observatorio de la Convivencia Escolar',
    website:
      'https://www.educa.jcyl.es/convivenciaescolar/es/observatorio-convivencia-escolar',
    type: 'public',
    scope: 'castilla-y-leon',
  },
  {
    name: 'Observatorio TransfomAcción y ParticipAcción',
    website: 'https://www.observatoriotransformacion.com',
    type: 'public',
    scope: 'castilla-y-leon',
  },
  {
    name: 'Observatorio Regional de la Sociedad de la Información de Castilla y León (ORSI)',
    website:
      'https://www.aytoburgos.es/-/observatorio-regional-de-la-sociedad-de-la-informacion-de-castilla-y-leon-orsi-',
    type: 'public',
    scope: 'castilla-y-leon',
  },
  {
    name: 'Observatorio de Agresiones',
    website:
      'https://www.saludcastillayleon.es/profesionales/es/prevencion-riesgos-laborales/plan-integral-frente-agresiones/observatorio-agresiones',
    type: 'public',
    scope: 'castilla-y-leon',
  },
  {
    name: 'Observatorio Estatal de Violencia sobre la Mujer',
  },
  {
    name: 'Observatorio Galego Contra a Discriminación por Orientación Sexual e Identidade de Xénero',
  },
  {
    name: 'observatorio Galego da biodiversidade',
  },
  {
    name: 'Observatorio Galego da Violencia de Xénero',
  },
  {
    name: 'Observatorio Galego de Acción Voluntaria',
  },
  {
    name: 'Observatorio Galego de Convivencia Escolar',
  },
  {
    name: 'Observatorio Galego de Dinamización Demográfica',
  },
  {
    name: 'Observatorio Galego de Educación Ambiental',
  },
  {
    name: 'Observatorio Nacional 5G',
  },
  {
    name: 'Observatorio Nacional contra el Despoblamiento',
  },
  {
    name: 'Observatorio Nacional de la Calidad de los Servicios Públicos',
  },
  {
    name: 'Observatorio Nacional de las Telecomunicaciones y de la Sociedad de la Información',
  },
  {
    name: 'Observatorio Nacional de Seguridad Vial',
  },
  {
    name: 'Observatorio Nacional de Sequías e Inundaciones',
  },
  {
    name: 'Observatorio Profesional del Instituto Nacional de las Cualificaciones',
  },
  {
    name: 'Observatorio Tecnológico',
    website: 'http://educalab.es/intef/tecnologia/observatorio-tecnologico',
  },
  {
    name: 'Observatorio Territorial de Andalucía',
  },
  {
    name: 'Observatorio para la Cibersociedad',
    // Kaputt
  },
  {
    name: 'Sociedad de la Información en Navarra',
    scope: 'navarra',
    // Kaputt ?
  },
  {
    name: 'Observatorio de Prospectiva Tecnológica Industrial',
    website: 'http://www.opti.org',
  },
  {
    name: 'Observatorio de formación en red Scopeo',
    website: 'https://scopeo.usal.es',
  },
  {
    name: 'Observatorio Mujeres, Ciencia e Innovación',
  },
  {
    name: 'Observatorio da Mobilidade de Terras de Galicia',
  },
  {
    name: 'Observatorio Galego da Xuventude',
  },
  {
    name: 'Observatorio Coruñés contra a LGTBIfobia',
  },
  {
    name: 'Observatorio de costes de transportes de mercancías por carretera de Galicia',
  },
  {
    name: 'Observatorio Gallego de la Familia y de la Infancia',
  },
  {
    name: 'Observatorio da Vivenda de Galicia',
  },
  {
    name: 'Observatorio da Lingua Galega',
  },
  {
    name: 'Observatorio Argos de la Junta de Andalucía',
  },
  {
    name: 'Observatorio del Mercado de Trabajo del Instituto Aragonés de Empleo',
  },
  {
    name: 'Observatorio del Mercado de Trabajo del Servicio Público de Empleo del Principado de Asturias',
  },
  {
    name: 'Observatorio del Trabajo del Servicio de Ocupación de las Illes Balears',
  },
  {
    name: 'Observatorio de Empleo y Formación del Servicio Cántabro de Empleo',
  },
  {
    name: 'Observatorio Canario del Empleo y la Formación Profesional',
  },
  {
    name: 'Observatorio Socioeconómico de la Provincia de Badajoz',
  },
  {
    name: 'Observatorio del Sector TIC en Extremadura',
  },
  {
    name: 'Observatorio de las Familias y la Infancia de Extremadura',
  },
  {
    name: 'Observatorio para la Convivencia Escolar de Extremadura',
  },
  {
    name: 'Observatorio de Prevención de Riesgos Laborales de la Comunidad Autónoma de la Región de Murcia',
  },
  {
    name: 'Observatorio de Turismo de Extremadura',
  },
  {
    name: 'Observatorio Extremeño de la Cultura',
  },
  {
    name: 'Observatorio de Responsabilidad Social de Extremadura',
  },
  {
    name: 'Observatorio sobre Drogas de la Región de Murcia',
  },
  {
    name: 'Observatorio Urbano de A Coruña',
    parents: ['Concello de A Coruña'],
    website:
      'https://www.coruna.gal/encifras/es/observatorios-municipales/observatorio-urbano-de-a-coruna',
    scope: 'A Coruña',
  },
  {
    name: 'Observatorio municipal de igualdade e diversidade',
    parents: ['Concello de A Coruña'],
    website: 'https://www.coruna.gal/igualdade/es/servicios/observatorio',
    scope: 'A Coruña',
  },
  {
    name: 'Observatorio turístico de A Coruña',
    parents: ['Concello de A Coruña', 'Universidade da Coruña'],
    website: 'https://acorunaot.udc.es',
    scope: 'A Coruña',
  },
  {
    name: 'Observatorio de Accesibilidad Web',
    type: 'public',
    scope: 'estatal',
    website:
      'https://administracionelectronica.gob.es/pae_Home/pae_Estrategias/pae_Accesibilidad/pae_Observatorio_de_Accesibilidad.html',
    // https://www.discapnet.es/innovacion/observatorio-accesibilidad-tic
  },
  {
    name: 'Observatorio de Innovación de Navarra',
    type: 'public',
    scope: 'navarra',
    website: 'https://observatorioinnovacion.navarra.es/es/el-observatorio',
    docs: [
      {
        name: 'Memoria 2022',
        url: 'https://www.navarra.es/documents/18551208/23439727/Infografia-memoria-2022.pdf/263da2df-efcd-0054-3007-26d0c4a692f5?t=1677834556413',
      },
    ],
  },
  {
    name: 'Observatorio de la Movilidad Metropolitana (OMM)',
    parents: [
      'Ministerio para la Transición Ecológica y el Reto Demográfico',
      'Vicepresidencia Tercera del Gobierno',
    ],
    type: 'public',
    scope: 'estatal',
    website:
      'https://www.miteco.gob.es/es/calidad-y-evaluacion-ambiental/temas/movilidad/omm.html',
  },
  {
    name: 'Observatorio Global del Español',
    parents: [
      'Ministerio de Asuntos Exteriores, Unión Europea y Cooperación',
      'Secretaría de Estado para Iberoamérica y el Caribe',
      'Secretaría de Estado de Digitalización e Inteligencia Artificial',
      'Dirección del Instituto Cervantes',
      'Comisionado Especial para la Alianza por la Nueva Economía de la Lengua',
      'Ministerio de Educación y Formación Profesional',
      'Ministerio de Política Territorial',
      'Ministerio de Cultura y Deporte',
      'Ministerio de Ciencia e Innovación',
      'Ministerio de Universidades',
      'Consejo de Gobierno de la Comunidad Autónoma de La Rioja',
    ],
    scope: 'estatal',
    type: 'public',
    docs: [
      {
        name: 'Creación en el BOE, junio de 2022',
        url: 'https://www.boe.es/eli/es/rd/2022/06/07/431/con',
      },
      {
        name: 'Primera comisión ejecutiva, marzo de 2024',
        url: 'https://cervantes.org/es/sobre-nosotros/sala-prensa/notas-prensa/observatorio-global-espanol-materializa-su-puesta-marcha',
      },
    ],
    from_date: '2022-06',
    is_active: 'Sí',
  },
  {
    name: 'Observatorio Permanente de la Inmigración (OPI) ',
    website:
      'https://www.inclusion.gob.es/web/opi/estadisticas/observatorio_permanente_inmigracion',
    email: 'sgam@inclusion.gob.es',
    parents: [
      'Ministerio de Inclusión, Seguridad Social y Migraciones',
      'Secretaría de Estado de Migraciones',
      'Subdirección General de Análisis Migratorio',
    ],
    scope: 'estatal',
    type: 'public',
    docs: [
      {
        name: 'Ciudadanos ucranianos en España con documentación de residencia en vigor',
        url: 'https://www.inclusion.gob.es/web/opi/estadisticas/catalogo/ucranianos',
      },
      {
        name: 'Menores no acompañados y jóvenes extutelados con autorización de residencia',
        url: 'https://www.inclusion.gob.es/web/opi/estadisticas/catalogo/Menores',
      },
    ],
  },
  {
    name: 'Observatorio Estatal de Violencia sobre la Mujer',
    website:
      'https://violenciagenero.igualdad.gob.es/instituciones/observatorioEstatal/home.htm',
    parents: [
      'Ministerio de Igualdad',
      'Secretaría de Estado de Igualdad y contra la Violencia de Género',
      'Delegación del Gobierno contra la Violencia de Género',
    ],
    docs: [
      {
        name: 'Informe Ejecutivo del XV Informe Anual del Observatorio Estatal de Violencia sobre la Mujer 2021',
        url: 'https://violenciagenero.igualdad.gob.es/violenciaEnCifras/observatorio/informesEjecutivos/informes/Informe_Ejecutivo_2021.htm',
      },
      {
        name: 'Informe del Grupo de Trabajo de Investigación sobre la Infancia Víctima de la Violencia de Género. Año 2011',
        url: 'https://violenciagenero.igualdad.gob.es/violenciaEnCifras/observatorio/gruposTrabajo/informes/informe2011.htm',
      },
      {
        name: 'XV Informe Anual del Observatorio Estatal de Violencia sobre la Mujer. Año 2021',
        url: 'https://violenciagenero.igualdad.gob.es/violenciaEnCifras/observatorio/informesAnuales/informes/XV_Informe_2021.htm',
      },
    ],
  },
  {
    name: 'Observatorio Urbano de Alcalá de Henares',
    parents: ['Ayuntamiento de Alcalá de Henares'],
    website:
      'https://www.ayto-alcaladehenares.es/el-salon-de-plenos-acoge-el-acto-ejecutivo-del-plan-de-accion-de-la-agenda-urbana-de-alcala/',
    scope: 'ayuntamiento',
    type: 'public',
  },
  {
    name: 'Observatorio de violencia de género de Alcalá',
    parents: ['Ayuntamiento de Alcalá de Henares'],
    website:
      'https://www.ayto-alcaladehenares.es/el-observatorio-de-violencia-de-genero-de-alcala-ha-atendido-a-mas-de-1500-mujeres-desde-2004-2/',
    scope: 'ayuntamiento',
    type: 'public',
  },
  {
    name: 'Observatorio Sociodemográfico del Ayuntamiento de Alcalá de Henares',
    parents: ['Ayuntamiento de Alcalá de Henares'],
    website:
      'https://urbanismo.ayto-alcaladehenares.es/observatorio-sociodemografico-2/',
    scope: 'ayuntamiento',
    type: 'public',
  },
  {
    name: 'Observatorio Alcalá en cifras',
    parents: ['Ayuntamiento de Alcalá de Henares'],
    website:
      'https://www.ayto-alcaladehenares.es/presentacion-del-observatorio-urbano-alcala-en-cifras/',
    scope: 'ayuntamiento',
    type: 'public',
  },
  {
    name: 'Observatorio de Comercio del Gobierno Vasco',
    website: 'https://www.euskadi.eus/gobierno-vasco/observatorio-comercio',
    scope: 'pais-vasco',
    type: 'public',
  },
  {
    name: 'Observatorio Vasco del Emprendimiento',
    website: 'https://eeb-ove.eus/inicio/',
    twitter: '@eeb_ove',
    scope: 'pais-vasco',
    type: 'public',
  },
  {
    name: 'Observatorio Vasco de Vivienda',
    website: 'https://www.euskadi.eus/observatoriovivienda/',
    scope: 'pais-vasco',
    type: 'public',
  },
  {
    name: 'Observatorio Vasco del Juego',
    website: 'https://www.euskadi.eus/gobierno-vasco/observatorio-vasco-juego/',
    scope: 'pais-vasco',
    type: 'public',
  },
  {
    name: 'Observatorio de Periodismo Machista',
    website: 'https://periodismomachista.com/',
    twitter: '@pemachista',
    scope: 'pais-vasco',
    type: 'public',
  },
  {
    name: 'Observatorio Vasco sobre Acoso y Discriminación',
    website: 'https://www.observatoriovascosobreacoso.com/',
    twitter: '@ObservVascoAcos',
    scope: 'pais-vasco',
    type: 'public',
  },
  {
    name: 'Observatorio Vasco de la Juventud - Gobierno Vasco',
    website: 'https://www.gazteaukera.euskadi.eus/hasiera/',
    twitter: '@gaztebehatokia',
    scope: 'pais-vasco',
    type: 'public',
  },
  {
    name: 'Observatorio de Coyuntura Industrial',
    website:
      'https://www.irekia.euskadi.eus/es/tags/observatoriodecoyunturaindustrial?uid=5196',
    scope: 'pais-vasco',
    type: 'public',
  },
  {
    name: 'Observatorio Vasco de Inmigración',
    website: 'https://www.ikuspegi.eus/',
    twitter: '@ikuspegi_eus',
    scope: 'pais-vasco',
    type: 'public',
  },
  {
    name: 'Observatorio Vasco LGTBI+',
    website: 'https://lgtbi-behatokia.eus/',
    twitter: '@BehatokiaLGTBI',
    scope: 'pais-vasco',
    type: 'public',
  },
  {
    name: 'Observatorio para la Convivencia Escolar en Andalucía',
    website: 'https://www.juntadeandalucia.es/educacion/portals/web/convivencia-escolar/estructura-y-funcionamiento',
    scope: 'autonómico',
    type: 'public',
    },
    {
        name: 'OBSERVATORIO PARA LA CONVIVENCIA ESCOLAR',
        website: 'https://www.carm.es/web/pagina?IDCONTENIDO=5316&RASTRO=c792$m4001&IDTIPO=100',
        email: 'observatorio.convivencia@murciaeduca.es',
        parents: ['Subdirección General de Evaluación Educativa y Ordenación Académica',
        'Dirección General de Recursos Humanos, Planificación Educativa e Innovación',
        'Consejería de Educación, Formación Profesional y Empleo',
        'Gobierno de la Región de Murcia'],
        scope: 'murcia',
        type: 'public',
        docs: ['Informe 2022',
        'Informe 2021',
        'Informe 2020',
        'Informe 2019',
        'Informe 2018',
        'Informe 2017',
        'Informe 2016',
        'Informe 2015',
        'Informe 2014',
        'Informe 2013',
        'Informe 2012',
        'Informe 2011',
        'Informe 2010',
        'Informe 2009',
        'Informe 2008',
        'Informe 2007',],
    },
    {
        name: 'OBSERVATORIO DE PREVENCIÓN DE RIESGOS LABORALES',
        website: 'https://www.carm.es/web/pagina?IDCONTENIDO=740&IDTIPO=140',
        parents: 'Gobierno de la Región de Murcia',
        scope: 'murcia',
        type: 'public',
        },
    {
        name: 'Observatorio Ocupacional',
        website: 'https://www.carm.es/web/pagina?IDCONTENIDO=227&IDTIPO=200&__PLANT_PERSONALIZADA=/JSP/CARM/carm2018/organigramas/plantillaDetalleOrganigrama.jsp&IDESTRUCTURAJERARQUICA=473&RASTRO=c77$m5782',
        parents: [
            'Dirección General del Servicio Regional de Empleo y Formación > Servicio Regional de Empleo y Formación > Organismo Autónomo > Consejería de Educación, Formación Profesional y Empleo > Comunidad Autónoma de la Región de Murcia'],
        scope: 'murcia',
        type: 'public',
        docs: ['Último mes publicado de 2024: Paro, Contratos'],
        },
    {
        name: 'OBSERVATORIO VIRTUAL DEL PAISAJE MEDITERRÁNEO',
        website: 'https://www.carm.es/web/pagina?IDCONTENIDO=5137&IDTIPO=11&RASTRO=c374$m5828',
        scope: 'murcia',
        type: 'public',
        },
    {
        name: 'OBSERVATORIO REGIONAL DE LA DISCAPACIDAD',
        website: 'https://www.carm.es/web/pagina?IDCONTENIDO=5137&IDTIPO=11&RASTRO=c374$m5828',
        scope: 'murcia',
        type: 'public',
        },
    {
        name: 'OBSERVATORIO DE LA CALIDAD DE LOS SERVICIOS DE LA COMUNIDAD AUTÓNOMA DE LA REGIÓN DE MURCIA',
        website: 'https://transparencia.carm.es/-/observatorio-de-la-calidad-de-los-servicios#gsc.tab=0',
        scope: 'murcia',
        type: 'public',
        docs: ['Acta 2022'],
        },
    {
        name: 'Observatorio de Igualdad',
        website: 'https://transparencia.carm.es/-/observatorio-de-igualdad#gsc.tab=0',
        scope: 'murcia',
        type: 'public',
        },
    {
        name: 'Observatorio Regional contra la Discriminación por Orientación Sexual e Identidad de Género',
        website: 'https://transparencia.carm.es/-/observatorio-regional-contra-la-discriminacion-por-orientacion-sexual-e-identidad-de-genero-en-la-comunidad-autonoma-de-la-region-de-murcia#gsc.tab=0',
        scope: 'murcia',
        type: 'public',
        },
    ]

export { observatories, types, scopes }
