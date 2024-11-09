import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer mt-5" >
      <Container>
        <Row className="align-items-center ">
          {/* <MailchimpForm /> */}
          <Col size={12} sm={6}>
            {/* <img src={logo} alt="Logo" /> */}
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon space-x-5">
              <a href="https://www.linkedin.com/in/mbenaoui/"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://web.facebook.com/mohamed.benaouija.5/"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://www.instagram.com/mohamed_benaou/"><img src={navIcon3} alt="Icon" /></a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
