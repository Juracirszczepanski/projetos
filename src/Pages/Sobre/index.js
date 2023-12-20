import { Col, Container, ListGroup, Row } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Header from "../../Components/Header/index";
import Carousels from "../../Components/Carousel";
import Footer from "../../Components/Footer";
import './../../style.css'
import './style.css';



function Sobre() {


  return (
    <Container fluid>
        <Header id='top'/>
        <main className="conteudo-principal-Sobre">
          <Row>
            <Col xs={6}>            
              <h1 className="titulos-home">SOBRE</h1>
            </Col>
            <Col xs={6}>xs=6</Col>
          </Row>
        </main>
        <Footer/>
    </Container>
  );
}

export default Sobre;
