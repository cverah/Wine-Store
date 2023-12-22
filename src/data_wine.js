//closure
const next = () => {
  let start = 0;
  return function () {
    return start++;
  };
};

const count = next();

export const dataWine = [
  {
    id: count(),
    name: "Vino Borgoña",
    type: "Semi Seco Tinto",
    size: "Normal",
    content: "750 ml",
    price_unit: "S/ 12.00",
    box: {
      price_box: "S/ 85.00",
      quantity: 12,
    },
    qualification: 3.0,
    url_picture:
      "https://res.cloudinary.com/dvxvdktvr/image/upload/v1703275693/samples/Wine-Store/new_photos/c1l4ww3frjrfvpsrnusx.webp",
  },
  {
    id: count(),
    name: "Vino Mistela",
    type: "Especial Blanco",
    size: "Normal",
    content: "750 ml",
    price_unit: "S/ 12.00",
    box: {
      price_box: "S/ 85.00",
      quantity: 12,
    },
    qualification: 3.5,
    url_picture:
      "https://res.cloudinary.com/dvxvdktvr/image/upload/v1703275989/samples/Wine-Store/new_photos/dmcssfggrcchhxkenzne.webp",
  },
  {
    id: count(),
    name: "VINO DAMAJUANA BORGOÑA",
    type: "Semi Seco Tinto",
    size: "DAMAJUANA",
    content: "2 litros",
    price_unit: "S/ 25.00",
    box: {
      price_box: "S/ 120.00",
      quantity: 6,
    },
    qualification: 3.3,
    url_picture:
      "https://res.cloudinary.com/dvxvdktvr/image/upload/v1703276123/samples/Wine-Store/new_photos/vdv94sl7qhc9vyvis4q3.webp",
  },
  {
    id: count(),
    name: "VINO DAMAJUANA MISTELA",
    type: "Especial Blanco",
    size: "DAMAJUANA",
    content: "2 litros",
    price_unit: "S/ 25.00",
    box: {
      price_box: "S/ 120.00",
      quantity: 6,
    },
    qualification: 3.2,
    url_picture:
      "https://res.cloudinary.com/dvxvdktvr/image/upload/v1703276293/samples/Wine-Store/new_photos/p7an3wcw4roltspqhguv.webp",
  },
  {
    id: count(),
    name: "Maracuya",
    type: "Vino Blanco Sabor Maracuya",
    size: "Normal",
    content: "750 ml",
    price_unit: "S/ 15.00",
    box: {
      price_box: "S/ 100.00",
      quantity: 12,
    },
    qualification: 4.5,
    url_picture:
      "https://res.cloudinary.com/dvxvdktvr/image/upload/v1703276353/samples/Wine-Store/new_photos/hbvvoapl66v95hg0qccf.webp",
  },
  {
    id: count(),
    name: "Perfecto Amor",
    type: "Vino Dulce",
    size: "Normal",
    content: "750 ml",
    price_unit: "S/ 15.00",
    box: {
      price_box: "S/ 100.00",
      quantity: 12,
    },
    qualification: 4.5,
    url_picture:
      "https://res.cloudinary.com/dvxvdktvr/image/upload/v1703277515/samples/Wine-Store/new_photos/pqvhpzpbv07gw5iglh3q.webp",
  },
  {
    id: count(),
    name: "Pack (Borgoña y Mistela)",
    type: "Vino 2 sabores",
    size: "pack (2 botellas)",
    content: "750 ml c/u",
    price_unit: "S/ 30.00",
    box: {
      price_box: "S/ 140.00",
      quantity: 6,
    },
    qualification: 4.8,
    url_picture:
      "https://res.cloudinary.com/dvxvdktvr/image/upload/v1703276487/samples/Wine-Store/new_photos/fpexnk6w1oq9zenhpovb.webp",
  },
  {
    id: count(),
    name: "MAMA JUANA",
    type: "Semi Seco Tinto",
    size: "MAMAJUANA",
    content: "5 litros",
    price_unit: "S/ 55.00",
    box: {
      price_box: null,
      quantity: null,
    },
    qualification: 4.6,
    url_picture:
      "https://res.cloudinary.com/dvxvdktvr/image/upload/v1703276604/samples/Wine-Store/new_photos/osi9o1cmuxx8teirnwle.webp",
  },
  {
    id: count(),
    name: "Vino Rose",
    type: "Semiseco Rosado",
    size: "Normal",
    content: "750 ml",
    price_unit: "S/ 15.00",
    box: {
      price_box: "S/ 100.00",
      quantity: 12,
    },
    qualification: 3.5,
    url_picture:
      "https://res.cloudinary.com/dvxvdktvr/image/upload/v1703276740/samples/Wine-Store/new_photos/n6qwc3wvydtmsrsk8bmv.webp",
  },
  {
    id: count(),
    name: "Vino Higo",
    type: "Higo Dulce",
    size: "Normal",
    content: "750 ml",
    price_unit: "S/ 15.00",
    box: {
      price_box: "S/ 100.00",
      quantity: 12,
    },
    qualification: 3.8,
    url_picture:
      "https://res.cloudinary.com/dvxvdktvr/image/upload/v1703281956/samples/Wine-Store/new_photos/xsmvbsfqa80ty53ggtgq.webp",
  },
  {
    id: count(),
    name: "Vino Oporto",
    type: "Dulce Fortificado",
    size: "Normal",
    content: "750 ml",
    price_unit: "S/ 15.00",
    box: {
      price_box: "S/ 100.00",
      quantity: 12,
    },
    qualification: 4.3,
    url_picture:
      "https://res.cloudinary.com/dvxvdktvr/image/upload/v1703277096/samples/Wine-Store/new_photos/ioywrxesbanvpxfdjbsx.webp",
  },
  // {
  //   id: count(),
  //   name: "CHAMPAGNE",
  //   type: "Espumante Gasificador",
  //   size: "Normal",
  //   content: "750 ml",
  //   price_unit: "S/ 15.00",
  //   box: {
  //     price_box: "S/ 100.00",
  //     quantity: 12,
  //   },
  //   qualification: 3.7,
  //   url_picture:
  //     "https://res.cloudinary.com/dvxvdktvr/image/upload/v1702916667/samples/Wine-Store/r2qvpsrm0fvyckhwnjec.webp",
  // },
];
