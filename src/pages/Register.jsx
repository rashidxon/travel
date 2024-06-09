import React,{useState} from 'react'
import '../styles/login.css'
import { Container, Col, Row, Form, FormGroup, Button} from 'reactstrap'
import { Link } from 'react-router-dom'

import registerImg from '../assets/images/register.png'
import userImg from '../assets/images/user.png'

const Register = () => {

  const [credentials, setCredentials] = useState({
    userName: undefined,
    email: undefined,
    password: undefined,
  })

  const handleChange = (e) => {
    setCredentials(prev => ({...prev, [e.target.id]:e.target.value}))
  }

  const handleClick = (e) => {
    e.preventDefault()
  }

  return (
    <section>
      <Container>
        <Row>
          <Col lg='10'>
            <div className="login__container d-flex justify-content-between">
              <div className="login__img">
                <img src={registerImg} alt="" />
              </div>

              <div className="login__form">
                <div className="user">
                  <img src={userImg} alt="" />
                </div>
                <h2>Ro'yxatdan o'tish</h2>
                <Form onSubmit={handleClick}>
                  <FormGroup>
                    <input type="text" placeholder='Ism' required id='username' onChange={handleChange} />
                  </FormGroup>
                  <FormGroup>
                    <input type="email" placeholder='Email' required id='email' onChange={handleChange} />
                  </FormGroup>
                  <FormGroup>
                    <input type="password" placeholder='Parol' required id='password' onChange={handleChange} />
                  </FormGroup>
                  <Button className='btn secondary__btn auth__btn' type='submit'>Ro'yxatdan o'tish</Button>
                </Form>
                <p>Ro'yxatdan o'tgan bo'lsangiz ? <Link to={'/login'}>Kirish</Link></p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Register