import { Button, Card, Col, Container, Image, ListGroup, Row } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Header from "../../Components/Header/index";
import Footer from "../../Components/Footer";
import './../../style.css'
import './style.css';
import * as React from 'react';
import { useState } from "react";
import { useEffect } from "react";
import { MDBBtn, MDBIcon } from "mdb-react-ui-kit";
import Logo_playStore from './../../Assets/Logo_PlaystoreAzul.png';
import Logo_AppStore from './../../Assets/Logo_AppstoreAzul.png';



function Contato() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
     setTimeout(() => {
       setIsLoading(false);
     }, 3000); // 3000 milissegundos = 3 segundos
  }, []);


  return (
    <div>
        {isLoading ? (
        <p className="titulo-carregando">Carregando...</p>
      ) : (
        <Container fluid>
          <Header id='top'/>
          <main className="conteudo-principal-sobre">
            <Row>
              <Col>            
                <h1 className="titulos-contato">ENTRE EM CONTATO</h1>
              </Col>
            </Row>
            <Row className="area-entraremcontato">
              <Col md={12} lg={6} className="col-mapa">
                <iframe className="iframe-maps col-areacontato" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7774.5226551816995!2d-42.70285302228999!3d-13.019023399999973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x75cd016980f8817%3A0x655ab457fc0c6029!2sMaca%C3%BAbas%20FM!5e0!3m2!1spt-BR!2sbr!4v1706741928686!5m2!1spt-BR!2sbr" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </Col>
              <Col className="area-contato-itens" md={12} lg={6}>
                <Row>
                  <Col className="col-contato-itens">
                    <svg className="icon-contato" xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 1024 1024"><path fill="#2f94ef" d="M713.5 599.9c-10.9-5.6-65.2-32.2-75.3-35.8c-10.1-3.8-17.5-5.6-24.8 5.6c-7.4 11.1-28.4 35.8-35 43.3c-6.4 7.4-12.9 8.3-23.8 2.8c-64.8-32.4-107.3-57.8-150-131.1c-11.3-19.5 11.3-18.1 32.4-60.2c3.6-7.4 1.8-13.7-1-19.3c-2.8-5.6-24.8-59.8-34-81.9c-8.9-21.5-18.1-18.5-24.8-18.9c-6.4-.4-13.7-.4-21.1-.4c-7.4 0-19.3 2.8-29.4 13.7c-10.1 11.1-38.6 37.8-38.6 92s39.5 106.7 44.9 114.1c5.6 7.4 77.7 118.6 188.4 166.5c70 30.2 97.4 32.8 132.4 27.6c21.3-3.2 65.2-26.6 74.3-52.5c9.1-25.8 9.1-47.9 6.4-52.5c-2.7-4.9-10.1-7.7-21-13"/><path fill="#2f94ef" d="M925.2 338.4c-22.6-53.7-55-101.9-96.3-143.3c-41.3-41.3-89.5-73.8-143.3-96.3C630.6 75.7 572.2 64 512 64h-2c-60.6.3-119.3 12.3-174.5 35.9c-53.3 22.8-101.1 55.2-142 96.5c-40.9 41.3-73 89.3-95.2 142.8c-23 55.4-34.6 114.3-34.3 174.9c.3 69.4 16.9 138.3 48 199.9v152c0 25.4 20.6 46 46 46h152.1c61.6 31.1 130.5 47.7 199.9 48h2.1c59.9 0 118-11.6 172.7-34.3c53.5-22.3 101.6-54.3 142.8-95.2c41.3-40.9 73.8-88.7 96.5-142c23.6-55.2 35.6-113.9 35.9-174.5c.3-60.9-11.5-120-34.8-175.6m-151.1 438C704 845.8 611 884 512 884h-1.7c-60.3-.3-120.2-15.3-173.1-43.5l-8.4-4.5H188V695.2l-4.5-8.4C155.3 633.9 140.3 574 140 513.7c-.4-99.7 37.7-193.3 107.6-263.8c69.8-70.5 163.1-109.5 262.8-109.9h1.7c50 0 98.5 9.7 144.2 28.9c44.6 18.7 84.6 45.6 119 80c34.3 34.3 61.3 74.4 80 119c19.4 46.2 29.1 95.2 28.9 145.8c-.6 99.6-39.7 192.9-110.1 262.7"/></svg>
                    <p>(XX) XXXXX-XXXX</p>
                  </Col>
                </Row>
                <Row>
                  <Col className="col-contato-itens">
                    <svg className="icon-contato" xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24"><path fill="#2f94ef" d="M12 2C7.589 2 4 5.589 4 9.995C3.971 16.44 11.696 21.784 12 22c0 0 8.029-5.56 8-12c0-4.411-3.589-8-8-8m0 12c-2.21 0-4-1.79-4-4s1.79-4 4-4s4 1.79 4 4s-1.79 4-4 4"/></svg>
                    <p>Rua Dr. Vital Soares, Macaúbas – BA, CEP: 46500-000</p>
                  </Col>
                </Row>
                <Row>
                  <Col className="col-contato-itens">
                    <svg className="icon-contato" xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 20 20"><path fill="#2f94ef" d="M19 14.5v-9c0-.83-.67-1.5-1.5-1.5H3.49c-.83 0-1.5.67-1.5 1.5v9c0 .83.67 1.5 1.5 1.5H17.5c.83 0 1.5-.67 1.5-1.5m-1.31-9.11c.33.33.15.67-.03.84L13.6 9.95l3.9 4.06c.12.14.2.36.06.51c-.13.16-.43.15-.56.05l-4.37-3.73l-2.14 1.95l-2.13-1.95l-4.37 3.73c-.13.1-.43.11-.56-.05c-.14-.15-.06-.37.06-.51l3.9-4.06l-4.06-3.72c-.18-.17-.36-.51-.03-.84s.67-.17.95.07l6.24 5.04l6.25-5.04c.28-.24.62-.4.95-.07"/></svg>
                    <p>info@example.com</p>
                  </Col>
                </Row>
                <Row>
                  <Col className="col-contato-itens">
                    <p className="p-faixa">Nossas Redes Socias: </p>
                    <MDBBtn className='m-1 icons-redes' href='' target='_blank' style={{ backgroundColor: '#2F94EF', color:'#FFFFFF', fontSize: '12px' }} floating size='md' tag='a'>
                        <MDBIcon fab icon='facebook-f' />
                    </MDBBtn>
                    <MDBBtn className='m-1 icons-redes' href='' target='_blank' style={{ backgroundColor: '#2F94EF', color:'#FFFFFF', fontSize: '12px' }} floating size='md' tag='a'>
                        <MDBIcon fab icon='twitter' />
                    </MDBBtn>
                    <MDBBtn className='m-1 icons-redes' href='' target='_blank' style={{ backgroundColor: '#2F94EF', color:'#FFFFFF', fontSize: '12px' }} floating size='md' tag='a'>
                        <MDBIcon fab icon='google' />
                    </MDBBtn>
                    <MDBBtn className='m-1 icons-redes' href='' target='_blank' style={{ backgroundColor: '#2F94EF', color:'#FFFFFF', fontSize: '12px' }} floating size='md' tag='a'>
                        <MDBIcon fab icon='instagram' />
                    </MDBBtn>
                  </Col>
                </Row>
                <Row>
                  <Col className="col-contato-itens">
                    <p className="p-faixa">Baixe nosso App: </p>
                    <a href='' target='_blank' className='icons-app'>
                        <img className="logos-contato" src={Logo_playStore} width={140}/>
                    </a>
                    <a href='' target='_blank' className='icons-app'>
                        <img className="logos-contato" src={Logo_AppStore} width={140}/>
                    </a>
                  </Col>
                </Row>
              </Col>
            </Row>
          </main>
          <Footer/>
        </Container>
      )}
    </div>
  );
}

export default Contato;
