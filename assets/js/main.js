let productTitle = "";
let productDiscount = 0;
let productPrice = "";
let productLink = "";
let productImage = "";
let displayOnOff = "";

function newProduct(
  nameId,
  priceId,
  discountId,
  imageId,
  linkId,
  nameValue,
  priceValue,
  discountValue,
  imageValue,
  imgAltValue,
  linkValue,
  displayStatus
) {
  productTitle = document.getElementById(nameId);
  productPrice = document.getElementById(priceId);
  productDiscount = document.getElementById(discountId);
  productImage = document.getElementById(imageId);
  productLink = document.getElementById(linkId);

  productTitle.innerHTML = nameValue;
  productPrice.innerHTML = `R$${priceValue}`;
  productDiscount.innerHTML = `${discountValue}% OFF`;
  productImage.src = imageValue;
  productImage.alt = imgAltValue;
  productLink.href = linkValue;
  productLink.style.display = displayStatus;
}

/*Model:


newProduct(
  //Identifiers: ======================================================================================================
  "title-",
  "price-",
  "discount-",
  "image-",
  "link-",

  //Product info: -----------------------------------------------------------------------------------------------------

/*Name*/

/*Price*/

/*Discount*/

/*Image Address*/

/*Image Description*/

/*Link*/ /*

  //===================================================================================================================
);


*/

newProduct(
  //Identifiers: ======================================================================================================
  "title-1",
  "price-1",
  "discount-1",
  "image-1",
  "link-1",

  //Product info: -----------------------------------------------------------------------------------------------------

  /*Name*/ "Carregador Portatil 3x Usb-c Samsung",

  /*Price*/ "219,50",

  /*Discount*/ 4,

  /*Image Address*/ "https://http2.mlstatic.com/D_NQ_NP_2X_943434-MLB76089171634_052024-F-carregador-portatil-3x-usb-c-20000mah-super-rapida-45w.webp",

  /*Image Description*/ "Imagem de um Carregador Portatil 3x Usb-c Samsung Branco.",

  /*Link*/ "https://mercadolivre.com/sec/25DqUYG"
);

newProduct(
  //Identifiers: ======================================================================================================
  "title-2",
  "price-2",
  "discount-2",
  "image-2",
  "link-2",

  //Product info: -----------------------------------------------------------------------------------------------------

  /*Name*/ "Samsung Galaxy M55 5G Dual SIM 256GB 8GB RAM",

  /*Price*/ "1259,10",

  /*Discount*/ 33,

  /*Image Address*/ "https://http2.mlstatic.com/D_NQ_NP_2X_651977-MLA76009505043_042024-F.webp",

  /*Image Description*/ "Imagem de um Samsung Galaxy M55 5G Dual SIM 256GB 8GB RAM Azul-Escuro.",

  /*Link*/ "https://mercadolivre.com/sec/2pEShuz"

  //===================================================================================================================
);

newProduct(
  //Identifiers: ======================================================================================================
  "title-3",
  "price-3",
  "discount-3",
  "image-3",
  "link-3",

  //Product info: -----------------------------------------------------------------------------------------------------

  /*Name*/ "Kit Wella Pro Invigo Enrich Shampoo 1l + Condicionador 1l",

  /*Price*/ "263,98",

  /*Discount*/ 58,

  /*Image Address*/ "https://http2.mlstatic.com/D_NQ_NP_2X_840556-MLB49014287471_022022-F-kit-wella-pro-invigo-enrich-shampoo-1l-condicionador-1l.webp",

  /*Image Description*/ "Imagem de um Kit Wella Pro Invigo Enrich Shampoo 1l + Condicionador 1l.",

  /*Link*/ "https://mercadolivre.com/sec/2bydSUC"

  //===================================================================================================================
);

