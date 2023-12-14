import React, { useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import { MDBIcon } from 'mdb-react-ui-kit';
import Icon_Usuario from './../../Assets/e70a6296c2a79dc7a56ab05b103f38e8-sinal-do-usuario-com-fundo.png';


export default function Carousel_equipe() {
    const responsive = {
        0: { items: 1 },
        568: { items: 2 },
        1024: { items: 3 },
    };
    
    const items = [
        <div className="item" data-value="1">
            <Card className='card-content' style={{ width: '18rem' }}>
                <Card.Img variant="top" src={Icon_Usuario} className='img-carousel-equipe'/>
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Button variant="primary"><MDBIcon fab icon="instagram" /></Button>
                </Card.Body>
            </Card>
        </div>,
        <div className="item" data-value="2">
            <Card className='card-content' style={{ width: '18rem' }}>
                <Card.Img variant="top" src={Icon_Usuario} className='img-carousel-equipe'/>
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Button variant="primary"><MDBIcon fab icon="instagram" /></Button>
                </Card.Body>
            </Card>
        </div>,
        <div className="item" data-value="3">
            <Card className='card-content' style={{ width: '18rem' }}>
                <Card.Img variant="top" src={Icon_Usuario} className='img-carousel-equipe'/>
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Button variant="primary"><MDBIcon fab icon="instagram" /></Button>
                </Card.Body>
            </Card>
        </div>,
        <div className="item" data-value="4">
            <Card className='card-content' style={{ width: '18rem' }}>
                <Card.Img variant="top" src={Icon_Usuario} className='img-carousel-equipe'/>
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Button variant="primary"><MDBIcon fab icon="instagram" /></Button>
                </Card.Body>
            </Card>
        </div>,
        <div className="item" data-value="5">
            <Card className='card-content' style={{ width: '18rem' }}>
                <Card.Img variant="top" src={Icon_Usuario} className='img-carousel-equipe'/>
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Button variant="primary"><MDBIcon fab icon="instagram" /></Button>
                </Card.Body>
            </Card>
        </div>,
    ];
    
    return(
        <AliceCarousel
            mouseTracking
            items={items}
            responsive={responsive}
            activeIndex={0}
            disableDotsControls
        />
    );
}