import React, { useState, useEffect } from "react";
import "../styles/tour.css";
import CommonSection from "../shared/CommonSection";
import tourData from "../assets/data/tours";
import SearchBar from "../shared/SearchBar";
import NewLetters from "../shared/NewLetters";
import TourCard from "../shared/TourCard";
import { Container, Row, Col } from "reactstrap";

const Tours = () => {
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);

  useEffect(() => {
    const page = Math.ceil(5 / 4);
    setPageCount(page);
  }, [page]);

  return (
    <>
      <CommonSection title={"Barcha turlar"} />
      <section>
        <Container>
          <Row>
            <SearchBar />
          </Row>
        </Container>
      </section>
      <section className="pt-0">
        <Container>
          <Row>
            {tourData.map((tour) => (
              <Col lg="3" md='6' sm='6' className="mb-4" key={tour.id}>
                <TourCard tour={tour} />
              </Col>
            ))}
            <Col lg="12">
              <div className="pagination d-flex align-items-center justify-content-center mt-4 gap-3">
                {[...Array(pageCount).keys()].map((number) => (
                  <span
                    key={number}
                    onClick={() => setPage(number)}
                    className={page === number ? "active__page" : ""}
                  >
                    {number + 1}
                  </span>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <NewLetters/>
    </>
  );
};

export default Tours;
