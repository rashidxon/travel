import React, {useRef, useEffect} from "react";
import "./Header.css";
import { Container, Row, Col, Button } from "reactstrap";
import { NavLink, Link } from "react-router-dom";

import logo2 from "../../assets/images/logo2.jpg";

const nav__link = [
  {
    path: "/home",
    display: "Asosiy",
  },
  {
    path: "/about",
    display: "Biz haqimizda",
  },
  {
    path: "/tours",
    display: "Manzillar",
  },
];

const Header = () => {

  const headerRef = useRef(null)
  const menuRef = useRef(null)
  const stickyHeaderFunc = () => {
    window.addEventListener('scroll', ()=>{
      if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
        headerRef.current.classList.add('sticky__header')
      }else{
        headerRef.current.classList.remove('sticky__header')
      }
    })
  }

  useEffect(()=>{
    stickyHeaderFunc()

    return window.removeEventListener('scroll', stickyHeaderFunc)
  },[])

  const toggleMenu = () => menuRef.current.classList.toggle("show__menu")

  return (
    <header className="header" ref={headerRef}>
      <Container>
        <Row>
          <div className="nav__wrapper d-flex align-item-center justify-content-between">
            <Link to={"/home"}>
              <div className="logo">
                <img src={logo2} alt="" />
              </div>
            </Link>
            

            <div className="navigation" ref={menuRef} onClick={toggleMenu}>
              <ul className="menu d-flex align-item-center gap-5">
                {nav__link.map((item, index) => (
                  <li className="nav__item" key={index}>
                    <NavLink
                      to={item.path}
                      className={(navClass) =>
                        navClass.isActive ? "active__link" : ""
                      }
                    >
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            <div className="nav__right d-flex align-items-center gap-4 mb-3">
              <div className="nav__btns d-flex align-items-center gap-4">
                <Button className="btn secondary__btn">
                  <Link to="/login">Kirish</Link>
                </Button>
                <Button className="btn primary__btn">
                  <Link to="/register">Ro'yxatdan o'tish</Link>
                </Button>
              </div>

              <span className="mobile__menu" onClick={toggleMenu}>
                <i className="ri-menu-line"></i>
              </span>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
