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
    title: "Xudoyorxon oʻrdasi, Qo'qon",
    city: "Uzbekistan",
    distance: 300,
    address: "Farg'ona",
    price: 80,
    maxGroupSize: 10,
    desc: "Xudoyorxon oʻrdasi — Arki oliy Sayyid Muhammad Xudoyorxon (rasmiy nomi). Meʼmoriy yodgorlik (XX asrning ikkinchi yarmida); Qoʻqon xoni Xudoyorxon qurdirgan. Meʼmor va muhandis Mir Ubaydulla Muhandis loyihasi va rahbarligida bunyod etilgan; ustalardan Mulla Suyarqul, Solixoʻja va buxorolik usta Fozilxoʻjalar qatnashgan, koshinlarini rishtonlik kulol usta Abdulla mahorat bilan bajargan.Xon qarorgohi, oʻrda ahli yashaydigan hamda turli maqsadlarda foydalaniladigan 100 dan ortiq katta-kichik xonalar, ichki-tashqi hovlilardan iborat boʻlgan. Birinchi hovlida ayvon, koʻrinishxona (salomxona), xazinaxona, alohida saxdli masjid, Keyingi hovli xon qarorgohi (shohnishin), xoʻjalik binolari, binoning anfi qismi haram va xos xonalar egallagan; haramxonalari bezaklari odmi boʻlib, asosan, quyma ganch.",
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
    desc: "Mir Arabning asl ismi Sayyid Abdulloh boʻlib, amir 22 yoshida Samarqandga kelib Xoja Ahrorga shogird tushgan. Turkistonning Sabronida (Savronida) 2 koriz (yer osti arigʻi) qazdirgan, suv chiqargan, qalʼa bino etib, Shofirkon, Vobkent, Gʻijduvonda koʻp joylarni obod qilgan (hozirda Shofirkonda Mir Arab qalʼasi saqlanib qolgan).",
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
    desc: "Qadimiy Samarqand shahrining rasmiy markazi Registon maydoni boʻlib, bu yerda uchta madrasa qad koʻtargan: Ulugʻbek, Sherdor va Tillakori madrasalari. Registon – qadimiy ilm, taʼlim muassasalari joylashgan joy boʻlib, sharqdagi shahar qurilishi sanʼatining eng koʻzga koʻrinarli namunalaridan biri hisoblanadi. U haqda Temuriylar faxr bilan: „Kim bizning kuch-qudratimizga shubha qilsa, kelib biz qurgan binolarni koʻrsin“, deganlar. 2001-yilda bu uch madrasa UNESCOning butun dunyo yodgorliklari roʻyxatiga kiritilgan.	",
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
    title: "Ichan qal’a, Xorazm",
    city: "Uzbekistan",
    distance: 500,
    address: "Xorazm",
    price: 60,
    maxGroupSize: 8,
    desc: "Ichan-qal’a (oʻzbekcha: Ichan Qa'la) – Oʻzbekistonning tarixiy oʻzbek shahri Xivaning mustahkam devor bilan oʻralgan ichki shahri boʻlib, Markaziy Osiyodagi birinchi Jahon meʼrosi ob’ektiga aylandi. Asrlar davomida qad rostlagan (eng qadimiy meʼmoriy yodgorliklar XIV asrga toʻgʻri keladi), istehkom, saroylar, masjid, madrasalar, maqbara, minoralar, karvonsaroy va hammomlar Ichan qalʼani oʻziga xos yodgorlik shahriga aylantirdi. Koʻhna Xiva 1968-yilda rasman qoʻriqxona maqomini oldi.",
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
    title: "Amir Temur xiyoboni, Toshkent",
    city: "Uzbekistan",
    distance: 500,
    address: "Somewhere",
    price: 65,
    maxGroupSize: 8,
    desc: "Amir Temur xiyoboni - Toshkent metropoliteni Chilonzor yoʻlining bekatlaridan biri. «Mustaqillik maydoni» va «Hamid Olimjon» bekatlari oʻrtasida joylashgan. Bekatdan Yunusobod yoʻlining Yunus Rajabiy bekatiga oʻtiladi. Amir Temur xiyoboni sharafiga nomlangan. Bekat kolonnali, 2 vestibyul va 1 orolchali platformadan iborat.",
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
    desc: "1930-yillarda Oʻzbekiston va Qirgʻiziston oʻrtasidagi hududlar almashinuvi natijasida Shoximardon Oʻzbekiston tarkibiga kirib, anklav — Qirgʻizistonning Botken viloyati yerlari bilan oʻralgan oʻziga xos kichik orolni tashkil qildi; Oʻzbekistonning “asosiy” hududigacha boʻlgan masofa taxminan 17 km.",
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
    title: "Zomin, Jizzax",
    city: "Uzbekistan",
    distance: 250,
    address: "Jizzax",
    price: 70,
    maxGroupSize: 8,
    desc: "Zomin-O‘zbek Shveytsariyasi.Ajoyib landshaftlar va toza tog‘ havosi, flora va faunaning  xilma-xilligi, qadimiy ziyoratgohlar va noyob milliy sihatgoh - bularning barchasi Zomin.",
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
    desc: "Shohizinda meʼmoriy majmuasi Qoraxoniylar sulolasi tomonidan asos solingan.Ularning eng qadimiysi Qusam ibn Abbos maqbarasi boʻlib, xalq orasida Shohizinda (tirik shoh) nomi bilan mashhur. Ansambl bir-biri bilan yoʻlak orqali bogʻlangan 3 guruh binolardan iborat. Quyi guruhdagi inshootlar Ulugʻbek oʻgʻli nomidan qurdirgan Abdulaziz chortogʻi (1434—35), unga shim.dan Davlat qushbegi madrasasi (1812—13) tutash, uning qarshisidagi ayvonli masjid naqshlar bilan nafis bezatilgan. 40 bosqichli tik zinapoya oʻrtaligʻining chap tomonida ziyoratxona va goʻrxonadan iborat qoʻshgumbazli maqbara (15-asr) joylashgan.",
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
