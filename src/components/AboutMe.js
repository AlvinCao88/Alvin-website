import { Container } from "react-bootstrap";
//need to add row and col when using the row and Col

export const AboutMe = () => {
    return(
       
        <section className="aboutme" id='aboutme'>
            <h1 className="pt-8 font-bold text-3xl text-center underline"> About Me</h1>
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
                    <div className=" basis-3/4 bg-foreground   border-border border-2  rounded-xl p-4">
                    <p className="font-meduim text-xl text-justify tracking-wider mb-0">
                        Currently a second-year UTSC student immersing in the dynamic realm of technology, fervently pursuing a career in software engineering.
                    </p>
                    <p className=" font-meduim text-xl text-justify tracking-wider mb-0">
                        Join me on this exciting journey as I refine my skills and strive for excellence in the ever-evolving tech landscape.
                    </p>
                    
                    </div>

                    <div className="flex items-center justify-center basis-1/4 bg-primary-light rounded-xl p-4">
                        <a className="text-primary-content" href="#projects">
                            <button  className="font-semibold text-3xl text-center p-2 hover:underline">
                                Projects
                            </button>
                        </a>
                    </div>
                </div>
                <div className="pb-8 flex flex-col md:flex-row pt-4 gap-4 ">
                    <div className="basis-4/5 order-last bg-foreground border-border border-2 rounded-xl p-4">
                    <div className="  font-semibold text-xl text-center">
                        My Skills
                        <div className="flex flex-row pt-4 gap-3 flex-wrap justify-center ">
                            {/* languages */}
                            <div className="skills">Python</div>
                            <div className="skills">C</div>
                            <div className="skills">Java</div>
                            <div className="skills">HTML</div>
                            <div className="skills">CSS</div>
                            <div className="skills">Tailwind</div>
                            <div className="skills">JavaScript</div>
                            {/* frameworks */}
                            <div className="skills">React</div>
                            <div className="skills">Git</div>
                            <div className="skills">Github</div>
                            <div className="skills">Android Studio</div>
                            <div className="skills">Microsoft Office</div>
                            <div className="skills">Linux</div>
                            <div className="skills">TensorFlow</div>
                            
                        </div>
                    </div>
                    </div>

                    <div className="flex items-center justify-center basis-1/4 bg-primary-light rounded-xl p-4">
                        <a className="text-primary-content" href="https://github.com/AlvinCao88?tab=repositories"> 
                            <button className="font-semibold text-3xl text-center p-2 hover:underline">
                                Github Repo
                            </button>
                        </a>
                    </div>
                </div>
            </Container>
        </section>
        

    )
}