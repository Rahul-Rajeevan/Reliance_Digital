import React, { createContext } from 'react'


const images=["https://www.reliancedigital.in/medias/Electronics-Fest-CLP-D-18.07.jpg?context=bWFzdGVyfGltYWdlc3wxMjE2ODB8aW1hZ2UvanBlZ3xpbWFnZXMvaDk3L2hmOS85ODYyNDMxNDA4MTU4LmpwZ3w1Mzk1MzMzMmI3MDg0OTc1ZWFiODkwNTk2ZTEwNDhhZGZhZTBmYWU3MDNhNjNmOGVkNWJkODk2OWFkZTFjNjhm",
"https://www.reliancedigital.in/medias/Umbrella-HDFC-Offer-Carousel-Banner-14-07-2022.jpg?context=bWFzdGVyfGltYWdlc3w3MzEyM3xpbWFnZS9qcGVnfGltYWdlcy9oYzIvaDQ1Lzk4NjA3MzU4NjA3NjYuanBnfGQ5MTIzMjUyNmEwNGI4MGZkZTRhOTkxYTUyZjNmMzFkOGYxYWU2MjZhOGJkMWMxM2NhODg2ZjlkNzViMWM4YjM",
"https://www.reliancedigital.in/medias/Samsung-Galaxy-M52-Desktop-20.06.jpg?context=bWFzdGVyfGltYWdlc3wxMDgyNjF8aW1hZ2UvanBlZ3xpbWFnZXMvaDRmL2gwYy85ODYxOTc2NDkwMDE0LmpwZ3w5N2EzMDE4MWQ4ZTI5MmE1NDRkNjRlODJkYWNhNjJkYzQ5YzBiMDdjMThhYjhkOWU2MTAyM2YzZGQxNWIyYzk0",
"https://www.reliancedigital.in/medias/Washotsav-Carousel-Banners-D.jpg?context=bWFzdGVyfGltYWdlc3wxMTc0MTJ8aW1hZ2UvanBlZ3xpbWFnZXMvaGU0L2g4NS85ODYwNzM1NDY3NTUwLmpwZ3wyYmYyZDU2MWU0OGRkNGYzYTVlNDM3ZDRjMDUxMmZmY2RkYTFlOTVkYTc4NDVhOGY0MjE2NGViYmVkMzk3YTAy",
"https://www.reliancedigital.in/medias/RD-TV-DIGI-BIG-SCREEN-CLP-BANNER-HDFC-OFFER-D.jpg?context=bWFzdGVyfGltYWdlc3w5NjI4MHxpbWFnZS9qcGVnfGltYWdlcy9oZDIvaDBiLzk4NjA3MzU1OTg2MjIuanBnfDIzMjNkNmI3N2UxOTgwOWU5ZTM3MjBjNDE4NzhjYzhlOWFlMjAzNGNkNzQ0MWMyYTI1NWM1NTQxNmI0Y2ZiMDA",
"https://www.reliancedigital.in/medias/Lenovo-Laptops-Desktop-15.07.jpg?context=bWFzdGVyfGltYWdlc3wxMzExODR8aW1hZ2UvanBlZ3xpbWFnZXMvaDY5L2hiMC85ODYyMjA3MDQ1NjYyLmpwZ3w1MmIyMzI0MmY3NzJkYjI2YTI5NTdkZDMwYmUyMmQxZDIyMGY0MWI5OWM2ZTJhNzIxMDgyZjUxY2YyZTdmNzA5",
"https://www.reliancedigital.in/medias/OnePlus-TV-CLP-Banner-14-07-2022.jpg?context=bWFzdGVyfGltYWdlc3wxMDY4NTl8aW1hZ2UvanBlZ3xpbWFnZXMvaDBmL2g0OC85ODYyNDU3MjYyMTEwLmpwZ3xiNjUwZjZiNzQ0MWU0MjUzYmNmNmUyMzEzMDM2MzMxNDAzZWI5ZTNlOTQzMzdmYWU5MmRmN2Q2OTBiZTBjYjhi",
"https://www.reliancedigital.in/medias/iPhone-12-CLP-Banner-D-13.05.jpg?context=bWFzdGVyfGltYWdlc3w5MjE0MXxpbWFnZS9qcGVnfGltYWdlcy9oYjIvaGM0Lzk4NjE5NzY3NTIxNTguanBnfDdiYmIxOTc2ZmY5NjUzZmRmNGFkNjg4YTExYjViNmU5ZTcyMTRjMjVmOTNiYTBiN2Y4OTljZWE3OTgwZjFlZTM",
"https://www.reliancedigital.in/medias/Audio-Accessories-Carousel-Banner-08-07-2022.jpg?context=bWFzdGVyfGltYWdlc3w2NjIyMXxpbWFnZS9qcGVnfGltYWdlcy9oNDAvaGRkLzk4NjE0OTk4MTM5MTguanBnfDFjY2I2NTI0NGJhYWM3Yjk0MDgxNWJjZjg1NGVlZjJjYzQ3N2E5M2ZmY2Y4MjdjMGEwNjgyZDU1YjgzYzkwNjI",
"https://www.reliancedigital.in/medias/Electronics-Fest-CLP-D-18.07.jpg?context=bWFzdGVyfGltYWdlc3wxMjE2ODB8aW1hZ2UvanBlZ3xpbWFnZXMvaDk3L2hmOS85ODYyNDMxNDA4MTU4LmpwZ3w1Mzk1MzMzMmI3MDg0OTc1ZWFiODkwNTk2ZTEwNDhhZGZhZTBmYWU3MDNhNjNmOGVkNWJkODk2OWFkZTFjNjhm",
"https://www.reliancedigital.in/medias/Umbrella-HDFC-Offer-Carousel-Banner-14-07-2022.jpg?context=bWFzdGVyfGltYWdlc3w3MzEyM3xpbWFnZS9qcGVnfGltYWdlcy9oYzIvaDQ1Lzk4NjA3MzU4NjA3NjYuanBnfGQ5MTIzMjUyNmEwNGI4MGZkZTRhOTkxYTUyZjNmMzFkOGYxYWU2MjZhOGJkMWMxM2NhODg2ZjlkNzViMWM4YjM",
"https://www.reliancedigital.in/medias/Samsung-Galaxy-M52-Desktop-20.06.jpg?context=bWFzdGVyfGltYWdlc3wxMDgyNjF8aW1hZ2UvanBlZ3xpbWFnZXMvaDRmL2gwYy85ODYxOTc2NDkwMDE0LmpwZ3w5N2EzMDE4MWQ4ZTI5MmE1NDRkNjRlODJkYWNhNjJkYzQ5YzBiMDdjMThhYjhkOWU2MTAyM2YzZGQxNWIyYzk0",
]
const properties1 = {
slidesToShow: 4,
slidesToScroll: 4,
autoplay: false,
indicators: true,
transitionDuration: 100,
 responsive: [
{
  breakpoint: 1024,
  settings: {
      slidesToShow: 4,
      slidesToScroll: 4
  }
},
{
  breakpoint: 700,
  settings: {
      slidesToShow: 3,
      slidesToScroll: 3
  }
},
{
  breakpoint: 500,
  settings: {
      slidesToShow: 2,
      slidesToScroll: 2
  }
},
{
  breakpoint: 200,
  settings: {
      slidesToShow: 1,
      slidesToScroll: 1
  }
}
]
}

