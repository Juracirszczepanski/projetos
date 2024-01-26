import 'bootstrap/dist/css/bootstrap.min.css';
import './../../style.css';
import './style.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import React from 'react';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { Col, Row } from 'react-bootstrap';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardFooter, MDBCardHeader, MDBCardImage, MDBCardSubTitle, MDBCardTitle } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

export default function CardsMusicas() {

  const musicData = [
    {
       rank: '1',
       title: 'Music Name',
       singer: 'Singer',
       imageURL: 'https://mdbootstrap.com/img/new/standard/nature/111.webp',
    },
    {
      rank: '2',
      title: 'Music Name',
      singer: 'Singer',
      imageURL: 'https://mdbootstrap.com/img/new/standard/nature/111.webp',
   },
   {
      rank: '3',
      title: 'Music Name',
      singer: 'Singer',
      imageURL: 'https://mdbootstrap.com/img/new/standard/nature/111.webp',
    },
    {
      rank: '4',
      title: 'Music Name',
      singer: 'Singer',
      imageURL: 'https://mdbootstrap.com/img/new/standard/nature/111.webp',
    },
    {
      rank: '5',
      title: 'Music Name',
      singer: 'Singer',
      imageURL: 'https://mdbootstrap.com/img/new/standard/nature/111.webp',
    },
   ];

  const firstLineMusics = musicData.slice(0, 2);
  const secondLineMusics = musicData.slice(2, 5);

    return (
      <Col className="linha-musicas">
        <h1 className="titulos-home titulo-musicas">MÚSICAS MAIS TOCADAS</h1>
        <Row className="linha-cards-musicas" xs={12} md={2} lg={3}>
        {firstLineMusics.map((music) => 
        <Col className="col-cards-musicas" key={music.rank}>
          <MDBCard className='card-musicas'>
            <MDBCardHeader className="card-header-musicas">
              <MDBCardTitle className="card-title-musicas">{music.rank}</MDBCardTitle>
              <MDBCardSubTitle>{music.title} - {music.singer}</MDBCardSubTitle>
            </MDBCardHeader>
            <MDBCardBody className="card-body-musicas">
              <MDBCardImage src={music.imageURL} fluid alt='...' width={200}/>
            </MDBCardBody>
            <MDBCardFooter>
              <Link className='btn-musicas' aria-label="play/pause">
                 <PlayArrowIcon sx={{ height: 36, width: 36 }} />
                    Ouça Agora
              </Link>
            </MDBCardFooter>
          </MDBCard>
        </Col>
      )}
    </Row>
    <Row className="linha-cards-musicas" xs={12} md={2} lg={3}>
      {secondLineMusics.map((music) => 
        <Col className="col-cards-musicas" key={music.rank}>
          <MDBCard className='card-musicas'>
            <MDBCardHeader className="card-header-musicas">
              <MDBCardTitle className="card-title-musicas">{music.rank}</MDBCardTitle>
              <MDBCardSubTitle>{music.title} - {music.singer}</MDBCardSubTitle>
            </MDBCardHeader>
            <MDBCardBody className="card-body-musicas">
              <MDBCardImage src={music.imageURL} fluid alt='...' width={200}/>
            </MDBCardBody>
            <MDBCardFooter>
              <Link className='btn-musicas' aria-label="play/pause">
                 <PlayArrowIcon sx={{ height: 36, width: 36 }} />
                    Ouça Agora
              </Link>
            </MDBCardFooter>
          </MDBCard>
        </Col>
      )}
        </Row>
      </Col>
  );
}
