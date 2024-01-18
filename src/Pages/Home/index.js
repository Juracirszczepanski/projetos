import { Col, Container, FloatingLabel, Form, ListGroup, Row } from "react-bootstrap";
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
import NewsModal from "../../Components/Modals/Modal-noticias";


function Home() {

    const initialNews = [
        { title: 'News 1', categoria: 'Policial', img: 'https://mdbootstrap.com/img/new/standard/nature/111.webp', resume: 'Some quick example text to build on the card title and make up the bulk of the cards content.', 
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat hendrerit viverra. Nam et massa turpis. Quisque id tincidunt ligula, sit amet scelerisque arcu. Quisque mollis erat tortor. Sed ultricies pretium arcu, sit amet ultrices nibh porttitor tincidunt. Vivamus facilisis porta massa, eu vehicula diam tempor eget. Donec a lectus sapien. Morbi ut hendrerit lacus, ac vestibulum nunc. In sagittis metus tempor elit ornare, at feugiat sapien porta. Aliquam et magna nec ante cursus egestas. Praesent interdum faucibus tellus in venenatis. Sed sit amet lorem eu leo suscipit luctus sit amet fermentum ipsum. Fusce varius nec neque in ornare. Vestibulum pulvinar placerat nisi ut scelerisque. Etiam fringilla fermentum erat non blandit. Donec rutrum, risus et fermentum blandit, ex turpis congue erat, in tincidunt magna metus vitae lorem. Quisque id molestie enim, non porttitor nisl. Donec eget ipsum bibendum, consequat risus eget, aliquet augue. Quisque bibendum urna tellus, at porta nunc ultricies id. Praesent eget bibendum nisl. Donec interdum nulla nec tellus mollis, congue facilisis neque rhoncus. Proin ac accumsan arcu, ornare rutrum nulla. In facilisis bibendum turpis pharetra luctus. Quisque sed tincidunt dolor. Quisque quis interdum eros, eget aliquet elit. Duis tempus metus felis, vel luctus elit vehicula at. Duis mattis luctus eros condimentum pulvinar. Donec id purus et ante bibendum bibendum. Nullam efficitur nulla non purus rutrum vehicula.' },
        { title: 'News 2', categoria: 'Policial', img: 'https://mdbootstrap.com/img/new/standard/nature/111.webp', resume: 'Some quick example text to build on the card title and make up the bulk of the cards content.', 
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat hendrerit viverra. Nam et massa turpis. Quisque id tincidunt ligula, sit amet scelerisque arcu. Quisque mollis erat tortor. Sed ultricies pretium arcu, sit amet ultrices nibh porttitor tincidunt. Vivamus facilisis porta massa, eu vehicula diam tempor eget. Donec a lectus sapien. Morbi ut hendrerit lacus, ac vestibulum nunc. In sagittis metus tempor elit ornare, at feugiat sapien porta. Aliquam et magna nec ante cursus egestas. Praesent interdum faucibus tellus in venenatis. Sed sit amet lorem eu leo suscipit luctus sit amet fermentum ipsum. Fusce varius nec neque in ornare. Vestibulum pulvinar placerat nisi ut scelerisque. Etiam fringilla fermentum erat non blandit. Donec rutrum, risus et fermentum blandit, ex turpis congue erat, in tincidunt magna metus vitae lorem. Quisque id molestie enim, non porttitor nisl. Donec eget ipsum bibendum, consequat risus eget, aliquet augue. Quisque bibendum urna tellus, at porta nunc ultricies id. Praesent eget bibendum nisl. Donec interdum nulla nec tellus mollis, congue facilisis neque rhoncus. Proin ac accumsan arcu, ornare rutrum nulla. In facilisis bibendum turpis pharetra luctus. Quisque sed tincidunt dolor. Quisque quis interdum eros, eget aliquet elit. Duis tempus metus felis, vel luctus elit vehicula at. Duis mattis luctus eros condimentum pulvinar. Donec id purus et ante bibendum bibendum. Nullam efficitur nulla non purus rutrum vehicula.' },
        { title: 'News 3', categoria: 'Policial', img: 'https://mdbootstrap.com/img/new/standard/nature/111.webp', resume: 'Some quick example text to build on the card title and make up the bulk of the cards content.', 
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat hendrerit viverra. Nam et massa turpis. Quisque id tincidunt ligula, sit amet scelerisque arcu. Quisque mollis erat tortor. Sed ultricies pretium arcu, sit amet ultrices nibh porttitor tincidunt. Vivamus facilisis porta massa, eu vehicula diam tempor eget. Donec a lectus sapien. Morbi ut hendrerit lacus, ac vestibulum nunc. In sagittis metus tempor elit ornare, at feugiat sapien porta. Aliquam et magna nec ante cursus egestas. Praesent interdum faucibus tellus in venenatis. Sed sit amet lorem eu leo suscipit luctus sit amet fermentum ipsum. Fusce varius nec neque in ornare. Vestibulum pulvinar placerat nisi ut scelerisque. Etiam fringilla fermentum erat non blandit. Donec rutrum, risus et fermentum blandit, ex turpis congue erat, in tincidunt magna metus vitae lorem. Quisque id molestie enim, non porttitor nisl. Donec eget ipsum bibendum, consequat risus eget, aliquet augue. Quisque bibendum urna tellus, at porta nunc ultricies id. Praesent eget bibendum nisl. Donec interdum nulla nec tellus mollis, congue facilisis neque rhoncus. Proin ac accumsan arcu, ornare rutrum nulla. In facilisis bibendum turpis pharetra luctus. Quisque sed tincidunt dolor. Quisque quis interdum eros, eget aliquet elit. Duis tempus metus felis, vel luctus elit vehicula at. Duis mattis luctus eros condimentum pulvinar. Donec id purus et ante bibendum bibendum. Nullam efficitur nulla non purus rutrum vehicula.' },
        { title: 'News 4', categoria: 'Política', img: 'https://mdbootstrap.com/img/new/standard/nature/111.webp', resume: 'Some quick example text to build on the card title and make up the bulk of the cards content.', 
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat hendrerit viverra. Nam et massa turpis. Quisque id tincidunt ligula, sit amet scelerisque arcu. Quisque mollis erat tortor. Sed ultricies pretium arcu, sit amet ultrices nibh porttitor tincidunt. Vivamus facilisis porta massa, eu vehicula diam tempor eget. Donec a lectus sapien. Morbi ut hendrerit lacus, ac vestibulum nunc. In sagittis metus tempor elit ornare, at feugiat sapien porta. Aliquam et magna nec ante cursus egestas. Praesent interdum faucibus tellus in venenatis. Sed sit amet lorem eu leo suscipit luctus sit amet fermentum ipsum. Fusce varius nec neque in ornare. Vestibulum pulvinar placerat nisi ut scelerisque. Etiam fringilla fermentum erat non blandit. Donec rutrum, risus et fermentum blandit, ex turpis congue erat, in tincidunt magna metus vitae lorem. Quisque id molestie enim, non porttitor nisl. Donec eget ipsum bibendum, consequat risus eget, aliquet augue. Quisque bibendum urna tellus, at porta nunc ultricies id. Praesent eget bibendum nisl. Donec interdum nulla nec tellus mollis, congue facilisis neque rhoncus. Proin ac accumsan arcu, ornare rutrum nulla. In facilisis bibendum turpis pharetra luctus. Quisque sed tincidunt dolor. Quisque quis interdum eros, eget aliquet elit. Duis tempus metus felis, vel luctus elit vehicula at. Duis mattis luctus eros condimentum pulvinar. Donec id purus et ante bibendum bibendum. Nullam efficitur nulla non purus rutrum vehicula.' },
        { title: 'News 5', categoria: 'Política', img: 'https://mdbootstrap.com/img/new/standard/nature/111.webp', resume: 'Some quick example text to build on the card title and make up the bulk of the cards content.', 
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat hendrerit viverra. Nam et massa turpis. Quisque id tincidunt ligula, sit amet scelerisque arcu. Quisque mollis erat tortor. Sed ultricies pretium arcu, sit amet ultrices nibh porttitor tincidunt. Vivamus facilisis porta massa, eu vehicula diam tempor eget. Donec a lectus sapien. Morbi ut hendrerit lacus, ac vestibulum nunc. In sagittis metus tempor elit ornare, at feugiat sapien porta. Aliquam et magna nec ante cursus egestas. Praesent interdum faucibus tellus in venenatis. Sed sit amet lorem eu leo suscipit luctus sit amet fermentum ipsum. Fusce varius nec neque in ornare. Vestibulum pulvinar placerat nisi ut scelerisque. Etiam fringilla fermentum erat non blandit. Donec rutrum, risus et fermentum blandit, ex turpis congue erat, in tincidunt magna metus vitae lorem. Quisque id molestie enim, non porttitor nisl. Donec eget ipsum bibendum, consequat risus eget, aliquet augue. Quisque bibendum urna tellus, at porta nunc ultricies id. Praesent eget bibendum nisl. Donec interdum nulla nec tellus mollis, congue facilisis neque rhoncus. Proin ac accumsan arcu, ornare rutrum nulla. In facilisis bibendum turpis pharetra luctus. Quisque sed tincidunt dolor. Quisque quis interdum eros, eget aliquet elit. Duis tempus metus felis, vel luctus elit vehicula at. Duis mattis luctus eros condimentum pulvinar. Donec id purus et ante bibendum bibendum. Nullam efficitur nulla non purus rutrum vehicula.' },
        { title: 'News 6', categoria: 'Curiosidades', img: 'https://mdbootstrap.com/img/new/standard/nature/111.webp', resume: 'Some quick example text to build on the card title and make up the bulk of the cards content.', 
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat hendrerit viverra. Nam et massa turpis. Quisque id tincidunt ligula, sit amet scelerisque arcu. Quisque mollis erat tortor. Sed ultricies pretium arcu, sit amet ultrices nibh porttitor tincidunt. Vivamus facilisis porta massa, eu vehicula diam tempor eget. Donec a lectus sapien. Morbi ut hendrerit lacus, ac vestibulum nunc. In sagittis metus tempor elit ornare, at feugiat sapien porta. Aliquam et magna nec ante cursus egestas. Praesent interdum faucibus tellus in venenatis. Sed sit amet lorem eu leo suscipit luctus sit amet fermentum ipsum. Fusce varius nec neque in ornare. Vestibulum pulvinar placerat nisi ut scelerisque. Etiam fringilla fermentum erat non blandit. Donec rutrum, risus et fermentum blandit, ex turpis congue erat, in tincidunt magna metus vitae lorem. Quisque id molestie enim, non porttitor nisl. Donec eget ipsum bibendum, consequat risus eget, aliquet augue. Quisque bibendum urna tellus, at porta nunc ultricies id. Praesent eget bibendum nisl. Donec interdum nulla nec tellus mollis, congue facilisis neque rhoncus. Proin ac accumsan arcu, ornare rutrum nulla. In facilisis bibendum turpis pharetra luctus. Quisque sed tincidunt dolor. Quisque quis interdum eros, eget aliquet elit. Duis tempus metus felis, vel luctus elit vehicula at. Duis mattis luctus eros condimentum pulvinar. Donec id purus et ante bibendum bibendum. Nullam efficitur nulla non purus rutrum vehicula.' },
        // Add more news items as needed
      ];

      const [noticias, setNoticias] = useState(initialNews);
      const [numNoticias, setNumNoticias] = useState(3); 
      const [pesquisa, setPesquisa] = useState('');

      const [showModal, setShowModal] = useState(false);
      const [selectedNews, setSelectedNews] = useState({});
    
      const modalOpen = (noticia) => {
        setSelectedNews(noticia);
        setShowModal(true);
      };
    
      const modalClose = () => {
        setShowModal(false);
      };
      
      useEffect(() => {
          if (pesquisa) {
             const novaLista = initialNews.filter((noticia) => noticia.categoria.toLowerCase().includes(pesquisa.toLowerCase()));
             setNoticias(novaLista);
          } else {
             setNoticias(initialNews.slice(0, numNoticias));
          }
      }, [pesquisa, numNoticias]);
      
      const carregarMais = () => {
          setNumNoticias(numNoticias + 3);
      };

  return (
    <Container fluid>
        <Header id='top'/>
        <Carousels/>
        <main className="conteudo-principal-home">
            <Row id="noticias">
                <Col>
                    <h1 className="titulos-home">NOTÍCIAS</h1>
                    <Row>
                        <Col>
                            <FloatingLabel controlId="floatingSelect" label="Filtrar Notícias">
                                <Form.Select aria-label="Floating label select example" onChange={(e) => setPesquisa(e.target.value)}>
                                    <option value="">Categoria</option>
                                    <option value="Policial">Policial</option>
                                    <option value="Política">Política</option>
                                    <option value="Curiosidades">Curiosidades</option>
                                </Form.Select>
                            </FloatingLabel>
                            
                            <Form.Floating className="mb-3">
                                <Form.Control
                                id="floatingInputCustom"
                                type="text"
                                placeholder="Categoria"
                                value={pesquisa}
                                onChange={(e) => setPesquisa(e.target.value)}
                                />
                                <label htmlFor="floatingInputCustom">Filtrar Notícias</label>
                            </Form.Floating>
                        </Col>
                    </Row>
                    <Row>
                    {noticias.map((noticia, index) => (
                        <Col xs={12} md={6} lg={4} key={index}  className="linha-noticias">
                            <MDBCard>
                                <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                                <MDBCardImage 
                                    src={noticia.img} 
                                    fluid 
                                    alt='...'
                                />
                                <a>
                                    <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                                </a>
                                </MDBRipple>
                                <MDBCardBody>
                                <MDBCardTitle className="noticia-titulo-card">{noticia.title}</MDBCardTitle>
                                <MDBCardText>
                                    {noticia.resume}
                                </MDBCardText>
                                <MDBBtn onClick={() => modalOpen(noticia)} className="btn-noticia">Ler Mais</MDBBtn>
                                </MDBCardBody>
                            </MDBCard>
                        </Col>
                        ))}
                        <NewsModal show={showModal} onHide={modalClose} noticia={selectedNews} />
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
                <CardsMusicas/>
            </Row>
        </main>
        <Footer/>
    </Container>
  );
}

export default Home;