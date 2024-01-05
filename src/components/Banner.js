import { useState, useEffect, useCallback, useMemo } from "react";
import { Container, Row, Col } from "react-bootstrap";
// import headShot from "../assets/img/headshot.png"
import { ArrowRight } from 'react-bootstrap-icons';


export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 1800;

  const toRotate = useMemo(() => ["Computer Science Student ", "Aspiring Software Engineer ", "Tech Enthusiast "], []);

  const tick = useCallback(() => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
  
    setText(updatedText);
  
    if (isDeleting) {
      setDelta(prevDelta => prevDelta * .7);
    }
  
    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(200);
    }
  }, [loopNum, isDeleting, text, setDelta, setIsDeleting, setLoopNum, toRotate]);

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text, delta, tick]);
  return (
    <section className="banner" id="home">
       <Container>
       <h1 className="text-bold text-5xl font-black ">{`Hey! I'm Alvin, `} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'><span className="wrap">{text}</span></span></h1>
        <Row >
          <Col xs={1} md={2} xl={2}>
          </Col>
          <Col xs={10} md={8} xl={8}>
            {/* <p className="bg-foreground primary-content border-border border-2 pt-1 pb-1 rounded-xl text-xl mt-0 font-meduim tracking-wider leading-10 pr-2 pl-2   sm:text-justify md:text-justify xl:text-center">Currently a second-year UTSC student immersing in the dynamic realm of technology, fervently pursuing a career in software engineering. Join me on this exciting journey as I refine my skills and strive for excellence in the ever-evolving tech landscape.</p> */}
            <p className="bg-foreground text-primary-content border-border border-2 pt-1 pb-1 rounded-xl text-2xl mt-0 font-normal tracking-wider leading-10 pr-2 pl-2   text-justify  sm:text-justify md:text-justify xl:text-center">A Second Year student at <strong>University of Toronto Scarborough</strong> specializing in <strong>Software Engineering Stream</strong>. Located in <strong className="underline">Toronto, Ontario</strong>.</p>
          </Col>
          <Col xs={1} md={2} xl={2}>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col className="d-flex justify-content-center align-items-center">
            <button className="text-primary-content font-bold text-xl h-auto w-auto flex tracking-wider items-center bg-primary-dark rounded-full border-2 border-border border-solid p-2" onClick={() => console.log('CV')}>
              Download Resume <ArrowRight size={25} />
            </button>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
