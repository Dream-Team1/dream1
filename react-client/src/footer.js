import React from "react";
import { Col, Container, Row, Footer } from "mdbreact";
import { SocialIcon } from "react-social-icons";
// import "./Footer.css";

class FooterPage extends React.Component {
  render() {
    return (
      <Footer
        color="unique-color-dark"
        className="page-footer font-small pt-0"
      >
        <div style={{ backgroundColor: "#000080" }}>
          <Container >
            <Row className="py-4 d-flex align-items-center">
              <Col
                md="6"
                lg="5"
                className="text-center text-md-left mb-4 mb-md-0">
              </Col>
              <Col
                md="6"
                lg="7"
                className="text-center text-md-right"
              >
                <SocialIcon
                  network="twitter"
                  color="#00aced"
                  url="https://twitter.com/?lang=en"
                />
                <SocialIcon
                  network="facebook"
                  color="#3b5998"
                  url="https://www.facebook.com/code.dreamteam.5"
                />
                <a href="mailto:dreamteam2018hc@gmail.com"> <SocialIcon
                 network="google"
                 color="#bc2a8d"

               /></a>

              </Col>
            </Row>
          </Container>
        </div>
        <div className="footer-copyright text-center py-3">
          <Container fluid>
            &copy; {new Date().getFullYear()} Copyright:{"DreamTeam "}
          </Container>
        </div>
      </Footer>
    );
  }
}
export default FooterPage;
