import React from 'react'
import './NewLetters.css'
import {Container, Row, Col} from 'reactstrap'
import maleTourist from '../assets/images/male-tourist.png'

const NewLetters = () => {
  return (
    <section className='newsletter'>
        <Container>
            <Row>
                <Col ld='6'>
                    <div className="newsletter__content">
                        <h2>Foydali sayohat ma'lumotlarini olish uchun hozir obuna bo'ling.</h2>
                        <div className="newsletter__input">
                            <input type="email" placeholder='Enter your email' />
                            <button className='btn newsletter__btn'>Subscribe</button>
                        </div>
                        <p>Biz siz uchun istalgan murakkablikdagi turni xursandchilik bilan tuzib beramiz. Siz shunchaki bizga qo‘ng‘iroq qilishingiz yoki talabnoma shaklini to‘ldirishingiz lozim.</p>
                    </div>
                </Col>
                <Col lg='6'>
                    <div className="newsletter__img">
                        <img src={maleTourist} alt="" />
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default NewLetters