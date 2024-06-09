import React from 'react'
import '../styles/home.css'
import {Container, Row, Col} from 'reactstrap'
import heroImg from '../assets/images/hero-img01.jpg'
import heroImg02 from '../assets/images/hero-img02.jpg'
import heroVideo from '../assets/images/hero-video.mp4'
import worldImg from '../assets/images/world.png'
import experienceImg from '../assets/images/experience.png'
import Subtitle from '../shared/Subtitle'
import SearchBar from '../shared/SearchBar'
import ServiceList from '../services/ServiceList'
import FeaturedToursList from '../components/Featured-tours/FeaturedToursList'
import MasonryImageGallery from '../components/Image/MasonryImageGallery'
import Testimonials from '../components/Testimonial/Testimonials'
import NewLetters from '../shared/NewLetters'

const Home = () => {
  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg='6'>
              <div className="hero__content">
                <div className="hero__subtitle d-flex align-items-center">
                  <Subtitle subtitle={'Know Before You Go'} />
                  <img src={worldImg} alt="" />
                </div>
                <h1>Sayohat qilish xotiralar yaratish uchun <span className="highlight">yo'l ochadi</span></h1>
                <p>Uzoq kutilgan ta’tilga chiqyapsiz va uni iloji boricha yaxshi o‘tkazishni xohlayapsizmi? Bizning turagentligimiz mazmunga boy va sportchilarnikiga xos sayohatdan tortib plyajda davomli hordiq chiqarishgacha har qanday turdagi dam olishni tashkillashtira oladi.</p>
              </div>
            </Col>

            <Col lg='2'>
              <div className="hero__img-box">
                <img src={heroImg} alt="" />
              </div>
            </Col>
            <Col lg='2'>
              <div className="hero__img-box hero__video-box mt-4">
                <video src={heroVideo} alt="" controls />
              </div>
            </Col>
            <Col lg='2'>
              <div className="hero__img-box mt-5">
                <img src={heroImg02} alt="" />
              </div>
            </Col>

            <SearchBar/>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg='3'>
              <h5 className='services__subtitle'>What we serves</h5>
              <h2 className='services__title'>Biz eng yaxshi xizmatlarimizni taklif qilamiz</h2>
            </Col>
            <ServiceList/>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg='12' className='mb-5'>
              <Subtitle subtitle={"Explore"} />
              <h2 className='featured__tour-title'>Taniqli sayohat joylar</h2>
            </Col>
            <FeaturedToursList />
          </Row>
        </Container>
      </section>

      <section>
        <Container className=' d-flex'>
          <Col lg='6'>
            <div className="experience__content">
              <Subtitle subtitle={'Experience'} />
              <h2>Bizning barcha tajribamiz  <br/>sizga xizmat qiladi</h2>
              <p>Biz mijozlar xizmat ko'rsatishdan mamnunmiz<br/></p>
            </div>
            <div className="counter__wrapper d-flex align-items-center gap-5">
              <div className="counter__box">
                <span>12k+</span>
                <h6>Muvaffaqiyatli sayohat</h6>
              </div>
              <div className="counter__box">
                <span>2k+</span>
                <h6>Doimiy mijozlar</h6>
              </div>
              <div className="counter__box">
                <span>15</span>
                <h6>Yillik tajriba</h6>
              </div>
            </div>
          </Col>
          <Col lg='6'>
            <div className="experience__img">
              <img src={experienceImg} alt="" />
            </div>
          </Col>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg='12'>
              <Subtitle subtitle={'Gallery'} />
              <h2 className='gallery__title'>Mijozlarimizning ekskursiya galereyasi</h2>
            </Col>
            <Col lg='12'>
              <MasonryImageGallery/>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg='12'>
              <Subtitle subtitle={'Fans Love'} />
              <h2 className='testimonial__title'>Mijozlarimizning fikri</h2>
            </Col>
            <Col lg='12'>
              <Testimonials/>
            </Col>
          </Row>
        </Container>
      </section>
      <NewLetters/>
    </>
  )
}

export default Home