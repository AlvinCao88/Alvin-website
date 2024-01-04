
import { Container, Row, Col } from "react-bootstrap";
// import fakeit from "../assets/img/fakeit.png"
// import datathon from "../assets/img/datathon.png"
// import lostinthevalley from "../assets/img/lostinthevalley.png"

export const Projects = () => {

  return (
    <section className="project" id="projects">
      <Container>
        <h1 className="text-3xl font-bold text-center">Projects</h1>
        <Row className="">
          <div className="text-[#ff0200] text-3xl font-bold ">2024</div>
          <Col xs={6} md={6} xl={6} className="bg-foreground rounded-lg">
            <div className="text-xl">Personal Website</div>
          </Col>
        </Row>
        <Row>
          <div>2023</div>
          <Col xs={6} md={6} xl={6}>
            <div>FakeIt</div>
          </Col>
          <Col xs={6} md={6} xl={6}>
            <div>Market Place Application</div>
          </Col>
        </Row>
        <Row>
          <Col xs={6} md={6} xl={6}>
            <div>Datathon</div>
          </Col>
        </Row>

        <Row>
        <div>2022</div>
         <Col xs={6} md={6} xl={6}>
            <div>9th Annual UTSC Trading Competition 2022</div>
          </Col>
          <Col xs={6} md={6} xl={6}>
            <div>Lost in the Valley</div>
          </Col>
          <Col xs={6} md={6} xl={6}>
            <div>World Cup Data League Challenge</div>
          </Col>
        </Row>
        <Row>
          
        
        </Row>
      </Container>
    </section>
  )
}