let addItems1 = [
  {
    image: "https://www.reliancedigital.in/medias/Acer-15-Aspire3-R3-Laptop-492849812-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w2MjAwN3xpbWFnZS9qcGVnfGltYWdlcy9oM2MvaDMyLzk4NDEyMjc0OTc1MDIuanBnfDEwNjk4MWE3MTQ5MmY1YjJkMjE1NWYwMTFkNDlhMTViNmNkMmFjOGFjODE5NTEwYzdkZTA2MDJhYWM1MTVjYzI", name: "HP 14s-dq3032tu Thin &amp  Light Laptop (Intel Celeron N4500/8GB/256GB SSD/Intel UHD Graphics/Windows 11/MSO/HD), 35.56 cm (14 inch)",
    price: 49900, offer: 59900,save:10,
    id: 1,
  },
  {
    image:    "https://www.reliancedigital.in/medias/Acer-A314-35-Laptop-492849921-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wxNzIxM3xpbWFnZS9qcGVnfGltYWdlcy9oMTcvaGQ5Lzk4MTkzMTc0MDM2NzguanBnfDdiZDg3ZTA1NjE0MTE1NzFjNGU3NDE3OTMyYzc0NzljMzRiM2RjNjE5OGFhN2U1YWVhNjQ3YmI5YTMwM2JhNjI", name: "HP 15s-fq4022TU Laptop (11th Gen-Intel Core i5-1155G7/8GB/512GB SSD + 32GB Intel Optane Memory/Intel Iris Xe Graphics/Windows 11/MSO/FHD), 39.6 cm (15.6 inch)",
    price: 40099, offer: 59900,save:10,
    id: 2,
  },
  {
    image:"https://www.reliancedigital.in/medias/HP-14s-dq3032tu-Laptops-492849723-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w1Mjk3N3xpbWFnZS9qcGVnfGltYWdlcy9oNmQvaDY4Lzk4MDcxMDAwNTE0ODYuanBnfDk1ZTliOGMwYjUzMDExODFkZDRkZDQyYmZmZWM4M2I1OGExN2E2MGIyMDkwM2NlZTdmYzA3NWM0NzAwY2YzMmE",name: "Lenovo 8JIN IdeaPad Slim 3 Laptop (10th Gen-Intel Core i3-10110U/4GB/256GB SSD/Intel UHD Graphics/Windows 11/MSO/FHD), 39.62 cm (15.6 inch)",
    price: 20099, offer: 25900,save:10,
    id: 3,
  },
  {
    image:"https://www.reliancedigital.in/medias/HP-533U4PAACJ-Laptop-492849312-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wxMzM2MnxpbWFnZS9qcGVnfGltYWdlcy9oY2UvaGNkLzk4MjQ0MzU0NzAzNjYuanBnfDc0YTRhMTY0NzNlMjQ5YzY2MDg3ZmU2YjQyNmNhNzU0ODQ5ZjkyOGE1N2RjMDBhZTM4YTM5ZjQ4ZTlhMmM0NTE",name: "Lenovo 41IN IdeaPad Slim 3 Laptop (10th Gen-Intel Core i3-1005G1/4GB/256GB SSD/Intel UHD Graphics/Windows 11/MSO/FHD), 35.56 cm (14 inch)",
    price: 50099, offer: 59900,save:10,
    id: 4,
  },
  {
    image:    "https://www.reliancedigital.in/medias/Lenovo-8JIN-Laptops-492850142-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wxMDYyNHxpbWFnZS9qcGVnfGltYWdlcy9oZWYvaGE0Lzk4NDk0MDkwMTE3NDIuanBnfDE4ZGNiN2ZkMzM4YWU3Yjc2YTJmZjRmNjk4OWY1N2YzY2I1NDAxOGM1ZDU5YTIxNDAzNjVhZGEzNGEyOGZmZDc",name:     "Lenovo 7KIN IdeaPad Slim 3i Laptop (Intel Celeron N4020/4GB/256GB/ Windows 11/MSO/HD), 35.56 cm (14 inch)",
    price: 69009, offer: 79900,save:10,
    id: 5,
  },
  {
    image:"https://www.reliancedigital.in/medias/Lenovo-41IN-Laptops-492850143-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w2NzU3MXxpbWFnZS9qcGVnfGltYWdlcy9oNzQvaGVkLzk4NDkyMzgzMjMyMzAuanBnfDA0NWNmNjdiOWE2ZjAyMDBhZjNjNWVhNThjNmJlYmE3MDc1NTc4MWU1MGJjZjgzYTNlYzBjYWVlOGI5NTZmY2Y", name: "Acer A315-23 Aspire 3 Laptop (AMD Ryzen 3-3250U/4 GB/256 GB SSD/AMD Radeon Graphics/Windows 11/ Full HD), 39.62 cm (15.6 inch)",
    price: 70099, offer: 79900,save:10,
    id: 6,
  },
  {
    image:"https://www.reliancedigital.in/medias/Lenovo-81WH007KIN-LAPTOP-492849666-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wxMDg2MnxpbWFnZS9qcGVnfGltYWdlcy9oNWIvaGI0Lzk4NDkyMzg2NTA5MTAuanBnfDY1ZTdjNmUxYzdiMDczOThhZDMzYjBlZGE1MmZlYTE5ZDZhOGNhZGEzYTU2NDk5YWQ5ODgxMTY4NjA3OTI4ZDE",name:     "Acer A314-35 Aspire 3 Laptop (Intel Celeron N4500/4GB/256GB SSD/Intel UHD Graphics/Windows 11/MSO/HD), 35.56 cm (14 inch)",
    price: 60099, offer: 69900,save:10,
    id: 7,
  },
  {
    image:"https://www.reliancedigital.in/medias/Acer-15-Aspire3-R3-Laptop-492849812-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w2MjAwN3xpbWFnZS9qcGVnfGltYWdlcy9oM2MvaDMyLzk4NDEyMjc0OTc1MDIuanBnfDEwNjk4MWE3MTQ5MmY1YjJkMjE1NWYwMTFkNDlhMTViNmNkMmFjOGFjODE5NTEwYzdkZTA2MDJhYWM1MTVjYzI",name:     "HP 14s-dq3032tu Thin &amp  Light Laptop (Intel Celeron N4500/8GB/256GB SSD/Intel UHD Graphics/Windows 11/MSO/HD), 35.56 cm (14 inch)",
    price: 20049, offer: 29900,
    id: 8,
  },
  {
    image:"https://www.reliancedigital.in/medias/Acer-A314-35-Laptop-492849921-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wxNzIxM3xpbWFnZS9qcGVnfGltYWdlcy9oMTcvaGQ5Lzk4MTkzMTc0MDM2NzguanBnfDdiZDg3ZTA1NjE0MTE1NzFjNGU3NDE3OTMyYzc0NzljMzRiM2RjNjE5OGFhN2U1YWVhNjQ3YmI5YTMwM2JhNjI",name:     "HP 15s-fq4022TU Laptop (11th Gen-Intel Core i5-1155G7/8GB/512GB SSD + 32GB Intel Optane Memory/Intel Iris Xe Graphics/Windows 11/MSO/FHD), 39.6 cm (15.6 inch)",
    price: 110099, offer: 119900,save:10,
    id: 9,
  },
  {
    image:"https://www.reliancedigital.in/medias/HP-14s-dq3032tu-Laptops-492849723-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w1Mjk3N3xpbWFnZS9qcGVnfGltYWdlcy9oNmQvaDY4Lzk4MDcxMDAwNTE0ODYuanBnfDk1ZTliOGMwYjUzMDExODFkZDRkZDQyYmZmZWM4M2I1OGExN2E2MGIyMDkwM2NlZTdmYzA3NWM0NzAwY2YzMmE",name:     "Lenovo 8JIN IdeaPad Slim 3 Laptop (10th Gen-Intel Core i3-10110U/4GB/256GB SSD/Intel UHD Graphics/Windows 11/MSO/FHD), 39.62 cm (15.6 inch)",
    price: 79009, offer: 89900,save:10,
    id: 10,
  },
  {
    image:"https://www.reliancedigital.in/medias/HP-533U4PAACJ-Laptop-492849312-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wxMzM2MnxpbWFnZS9qcGVnfGltYWdlcy9oY2UvaGNkLzk4MjQ0MzU0NzAzNjYuanBnfDc0YTRhMTY0NzNlMjQ5YzY2MDg3ZmU2YjQyNmNhNzU0ODQ5ZjkyOGE1N2RjMDBhZTM4YTM5ZjQ4ZTlhMmM0NTE",name:     "Lenovo 41IN IdeaPad Slim 3 Laptop (10th Gen-Intel Core i3-1005G1/4GB/256GB SSD/Intel UHD Graphics/Windows 11/MSO/FHD), 35.56 cm (14 inch)",
    price: 72399, offer: 72900,save:10,
    id: 11,
  },
  {
    image:"https://www.reliancedigital.in/medias/Lenovo-8JIN-Laptops-492850142-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wxMDYyNHxpbWFnZS9qcGVnfGltYWdlcy9oZWYvaGE0Lzk4NDk0MDkwMTE3NDIuanBnfDE4ZGNiN2ZkMzM4YWU3Yjc2YTJmZjRmNjk4OWY1N2YzY2I1NDAxOGM1ZDU5YTIxNDAzNjVhZGEzNGEyOGZmZDc",name: "Lenovo 7KIN IdeaPad Slim 3i Laptop (Intel Celeron N4020/4GB/256GB/ Windows 11/MSO/HD), 35.56 cm (14 inch)",
    price: 49009, offer: 59900,save:10,
    id: 12,
  },
];

