import React from 'react'
import '../styles/home.css'
import {Container, Row, Col} from 'reactstrap'
import Subtitle from '../shared/Subtitle'
import experienceImg from '../assets/images/experience.png'
import Testimonials from '../components/Testimonial/Testimonials'
import NewLetters from '../shared/NewLetters'

const About = () => {
  return (
    <div>
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
    </div>
  )
}

export default About