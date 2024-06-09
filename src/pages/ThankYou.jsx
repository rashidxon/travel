import React from 'react'
import '../styles/thank-you.css'
import {Container, Row, Col, Button} from 'reactstrap'
import {Link} from 'react-router-dom'

const ThankYou = () => {
  return (
    <section>
        <Container>
            <Row>
                <Col lg='12' className='pt-5 text-center'>
                    <div className="thank__you">
                        <span><i className='ri-checkbox-circle-line'></i></span>
                        <h1 className="mb-3 fw-semibold">Raxmat</h1>
                        <h3 className='mb-4'>sizning so'rovingiz qo'shildi</h3>
                        <Button className='btn primary__btn w-25'>
                            <Link to={'/home'}>Asosiy sahifaga qaytish</Link>
                        </Button>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default ThankYou