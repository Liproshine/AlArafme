import React from "react";
import Navbar from "./Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

import "../styles/global.css";
import { Carousel, Container } from "react-bootstrap";

import slide1 from "../images/heavy-equipment.jpg";
import slide2 from "../images/fmcg-food.jpeg";
import slide3 from "../images/Spare-Parts.jpg";
import slide4 from "../images/heavy-equipment.jpg";

export default function Layout({ children }) {
  return (
    <div className="layout">
      <Container>
        <Navbar />
        <Carousel>
          <Carousel.Item>
            <img src={slide1} alt="Machinery" width="100%" height="500px" />
            <Carousel.Caption>
              <h1>Machinery</h1>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={slide2} alt="FMCG:Food" width="100%" height="500px" />
            <Carousel.Caption>
              <h1>FMCG:Food</h1>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={slide3} alt="Spare parts" width="100%" height="500px" />
            <Carousel.Caption>
              <h1>Spare parts</h1>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              src={slide4}
              alt="Heavy Equipments"
              width="100%"
              height="500px"
            />
            <Carousel.Caption>
              <h1>Heavy Equipments</h1>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <div className="content">{children}</div>
        <footer>
          <p> Copyrights 2022 AlArafme</p>
        </footer>
      </Container>
    </div>
  );
}
