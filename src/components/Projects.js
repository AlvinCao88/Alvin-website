
import { Container } from "react-bootstrap";
// import fakeit from "../assets/img/fakeit.png"
// import datathon from "../assets/img/datathon.png"
// import lostinthevalley from "../assets/img/lostinthevalley.png"

export const Projects = () => {

  return (
    <section className="pt-8 relative mb-[200px]" id="projects">
      <Container>
        <h1 className="text-3xl font-bold text-center">Projects</h1>
        <div className="text-[#ff0200] text-3xl font-bold pb-2">2024</div>
        <div className="flex flex-col md:w-50% md:flex-row gap-4">
            <div className=" basis-1/2  bg-foreground rounded-xl p-2">
              <h3>Personal Website</h3>
              <p>A Personal Profolio built using React, Tailwind, HTML, CSS and JavaScript.</p>
            </div>
           
            
           
            
        </div>
        <div className="pt-4 text-[#ff0200] text-3xl font-bold pb-2">2023</div>
        <div className="flex flex-col  md:flex-row gap-4 ">
            <div className=" basis-1/2 bg-foreground rounded-xl p-2">
              <h3>FakeIt</h3>
              <p>A Personal Profolio built using React, Tailwind</p>
            </div>
            <div className=" basis-1/2 bg-foreground rounded-xl p-2">
              <h3>Market Place Appication</h3>
              <p>A Personal Profolio built using React, </p>
            </div>
            
            <div className="  basis-1/2 bg-foreground rounded-xl p-2">
              <h3>Datathon</h3>
              <p>A Personal Profolio built using React, Tailwind</p>
            </div>
        </div>
        <div className="text-[#ff0200] text-3xl font-bold pb-2 pt-4">2022</div>
        <div className="flex flex-col md:flex-row gap-4">
            <div className=" basis-1/2 bg-foreground rounded-xl p-2">
              <h3>Personal Website</h3>
              <p>A Personal Profolio built using React, Tailwind, HTML, CSS and JavaScript.</p>
            </div>
        </div>
        {/* <h1 className="text-3xl font-bold text-center">Projects</h1>
        <Row className="">
          <div className="text-[#ff0200] text-3xl font-bold pb-2">2024</div>
          <Col xs={6} md={6} xl={6} >
            <div className="text-xl">Personal Website</div>
          </Col>
        </Row>
        <Row>
          <div className="pt-4 text-[#ff0200] text-3xl font-bold pb-2">2023 </div>
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
        <div className="pt-4 text-[#ff0200] text-3xl font-bold pb-2">2022</div>
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
        */}
      </Container>
    </section>
  )
}