newProduct(
  //Identifiers: ======================================================================================================
  "title-4",
  "price-4",
  "discount-4",
  "image-4",
  "link-4",

  //Product info: -----------------------------------------------------------------------------------------------------

  /*Name*/ "Kit 2 câmeras Ip Icsee Prova D'água Infravermelho Externa Wifi - Bahrein",

  /*Price*/ "203,00",

  /*Discount*/ 40,

  /*Image Address*/ "https://http2.mlstatic.com/D_NQ_NP_2X_676253-MLA82631552630_032025-F.webp",

  /*Image Description*/ "Imagem de um Kit com 2 câmeras Ip Icsee Prova D'água Infravermelho Externa Wifi - Bahrein.",

  /*Link*/ "https://mercadolivre.com/sec/2XS5gY1"

  //===================================================================================================================
);

newProduct(
  //Identifiers: ======================================================================================================
  "title-5",
  "price-5",
  "discount-5",
  "image-5",
  "link-5",

  //Product info: -----------------------------------------------------------------------------------------------------

  /*Name*/ "Parafusadeira Furadeira De Impacto Profissional 21v Modelo TB-21PX 2 Baterias Com Maleta The Black Tools 127/220V 60Hz Amarelo.",

  /*Price*/ "246,05",

  /*Discount*/ 40,

  /*Image Address*/ "https://http2.mlstatic.com/D_NQ_NP_2X_690892-MLU79387089509_092024-F.webp",

  /*Image Description*/ "Imagem de uma Parafusadeira Furadeira De Impacto Profissional 21v Modelo TB-21PX e alguns acessórios da mesma.",

  /*Link*/ "https://mercadolivre.com/sec/2Z3G6Dw"

  //===================================================================================================================
);

newProduct(
  //Identifiers: ======================================================================================================
  "title-6",
  "price-6",
  "discount-6",
  "image-6",
  "link-6",

  //Product info: -----------------------------------------------------------------------------------------------------

  /*Name*/ "Whey Protein 100% Concentrado Refil 900g Sabor Doce de Leite - FTW",

  /*Price*/ "99,90",

  /*Discount*/ 40,

  /*Image Address*/ "https://http2.mlstatic.com/D_NQ_NP_2X_680676-MLA83769207207_042025-F.webp",

  /*Image Description*/ "Imagem de um pacote de Whey Protein 100% Concentrado Refil 900g Sabor Doce de Leite - FTW",

  /*Link*/ "https://mercadolivre.com/sec/2CLThhs"

  //===================================================================================================================
);

newProduct(
  //Identifiers: ======================================================================================================
  "title-7",
  "price-7",
  "discount-7",
  "image-7",
  "link-7",

  //Product info: -----------------------------------------------------------------------------------------------------

  /*Name*/ "Samsung Galaxy A25 5G Dual SIM 128Gb Azul Escuro 6Gb Ram",

  /*Price*/ "1099,00",

  /*Discount*/ 30,

  /*Image Address*/ "https://http2.mlstatic.com/D_NQ_NP_2X_816751-MLU77379807127_072024-F.webp",

  /*Image Description*/ "Imagem de um Samsung Galaxy A25 5G Dual SIM 128Gb 6Gb Ram Azul-Escuro",

  /*Link*/ "https://mercadolivre.com/sec/2o3jQAV"

  //===================================================================================================================
);

newProduct(
  //Identifiers: ======================================================================================================
  "title-8",
  "price-8",
  "discount-8",
  "image-8",
  "link-8",

  //Product info: -----------------------------------------------------------------------------------------------------

  /*Name*/ "Mini Projetor Portátil 4k Android Full Hd Smart Wifi Cinema",

  /*Price*/ "214,13",

  /*Discount*/ 37,

  /*Image Address*/ "https://http2.mlstatic.com/D_NQ_NP_2X_704055-MLB77188553035_062024-F-mini-projetor-portatil-4k-android-full-hd-smart-wifi-cinema.webp",

  /*Image Description*/ "Imagem de um Mini Projetor Portátil 4k Android Full Hd Smart Wifi Cinema",

  /*Link*/ "https://mercadolivre.com/sec/2tBZPij"

  //===================================================================================================================
);

