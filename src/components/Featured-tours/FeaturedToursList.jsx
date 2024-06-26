import React from 'react'
import TourCard from '../../shared/TourCard.jsx'
import tourData from '../../assets/data/tours'
import {Col} from 'reactstrap'

import useFetch from "./../../hooks/useFetch"
import {BASE_URL} from "./../../utils/config"

const FeaturedToursList = () => {

  const {data: featuredTours, loading, error} = useFetch(`${BASE_URL}/tours/search/getFeaturedTours`)
  console.log(featuredTours);
  return (
    <>
    {tourData?.map(tour => (
      <Col lg="3" md='6' sm='6' className='mt-4' key={tour._id}>
        <TourCard tour={tour} />
      </Col>
    ))

    }
    </>
  )
}

export default FeaturedToursList