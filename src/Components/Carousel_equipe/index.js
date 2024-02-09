import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';

import AdrianaSantos from './../../Assets/Fotos Equipe/Adriana Santos.jpg';
import AnaDultra from './../../Assets/Fotos Equipe/Ana Clara Dultra.jpg';
import FelipeFrancisco from './../../Assets/Fotos Equipe/Felipe Francisco.jpg';
import RaiHenrique from './../../Assets/Fotos Equipe/Raí Henrique.jpg';
import TatiDomingues from './../../Assets/Fotos Equipe/Tati Domingues.jpg';


export default function Carousel_equipe() {
    const responsive = {
        0: { items: 1 },
        568: { items: 2 },
        1024: { items: 3 },
    };
    
    const items = [
        <div className="item" data-value="1">
            <Card className='card-content' style={{ width: '18rem' }}>
                <Card.Img variant="top" src={AdrianaSantos} className='img-carousel-equipe'/>
                <Card.Body>
                    <Card.Title className="card-titulo-equipe">Adriana Santos</Card.Title>
                    <MDBBtn className="btn-insta-locutores" href='https://www.instagram.com/adrianasanttos_fm/' target='_blank'>
                        <MDBIcon size='lg' fab icon='instagram' />
                    </MDBBtn>
                </Card.Body>
            </Card>
        </div>,
        <div className="item" data-value="2">
            <Card className='card-content' style={{ width: '18rem' }}>
                <Card.Img variant="top" src={AnaDultra} className='img-carousel-equipe'/>
                <Card.Body>
                    <Card.Title className="card-titulo-equipe">Ana Clara Dultra</Card.Title>
                    <MDBBtn className="btn-insta-locutores" href='https://www.instagram.com/anaclaradultraoficial/' target='_blank'>
                        <MDBIcon size='lg' fab icon='instagram' />
                    </MDBBtn>
                </Card.Body>
            </Card>
        </div>,
        <div className="item" data-value="3">
            <Card className='card-content' style={{ width: '18rem' }}>
                <Card.Img variant="top" src={FelipeFrancisco} className='img-carousel-equipe'/>
                <Card.Body>
                    <Card.Title className="card-titulo-equipe">Felipe Francisco</Card.Title>
                    <MDBBtn className="btn-insta-locutores" href='https://www.instagram.com/felipefranciscofm/' target='_blank'>
                        <MDBIcon size='lg' fab icon='instagram' />
                    </MDBBtn>
                </Card.Body>
            </Card>
        </div>,
        <div className="item" data-value="5">
            <Card className='card-content' style={{ width: '18rem' }}>
                <Card.Img variant="top" src={RaiHenrique} className='img-carousel-equipe'/>
                <Card.Body>
                    <Card.Title className="card-titulo-equipe">Raí Henrique</Card.Title>
                    <MDBBtn className="btn-insta-locutores" href='https://www.instagram.com/raihenriquecs/' target='_blank'>
                        <MDBIcon size='lg' fab icon='instagram' />
                    </MDBBtn>
                </Card.Body>
            </Card>
        </div>,
        <div className="item" data-value="5">
            <Card className='card-content' style={{ width: '18rem' }}>
                <Card.Img variant="top" src={TatiDomingues} className='img-carousel-equipe'/>
                <Card.Body>
                    <Card.Title className="card-titulo-equipe">Tati Domingues</Card.Title>
                    <MDBBtn className="btn-insta-locutores" href='https://www.instagram.com/tatidomingues__/' target='_blank'>
                        <MDBIcon size='lg' fab icon='instagram' />
                    </MDBBtn>
                </Card.Body>
            </Card>
        </div>,
    ];
    
    const CustomPrevButton = ({ isDisabled }) => {
        return (
            <button disabled={isDisabled} type="button" className='btn-carousel-equipe'>
                <MDBIcon fas icon="chevron-left" />
            </button>
        );
    };
    
    const CustomNextButton = ({ isDisabled }) => {
        return (
            <button disabled={isDisabled} type="button" className='btn-carousel-equipe'>
                <MDBIcon fas icon="chevron-right" />
            </button>
        );
    };
    
    return(
        <AliceCarousel
            mouseTracking
            items={items}
            responsive={responsive}
            activeIndex={0}
            disableDotsControls
            renderPrevButton={CustomPrevButton}
            renderNextButton={CustomNextButton}
        />
    );
}