newProduct(
  //Identifiers: ======================================================================================================
  "title-9",
  "price-9",
  "discount-9",
  "image-9",
  "link-9",

  //Product info: -----------------------------------------------------------------------------------------------------

  /*Name*/ "Fritadeira De Ar Af-35-bf Air Fryer 3,5l Preta Mondial 110v",

  /*Price*/ "231,83",

  /*Discount*/ 41,

  /*Image Address*/ "https://http2.mlstatic.com/D_NQ_NP_2X_836626-MLA83426146719_032025-F.webp",

  /*Image Description*/ "Imagem de uma Fritadeira De Ar Af-35-bf Air Fryer 3,5l Preta Mondial 110v",

  /*Link*/ "https://mercadolivre.com/sec/2KAL31G"

  //===================================================================================================================
);

newProduct(
  //Identifiers: ======================================================================================================
  "title-10",
  "price-10",
  "discount-10",
  "image-10",
  "link-10",

  //Product info: -----------------------------------------------------------------------------------------------------

  /*Name*/ "Samsung Galaxy A35 5G Dual SIM 256GB Azul Escuro 8 GB RAM",

  /*Price*/ "1699,00",

  /*Discount*/ 22,

  /*Image Address*/ "https://http2.mlstatic.com/D_NQ_NP_2X_920795-MLU79234491839_092024-F.webp",

  /*Image Description*/ "Imagem de um Samsung Galaxy A35 5G Dual SIM 256GB 8 GB RAM Azul-Escuro",

  /*Link*/ "https://mercadolivre.com/sec/2HFMVuL",

  "none"

  //===================================================================================================================
);

newProduct(
  //Identifiers: ======================================================================================================
  "title-11",
  "price-11",
  "discount-11",
  "image-11",
  "link-11",

  //Product info: -----------------------------------------------------------------------------------------------------

  /*Name*/ "Tênis Casual Feminino Vl Court Base adidas",

  /*Price*/ "245,99",

  /*Discount*/ 29,

  /*Image Address*/ "https://http2.mlstatic.com/D_NQ_NP_2X_634464-MLB77429732885_072024-F-tnis-casual-feminino-vl-court-base-adidas.webp",

  /*Image Description*/ "Imagem de um Tênis Casual Feminino Vl Court Base adidas",

  /*Link*/ "https://mercadolivre.com/sec/1wEpE7Y"

  //===================================================================================================================
);

newProduct(
  //Identifiers: ======================================================================================================
  "title-12",
  "price-12",
  "discount-12",
  "image-12",
  "link-12",

  //Product info: -----------------------------------------------------------------------------------------------------

  /*Name*/ "Projetor Hy320 Smart Tv Mini Wifi6 390ansi Android Cor Preto 110v/220v Davely",

  /*Price*/ "287,51",

  /*Discount*/ 26,

  /*Image Address*/ "https://http2.mlstatic.com/D_NQ_NP_2X_843379-MLA84391855449_052025-F.webp",

  /*Image Description*/ "Imagem de um Projetor Hy320 Smart Tv Mini Wifi6 390ansi Android 110v/220v Davely de Cor Preta",

  /*Link*/ "https://mercadolivre.com/sec/2QJMbah",
  "none"

  //===================================================================================================================
);

newProduct(
  //Identifiers: ======================================================================================================
  "title-13",
  "price-13",
  "discount-13",
  "image-13",
  "link-13",

  //Product info: -----------------------------------------------------------------------------------------------------

  /*Name*/ "Samsung Galaxy A15 4G Dual SIM 128 GB Azul-claro 4 GB RAM",

  /*Price*/ "854,10",

  /*Discount*/ 20,

  /*Image Address*/ "https://http2.mlstatic.com/D_NQ_NP_2X_909012-MLA74352948165_022024-F.webp",

  /*Image Description*/ "Imagem de um Samsung Galaxy A15 4G Dual SIM 128 GB 4 GB RAM Azul-claro",

  /*Link*/ "https://mercadolivre.com/sec/1n5RJmi"

  //===================================================================================================================
);

