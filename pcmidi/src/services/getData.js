const data = [
  {
    id: 0,
    title: "Arturia Keylab 61 Mkii",
    price: "$65.500",
    pictureURL:
      "https://d3ugyf2ht6aenh.cloudfront.net/stores/078/394/products/61-mkii1-8d23cf7b94de2a514c16488446600386-1024-1024.png",
  },
  {
    id: 1,
    title: "Bateria Electronica Ed9",
    price: "$129.330",
    pictureURL:
      "https://d3ugyf2ht6aenh.cloudfront.net/stores/078/394/products/ed9-modulo-z12k1-736750c5d199e454b416379579487989-1024-1024.png",
  },
  {
    id: 2,
    title: "Arturia Minifuse 2 White",
    price: "$31.912",
    pictureURL:
      "https://d3ugyf2ht6aenh.cloudfront.net/stores/078/394/products/minifuse1white11-f9c09e75f422eb32c616511789999278-1024-1024.png",
  },
];

const getData = new Promise((resolve) =>{
    setTimeout(() => {
        resolve(data)
    }, 2000)
})

export default getData;