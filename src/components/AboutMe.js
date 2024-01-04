import { Container } from "react-bootstrap";
//need to add row and col when using the row and Col

export const AboutMe = () => {
    return(
       
        <section className="aboutme" id='aboutme'>
            <h1 className="font-bold text-4xl text-center "> About Me</h1>
            <Container>
                {/* <Row className=" spa ">
                <Col xs={12} md={8} xl={8} className="  bg-foreground rounded-xl p-4">
                    <div className=" rounded-xl font-semibold text-xl text-justify"> Currently a second-year UTSC student immersing in the dynamic realm of technology, fervently pursuing a career in software engineering. Join me on this exciting journey as I refine my skills and strive for excellence in the ever-evolving tech landscape.</div>
                </Col >
               
                <Col xs={0} md={4} xl={4}  className="  bg-primary-light rounded-xl p-4" >
                    <div className="  text-center font-semibold text-4xl  "> Projects </div>
                </Col>
                </Row>
                <Row className=" pt-3 .table ">
                <Col xs={0} md={4} xl={4} className=" bg-primary-light rounded-xl p-2 ">
                    <div className=" rounded-xl font-semibold text-xl text-justify"> Place holder</div>
                </Col>
                <Col xs={12} md={8} xl={8}  className=" bg-foreground rounded-xl p-2 " >
                    <div className="  text-center font-semibold text-4xl "> Skills </div>
                </Col>
                </Row> */}
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="md:flex-2 bg-foreground rounded-xl p-4">
                    <div className="rounded-xl font-semibold text-xl text-justify">
                        Currently a second-year UTSC student immersing in the dynamic realm of technology, fervently pursuing a career in software engineering. Join me on this exciting journey as I refine my skills and strive for excellence in the ever-evolving tech landscape.
                    </div>
                    </div>

                    <div className="md:flex-1 bg-primary-light rounded-xl p-4">
                    <div className="text-center font-semibold text-4xl">
                        Projects
                    </div>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row pt-4 gap-4 ">
                    <div className="md:flex-1 order-last bg-foreground rounded-xl p-4">
                    <div className="rounded-xl font-semibold text-xl text-justify">
                        Skills
                    </div>
                    </div>

                    <div className="md:flex-2 bg-primary-light rounded-xl p-4">
                    <div className="text-center font-semibold text-4xl">
                       Placeholder
                    </div>
                    </div>
                </div>
            </Container>
        </section>
        

    )
}