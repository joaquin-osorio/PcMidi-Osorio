const data = [
  {
    id: 0,
    catId: 1,
    title: "Arturia Keylab 61 Mkii",
    price: 65500,
    //price: "$65.500",
    pictureURL:
      "https://d3ugyf2ht6aenh.cloudfront.net/stores/078/394/products/61-mkii1-8d23cf7b94de2a514c16488446600386-1024-1024.png",
    desc: 'Este controlador presenta un ambiente de trabajo dinámico, y controles de estudio, que incluyen un teclado de 61 notas de alta calidad con aftertouch, 16 pads retroiluminados RGB, 9 faders, 9 encoders dedicados a DAW, más controles de transporte. Su gran conectividad también incluye salidas CV / Gate, por lo que puede controlar módulos de sintetizador externo y Eurorack con facilidad.',
  },
  {
    id: 1,
    catId: 2,
    title: "Arturia Minifuse 2 White",
    price: 31912,
    //price: "$31.912",
    pictureURL:
      "https://d3ugyf2ht6aenh.cloudfront.net/stores/078/394/products/minifuse1white11-f9c09e75f422eb32c616511789999278-1024-1024.png",
    desc: 'MiniFuse 2 es una interfaz de audio y MIDI de última generación que te brinda todo lo que necesitas para hacer música y audio a tu manera. Con una calidad de sonido inigualable, conectividad inteligente y un paquete de software exclusivo para hacer música, este es un compañero de audio portátil evolucionado',
  },
  {
    id: 2,
    catId: 0,
    title: "Arturia MatrixBrute",
    price: 349550,
    //price: "$349.550",
    pictureURL:
      "https://d3ugyf2ht6aenh.cloudfront.net/stores/078/394/products/sin-titulo-41-bb4da094a98ca230cf16293043806296-1024-1024.jpg",
    desc: '¡El Arturia MatrixBrute es posiblemente el sintetizador monofónico analógico más poderoso de todos los tiempos! Tan flexible como un sistema modular, pero ofreciendo presets de ajustes. El MatrixBrute es un equipo soñado para todos los interesados ​​en crear una paleta de sonidos propia.',
    },
  {
    id: 3,
    catId: 3,
    title: "Monitores Kolt Mk5",
    price: 18880,
    //price: "$18.880",
    pictureURL:
      "https://d3ugyf2ht6aenh.cloudfront.net/stores/078/394/products/sin-titulo-121-76f0261136f72c1c9d16365744299680-1024-1024.jpg",
    desc: 'Cuando tomas la producción musical seriamente, necesitas unos monitores de estudio que te muestren sólo la verdad. Los monitores de estudio Kolt Mk5 proporcionan una respuesta de frecuencias suave y precisa revelando lo que realmente hay en tus pistas y mezclas. También ofrecen una variedad de controles de ajuste acústico que te permiten ajustar su respuesta a la acústica de tu sala',
    },
  {
    id: 4,
    catId: 1,
    title: "Arturia MiniLab Mkii",
    price: 23330,
    //price: "$23.330",
    pictureURL:
      "https://d3ugyf2ht6aenh.cloudfront.net/stores/078/394/products/ml1-b2983d677d9317fd8e16488435883843-1024-1024.png",
    desc: 'Este poderoso controlador también viene con varios títulos de software aclamados que le hará crear grabaciones profesionales en poco tiempo. Analog Lab Lite le permite realizar cientos de sonidos legendarios de sintetizadores, pianos, órganos y cuerdas. Ableton Live Lite le permite grabar, organizar y cultivar sus ideas musicales en un producto terminado. UVI Grand es una recreación del piano Steinway modelo D.',
    },
  {
    id: 5,
    catId: 2,
    title: "Midiplus Studio M",
    price: 12110,
    //price: "$12.110",
    pictureURL:
      "https://d3ugyf2ht6aenh.cloudfront.net/stores/078/394/products/1200x1200-11-a754bd824822725b6d16197001752027-640-0.jpg",
    desc: 'Studio M es la mejor y más compacta opción para tus grabaciones. Sus conversores poseen una resolución máxima de 192 Khz a 24 Bits de profundidad, asegurandote siempre la mejor calidad',
    },
  {
    id: 6,
    catId: 0,
    title: "Arturia PolyBrute",
    price: 533922,
    //price: "$533.922",
    pictureURL:
      "https://d3ugyf2ht6aenh.cloudfront.net/stores/078/394/products/sin-titulo-411-0f317768e2721da20d16324068180717-1024-1024.jpg",
    desc: 'Imagina usar 6 voces analógicas para crear un sonido que es poderoso, crudo y completamente tuyo. Imagina un sonido que existe en dos estados simultáneamente en un solo ajuste preestablecido, con una transformación perfecta entre ellos. Imagina controles de de varios ejes que ofrecen una expresión musical de última generación. Imagina una modulación instantánea e ilimitada a tu alcance. Imagina un sintetizador polifónico hecho por músicos, para músicos.',
    },
  {
    id: 7,
    catId: 3,
    title: "Auriculares MkH722",
    price: 1055,
    //price: "$1055",
    pictureURL:
      "https://d3ugyf2ht6aenh.cloudfront.net/stores/078/394/products/11-43a11e87c0f3f367b016487361546774-1024-1024.png",
    desc: 'El auricular Meike MKH722 es un auricular profesional de audio con ricos graves, con una bobina transductora de 40 mm que ofrece sonidos limpios y suaves de alta calidad obteniendo así una Amplia respuesta en frecuencias. Los auriculares MKH cuentan con un cabezal de ajuste tipo vincha Over ear que se adapta cómodamente al tamaño de tu cabeza.',
    },
];

const getData = new Promise((resolve) =>{
    setTimeout(() => {
        resolve(data)
    }, 2000)
})

export default getData;