let addItems2 = [
  {
    image: "https://www.reliancedigital.in/medias/MISFIT-T30-Trimmer-492910929-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w0MjIxfGltYWdlL2pwZWd8aW1hZ2VzL2g4OS9oNDMvOTgxNzQwMTEzMTAzOC5qcGd8MzQ4ZjBiZmQwNzA0YTUxOTQ0OWZlYWQ5ZmFiZWMwZTI4YzYwMTEwMDRmY2FlNmY1ZTc0NTE4MjFjZjRkMzNkNg", name: "AIR KISS POWDER LIPSTICK",
    price: 499, offer: 59900,save:10,
    id: 1,
  },
  {
    image:    "https://www.reliancedigital.in/medias/Prestige-PKOSS-Electric-Kettles-491373220-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wzMjQ0OHxpbWFnZS9qcGVnfGltYWdlcy9oMDUvaDA4LzkyOTM4MDU5NDQ4NjIuanBnfDM2YTI4NmExMjEzZjkxZGRlYjRhNzEwNjc1OWQ0ZTM3OTkwYzRiYmM5NWRiMTdjMDVlZGI0MjdlZGRlZTg0ZTM", name: "LIP ZIP MATTE TOPPER",
    price: 499, offer: 59900,save:10,
    id: 2,
  },
  {
    image:"https://www.reliancedigital.in/medias/Pigeon-Zest-Juicer-Mixer-Grinder-492664336-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w1MzY3OHxpbWFnZS9qcGVnfGltYWdlcy9oZTQvaGQ4Lzk3NTUxODg5MjAzNTAuanBnfGY4MDVmYTkwMmIxOGU0MGE3NGM2NjVkODhhZWY5ZGFkZGZkMTk5YzE5NzI0YWUyZjYwMjI5YzAyODI2ZjQ4NjA",name: "METTLE PRIMING BALM",
    price: 1099, offer: 59900,save:10,
    id: 3,
  },
  {
    image:"https://www.reliancedigital.in/medias/Lifelong-LLDI09-Irons-492664307-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyMzA3M3xpbWFnZS9qcGVnfGltYWdlcy9oODkvaDIxLzk4NTM2Nzg1ODM4MzguanBnfDc2NjcxZTI5NjFkMTBiM2EyNDhiZGRmMzkwZDQyMzA0NzI3ZTU4MmEyYTRiODdjODZiN2Q5MmQyZmU1NjAzZGM",name: "Bling Leader Illuminating Sunscreen SPF35 PA+++",
    price: 599,offer: 59900,save:10,
    id: 4,
  },
  {
    image:    "https://www.reliancedigital.in/medias/PIGEON-Mini-Eco-Speciality-Appliances-492664295-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyMTgwMnxpbWFnZS9qcGVnfGltYWdlcy9oODYvaDY1Lzk3NTQyMjcyNzc4NTQuanBnfDU4NzljN2IzOWI4YWM2NWVjOTc4ZjNlM2NmYjVhNjc5NGM2NTRmZWY2NmJjMmFjNmY2OTVkYWUwZmRjNzgwN2E",name: "Set The Tone Tinted Powder",
    price: 699,offer: 59900,save:10,
    id: 5,
  },
  {
    image:    "https://www.reliancedigital.in/medias/Reconnect-DSM302-CA-Sandwich-Maker-491604309-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w5OTA2NnxpbWFnZS9qcGVnfGltYWdlcy9oNzYvaGNhLzk1NDU0Mjk1ODE4NTQuanBnfDY0OWE4Mzc3OGJkM2Y4MzQ1NmEyODVkOWJmN2JlZDhiZDVjYzg2NGY2YzU5ZmQ5OThhMWVhZTU2MzgwNzMwZDA", name: "MATTE AS HELL CRAYON LIPSTICK",
    price: 799,offer: 59900,save:10,
    id: 6,
  },
  {
    image:    "https://www.reliancedigital.in/medias/BPL-BBT001MLC-Beard-Trimmer-491903144-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wzMTQ3MHxpbWFnZS9qcGVnfGltYWdlcy9oYzIvaDVhLzk2MTM1NzQ1NzAwMTQuanBnfDU3ODhkZjgxZWRlMjkzYTE0MDMxNmM4ODU1ODNkMjA3ZWQxY2UyMWU3ZjhmM2UzYjZmOTBkYjU1N2U3Yjc4OTE",name: "Goddess Of Flawless SPF30+ BB Cream",
    price: 699,offer: 59900,save:10,
    id: 7,
  },
  {
    image:"https://www.reliancedigital.in/medias/Lifelong-Infinia-Juicer-Mixer-Grinder-492391909-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w1MTMwMXxpbWFnZS9qcGVnfGltYWdlcy9oNzAvaDNjLzk2NDk2NDg1MDA3NjYuanBnfDViM2QyYTQ0NGJkMDYyNTZiZWEyM2MxNTJkNWM2Mjc2OTZhZmI5ZmRkNGViNzY5MGM4ZDRjMDE3NGNhMjEwZGU",name: "Kohl Of Honour Intense Kajals",
    price: 249,offer: 59900,
    id: 8,save:10,
  },
  {
    image:"https://www.reliancedigital.in/medias/Reconnect-DHS101-MY-Hair-Straightener-DHS101-491604307-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w3NTQwNHxpbWFnZS9qcGVnfGltYWdlcy9oMDUvaDg4Lzk0MTE3NzM0MzE4MzguanBnfDMzYzVmMzNlYTdjMDc2ZTU3ODZiMmMxYWE5NzU1MjQ1ZWVmM2RmM2QwNzQ1YjFlNWNmYjEzZjNjNDUyNzIxZDE",name: "Blend The Rules Eyeshadow Palette",
    price: 1199,offer: 59900,save:10,
    id: 9,
  },
  {
    image:    "https://www.reliancedigital.in/medias/Candes-Lynx-Fan-492664647-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wxOTU3OHxpbWFnZS9qcGVnfGltYWdlcy9oOTAvaDAzLzk4MTYzNDkwODE2MzAuanBnfDExOGJkNDM4NzNlMGNhMWQ3ZTk3MmFmMTFmYjE4OWVjYTU1NTAwNWUyZWI4YzdkNjczZmM0Y2RiNGE0MTE4M2U",name: "Base Of Glory Pore Minimizing Primer",
    price: 799,offer: 59900,save:10,
    id: 10,
  },
  {
    image:    "https://www.reliancedigital.in/medias/EUREKA-GWPDMRUMM00000-Water-Purifier-492911044-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyMjE3N3xpbWFnZS9qcGVnfGltYWdlcy9oODAvaDdhLzk4MzUxODgzODc4NzAuanBnfGFmNzJjMmZlOWM1MGM2Y2QzYzhmNTE3ZDFlMTc4YTg2YjJkYzk1ZGIwNDU5ZTk3NDAyYzk5ZDAzODI3M2QwMzQ",name: "Contour De Force Face Palette",
    price: 799,offer: 59900,save:10,
    id: 11,
  },
  {
    image:"https://www.reliancedigital.in/medias/PRESTIGE-PIC22-1200WT-BK-INDUCTION-COOKTOP-491551569-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyNjI5MHxpbWFnZS9qcGVnfGltYWdlcy9oNjIvaGRiLzk2OTE2NTg0ODU3OTAuanBnfDJlNzQ1MTEyMTFhNmMwNDU2YzJiMTVmMGU5YTVhZTk0OGYzYmMwNmI3ZTYxZGNlYzBjYjY1MWRhY2RmNDQ4ZDg",name: "ACE OF FACE FOUNDATION STICK",
    price: 999,offer: 59900,save:10,
    id: 12,
  },
];

