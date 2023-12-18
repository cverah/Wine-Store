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
      "https://res.cloudinary.com/dvxvdktvr/image/upload/v1702773478/samples/Wine-Store/rupqvrahkxuwvcwqdhpk.webp",
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
      "https://res.cloudinary.com/dvxvdktvr/image/upload/v1702773774/samples/Wine-Store/mm9prxdcf3yof328ohlh.webp",
  },
  {
    id: count(),
    name: "ViNO DAMAJUANA BORGOÑA",
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
      "https://res.cloudinary.com/dvxvdktvr/image/upload/v1702774225/samples/Wine-Store/uoz3eb7ne1vqnjni3hq3.webp",
  },
  {
    id: count(),
    name: "ViNO DAMAJUANA MISTELA",
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
      "https://res.cloudinary.com/dvxvdktvr/image/upload/v1702774374/samples/Wine-Store/ifativhmsgqvzmtitmcw.webp",
  },
  {
    id: count(),
    name: "Maracuya",
    type: "Vino Blanco Sabor Maracuya",
    size: "Normal",
    content: "750 ml",
    price_unit: "S/ 15.00",
    box: {
      price_box: "S/ 95.00",
      quantity: 12,
    },
    qualification: 4.5,
    url_picture:
      "https://res.cloudinary.com/dvxvdktvr/image/upload/v1702774626/samples/Wine-Store/hvunmftiszrooice6dgf.webp",
  },
  {
    id: count(),
    name: "Perfecto Amor",
    type: "Vino Dulce",
    size: "Normal",
    content: "750 ml",
    price_unit: "S/ 15.00",
    box: {
      price_box: "S/ 95.00",
      quantity: 12,
    },
    qualification: 4.5,
    url_picture:
      "https://res.cloudinary.com/dvxvdktvr/image/upload/v1702774626/samples/Wine-Store/hvunmftiszrooice6dgf.webp",
  },
  {
    id: count(),
    name: "Pack (Borgoña y Mistela)",
    type: "Vino 2 sabores",
    size: "pack (2 botellas)",
    content: "750 ml c/u",
    price_unit: "S/ 30.00",
    box: {
      price_box: "S/ 95.00",
      quantity: 6,
    },
    qualification: 4.8,
    url_picture:
      "https://res.cloudinary.com/dvxvdktvr/image/upload/v1702913675/samples/Wine-Store/z3jrawpkssua4v8wzm6n.webp",
  },
  {
    id: count(),
    name: "MAMA JUANA",
    type: "Semi Seco Tinto",
    size: "MAMAJUANA",
    content: "5 litros",
    price_unit: "S/ 50.00",
    box: {
      price_box: null,
      quantity: null,
    },
    qualification: 4.6,
    url_picture:
      "https://res.cloudinary.com/dvxvdktvr/image/upload/v1702916179/samples/Wine-Store/nwnhuadehinseqhxuiqx.webp",
  },
  {
    id: count(),
    name: "Vino Rose",
    type: "Semiseco Rosado",
    size: "Normal",
    content: "750 ml",
    price_unit: "S/ 15.00",
    box: {
      price_box: "S/ 95.00",
      quantity: 12,
    },
    qualification: 3.5,
    url_picture:
      "https://res.cloudinary.com/dvxvdktvr/image/upload/v1702916667/samples/Wine-Store/r2qvpsrm0fvyckhwnjec.webp",
  },
];
