import { Col, Container, ListGroup, Row } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from "react-router-dom";
import Header from "../../Components/Header/index";
import Carousels from "../../Components/Carousel";
import Footer from "../../Components/Footer";
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn, MDBRipple } from 'mdb-react-ui-kit';
import './../../style.css'
import './style.css';
import banner_patrocidadores from './../../Assets/IA_Bannersite_patrocinadores-02_1920x100_-2023.jpg';
import Carousel_equipe from "../../Components/Carousel_equipe";


function Home() {

  return (
    <Container fluid>
        <Header/>
        <Carousels/>
        <main className="conteudo-principal-home">
            <Row>
                <Col>
                    <h1>NOTÍCIAS</h1>
                    <Row>
                        <Col>
                            <MDBCard>
                                <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                                    <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/111.webp' fluid alt='...' />
                                    <a>
                                    <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                                    </a>
                                </MDBRipple>
                                <MDBCardBody>
                                    <MDBCardTitle>Card title</MDBCardTitle>
                                    <MDBCardText>
                                    Some quick example text to build on the card title and make up the bulk of the card's content.
                                    </MDBCardText>
                                    <MDBBtn href='#'>Button</MDBBtn>
                                </MDBCardBody>
                            </MDBCard>
                        </Col>
                        <Col>
                            <MDBCard>
                                <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                                    <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/111.webp' fluid alt='...' />
                                    <a>
                                    <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                                    </a>
                                </MDBRipple>
                                <MDBCardBody>
                                    <MDBCardTitle>Card title</MDBCardTitle>
                                    <MDBCardText>
                                    Some quick example text to build on the card title and make up the bulk of the card's content.
                                    </MDBCardText>
                                    <MDBBtn href='#'>Button</MDBBtn>
                                </MDBCardBody>
                            </MDBCard>
                        </Col>
                        <Col>
                            <MDBCard>
                                <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                                    <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/111.webp' fluid alt='...' />
                                    <a>
                                    <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                                    </a>
                                </MDBRipple>
                                <MDBCardBody>
                                    <MDBCardTitle>Card title</MDBCardTitle>
                                    <MDBCardText>
                                    Some quick example text to build on the card title and make up the bulk of the card's content.
                                    </MDBCardText>
                                    <MDBBtn href='#'>Button</MDBBtn>
                                </MDBCardBody>
                            </MDBCard>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row className="banner-patrocidadores">
                <Col>
                    <img className="img-banner-patroc" src={banner_patrocidadores}/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h1>CONHEÇA NOSSOS LOCUTORES</h1>
                    <Carousel_equipe/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h1>Músicas mais tocadas</h1>
                </Col>
            </Row>
        </main>
        <Footer/>
    </Container>
  );
}

export default Home;
