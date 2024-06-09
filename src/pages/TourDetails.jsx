import React,{useState,useRef} from "react";
import "../styles/tour-details.css";
import { Container, Row, Col, Form, ListGroup } from "reactstrap";
import { useParams } from "react-router-dom";
import tourData from "../assets/data/tours";
import calculateAvgRating from "../utils/avgRating";
import avatar from '../assets/images/avatar.jpg'
import Booking from "../components/Booking/Booking";
import NewLetters from "../shared/NewLetters";

const TourDetails = () => {
  const { id } = useParams();
  const reviewMsgRef = useRef('')
  const [tourRating, setTourRating] = useState(null)

  const tour = tourData.find((tour) => tour.id === id);
  const {
    photo,
    title,
    desc,
    price,
    reviews,
    city,
    address,
    distance,
    maxGroupSize,
  } = tour;
  const { avgRating, totalRating } = calculateAvgRating(reviews);

  const options = {day:'numeric', month:'long', year:'numeric'}

  const submitHandle = (e) => {
    e.preventDefault()
    const reviewText = reviewMsgRef.current.value

    alert(`${reviewText}, ${tourRating}`)
  }

  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg="8">
              <div className="tour__content">
                <img src={photo} alt="" />
                <div className="tour__info">
                  <h2>{title}</h2>
                  <div className="d-flex align-items-center gap-5">
                    <span className="tour__rating d-flex align-items-center gap-1">
                      <i
                        className="ri-star-fill"
                        style={{ color: "var(--secondary-color)" }}
                      ></i>{" "}
                      {avgRating === 0 ? null : avgRating}
                      {totalRating == 0 ? (
                        "Not rated"
                      ) : (
                        <span>({reviews.length})</span>
                      )}
                    </span>

                    <span>
                      <i className="ri-map-pin-user-fill"></i>
                      {address}
                    </span>
                  </div>

                  <div className="tour__extra-details">
                    <span>
                      <i className="ri-map-pin-2-line"></i> {city}
                    </span>
                    <span>
                      <i className="ri-money-dollar-circle-line"></i> ${price} /
                      bir kishi uchun
                    </span>
                    <span>
                      <i className="ri-map-pin-time-line"></i> {distance} k/m
                    </span>
                    <span>
                      <i className="ri-group-line"></i> {maxGroupSize} kishi
                    </span>
                  </div>

                  <h5>Izoh</h5>
                  <p>{desc}</p>
                </div>

                <div className="tour__reviews mt-4">
                  <h4>Sharhlar ({reviews?.length} sharhlar soni)</h4>
                  <Form onSubmit={submitHandle}>
                    <div className="rating__group d-flex align-items-center gap-3 mb-4">
                      <span onClick={()=> setTourRating(1)}>
                        1 <i className="ri-star-s-fill"></i>
                      </span>
                      <span onClick={()=> setTourRating(2)}>
                        2 <i className="ri-star-s-fill"></i>
                      </span>
                      <span onClick={()=> setTourRating(3)}>
                        3 <i className="ri-star-s-fill"></i>
                      </span>
                      <span onClick={()=> setTourRating(4)}>
                        4 <i className="ri-star-s-fill"></i>
                      </span>
                      <span onClick={()=> setTourRating(5)}>
                        5 <i className="ri-star-s-fill"></i>
                      </span>
                    </div>
                    <div className="review__input">
                      <input type="text" ref={reviewMsgRef} required placeholder="Izoh qoldirish uchun ..." />
                      <button className="btn primary__btn text-white" type="submit">Jo'natish</button>
                    </div>
                  </Form>

                  <ListGroup className="user__reviews">
                    {
                      reviews?.map(review => (
                        <div className="review__item">
                          <img src={avatar} alt="" />

                          <div className="w-100">
                            <div className=" d-flex align-items-center justify-content-between">
                              <div>
                                <h5>Rashidxon</h5>
                                <p>
                                  {
                                    new Date("04-05-2024").toLocaleDateString("en-US", options)
                                  }
                                </p>
                              </div>
                              <span className=" d-flex align-items-center">
                                5 <i className="ri-star-s-fill"></i>
                              </span>
                            </div>
                            <h6>Ajoyib sayohat sayohat bo'ldi raxmat</h6>
                          </div>
                        </div>
                      ))
                    }
                  </ListGroup>
                </div>
              </div>
            </Col>
            <Col lg='4'>
              <Booking tour={tour} avgRating={avgRating} />
            </Col>
          </Row>
        </Container>
      </section>
      <NewLetters/>
    </>
  );
};

export default TourDetails;
