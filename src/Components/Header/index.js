import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './../../style.css';
import './style.css';
import Logo from './../../Assets/MACAUBAS-FM-300x102 LOGO.png';
import { Link } from "react-router-dom";
import React, { useState, useEffect, useRef } from 'react';
import { 
  ModalAVozdoBrasil, 
  ModalAmorSemFim, 
  ModalAntenaMix, 
  ModalChapeueViola, 
  ModalDiretodaRedacao, 
  ModalFimdeTarde,
  ModalGuardiaodas7Chaves, 
  ModalMandeiBem, 
  ModalManhaInterativa,
  ModalMaquinadoTempo,
  ModalMicrofonia, 
  ModalPaixaoSertaneja, 
  ModalValeAPenaOuvirDeNovo,
  ModalNoticias_103 } from "../Modals/Modal-programacao";

export default function Header(){

  const [navbar, setNavbar] = useState(false);
  const [showArrow, setShowArrow] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio('https://players.hoost.com.br/modern/circle.php?ip=cast3.hoost.com.br&porta=20009&codec=mp3&strUser=macaubas&point=/stream&tech=icecastv2&color1=ffb700&color2=ffffff&bgColor=0096ef0a&theme=light&thumbImg=false&statusTxt=false&autoplay=off&facebook=&twitter=&ssl=1&sslp=20009'));

  const changeBackground = () => {
    if (window.scrollY >= 120) {
      setNavbar(true);
      setShowArrow(true);
    } else {
      setNavbar(false);
      setShowArrow(false);
    }
  };
  
  useEffect(() => {
    window.addEventListener('scroll', changeBackground);
    return () => {
      window.removeEventListener('scroll', changeBackground);
    };
  }, []);

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };


  const [showModal, setShowModal] = useState({
    ModalNoticias_103: false,
    ModalAVozdoBrasil: false,
    ModalAmorSemFim: false,
    ModalAntenaMix: false,
    ModalChapeueViola: false,
    ModalDiretodaRedacao: false,
    ModalFimdeTarde: false,
    ModalGuardiaodas7Chaves: false,
    ModalMandeiBem: false,
    ModalManhaInterativa: false,
    ModalMaquinadoTempo: false,
    ModalMicrofonia: false,
    ModalPaixaoSertaneja: false,
    ModalValeAPenaOuvirDeNovo: false
    
  });
 
   const abrirModal = (modalName) => {
     setShowModal({ ...showModal, [modalName]: true });
   };
 
   const fecharModal = (modalName) => {
     setShowModal({ ...showModal, [modalName]: false });
   };

  return(
      <Navbar collapseOnSelect expand="lg" className={navbar ? 'Header fixed-top' : 'Header'}>
      <Container>
        <Navbar.Brand>
          <Link to='/'><img src={Logo} width={180}/></Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"><i class="fas fa-bars icone-menu"></i></Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className="nav-link">Home</Link>
            <NavDropdown title="Programação" id="collapsible-nav-dropdown">
              <NavDropdown.Item onClick={ () => abrirModal('ModalValeAPenaOuvirDeNovo') }> Vale a Pena Ouvir de Novo </NavDropdown.Item>
              <NavDropdown.Item onClick={ () => abrirModal('ModalChapeueViola') }> Chapéu e Viola </NavDropdown.Item>
              <NavDropdown.Item onClick={ () => abrirModal('ModalPaixaoSertaneja') }> Paixão Sertaneja </NavDropdown.Item>
              <NavDropdown.Item onClick={ () => abrirModal('ModalGuardiaodas7Chaves') }> Guardião das 7 Chaves </NavDropdown.Item>
              <NavDropdown.Item onClick={ () => abrirModal('ModalDiretodaRedacao') }> Direto da Redação </NavDropdown.Item>
              <NavDropdown.Item onClick={ () => abrirModal('ModalMicrofonia') }> Microfonia </NavDropdown.Item>
              <NavDropdown.Item onClick={ () => abrirModal('ModalManhaInterativa') }> Manhã Interativa </NavDropdown.Item>
              <NavDropdown.Item onClick={ () => abrirModal('ModalNoticias_103') }> 103 Notícias </NavDropdown.Item>
              <NavDropdown.Item onClick={ () => abrirModal('ModalMandeiBem') }> Mandei Bem </NavDropdown.Item>
              <NavDropdown.Item onClick={ () => abrirModal('ModalFimdeTarde') }> Fim de Tarde </NavDropdown.Item>
              <NavDropdown.Item onClick={ () => abrirModal('ModalAVozdoBrasil') }> A Voz do Brasil </NavDropdown.Item>
              <NavDropdown.Item onClick={ () => abrirModal('ModalMaquinadoTempo') }> Máquina do Tempo </NavDropdown.Item>
              <NavDropdown.Item onClick={ () => abrirModal('ModalAntenaMix') }> Antena Mix </NavDropdown.Item>
              <NavDropdown.Item onClick={ () => abrirModal('ModalAmorSemFim') }> Amor Sem Fim </NavDropdown.Item>

              <ModalValeAPenaOuvirDeNovo show={showModal.ModalValeAPenaOuvirDeNovo} handleClose={() => fecharModal('ModalValeAPenaOuvirDeNovo')}/>
              <ModalChapeueViola show={showModal.ModalChapeueViola} handleClose={() => fecharModal('ModalChapeueViola')}/>
              <ModalPaixaoSertaneja show={showModal.ModalPaixaoSertaneja} handleClose={() => fecharModal('ModalPaixaoSertaneja')}/>
              <ModalGuardiaodas7Chaves show={showModal.ModalGuardiaodas7Chaves} handleClose={() => fecharModal('ModalGuardiaodas7Chaves')}/>
              <ModalDiretodaRedacao show={showModal.ModalDiretodaRedacao} handleClose={() => fecharModal('ModalDiretodaRedacao')}/>
              <ModalMicrofonia show={showModal.ModalMicrofonia} handleClose={() => fecharModal('ModalMicrofonia')}/>
              <ModalManhaInterativa show={showModal.ModalManhaInterativa} handleClose={() => fecharModal('ModalManhaInterativa')}/>
              <ModalNoticias_103 show={showModal.ModalNoticias_103} handleClose={() => fecharModal('ModalNoticias_103')}/>
              <ModalMandeiBem show={showModal.ModalMandeiBem} handleClose={() => fecharModal('ModalMandeiBem')}/>
              <ModalFimdeTarde show={showModal.ModalFimdeTarde} handleClose={() => fecharModal('ModalFimdeTarde')}/>
              <ModalAVozdoBrasil show={showModal.ModalAVozdoBrasil} handleClose={() => fecharModal('ModalAVozdoBrasil')}/>
              <ModalMaquinadoTempo show={showModal.ModalMaquinadoTempo} handleClose={() => fecharModal('ModalMaquinadoTempo')}/>
              <ModalAntenaMix show={showModal.ModalAntenaMix} handleClose={() => fecharModal('ModalAntenaMix')}/>
              <ModalAmorSemFim show={showModal.ModalAmorSemFim} handleClose={() => fecharModal('ModalAmorSemFim')}/>
            </NavDropdown>
            <Nav.Link href="#noticias">Notícias</Nav.Link>
            <Link to="/sobre-nos" className="nav-link">Quem Somos</Link>
            <Link to="/patrocinadores" className="nav-link">Patrocidadores</Link>
          </Nav>
          <Nav>
            <Nav.Link eventKey={2}>
              Contato
            </Nav.Link>
            <Nav.Link href='#top' eventKey={2} className={showArrow ? "icon-top show" : "icon-top"}>
              <i class="fas fa-angles-up icone-arrow"></i>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}