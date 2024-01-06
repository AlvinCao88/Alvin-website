import { Container } from "react-bootstrap";
import linkedin from '../assets/img/linkedin.svg';
import instagram from '../assets/img/instagram.svg';
import github from '../assets/img/github-mark.svg';

export const Footer = () => {
    return(
        <footer className="mb-4">
            <Container>
              <div  className="bg-foreground p-2 rounded-full border-2 border-border text-lg">
                {/* <div className="text-center text-2xl font-bold">
                  Candle in the Wind
                </div> */}
                <div className="flex  items-center">
                  <div className="text-xl flex-1 font-semi-bold ">
                    Alvin Cao.
                  </div>
                  <div className="footer-social-icon flex-1  ">
                      <a href="https://www.linkedin.com/in/ac-alvin-cao/"><img src={linkedin} alt="" /></a>
                      <a href="#https://github.com/AlvinCao88"><img src={github} alt="" /></a> 
                      <a href="https://www.instagram.com/alvin_sp974/"><img src={instagram} alt="" /></a>
                  </div>
                  <div className="text-xl font-semi-bold flex-wrap ">
                    All Rights Reserved @ 2024.
                  </div>
                </div>

                 
              <div>
                  
                </div>
              </div>
              {/* <Row >
                <Col size={12} md={6}>
            
                </Col>
                <Col size={12} md={6} className="text-center text-sm-end">
                  <div className="social-icon">
                      <a href="https://www.linkedin.com/in/ac-alvin-cao/"><img src={linkedin} alt="" /></a>
                      <a href="#https://github.com/AlvinCao88"><img src={github} alt="" /></a> 
                      <a href="https://www.instagram.com/alvin_sp974/"><img src={instagram} alt="" /></a>
                  </div>
                  <p className="text-primary-content mt-[20px] text-sm font-bold tracking-wider">Copyright 2024. All Rights Reserved</p>
                  
                </Col>
              </Row> */}

            </Container>
        </footer>

    )
}