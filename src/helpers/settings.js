import merge from 'deepmerge';

//override these on your page with window.config
export const settings = merge(
  {
    conference_providers: {
      'bluejeans.com': 'Bluejeans',
      'freeconference.com': 'Free Conference',
      'freeconferencecall.com': 'FreeConferenceCall',
      'meet.google.com': 'Google Hangouts',
      'gotomeet.me': 'GoToMeeting',
      'gotomeeting.com': 'GoToMeeting',
      'skype.com': 'Skype',
      'webex.com': 'WebEx',
      'zoho.com': 'Zoho',
      'zoom.us': 'Zoom',
    },
    days: [
      'sunday',
      'monday',
      'tuesday',
      'wednesday',
      'thursday',
      'friday',
      'saturday',
    ],
    defaults: {
      columns: ['time', 'distance', 'name', 'location', 'address', 'region'], //can be reordered
      mode: 'search', //start in keyword search mode (options are search, location, me)
      view: 'list', //start in list or map view
    },
    distance_unit: 'mi', // "mi" for miles, "km" for kilometers
    filters: ['region', 'day', 'time', 'type'],
    flags: window.config?.flags ? [] : ['Men', 'Women'],
    keys: {
      //google: null, //enable google maps
      mapbox: null, //enable mapbox maps
    },
    language: 'en',
    mapbox_style: 'mapbox://styles/mapbox/streets-v9',
    marker_style: {
      backgroundImage:
        'url(data:image/svg+xml;base64,' +
        window.btoa(
          '<?xml version="1.0" encoding="utf-8"?><svg viewBox="-1.1 -1.086 43.182 63.273" xmlns="http://www.w3.org/2000/svg"><path fill="#f76458" stroke="#b3382c" stroke-width="3" d="M20.5,0.5 c11.046,0,20,8.656,20,19.333c0,10.677-12.059,21.939-20,38.667c-5.619-14.433-20-27.989-20-38.667C0.5,9.156,9.454,0.5,20.5,0.5z"/></svg>'
        ) +
        ')',
      cursor: 'pointer',
      height: 38.4,
      width: 26,
    },
    modes: ['search'], //"location" and "me" will be appended if capable
    params: ['search', 'mode', 'view'], //utility array
    strings: {
      en: {
        address: 'Address',
        alerts: {
          bad_data: 'An error was encountered loading the data source.',
          no_data: 'A data source parameter must be specified.',
          no_results: 'No meetings were found matching the selected criteria.',
        },
        back_to_meetings: 'Back to Meetings',
        day_any: 'Upcoming',
        distance: 'Distance',
        evening: 'Evening',
        friday: 'Friday',
        get_directions: 'Get Directions',
        list: 'List',
        location: 'Location',
        map: 'Map',
        meeting_information: 'Meeting Information',
        meetings: 'Meetings',
        midday: 'Midday',
        midnight: 'Mid',
        monday: 'Monday',
        morning: 'Morning',
        name: 'Name',
        noon: 'Noon',
        modes: {
          location: 'Near Location',
          me: 'Near Me',
          search: 'Search',
        },
        night: 'Night',
        phone: 'Phone',
        region: 'Region',
        region_any: 'Everywhere',
        saturday: 'Saturday',
        seventh_tradition: 'Seventh Tradition',
        sunday: 'Sunday',
        thursday: 'Thursday',
        time: 'Time',
        time_any: 'Any Time',
        title: {
          day: '%day%',
          distance: '%distance%',
          time: '%time%',
          type: '%type%',
          meetings: '%meetings%',
          region: 'in %region%',
          search: 'with %search%',
        },
        tuesday: 'Tuesday',
        type_any: 'Any Type',
        types: {
          '11': '11th Step Meditation',
          '12x12': '12 Steps & 12 Traditions,',
          'AL-AN': 'Concurrent with Al-Anon',
          A: 'Secular',
          ABSI: 'As Bill Sees It',
          AL: 'Concurrent with Alateen',
          AN: 'Candlelight',
          ASL: 'Sign Language',
          B: 'Big Book',
          BA: 'Babysitting Available',
          BE: 'Newcomer',
          BRK: 'Breakfast',
          C: 'Closed',
          CF: 'Child-Friendly',
          D: 'Discussion',
          DB: 'Digital Basket',
          DD: 'Dual Diagnosis',
          DR: 'Daily Reflections',
          EN: 'English',
          FF: 'Fragrance Free',
          FR: 'French',
          G: 'Gay',
          GR: 'Grapevine',
          H: 'Birthday',
          ITA: 'Italian',
          JA: 'Japanese',
          KOR: 'Korean',
          L: 'Lesbian',
          LGBTQ: 'LGBTQ',
          LIT: 'Literature',
          LS: 'Living Sober',
          M: 'Men',
          MED: 'Meditation',
          N: 'Native American',
          NDG: 'Indigenous',
          NS: 'Non-Smoking',
          O: 'Open',
          ONL: 'Online Meeting',
          OUT: 'Outdoor Meeting',
          P: 'Professionals',
          POC: 'People of Color',
          POL: 'Polish',
          POR: 'Portuguese',
          PUN: 'Punjabi',
          RUS: 'Russian',
          S: 'Spanish',
          SEN: 'Seniors',
          SM: 'Smoking Permitted',
          SP: 'Speaker',
          ST: 'Step Meeting',
          T: 'Transgender',
          TC: 'Location Temporarily Closed',
          TR: 'Tradition Study',
          W: 'Women',
          X: 'Wheelchair Access',
          XB: 'Wheelchair-Accessible Bathroom',
          XT: 'Cross Talk Permitted',
          Y: 'Young People',
        },
        wednesday: 'Wednesday',
      },
      es: {
        address: 'Dirección',
        alerts: {
          bad_data: 'Se encontró un error al cargar la fuente de datos.',
          no_data: 'Se debe especificar un parámetro de fuente de datos.',
          no_results:
            'No se encontraron reuniones que coincidan con los criterios seleccionados.',
        },
        back_to_meetings: 'Volver a las reuniones',
        day_any: 'Próximas',
        distance: 'Distancia',
        evening: 'Noche',
        friday: 'Viernes',
        get_directions: 'Obtener las direcciones',
        list: 'Lista',
        location: 'Ubicación',
        map: 'Mapa',
        meeting_information: 'Información de la reunión',
        meetings: 'Reuniones',
        midday: 'Mediodía',
        midnight: 'Medianoche',
        monday: 'Lunes',
        morning: 'Mañana',
        name: 'Nombre',
        noon: 'Mediodía',
        modes: {
          location: 'Ubicación cercana',
          me: 'Cerca de mí',
          search: 'Buscar',
        },
        night: 'Noche',
        phone: 'Teléfono',
        region: 'Región',
        region_any: 'Todos lados',
        saturday: 'Sábado',
        seventh_tradition: 'Séptima Tradición',
        sunday: 'Domingo',
        thursday: 'Jueves',
        time: 'Hora',
        time_any: 'Cualquier momento',
        title: {
          day: '%day%',
          time: '%time%',
          type: '%type%',
          meetings: '%meetings%',
          region: 'en %region%',
          search: 'con %search%',
        },
        tuesday: 'Martes',
        type_any: 'Cualquier tipo',
        types: {
          '11': 'Meditación del 11º paso',
          '12x12': '12 pasos y 12 tradiciones',
          'AL-AN': 'Concurrente con Al-Anon',
          A: 'Secular',
          ABSI: 'Como Lo Ve Bill',
          AL: 'Concurrente con Alateen',
          AN: 'Luz de una vela',
          ASL: 'Lenguaje de señas',
          B: 'Libro grande',
          BA: 'Servicio de canguro disponible',
          BE: 'Recién llegado',
          BRK: 'Desayuno',
          C: 'Cerrado',
          CF: 'Niño amigable',
          D: 'Discusión',
          DB: 'Cesta digital',
          DD: 'Diagnóstico dual',
          DR: 'Reflexiones Diarias',
          EN: 'Inglés',
          FF: 'Sin perfume',
          FR: 'Francés',
          G: 'Gay',
          GR: 'La Viña',
          H: 'Cumpleaños',
          ITA: 'Italiano',
          JA: 'Japonés',
          KOR: 'Coreano',
          L: 'Lesbianas',
          LGBTQ: 'LGBTQ',
          LIT: 'Literatura',
          LS: 'Viviendo Sobrio',
          M: 'Hombres',
          MED: 'Meditación',
          N: 'Nativo Americano',
          NDG: 'Indígena',
          NS: 'No fumadores',
          O: 'Abierto',
          ONL: 'Reunión en Línea',
          OUT: 'Reunión al aire libre',
          P: 'Profesionales',
          POC: 'Gente de color',
          POL: 'Polaco',
          POR: 'Portugués',
          PUN: 'Punjabi',
          RUS: 'Ruso',
          S: 'Español',
          SEN: 'Personas mayores',
          SM: 'Fumar permitido',
          SP: 'Altavoz',
          ST: 'Paso de reunión',
          T: 'Transgénero',
          TC: 'Ubicación temporalmente cerrada',
          TR: 'Estudio de tradicion',
          W: 'Mujer',
          X: 'Acceso en silla de ruedas',
          XB: 'Baño accesible para sillas de ruedas',
          XT: 'Charla cruzada permitida',
          Y: 'Gente joven',
        },
        wednesday: 'Miércoles',
      },
    },
    times: ['morning', 'midday', 'evening', 'night'],
    timezone: 'America/New_York',
    title: true, //whether to display the title h1
  },
  window.config || {}
);

export const strings = settings.strings[settings.language];
