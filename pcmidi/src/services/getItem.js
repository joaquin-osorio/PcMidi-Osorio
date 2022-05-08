const item = {
    id: 0,
    title: "Arturia Keylab 61 Mkii",
    price: 65500,
    pictureURL:
      "https://d3ugyf2ht6aenh.cloudfront.net/stores/078/394/products/61-mkii1-8d23cf7b94de2a514c16488446600386-1024-1024.png",
    description: "MiniFuse 2 es una interfaz de audio y MIDI de última generación que te brinda todo lo que necesitas para hacer música y audio a tu manera. Con una calidad de sonido inigualable, conectividad inteligente y un paquete de software exclusivo para hacer música, este es un compañero de audio portátil evolucionado"
}
  
  const getItem = new Promise((resolve) =>{
      setTimeout(() => {
          resolve(item)
      }, 2000)
  })
  
  export default getItem;