newProduct(
  //Identifiers: ======================================================================================================
  "title-14",
  "price-14",
  "discount-14",
  "image-14",
  "link-14",

  //Product info: -----------------------------------------------------------------------------------------------------

  /*Name*/ "Nebulizador e Inalador 127/220V Super Flow Compact DC1 G-Tech",

  /*Price*/ "85,90",

  /*Discount*/ 25,

  /*Image Address*/ "https://http2.mlstatic.com/D_NQ_NP_2X_722962-MLA84542458126_052025-F.webp",

  /*Image Description*/ "Imagem de um Nebulizador e Inalador 127/220V Super Flow Compact DC1 G-Tech",

  /*Link*/ "https://mercadolivre.com/sec/1eSvaXB"

  //===================================================================================================================
);

newProduct(
  //Identifiers: ======================================================================================================
  "title-15",
  "price-15",
  "discount-15",
  "image-15",
  "link-15",

  //Product info: -----------------------------------------------------------------------------------------------------

  /*Name*/ 'Smartphone Samsung Galaxy A05s 4G 128GB 6GB RAM Câmera Traseira Tripla 50MP + 2MP + 2MP + Selfie 13MP Tela 6.7" Preto',

  /*Price*/ "782,56",

  /*Discount*/ 21,

  /*Image Address*/ "https://http2.mlstatic.com/D_NQ_NP_2X_625221-MLA80510942192_112024-F.webp",

  /*Image Description*/ 'Imagem de um Smartphone Samsung Galaxy A05s 4G 128GB 6GB RAM Câmera Traseira Tripla 50MP + 2MP + 2MP + Selfie 13MP Tela 6.7" Preto',

  /*Link*/ "https://mercadolivre.com/sec/1FZiMPW"

  //===================================================================================================================
);

newProduct(
  //Identifiers: ======================================================================================================
  "title-16",
  "price-16",
  "discount-16",
  "image-16",
  "link-16",

  //Product info: -----------------------------------------------------------------------------------------------------

  /*Name*/ "Furadeira Parafusadeira Sem Fio De 10mm Philco Ppf12m 12v + Acessório 110v/220v",

  /*Price*/ "179,00",

  /*Discount*/ 41,

  /*Image Address*/ "https://http2.mlstatic.com/D_NQ_NP_2X_901610-MLU77335319929_062024-F.webp",

  /*Image Description*/ "Imagem de uma Furadeira Parafusadeira Sem Fio De 10mm Philco Ppf12m 12v + Acessório 110v/220v",

  /*Link*/ "https://mercadolivre.com/sec/1Z5Y7f3"

  //===================================================================================================================
);

newProduct(
  //Identifiers: ======================================================================================================
  "title-17",
  "price-17",
  "discount-17",
  "image-17",
  "link-17",

  //Product info: -----------------------------------------------------------------------------------------------------

  /*Name*/ "Motorola Moto G84 5G 256 GB Viva Magenta 8 GB RAM + 8 GB RAM Boost",

  /*Price*/ "1274,15",

  /*Discount*/ 42,

  /*Image Address*/ "https://http2.mlstatic.com/D_NQ_NP_2X_777159-MLU73140280377_112023-F.webp",

  /*Image Description*/ "Imagem de um Motorola Moto G84 5G 256 GB 8 GB RAM + 8 GB RAM Boost da cor Magenta",

  /*Link*/ "https://mercadolivre.com/sec/2XX2Rdz"

  //===================================================================================================================
);

newProduct(
  //Identifiers: ======================================================================================================
  "title-18",
  "price-18",
  "discount-18",
  "image-18",
  "link-18",

  //Product info: -----------------------------------------------------------------------------------------------------

  /*Name*/ "Câmera De Segurança Fergusom Lâmpada Ip Wifi Com Visão Noturna Interna Externa App Yoosee Espiã 360º Cor Branco",

  /*Price*/ "59,92",

  /*Discount*/ 20,

  /*Image Address*/ "https://http2.mlstatic.com/D_NQ_NP_2X_991605-MLA79464625130_102024-F.webp",

  /*Image Description*/ "Imagem de uma Câmera De Segurança Fergusom Lâmpada Ip Wifi Com Visão Noturna Interna Externa App Yoosee Espiã 360º da Cor Branca",

  /*Link*/ "https://mercadolivre.com/sec/2Gc6KAK"

  //===================================================================================================================
);
