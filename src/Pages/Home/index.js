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
import React, { useState, useEffect } from "react";
import axios from 'axios';
import CardsMusicas from "../../Components/Cards_Musicas";


function Home() {

    const [noticias, setNoticias] = useState([]); // Lista de notícias
    const [numNoticias, setNumNoticias] = useState(3); // Mostrar 3 notícias inicialmente

    const carregarMais = () => {
        setNumNoticias(numNoticias + 3); // Carregar mais 3 notícias
    };

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            setNoticias(res.data);
        })
        .catch(err => {
            // Trate aqui qualquer erro que ocorrer
            console.error(err);
        })
    }, []);

    const noticiasExibidas = noticias.slice(0, numNoticias);

  return (
    <Container fluid>
        <Header id='top'/>
        <Carousels/>
        <main className="conteudo-principal-home">
            <Row id="noticias">
                <Col>
                    <h1 className="titulos-home">NOTÍCIAS</h1>
                    <Row>
                    {noticiasExibidas.map((noticia, index) => (
                        <Col xs={12} md={6} lg={4} key={index}  className="linha-noticias">
                            <MDBCard>
                                <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                                <MDBCardImage 
                                    src='https://mdbootstrap.com/img/new/standard/nature/111.webp' 
                                    fluid 
                                    alt='...'
                                />
                                <a>
                                    <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                                </a>
                                </MDBRipple>
                                <MDBCardBody>
                                <MDBCardTitle>{noticia.title}</MDBCardTitle>
                                <MDBCardText>
                                    {noticia.body}
                                </MDBCardText>
                                <MDBBtn href='#' className="btn-noticia">Button</MDBBtn>
                                </MDBCardBody>
                            </MDBCard>
                        </Col>
                        ))}
                    </Row>
                    <MDBBtn className="btn-noticias" onClick={carregarMais}>Carregar mais</MDBBtn>
                </Col>
            </Row>
            <Row className="banner-patrocidadores">
                <Col>
                    <img className="img-banner-patroc" src={banner_patrocidadores}/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h1 className="titulos-home">CONHEÇA NOSSOS LOCUTORES</h1>
                    <Carousel_equipe/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div className="faixa-azul"/>
                </Col>
            </Row>
            <Row className="area-musicas">
                <Col className="linha-musicas">
                    <h1 className="titulos-home titulo-musicas">MÚSICAS MAIS TOCADAS</h1>
                    <Row className="linha-cards-musicas" xs={12} md={8} lg={3}>
                        <Col className="col-cards-musicas">
                            <CardsMusicas/>
                        </Col>
                        <Col className="col-cards-musicas">
                            <CardsMusicas/>
                        </Col>
                    </Row>
                    <Row className="linha-cards-musicas" xs={12} md={8} lg={3}>
                        <Col className="col-cards-musicas">
                            <CardsMusicas/>
                        </Col>
                        <Col className="col-cards-musicas">
                            <CardsMusicas/>
                        </Col>
                        <Col className="col-cards-musicas">
                            <CardsMusicas/>
                        </Col>
                    </Row>

                </Col>
            </Row>
        </main>
        <Footer/>
    </Container>
  );
}

export default Home;