let addItems3=["https://www.reliancedigital.in/medias/Sansui-Washing-Machines-18-07-2022.jpg?context=bWFzdGVyfGltYWdlc3wyNjM0NHxpbWFnZS9qcGVnfGltYWdlcy9oNjEvaDA4Lzk4NjE5ODU3OTYxMjYuanBnfDdjMmNkOWMyNTFlNTAyYTBkNjg3ZWMxYjBmMGNlYzQwMzkzZjc2Y2QyOGM4MzRiNDYxYmQ5ZjU3MmZhNjE4NjI",
"https://www.reliancedigital.in/medias/Samsung-Washing-Machines-18-07-2022.jpg?context=bWFzdGVyfGltYWdlc3wyMzc1OHxpbWFnZS9qcGVnfGltYWdlcy9oZmYvaDc1Lzk4NjE5ODU4NjE2NjIuanBnfDVhZWRlNjAzYmE2MWUxNGNiMTgyMTIwODM0ZTBhYTg5ZmJkZDEyZTA5YmFkYmYwMTNiZWE5YTBmMGQyMzcyMzE",
"https://www.reliancedigital.in/medias/LG-Washing-Machines-18-07-2022.jpg?context=bWFzdGVyfGltYWdlc3wyNzk1MXxpbWFnZS9qcGVnfGltYWdlcy9oNDkvaGY4Lzk4NjE5ODU5OTI3MzQuanBnfGY3NzdiYzA0MDFkZjhmNTRlYTI5ODgyYWM5MTdjNjI0ZjZjNjlhY2E3YTIwNTI2MzllYTI5MGQxY2Q0Mjg4Yjk",
"https://www.reliancedigital.in/medias/Candy-Washing-Machines-18-07-2022.jpg?context=bWFzdGVyfGltYWdlc3wyMjEyNXxpbWFnZS9qcGVnfGltYWdlcy9oYjUvaDAwLzk4NjE5ODYxMjM4MDYuanBnfDU5MzBjMmRjZThmNTYyZWY1ZmIyYTNlMDdlYzg1YWFkYzlhZWVmNTE3MjM0ZTM3MGNmOTBlMDZiNDIwM2Y4YmQ",
]

let addItems4=[    "https://www.reliancedigital.in/medias/Apple-Watch-offers-u-cannot-miss.jpg?context=bWFzdGVyfGltYWdlc3w0MTg3MnxpbWFnZS9qcGVnfGltYWdlcy9oODkvaDQzLzk4NjAxMDc3NjM3NDIuanBnfDM2MzQ3MzZkNzhhZGE3YzdkMmRkMmQxYWJiYjVlMTdjNWNjYzk2M2NiNzgxNGRiZWNmOGU0YTRhMTI3NmI0ZmQ",
"https://www.reliancedigital.in/medias/OFFERS-YOU-CANNOT-MISS-Water-Purifier.jpg?context=bWFzdGVyfGltYWdlc3w0MDU5NXxpbWFnZS9qcGVnfGltYWdlcy9oZjYvaDU4Lzk4NTc1MDkyNjEzNDIuanBnfDc0ZTMxNzIzMjI4YWRiOGFhYjg3NGJiZjlkYmRiYWY2NDI4MjA2YmVmY2FhYjA2MDYzN2FiN2ZhM2FlMzVjNjI",
"https://www.reliancedigital.in/medias/Kodak-HD-Ready-LED-Smart-TV.jpg?context=bWFzdGVyfGltYWdlc3w3NTIyMnxpbWFnZS9qcGVnfGltYWdlcy9oNDIvaDk3Lzk4NjI0NTc1ODk3OTAuanBnfGFkNzcyMDQ2MGIyZDkyYWVjYjZkM2Q0OWIzOGIyZmMxMGZkM2Q1MGZmOGY2MjRhODU3ZDAxOWEzMDQ0YWI5N2E",
"https://www.reliancedigital.in/medias/Samsung-190L-Single-Door-Refrigerator.jpg?context=bWFzdGVyfGltYWdlc3w0MjAwN3xpbWFnZS9qcGVnfGltYWdlcy9oZWYvaDY4Lzk4NjEyODA0NjQ5MjYuanBnfDAyODcwNGM3ZGQxYjcxODIyZDQ1YmY5ZDY3NjIzNTZhMGU0N2VhMjBkNzU1ZmJkNmIwN2QzNzQyODYwNWU4NGI",
"https://www.reliancedigital.in/medias/HP-Laptops.jpg?context=bWFzdGVyfGltYWdlc3w1NzM0MHxpbWFnZS9qcGVnfGltYWdlcy9oMWIvaDkyLzk4NjI0NTczOTMxODIuanBnfGZjZTRmMTgxYzY2NGNhOGRiNzU4NTZhMGYzNjY5NjllYzYzZWUxNTUyYjRlZmJmZWJkZGY5NzcxOWU2YWUzN2M",
"https://www.reliancedigital.in/medias/Realme-C25Y-27.06.jpg?context=bWFzdGVyfGltYWdlc3w1Nzg3OXxpbWFnZS9qcGVnfGltYWdlcy9oYTgvaGJmLzk4NTc1MTEzMjU3MjYuanBnfGY4ZGY0NjRlZGYyYWQ4ZTI4NzFjMWI0MGJmMzE5NWMxNDFjYjU4YWQzMzdiNDViMzA4ZWYxOGY5ZmIyZTI0YWI",
"https://www.reliancedigital.in/medias/Printers-and-Inks-05.jpg?context=bWFzdGVyfGltYWdlc3w1MTIxMnxpbWFnZS9qcGVnfGltYWdlcy9oZjIvaDg4Lzk4NjI0NTc1MjQyNTQuanBnfGFiNTE0ODIwMDNmZTQxNTVhY2NhZmQyYjg1OGJjNDUxYTlhZTI0YmVmZWViOTE0YTU0M2RkMWQ4NmUxNDU0M2Q",
"https://www.reliancedigital.in/medias/True-Wireless-05.jpg?context=bWFzdGVyfGltYWdlc3wzNDkxOXxpbWFnZS9qcGVnfGltYWdlcy9oZTYvaDRhLzk4NjI0NTc0NTg3MTguanBnfDhhZmU1MGE5MjQ2NDBlZjZhMjhmOTZhNGI5Y2JhZmFhNWU1MmMxMDFiN2VhYzkwOGE2NmFkNjZhNjE2NzY4MjI",
]

