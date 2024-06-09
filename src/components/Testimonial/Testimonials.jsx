import React from 'react'
import Slider from 'react-slick'
import ava01 from '../../assets/images/ava-1.jpg'
import ava02 from '../../assets/images/ava-2.jpg'
import ava03 from '../../assets/images/ava-3.jpg'

const Testimonials = () => {

    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 1000,
        swipeToSlide: true,
        autoplatSpeed:2000,
        slidesToShow:3,

        responsive:[
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            }
        ]
    }

  return (
    <Slider {...settings}>
        <div className="testimonial py-4 px-3">
            <p>- O‘ylashimcha, hammasi yaxshi ketmoqda. Hech qanday muammolar mavjud emas. Restoranlar xizmati yaxshi. Shirin taomlar tanovul qilish mumkin. Mehmonxonalar shinam. Tashrif buyurish mumkin bo‘lgan joylar ko‘p.Bu safargi taassurotlarimiz ham ijobiy. Keyingi safar yana yangi do‘stlarimizni olib kelamiz.</p>
            <div className='d-flex align-items-center gap-4 mt-3'>
                <img src={ava01} className='w-25 h-25 rounded-2' alt="" />
                <div>
                    <h6 className='mb-0 mt-3'>Tursunov Alimardon</h6>
                    <p>Mijoz</p>
                </div>
            </div>
        </div>
        <div className="testimonial py-4 px-3">
            <p>Bu safar hech qanday salbiy jihatlarni ko‘rmadim. Men faqat ijobiy jihatlarni sanab o‘tmoqchiman. Menga ko‘proq nimalar yoqdi? Birinchidan, tozalik. Ikkinchidan, har safar tashrif buyurganimda turistlarni jalb qiladigan binolar qayta ta'mirdan o‘tkazilmoqda.</p>

            <div className='d-flex align-items-center gap-4 mt-3'>
                <img src={ava02} className='w-25 h-25 rounded-2' alt="" />
                <div>
                    <h6 className='mb-0 mt-3'>Qahhorova Aziza</h6>
                    <p>Mijoz</p>
                </div>
            </div>
        </div>
        <div className="testimonial py-4 px-3">
            <p>Samarqandda balki, Toshkent, Buxoro va Xiva shaharlarida ham. Yana ijobiy tomonlaridan hamma joyda shirin ovqatlar pishirilmoqda. Ajoyib oshxonalar. Eng katta ijobiy jihatlardan biri hamma joyda maysalar ekilib, shahar yashil libosga aylantirilmoqda. </p>

            <div className='d-flex align-items-center gap-4 mt-3'>
                <img src={ava03} className='w-25 h-25 rounded-2' alt="" />
                <div>
                    <h6 className='mb-0 mt-3'>Jasur Qodirov</h6>
                    <p>Mijoz</p>
                </div>
            </div>
        </div>
        <div className="testimonial py-4 px-3">
            <p>Xulosa qilib shuni aytishimiz mumkinki, turizm sohasi kun sayin vatanimizda rivojlanib bormoqda. Yutuqlarimiz talaygina. Lekin yutuqlar doim o‘zimiz bilan birga qoladi. Shu bilan birga muntazam ravishda yuqoridagi kamchiliklarni maksimal darajada kamaytirib borishimiz kerak.</p>

            <div className='d-flex align-items-center gap-4 mt-3'>
                <img src={ava02} className='w-25 h-25 rounded-2' alt="" />
                <div>
                    <h6 className='mb-0 mt-3'>Zafarifa Solijonova</h6>
                    <p>Mijoz</p>
                </div>
            </div>
        </div>
    </Slider>
  )
}

export default Testimonials