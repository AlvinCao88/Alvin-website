import { Container } from "react-bootstrap";

export const Projects = () => {
  return (
    <section className="project" id="projects">
      <h1 className="text-3xl font-bold text-center">Projects</h1>
      {/*  */}
      <Container>
        <div className="text-[#ff0200] text-3xl font-bold pb-2">2024</div>
        <div className="flex flex-col md:w-50% md:flex-row gap-4">
          <div className=" basis-1/2 border-border border-2 bg-foreground rounded-xl p-2">
            <h3>Personal Website</h3>
            <p>
              A Personal Profolio built using React, Tailwind, HTML, CSS and
              JavaScript.
            </p>
            <a
              className="text-primary-content"
              href="https://github.com/AlvinCao88/alvin-website"
            >
              <button>Github</button>
            </a>
          </div>
          <div className="  basis-1/2 border-border border-2 bg-foreground rounded-xl p-2">
            <h3>Predictive Modelling</h3>
            <p>
              Intense data analysis of three diverse data sets, which included
              traffic signs, celestial labeling and heart disease
            </p>
            <p> Achieved 6th place out of over 20+ teams</p>
          </div>
          <div className="  basis-1/2 border-border border-2 bg-foreground rounded-xl p-2">
            <h3>Dispose It Right</h3>
            <p>
              An mobile Application developed in react-native that detects trash
              and uses gemini to determine how to dispose of the item in simple
              and easy steps.
            </p>
            <a
              className="text-primary-content"
              href="https://github.com/AlvinCao88/DisposeItRight"
            >
              <button>Github</button>
            </a>
          </div>
          {/* <div className="  basis-1/2 border-border border-2 bg-foreground rounded-xl p-2">
            <h3>SafeHaven</h3>
            <p>
              Intense data analysis of three diverse data sets, which included
              traffic signs, celestial labeling and heart disease
            </p>
            <p> Achieved 6th place out of over 20+ teams</p>
          </div> */}
        </div>

        {/*  */}
        <div className="pt-4 text-[#ff0200] text-3xl font-bold pb-2">2023</div>
        <div className="flex flex-col  md:flex-row gap-4 ">
          <div className=" basis-1/2 border-border border-2 bg-foreground rounded-xl p-2">
            <h3>Fake:It</h3>
            <p>
              An AI that analyzes facial expressions and speech through webcams
              and microphones, tailoring responses to emotions for a
              personalized, confidence-boosting conversation.
            </p>
            <a
              className="text-primary-content"
              href="https://github.com/AlvinCao88/Fake-It"
            >
              <button>Github</button>
            </a>
            <a
              className="text-primary-content"
              href="https://devpost.com/software/fakeit"
            >
              <button>Devpost</button>
            </a>
          </div>
          <div className=" basis-1/2 border-border border-2 bg-foreground rounded-xl p-2">
            <h3>Market Place Appication</h3>
            <p>
              An app that allows both Store Owners and Customers to interact to
              place order for pick up.{" "}
            </p>
            <a
              className="text-primary-content"
              href="https://github.com/AlvinCao88/b07FinalProject_Group9"
            >
              <button>Github</button>
            </a>
          </div>

          <div className="  basis-1/2 border-border border-2 bg-foreground rounded-xl p-2">
            <h3>Datathon</h3>
            <p>
              The dataset entails usage data of 108 old batteries, with the
              remaining usage life values; the goal is to predict the remaining
              usage for 19 unknown batteries using their usage data.
            </p>
          </div>
        </div>

        {/*  */}
        <div className="text-[#ff0200] text-3xl font-bold pb-2 pt-4">2022</div>
        <div className="flex flex-col md:flex-row gap-4">
          <div className=" basis-1/2 border-border border-2 bg-foreground rounded-xl p-2">
            <h3>World Cup Data League Challenge</h3>
            <p>
              Applied knowlegde from workshops on Sports data analysis, API and
              visualized the data using PowerBI
            </p>
            <p>Placed forth in the Overall Competition.</p>
          </div>
          <div className=" basis-1/2 border-border border-2 bg-foreground rounded-xl p-2">
            <h3>Lost in the Valley</h3>
            <p>something aslkdfjlkasdjflk asjdklf jasdlkfasfasdjfl </p>
            <a
              className="text-primary-content"
              href="https://github.com/AlvinCao88/Lost-in-the-Valley"
            >
              <button>Github</button>
            </a>
            <a
              className="text-primary-content"
              href="https://devpost.com/software/loss-in-the-valley"
            >
              <button>Devpost</button>
            </a>
          </div>

          <div className="  basis-1/2 border-border border-2 bg-foreground rounded-xl p-2">
            <h3>9th Anual Trading Competition</h3>
            <p>
              Learn to trade fincial securities on a real-time basisusing Rotman
              Interactive Trader Software.
            </p>
            <p>
              And quickly applied the knowlegde in a fast-paced, simulated trade
              floor.
            </p>
            <p>Placed second in the category of Trading.</p>
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
  );
};