let addItems5=["https://www.reliancedigital.in/medias/Sony-Bluetooth-WI-C100-D-NPI-1-.jpg?context=bWFzdGVyfGltYWdlc3wxMjE1NDF8aW1hZ2UvanBlZ3xpbWFnZXMvaDQ0L2g4My85ODYyNDMwODUxMTAyLmpwZ3xlZmRjZTEzZWI3YWYwMTlhNWY2YmVhMjMyNDJhZWEzYmZlMDFjMzRjYjI3YTE0Y2NkYThkZmE1MjZlODYzMDI5",
"https://www.reliancedigital.in/medias/Oppo-Reno-8PRO-NPI-D-18.04.jpg?context=bWFzdGVyfGltYWdlc3wxMjI0MjJ8aW1hZ2UvanBlZ3xpbWFnZXMvaDM2L2g3My85ODYyNDM3NTY4NTQyLmpwZ3xkZmM1MDIxODRlYTc4MjRjMzhiODBhNmY5ZjdlYmVlMjdhOWNkMjYxMmU4Y2U2Yjk2YjA4OWNhMWRmYjMxYTFi",
"https://www.reliancedigital.in/medias/OnePlus-Nord-2T-5G-NPI-Banner-13-07-2022.jpg?context=bWFzdGVyfGltYWdlc3w4NjI4MHxpbWFnZS9qcGVnfGltYWdlcy9oMjgvaGY3Lzk4NjAwNjcwNjU4ODYuanBnfGEzZDhiNmRmYjBiYzg1YzFjOGI5MmFkMGJlZjYzMTAyY2FkNzNkMzIwNTdkYWM2ZTA0YzlkNzFjOTZiN2E1NDA",
"https://www.reliancedigital.in/medias/Samsung-Smart-HD-TV-NPI-D-11.07.jpg?context=bWFzdGVyfGltYWdlc3wxMzk4NDN8aW1hZ2UvanBlZ3xpbWFnZXMvaGM0L2gwOC85ODYyNDU3NjU1MzI2LmpwZ3wxZjgxYTE3OTBjMjE4Zjg1YzEwZGU1ZjkzYzFkYjc2Yjg4YjQzNjkxNjQyNzQyMTkxNmIwMTA2MDcxNDk2YWNh",
"https://www.reliancedigital.in/medias/Fire-Boltt-Ninja-Dial-NPI-CLP-D.jpg?context=bWFzdGVyfGltYWdlc3wxMDAxOTh8aW1hZ2UvanBlZ3xpbWFnZXMvaDUzL2g1Mi85ODYwNjY3ODAxNjMwLmpwZ3wyY2UxNjU1ZDQ1N2NjOTc4MmNhZjE2NTk1YTAwNDIwMjFjYjA2MzNhOGUxY2Y1YmYyMWI1NmZjZmQ0ZjNjNGNk",
"https://www.reliancedigital.in/medias/Sony-Bluetooth-WI-C100-D-NPI-1-.jpg?context=bWFzdGVyfGltYWdlc3wxMjE1NDF8aW1hZ2UvanBlZ3xpbWFnZXMvaDQ0L2g4My85ODYyNDMwODUxMTAyLmpwZ3xlZmRjZTEzZWI3YWYwMTlhNWY2YmVhMjMyNDJhZWEzYmZlMDFjMzRjYjI3YTE0Y2NkYThkZmE1MjZlODYzMDI5",
"https://www.reliancedigital.in/medias/Oppo-Reno-8PRO-NPI-D-18.04.jpg?context=bWFzdGVyfGltYWdlc3wxMjI0MjJ8aW1hZ2UvanBlZ3xpbWFnZXMvaDM2L2g3My85ODYyNDM3NTY4NTQyLmpwZ3xkZmM1MDIxODRlYTc4MjRjMzhiODBhNmY5ZjdlYmVlMjdhOWNkMjYxMmU4Y2U2Yjk2YjA4OWNhMWRmYjMxYTFi",
]

let addItems6=["https://www.reliancedigital.in/medias/Camera-180x180-15-01-2019.png?context=bWFzdGVyfGltYWdlc3w0MzE0OHxpbWFnZS9wbmd8aW1hZ2VzL2gzNi9oMGMvOTI1MTA1MDc0OTk4Mi5wbmd8NDMxMGMyNjg2M2I3ZDFhOTc4YjkzMTNhYWM1ZmU5YzRlMjc3Mzg4MDcxOTU1OGE0NzZjODczZWU3NTdhMTM0MA",
"https://www.reliancedigital.in/medias/iphone-pro-11-01.png?context=bWFzdGVyfGltYWdlc3wyOTc3NnxpbWFnZS9wbmd8aW1hZ2VzL2gxNi9oNWUvOTI3NjA1OTkxMDE3NC5wbmd8MzdkYzljODgzMDcyM2ZjMjJmZDI2ZjMwNjhkZmU5YjFmOTJmMGRmOTFiYzc4ZjcyMDRhMjQ5MWMyNjYwOTgxYg",
"https://www.reliancedigital.in/medias/Laptop-180x180-15-01-2019.png?context=bWFzdGVyfGltYWdlc3wyOTAwOXxpbWFnZS9wbmd8aW1hZ2VzL2g0Mi9oNTYvOTI1MTA1MDYxODkxMC5wbmd8N2ZjYTg0ZDAyOTZmMmQ5OTZhZDNiM2M4NDg0ZDgxY2UyNzNjMmJiYzMwZTZiOGQwOWE5N2JlZDI4M2ViMGZjNw",
"https://www.reliancedigital.in/medias/TV-180x180-15-01-2019.png?context=bWFzdGVyfGltYWdlc3w0OTM4M3xpbWFnZS9wbmd8aW1hZ2VzL2g1ZC9oMTEvOTI1MTA1MDU1MzM3NC5wbmd8MThiNmU4NTZiNWI5MTE1ZGVjYjA4ZjIwM2QwZjUyMzFlOGExZTY0YmQ0MTRkYTkyN2M2MDZiYzUzZDY1ZjM4Ng",
"https://www.reliancedigital.in/medias/Watch-180x180-27-02-2020.png?context=bWFzdGVyfGltYWdlc3w2Njk2fGltYWdlL3BuZ3xpbWFnZXMvaGQ1L2g2My85MjUzNTA3NTk2MzE4LnBuZ3w4NmEwODU5NDI5YzVlMzJjNzRlNzNlYmJkMmJmYTZjMTI2OWY0YTUxYWU3YzMzM2E3YTc5YjljZmU4ZGMyNGQ2",
"https://www.reliancedigital.in/medias/Washing-Machine-180x180-15-01-2019.png?context=bWFzdGVyfGltYWdlc3wzNDU4MXxpbWFnZS9wbmd8aW1hZ2VzL2gzOC9oM2UvOTI1MTA1MDg4MTA1NC5wbmd8ZDAyZGNkMzU1MzE3N2E2OGFlOTliMzUyODZkYzlkNTc0NzFmODllY2JiZDVlNzdhYjg3MTgyMTc4ZGVhODA3ZA",
"https://www.reliancedigital.in/medias/Speaker-Headset-180x180-15-01-2019.png?context=bWFzdGVyfGltYWdlc3wyNzUzN3xpbWFnZS9wbmd8aW1hZ2VzL2g1YS9oODAvOTI1MTA1MDY4NDQ0Ni5wbmd8YmMyYWJiNzRhMzk4NjMxMDRmOWRlZGI1MzVjZDk2Y2IxYTkxOGNlNjlmZjA2YTgwMGIwMjhmYTJlYmNhYjIwOA",
"https://www.reliancedigital.in/medias/Camera-180x180-15-01-2019.png?context=bWFzdGVyfGltYWdlc3w0MzE0OHxpbWFnZS9wbmd8aW1hZ2VzL2gzNi9oMGMvOTI1MTA1MDc0OTk4Mi5wbmd8NDMxMGMyNjg2M2I3ZDFhOTc4YjkzMTNhYWM1ZmU5YzRlMjc3Mzg4MDcxOTU1OGE0NzZjODczZWU3NTdhMTM0MA",
"https://www.reliancedigital.in/medias/iphone-pro-11-01.png?context=bWFzdGVyfGltYWdlc3wyOTc3NnxpbWFnZS9wbmd8aW1hZ2VzL2gxNi9oNWUvOTI3NjA1OTkxMDE3NC5wbmd8MzdkYzljODgzMDcyM2ZjMjJmZDI2ZjMwNjhkZmU5YjFmOTJmMGRmOTFiYzc4ZjcyMDRhMjQ5MWMyNjYwOTgxYg",
"https://www.reliancedigital.in/medias/Laptop-180x180-15-01-2019.png?context=bWFzdGVyfGltYWdlc3wyOTAwOXxpbWFnZS9wbmd8aW1hZ2VzL2g0Mi9oNTYvOTI1MTA1MDYxODkxMC5wbmd8N2ZjYTg0ZDAyOTZmMmQ5OTZhZDNiM2M4NDg0ZDgxY2UyNzNjMmJiYzMwZTZiOGQwOWE5N2JlZDI4M2ViMGZjNw",
"https://www.reliancedigital.in/medias/TV-180x180-15-01-2019.png?context=bWFzdGVyfGltYWdlc3w0OTM4M3xpbWFnZS9wbmd8aW1hZ2VzL2g1ZC9oMTEvOTI1MTA1MDU1MzM3NC5wbmd8MThiNmU4NTZiNWI5MTE1ZGVjYjA4ZjIwM2QwZjUyMzFlOGExZTY0YmQ0MTRkYTkyN2M2MDZiYzUzZDY1ZjM4Ng",
"https://www.reliancedigital.in/medias/Watch-180x180-27-02-2020.png?context=bWFzdGVyfGltYWdlc3w2Njk2fGltYWdlL3BuZ3xpbWFnZXMvaGQ1L2g2My85MjUzNTA3NTk2MzE4LnBuZ3w4NmEwODU5NDI5YzVlMzJjNzRlNzNlYmJkMmJmYTZjMTI2OWY0YTUxYWU3YzMzM2E3YTc5YjljZmU4ZGMyNGQ2",
"https://www.reliancedigital.in/medias/Washing-Machine-180x180-15-01-2019.png?context=bWFzdGVyfGltYWdlc3wzNDU4MXxpbWFnZS9wbmd8aW1hZ2VzL2gzOC9oM2UvOTI1MTA1MDg4MTA1NC5wbmd8ZDAyZGNkMzU1MzE3N2E2OGFlOTliMzUyODZkYzlkNTc0NzFmODllY2JiZDVlNzdhYjg3MTgyMTc4ZGVhODA3ZA",
]

