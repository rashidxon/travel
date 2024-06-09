import React,{useRef} from "react";
import "./SearchBar.css";
import { Col, Form, FormGroup } from "reactstrap";

const SearchBar = () => {

    const locationRef = useRef('')
    const distanceRef = useRef(0)
    const maxGroupSizeRef = useRef(0)

    const searchHandler = ()=> {
        const location = locationRef.current.value
        const distance = distanceRef.current.value
        const maxGroupSiz = maxGroupSizeRef.current.value

        if(location === '' || distance === '' || maxGroupSiz === ''){
            return alert('All fields are required!')
        }
    }

  return (
    <Col lg="12">
      <div className="search__bar">
        <Form className="d-flex align-items-center gap-4">
          <FormGroup className="form__group form__group-fast d-flex gap-3">
            <span>
              <i className="ri-map-pin-line"></i>
            </span>
            <div>
              <h6>Manzil</h6>
              <input type="text" placeholder="Qayerga ketyapsiz?" ref={locationRef} />
            </div>
          </FormGroup>
          <FormGroup className="form__group form__group-fast d-flex gap-3">
            <span>
              <i className="ri-map-pin-time-line"></i>
            </span>
            <div>
              <h6>Masofa</h6>
              <input type="number" placeholder="Masofa k/m" ref={distanceRef} />
            </div>
          </FormGroup>
          <FormGroup className="form__group form__group-last d-flex gap-3">
            <span>
              <i className="ri-group-line"></i>
            </span>
            <div>
              <h6>Necha kishi ?</h6>
              <input type="text" placeholder="" ref={maxGroupSizeRef} />
            </div>
          </FormGroup>

          <span className="search__icon" type='submit' onClick={searchHandler}>
            <i className="ri-search-line"></i>
          </span>
        </Form>
      </div>
    </Col>
  );
};

export default SearchBar;
