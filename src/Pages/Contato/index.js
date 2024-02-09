import {Col, Container, Row } from "react-bootstrap";
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
                    <svg className="icon-contato" xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24"><path fill="#2f94ef" d="M12 2C7.589 2 4 5.589 4 9.995C3.971 16.44 11.696 21.784 12 22c0 0 8.029-5.56 8-12c0-4.411-3.589-8-8-8m0 12c-2.21 0-4-1.79-4-4s1.79-4 4-4s4 1.79 4 4s-1.79 4-4 4"/></svg>
                    <p>Rua Dr. Vital Soares, Macaúbas – BA, CEP: 46500-000</p>
                  </Col>
                </Row>
                <Row>
                  <Col className="col-contato-itens">
                    <svg className="icon-contato" xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 20 20"><path fill="#2f94ef" d="M19 14.5v-9c0-.83-.67-1.5-1.5-1.5H3.49c-.83 0-1.5.67-1.5 1.5v9c0 .83.67 1.5 1.5 1.5H17.5c.83 0 1.5-.67 1.5-1.5m-1.31-9.11c.33.33.15.67-.03.84L13.6 9.95l3.9 4.06c.12.14.2.36.06.51c-.13.16-.43.15-.56.05l-4.37-3.73l-2.14 1.95l-2.13-1.95l-4.37 3.73c-.13.1-.43.11-.56-.05c-.14-.15-.06-.37.06-.51l3.9-4.06l-4.06-3.72c-.18-.17-.36-.51-.03-.84s.67-.17.95.07l6.24 5.04l6.25-5.04c.28-.24.62-.4.95-.07"/></svg>
                    <p>macaubasfmproducao@hotmail.com</p>
                  </Col>
                </Row>
                <Row>
                  <Col className="col-contato-itens">
                    <p className="p-faixa">Nossas Redes Socias: </p>
                    <MDBBtn className='m-1 icons-redes' href='https://wa.me/message/74Z3AQ7EJKTSG1' target='_blank' style={{ backgroundColor: '#2F94EF', color:'#FFFFFF', fontSize: '12px' }} floating size='lg' tag='a'>
                        <MDBIcon fab icon='whatsapp' size='2x'/>
                    </MDBBtn>
                    <MDBBtn className='m-1 icons-redes' href='https://www.youtube.com/@macaubasfmoficial1636' target='_blank' style={{ backgroundColor: '#2F94EF', color:'#FFFFFF', fontSize: '12px' }} floating size='lg' tag='a'>
                        <MDBIcon fab icon='youtube' size='2x'/>
                    </MDBBtn>
                    <MDBBtn className='m-1 icons-redes' href='https://www.instagram.com/macaubasfmoficial/' target='_blank' style={{ backgroundColor: '#2F94EF', color:'#FFFFFF', fontSize: '12px' }} floating size='lg' tag='a'>
                        <MDBIcon fab icon='instagram' size='2x'/>
                    </MDBBtn>
                  </Col>
                </Row>
                <Row>
                  <Col className="col-contato-itens">
                    <p className="p-faixa">Baixe nosso App: </p>
                    <a href='https://play.google.com/store/apps/details?id=hoostcomv2.macaubas' target='_blank' className='icons-app'>
                        <img className="logos-contato" src={Logo_playStore} width={140}/>
                    </a>
                    <a href='https://apps.apple.com/br/app/r%C3%A1dio-maca%C3%BAbas-fm/id1482288445' target='_blank' className='icons-app'>
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