let addItems7=[{img:"https://www.reliancedigital.in/medias/Insta-Delivery-Brand-Promise-Icon.png?context=bWFzdGVyfGltYWdlc3wxNTM3fGltYWdlL3BuZ3xpbWFnZXMvaGI2L2gwNS85NDQ3MTcwMzQyOTQyLnBuZ3w2Yzc1ZmY1ZjYwOWIyNWU0ZTgwMjFlYmRkMTU5ZTgzMGI4ZDNmZTE2NjVjYmRlMmUwMmRiODI2OTExNWM5ZTdk",h1:"INSTA DELIVERY",h2:"LESS THAN 3 HRS"},
{img:"https://www.reliancedigital.in/medias/Best-Finance-Options-2.png?context=bWFzdGVyfGltYWdlc3wxMjM4fGltYWdlL3BuZ3xpbWFnZXMvaDJmL2gxOS85NDQ3MTcwNDA4NDc4LnBuZ3xlMDBiNjY4YWI5YzMzYjZkZDhlZTMyMDhjYjE2YzI2OTY2NWJhYjk2M2VkNzdjZDg3NTNlMGEyMTA1ZjFlODZh",h1:"BEST FINANCE OPTIONS",h2:"WIDE RANGE"},
{img:"https://www.reliancedigital.in/medias/service-img.png?context=bWFzdGVyfGltYWdlc3w5MTB8aW1hZ2UvcG5nfGltYWdlcy9oMDYvaGEzLzkwOTA3OTc5OTQwMTQucG5nfGJjZmJhNzM1ODdkYTQ5ODI3YzNiMzQ1ZTdlM2JjNjUwMTBjM2E3YWFjNmUxZjdmMmEyOGRjZDMxOGI4ZWE0MWY",h1:"SERVICE GUARANTEE",h2:"HASSLE FREE"},
{img:"https://www.reliancedigital.in/medias/unmatched-network-img.png?context=bWFzdGVyfGltYWdlc3w3NDV8aW1hZ2UvcG5nfGltYWdlcy9oODIvaDJhLzkwOTA3OTgwNTk1NTAucG5nfDFmMThjYzdiYTNiOTgxYjA5YzdlZTFiMmQyODI5MGY2NTM4ZTcxOWZkZTA1ZjAzY2Q1ZTk5YjQ1NTMxMWViYzU",h1:"UNMATCHED NETWORK",h2:"700 CITIES,2000 STORES"},
]

