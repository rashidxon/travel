import tourImg01 from "../images/tour-img01.jpg";
import tourImg02 from "../images/tour-img02.jpg";
import tourImg03 from "../images/tour-img03.jpg";
import tourImg04 from "../images/tour-img04.jpg";
import tourImg05 from "../images/tour-img05.jpg";
import tourImg06 from "../images/tour-img06.jpg";
import tourImg07 from "../images/tour-img07.jpg";
import tourImg08 from "../images/tour-img08.jpg";

const tours = [
  {
    id: "01",
    title: "Qo'qon",
    city: "Uzbekistan",
    distance: 300,
    address: "Farg'ona",
    price: 80,
    maxGroupSize: 10,
    desc: "this is the description",
    reviews: [
      {
        name: "Foziljon",
        rating: 4.6,
      },
      {
        name: "Azamat",
        rating: 4.9,
      },
    ],
    avgRating: 4.5,
    photo: tourImg01,
    featured: true,
  },
  {
    id: "02",
    title: "Mir Arab madrasasi, Buxoro",
    city: "Uzbekistan",
    distance: 400,
    address: "Buxoro",
    price: 50,
    maxGroupSize: 8,
    desc: "Sayohat ajoyib o'tdi raxmat",
    reviews: [
      {
        name: "Shoxruh",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg02,
    featured: true,
  },
  {
    id: "03",
    title: "Registon, Samarqand",
    city: "Uzbekistan",
    distance: 500,
    address: "Samarqand",
    price: 65,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "Otabek",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg03,
    featured: true,
  },
  {
    id: "04",
    title: "Ichan qala, Xorazm",
    city: "Uzbekistan",
    distance: 500,
    address: "Xorazm",
    price: 60,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "Shukrullo",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg04,
    featured: true,
  },
  {
    id: "05",
    title: "Toshkent",
    city: "Uzbekistan",
    distance: 500,
    address: "Somewhere",
    price: 65,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "Bobur",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg05,
    featured: false,
  },
  {
    id: "06",
    title: "Shohimardon",
    city: "Uzbekistan",
    distance: 500,
    address: "Somewhere",
    price: 110,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "Azizbek",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg06,
    featured: false,
  },
  {
    id: "07",
    title: "Jomin, Jizzax",
    city: "Uzbekistan",
    distance: 250,
    address: "Jizzax",
    price: 70,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "Jamshid",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg07,
    featured: false,
  },
  {
    id: "08",
    title: "Shohi Zinda memorial ansambli",
    city: "Uzbekistan",
    distance: 500,
    address: "Samarqand",
    price: 99,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "Abduqodir",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg08,
    featured: false,
  },
];

export default tours;
