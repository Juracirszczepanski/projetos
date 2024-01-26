import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { Col, Container, Row } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "../../Components/Header/index";
import Footer from "../../Components/Footer";
import './../../style.css'
import './style.css';




function Patrocidadores() {

    const itemData = [
        {
          img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
          patrocinador: 'Breakfast',
          rows: 2,
          cols: 2,
          featured: true,
        },
        {
          img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
          patrocinador: 'Burger',
        },
        {
          img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
          patrocinador: 'Camera',
        },
        {
          img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
          patrocinador: 'Coffee',
          cols: 2,
        },
        {
          img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
          patrocinador: 'Hats',
          cols: 2,
        },
        {
          img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
          patrocinador: 'Honey',
          rows: 2,
          cols: 2,
          featured: true,
        },
        {
          img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
          patrocinador: 'Basketball',
        },
        {
          img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
          patrocinador: 'Fern',
        },
        {
          img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
          patrocinador: 'Mushrooms',
          rows: 2,
          cols: 2,
        },
        {
          img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
          patrocinador: 'Tomato basil',
        },
        {
          img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
          patrocinador: 'Sea star',
        },
        {
          img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
          patrocinador: 'Bike',
          cols: 2,
        },
        {
          img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
          patrocinador: 'Bike',
          cols: 2,
        },
        {
          img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
          patrocinador: 'Bike',
          cols: 2,
        },
        {
          img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
          patrocinador: 'Bike',
          cols: 2,
        },
      ];

  return (
    <Container fluid>
        <Header id='top'/>
        <main className="conteudo-principal-sobre">
          <Row>
            <Col>            
              <h1 className="titulos-home">CONHEÇA NOSSOS PATROCINADORES</h1>
            </Col>
          </Row>
          <Row>
          <Col className="area-patricinadores">
                <ImageList cols={5} >
                {itemData.map((item) => (
                    <ImageListItem className="img-patrocinadores" key={item.img}>
                    <img
                        srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                        src={`${item.img}?w=248&fit=crop&auto=format`}
                        alt={item.patrocinador}
                        loading="lazy"
                    />
                    <ImageListItemBar 
                        title={item.patrocinador}
                    />
                    </ImageListItem>
                ))}
                </ImageList>
            </Col>
          </Row>
        </main>
        <Footer/>
    </Container>
  );
}

export default Patrocidadores;