let addItems8 = [
    {
      image: "https://www.reliancedigital.in/medias/Hammer-PULSE-3-0-Smart-Watch-492849894-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyNjcyMXxpbWFnZS9qcGVnfGltYWdlcy9oMDcvaGU1Lzk4MTQ3MTk5MjIyMDYuanBnfDU4NmIxM2U0OWY3NGRmYjI3ZTA0NDQwN2EzN2ZmMDgwYjllYTQ4ZjU5OGU4MmUwYzVlNDhmN2I0OGNiZTgzYWU", name: "AIR KISS POWDER LIPSTICK",
      price: 499,offer: 59900,save:10,
      id: 1,
    },
    {
      image: "https://www.reliancedigital.in/medias/Fire-Boltt-Smartwatch-BSW001-Black-491996737-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyMjQ4OHxpbWFnZS9qcGVnfGltYWdlcy9oMzkvaGU2Lzk1NjY5ODUwMjc2MTQuanBnfGI1ZDdlNzNkOWQ2NzBkNDBkMzllNTk2ZDE5OWMyYzhlNjc4NWEwMTU1MmNlMmYxOTZlNDQ2ZGRhOTI3NjY2ZjU", name: "LIP ZIP MATTE TOPPER",
      price: 499,offer: 59900,save:10,
      id: 2,
    },
    {
      image:    "https://www.reliancedigital.in/medias/Fire-Boltt-Ninja-Smartwatch-492403641-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wxNDgzOXxpbWFnZS9qcGVnfGltYWdlcy9oY2YvaDJhLzk4NTIzMTc1MzIxOTAuanBnfDlmZWQyYjMyZGJmMDMwOTI1YWI1YTI4OWQyOTI4NDM3NTgyYmJjNTFmZTE4NDE4YjgyMjg0NjJmOTBkYTZhZTQ",name: "METTLE PRIMING BALM",
      price: 1099,offer: 59900,save:10,
      id: 3,
    },
    {
      image:"https://www.reliancedigital.in/medias/Noise-Colorfit-Grande-Smart-Watch-492850519-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyNTkwOHxpbWFnZS9qcGVnfGltYWdlcy9oMWMvaGVkLzk4NDMyNjM5OTU5MzQuanBnfGFlZDk2NDFlN2NlN2YyZGFlZjAzZmUyOWJmZjNlNzBjMTZkY2JhMDQ1ZjY4ZTc3MjFjYWY5NTYyNTQxNzA2MDI",name: "Bling Leader Illuminating Sunscreen SPF35 PA+++",
      price: 599,offer: 59900,save:10,
      id: 4,
    },
    {
      image: "https://www.reliancedigital.in/medias/boAt-Watch-Flash-RTL-Smart-Watches-492574195-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w2MDAwN3xpbWFnZS9qcGVnfGltYWdlcy9oNDMvaDA3Lzk3NTU3Nzg1NDc3NDIuanBnfDQxZGE4MzYwMzI2NjZiZjJkYWQyM2VmOGNiZTc5OWE0YmU0NTM3ODk3ZjgwMGZlYmNjMThhMTRjZmM5NDMyN2Y",name: "Set The Tone Tinted Powder",
      price: 699,offer: 59900,save:10,
      id: 5,
    },
    {
      image:    "https://www.reliancedigital.in/medias/Fire-Boltt-Ninja-Pro-Max-Smart-Watch-492574963-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w1NjU2OXxpbWFnZS9qcGVnfGltYWdlcy9oNGEvaGNhLzk4MTc1MTIwMTc5NTAuanBnfDQxYTcxZTQyYjQxNzYwOGFkOTkxN2EyMDM3NTg1OTg5MWZmMDMzY2UwN2M2YTY5OTkwMzBiZTBhNTVjYjIyM2I", name: "MATTE AS HELL CRAYON LIPSTICK",
      price: 799,offer: 59900,
      id: 6,save:10,
    },
    {
      image:"https://www.reliancedigital.in/medias/Apple-MTF32HN-A-Smart-Watches-491488097-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w4NTU5fGltYWdlL2pwZWd8aW1hZ2VzL2hkZC9oZjUvOTE5NjU4MTEyNjE3NC5qcGd8OTU3MjZmNzM3YWFmOTEyYmY4Zjk5ZDg2NWFkZDA0NzBmMzNiODlmMjI4OWJkZjBjMTI0YTBmNDlkNmY5OTdlNg",name: "Goddess Of Flawless SPF30+ BB Cream",
      price: 699,offer: 59900,save:10,
      id: 7,
    },
    {
      image:"https://www.reliancedigital.in/medias/boAt-Wave-Fit-Smartwatch-492849179-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w0OTQ0M3xpbWFnZS9qcGVnfGltYWdlcy9oYTQvaDJkLzk3ODgxNjE5MTY5NTguanBnfGU3MjI0N2ZiOTNmMThkZTUwNzAzNzQ5NTY1MTc1N2VjODYyMzIzNGQ3YzIzYTg5ZmYzODc3Y2MxZjUwZWUwYWQ",name: "Kohl Of Honour Intense Kajals",
      price: 249,offer: 59900,save:10,
    },
    {
      image:"https://www.reliancedigital.in/medias/Fire-Boltt-Ring-Smart-Watches-491997940-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w1MzU1MnxpbWFnZS9qcGVnfGltYWdlcy9oMzEvaDFmLzk2NTkyODExNzg2NTQuanBnfGJkMjU5OWU5OGM4OTQ5ZGMzYTFhZDRiMDAyYWM1MWExYTczNmY3ZmI3MGM1ZmZjODEzMjVjNzUzNGI3ZDFhNDQ",name: "Blend The Rules Eyeshadow Palette",
      price: 1199,offer: 59900,save:10,
      id: 9,
    },
    {
      image:    "https://www.reliancedigital.in/medias/boAt-Watch-Flash-RTL-Smart-Watches-492574196-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w3MzkxOHxpbWFnZS9qcGVnfGltYWdlcy9oNTIvaDQ4Lzk3NTU3Nzg4NzU0MjIuanBnfDE3MDQ0Mjk3NzY5MGUzNWQzZTI5YzJiNTM4MmEzNzY3NzBmZTYxY2ZlZjJiZGQxNDVlYThmZDk4OWM2YTE4ZDE",name: "Base Of Glory Pore Minimizing Primer",
      price: 799,offer: 59900,save:10,
      id: 10,
    },
    {
      image:    "https://www.reliancedigital.in/medias/Noise-Colorfit-Grande-Smart-Watch-492850519-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyNTkwOHxpbWFnZS9qcGVnfGltYWdlcy9oMWMvaGVkLzk4NDMyNjM5OTU5MzQuanBnfGFlZDk2NDFlN2NlN2YyZGFlZjAzZmUyOWJmZjNlNzBjMTZkY2JhMDQ1ZjY4ZTc3MjFjYWY5NTYyNTQxNzA2MDI",name: "Contour De Force Face Palette",
      price: 799,offer: 59900,save:10,
      id: 11,
    },
    {
      image:    "https://www.reliancedigital.in/medias/Fire-Boltt-Ninja-Smartwatch-492403641-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wxNDgzOXxpbWFnZS9qcGVnfGltYWdlcy9oY2YvaDJhLzk4NTIzMTc1MzIxOTAuanBnfDlmZWQyYjMyZGJmMDMwOTI1YWI1YTI4OWQyOTI4NDM3NTgyYmJjNTFmZTE4NDE4YjgyMjg0NjJmOTBkYTZhZTQ",name: "ACE OF FACE FOUNDATION STICK",
      price: 999,offer: 59900,save:10,
      id: 12,
    },
  ];

  let addItems9 = [
    { image:  "https://www.reliancedigital.in/medias/TCL-D311T-LED-492572945-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyODgwN3xpbWFnZS9qcGVnfGltYWdlcy9oMWEvaGE3Lzk4MzE2NzY5MzYyMjIuanBnfGE5M2ZlNmIyNDdkY2EwODAyMDIzYmJhN2E5NzU3MmRlZmUxNGMwYmFkNzA2M2RkYWE3NmNjYWJmMmNhMzE4MjM",  name: "AIR KISS POWDER LIPSTICK", price: 499, id: 1,offer: 59900,save:10, },
    { image:"https://www.reliancedigital.in/medias/IFFALCON-43F2A-Television-492338468-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w1MTMwNXxpbWFnZS9qcGVnfGltYWdlcy9oOWIvaDg5Lzk1ODA4NzU2Nzc3MjYuanBnfDk3ZmIwN2RjZTUxNTA1YTBmMzk5MWY4YjA3OGJmYjJkNGQ3MDFjNmJhNjU1Yjk5MWRhZTNmNTI3ZTE0ZmExNTc",  name: "AIR KISS POWDER LIPSTICK", price: 499, id: 1,offer: 59900, save:10,},
    { image:     "https://www.reliancedigital.in/medias/TCL-32S5201-Smart-TV-492403797-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wzNTU3MHxpbWFnZS9qcGVnfGltYWdlcy9oNjQvaDZmLzk4MzU0MDkzNDI0OTQuanBnfGViMTUxYmE0YmU4YzUyODU5MzM2ZTY2NjhjZjc1YTBhNGI5OWQ0OWNiYjg0OTkyYTlhMmI0ZGQyZDkxOWQwN2I", name: "AIR KISS POWDER LIPSTICK", price: 499, id: 1,offer: 59900,save:10, },
    { image:     "https://www.reliancedigital.in/medias/IFFALCON-43U61-Television-492579406-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wxMDk0OTd8aW1hZ2UvanBlZ3xpbWFnZXMvaGE2L2g5OS85NzQ1OTQwODczMjQ2LmpwZ3w4NmYzNzdiNDc1ZGJhMTczYzM3ZjdhZDI0ODUxZjU2ZjNmNjZhOTJhMzg1ZWFiYWMwNmY3NDVkMmY0ZThlOWQ4", name: "AIR KISS POWDER LIPSTICK", price: 499, id: 1,offer: 59900,save:10, },
    { image:     "https://www.reliancedigital.in/medias/TCL-32S65A-Television-491936168-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyNzI4OHxpbWFnZS9qcGVnfGltYWdlcy9oNzcvaDUxLzk4MzI3MTE0MjE5ODIuanBnfDA0YmJjYmNlNTdkZDYyMTA3MGU3NmNmZDhlZjM5OGQ1ZjgwZjIzMDhkNGNhOTE3MDZhNjhlNDllOGE3NGZhNWM", name: "AIR KISS POWDER LIPSTICK", price: 499, id: 1,offer: 59900,save:10, },
    { image:     "https://www.reliancedigital.in/medias/IFFALCON-32F52-Televisions-492403800-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w0OTU5OXxpbWFnZS9qcGVnfGltYWdlcy9oODcvaDc0Lzk3MjcxMzgxMzYwOTQuanBnfDM1N2Q4MTYxMTcyZWMwZjIyM2EzMWJkNTA0OGE5YTQ4OGM2MTlkMDFhYzQyYzRkM2E3MDFlYzQ3MWJhYWQ0YjM", name: "AIR KISS POWDER LIPSTICK", price: 499, id: 1,offer: 59900,save:10, },
    { image: "https://www.reliancedigital.in/medias/TCL-55P615-Televisions-491934672-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wzMTE2OXxpbWFnZS9qcGVnfGltYWdlcy9oMTgvaGE0Lzk4MzI3MTEwOTQzMDIuanBnfDc1YmI2MThlYTEwMDY1YWVlYTg5MGQ5ZjdlNWQ1N2ZlNmVkYTI1YzQwMzU4YTgwYmJmMTZiMWY2ZmEyMjQ5MGY", name: "AIR KISS POWDER LIPSTICK", price: 499, id: 1,offer: 59900,save:10, },
    { image:"https://www.reliancedigital.in/medias/TCL-D311T-LED-492572945-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyODgwN3xpbWFnZS9qcGVnfGltYWdlcy9oMWEvaGE3Lzk4MzE2NzY5MzYyMjIuanBnfGE5M2ZlNmIyNDdkY2EwODAyMDIzYmJhN2E5NzU3MmRlZmUxNGMwYmFkNzA2M2RkYWE3NmNjYWJmMmNhMzE4MjM",  name: "AIR KISS POWDER LIPSTICK", price: 499, id: 1,offer: 59900,save:10, },
    { image:     "https://www.reliancedigital.in/medias/IFFALCON-43F2A-Television-492338468-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w1MTMwNXxpbWFnZS9qcGVnfGltYWdlcy9oOWIvaDg5Lzk1ODA4NzU2Nzc3MjYuanBnfDk3ZmIwN2RjZTUxNTA1YTBmMzk5MWY4YjA3OGJmYjJkNGQ3MDFjNmJhNjU1Yjk5MWRhZTNmNTI3ZTE0ZmExNTc", name: "AIR KISS POWDER LIPSTICK", price: 499, id: 1,offer: 59900,save:10, },
    { image: "https://www.reliancedigital.in/medias/TCL-32S5201-Smart-TV-492403797-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wzNTU3MHxpbWFnZS9qcGVnfGltYWdlcy9oNjQvaDZmLzk4MzU0MDkzNDI0OTQuanBnfGViMTUxYmE0YmU4YzUyODU5MzM2ZTY2NjhjZjc1YTBhNGI5OWQ0OWNiYjg0OTkyYTlhMmI0ZGQyZDkxOWQwN2I", name: "AIR KISS POWDER LIPSTICK", price: 499, id: 1,offer: 59900,save:10, },
    { image:    "https://www.reliancedigital.in/medias/IFFALCON-43U61-Television-492579406-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wxMDk0OTd8aW1hZ2UvanBlZ3xpbWFnZXMvaGE2L2g5OS85NzQ1OTQwODczMjQ2LmpwZ3w4NmYzNzdiNDc1ZGJhMTczYzM3ZjdhZDI0ODUxZjU2ZjNmNjZhOTJhMzg1ZWFiYWMwNmY3NDVkMmY0ZThlOWQ4",  name: "AIR KISS POWDER LIPSTICK", price: 499, id: 1,offer: 59900,save:10, },
      
    
  ];
  let addItems10 = [
    { image:     "https://www.reliancedigital.in/medias/Apple-iPad-10.2-inch-Tablet-491997817-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w2NDU0fGltYWdlL2pwZWd8aW1hZ2VzL2gxNS9oMjEvOTYzNTMxNzEyMTA1NC5qcGd8ZTAwN2I5Mjg5N2RkZmU4YzBkOTllNTljNjBjNDRlYTA1MGYwMzJjMGVmYWM5M2NmZDFjM2U2ODMwMjc5MTI3OQ",   name: "AIR KISS POWDER LIPSTICK", price: 499, id: 1,offer: 59900, save:10,},
    { image:     "https://www.reliancedigital.in/medias/Lenovo-8506X-Regular-Tablets-492849048-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w3MDEwNHxpbWFnZS9qcGVnfGltYWdlcy9oNGYvaDlhLzk3ODI2NTE2MTczMTAuanBnfDQ2NGE4NGI1YjhmZWFkZTE1YThiYzE2YjcyZDBlODQ4MTk4M2Y2NmE2ZGMyOWNiN2EzZmU3ZmNkM2YzM2MyYjQ", name: "AIR KISS POWDER LIPSTICK", price: 499, id: 1,offer: 59900,save:10, },
    { image:    "https://www.reliancedigital.in/medias/Lenovo-ZA6W0191IN-Regular-Tablets-492849333-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w1ODQzMHxpbWFnZS9qcGVnfGltYWdlcy9oMmEvaDU1Lzk3OTExMjY3NjU1OTguanBnfDIxNTk3MGU0ZjQ1M2ZlYzU2Zjc5OTJlMmYzMmZhOTI2YTg3YTYxM2FlNDU1NGZkMTA3OWM1YzA3YjI4NGJmZjI", name: "AIR KISS POWDER LIPSTICK", price: 499, id: 1,offer: 59900,save:10, },
    { image: "https://www.reliancedigital.in/medias/Samsung-T225N-Regular-Tablets-492849721-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wzNjg0MnxpbWFnZS9qcGVnfGltYWdlcy9oMDQvaGYzLzk4MDQxMDk0MTQ0MzAuanBnfDExNGIzNjE3YmJlMGQ0NmQwYjMxNzNlN2IxYTc3NzlhMTgyYzE4MTg4ZTY1MjA4Zjk1M2EzNTJmODUyMTA5NzY", name: "AIR KISS POWDER LIPSTICK", price: 499, id: 1,offer: 59900,save:10, },
    { image:     "https://www.reliancedigital.in/medias/Samsung-Galaxy-S8-Tablets-492849227-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wzMzE2N3xpbWFnZS9qcGVnfGltYWdlcy9oMWQvaDQ0Lzk3ODA0NTUzNzQ4NzguanBnfDM3YTdiMDE4MTM0YmM0ZmI3Zjk0YWVhOTMyYjVhYmQ2ZWYzNTEzOGIwYjNiZGY2NWEyNTkyOTdmZjZhYzQ1YzQ", name: "AIR KISS POWDER LIPSTICK", price: 499, id: 1,offer: 59900,save:10, },
    { image:     "https://www.reliancedigital.in/medias/Apple-iPad-10.2-inch-Tablet-491997817-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w2NDU0fGltYWdlL2pwZWd8aW1hZ2VzL2gxNS9oMjEvOTYzNTMxNzEyMTA1NC5qcGd8ZTAwN2I5Mjg5N2RkZmU4YzBkOTllNTljNjBjNDRlYTA1MGYwMzJjMGVmYWM5M2NmZDFjM2U2ODMwMjc5MTI3OQ", name: "AIR KISS POWDER LIPSTICK", price: 499, id: 1,offer: 59900,save:10, },
    { image:     "https://www.reliancedigital.in/medias/Lenovo-8506X-Regular-Tablets-492849048-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w3MDEwNHxpbWFnZS9qcGVnfGltYWdlcy9oNGYvaDlhLzk3ODI2NTE2MTczMTAuanBnfDQ2NGE4NGI1YjhmZWFkZTE1YThiYzE2YjcyZDBlODQ4MTk4M2Y2NmE2ZGMyOWNiN2EzZmU3ZmNkM2YzM2MyYjQ", name: "AIR KISS POWDER LIPSTICK", price: 499, id: 1,offer: 59900,save:10, },
    { image:     "https://www.reliancedigital.in/medias/Lenovo-ZA6W0191IN-Regular-Tablets-492849333-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w1ODQzMHxpbWFnZS9qcGVnfGltYWdlcy9oMmEvaDU1Lzk3OTExMjY3NjU1OTguanBnfDIxNTk3MGU0ZjQ1M2ZlYzU2Zjc5OTJlMmYzMmZhOTI2YTg3YTYxM2FlNDU1NGZkMTA3OWM1YzA3YjI4NGJmZjI", name: "AIR KISS POWDER LIPSTICK", price: 499, id: 1,offer: 59900,save:10, },
    { image:    "https://www.reliancedigital.in/medias/Samsung-T225N-Regular-Tablets-492849721-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wzNjg0MnxpbWFnZS9qcGVnfGltYWdlcy9oMDQvaGYzLzk4MDQxMDk0MTQ0MzAuanBnfDExNGIzNjE3YmJlMGQ0NmQwYjMxNzNlN2IxYTc3NzlhMTgyYzE4MTg4ZTY1MjA4Zjk1M2EzNTJmODUyMTA5NzY", name: "AIR KISS POWDER LIPSTICK", price: 499, id: 1,offer: 59900, save:10,},
    ];

export const AppContext=createContext()

export const AppContextProvider = ({children}) => {
const list1={addItems9, addItems10 ,images,properties1,addItems1,addItems2,addItems3,addItems4,addItems5,addItems6,addItems7,addItems8}
  return (
    <AppContext.Provider value={list1}>{children}</AppContext.Provider>
  )
}
