import React from 'react'
import ServiceCard from './ServiceCard'
import {Col,} from 'reactstrap'

import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'

const servicesData = [
    {
        imgUrl: weatherImg,
        title: "Hamyonbop narxlar",
        desc: "Sizning hamyon va qiziqishlaringizga mos turlarni tanlab beramiz"
    },
    {
        imgUrl: guideImg,
        title: "Eng yaxshi mehmoxonalar",
        desc: "Barcha yo‘nalish va turlarga hamyonbop narxlarni kafolat beramiz. Biz bilan arzonroq."
    },
    {
        imgUrl: customizationImg,
        title: "Tezkor bronlashtirish",
        desc: "Erta bronlashtirish 30 % gacha tejash imkonini beradi."
    },
]

const ServiceList = () => {
  return (
    <>
        {
            servicesData.map((item, index)=>(
                <Col lg='3' md='6' sm='12' className='mb-4' key={index}>
                    <ServiceCard item={item}/>
                </Col>
            ))
        }
    </>
  )
}

export default ServiceList