import 'bootstrap/dist/css/bootstrap.min.css';
import './../../style.css';
import './style.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import React from 'react';
// import Box from '@mui/material/Box';
// // import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";
// import Typography from '@mui/material/Typography';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
// import { MDBBtn } from 'mdb-react-ui-kit';
import { Col, Row } from 'react-bootstrap';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardFooter, MDBCardHeader, MDBCardImage, MDBCardSubTitle, MDBCardTitle } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

export default function CardsMusicas() {

    return (
      <Col className="linha-musicas">
        <h1 className="titulos-home titulo-musicas">MÚSICAS MAIS TOCADAS</h1>
        <Row className="linha-cards-musicas" xs={12} md={8} lg={3}>
          <Col className="col-cards-musicas">
            <MDBCard className='card-musicas'>
              <MDBCardHeader className="card-header-musicas">
                <MDBCardTitle className="card-title-musicas">1</MDBCardTitle>
                <MDBCardSubTitle>Music Name - Singer</MDBCardSubTitle>
              </MDBCardHeader>
              <MDBCardBody className="card-body-musicas">
                <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/111.webp' fluid alt='...' width={200}/>
              </MDBCardBody>
              <MDBCardFooter>
                <Link className='btn-musicas' aria-label="play/pause">
                    <PlayArrowIcon sx={{ height: 36, width: 36 }} />
                      Ouça Agora
                </Link>
              </MDBCardFooter>
            </MDBCard>
          </Col>
          <Col className="col-cards-musicas">
            <MDBCard className='card-musicas'>
              <MDBCardHeader className="card-header-musicas">
                <MDBCardTitle className="card-title-musicas">2</MDBCardTitle>
                <MDBCardSubTitle>Music Name - Singer</MDBCardSubTitle>
              </MDBCardHeader>
              <MDBCardBody className="card-body-musicas">
                <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/111.webp' fluid alt='...' width={200}/>
              </MDBCardBody>
              <MDBCardFooter>
                <Link className='btn-musicas' aria-label="play/pause">
                    <PlayArrowIcon sx={{ height: 36, width: 36 }} />
                      Ouça Agora
                </Link>
              </MDBCardFooter>
            </MDBCard>
          </Col>
        </Row>
        <Row className="linha-cards-musicas" xs={12} md={8} lg={3}>
          <Col className="col-cards-musicas">
            <MDBCard className='card-musicas'>
              <MDBCardHeader className="card-header-musicas">
                <MDBCardTitle className="card-title-musicas">3</MDBCardTitle>
                <MDBCardSubTitle>Music Name - Singer</MDBCardSubTitle>
              </MDBCardHeader>
              <MDBCardBody className="card-body-musicas">
                <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/111.webp' fluid alt='...' width={200}/>
              </MDBCardBody>
              <MDBCardFooter>
                <Link className='btn-musicas' aria-label="play/pause">
                    <PlayArrowIcon sx={{ height: 36, width: 36 }} />
                      Ouça Agora
                </Link>
              </MDBCardFooter>
            </MDBCard>
          </Col>
          <Col className="col-cards-musicas">
            <MDBCard className='card-musicas'>
              <MDBCardHeader className="card-header-musicas">
                <MDBCardTitle className="card-title-musicas">4</MDBCardTitle>
                <MDBCardSubTitle>Music Name - Singer</MDBCardSubTitle>
              </MDBCardHeader>
              <MDBCardBody className="card-body-musicas">
                <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/111.webp' fluid alt='...' width={200}/>
              </MDBCardBody>
              <MDBCardFooter>
                <Link className='btn-musicas' aria-label="play/pause">
                    <PlayArrowIcon sx={{ height: 36, width: 36 }} />
                      Ouça Agora
                </Link>
              </MDBCardFooter>
            </MDBCard>
          </Col>
          <Col className="col-cards-musicas">
            <MDBCard className='card-musicas'>
              <MDBCardHeader className="card-header-musicas">
                <MDBCardTitle className="card-title-musicas">5</MDBCardTitle>
                <MDBCardSubTitle>Music Name - Singer</MDBCardSubTitle>
              </MDBCardHeader>
              <MDBCardBody className="card-body-musicas">
                <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/111.webp' fluid alt='...' width={200}/>
              </MDBCardBody>
              <MDBCardFooter>
                <Link className='btn-musicas' aria-label="play/pause">
                    <PlayArrowIcon sx={{ height: 36, width: 36 }} />
                      Ouça Agora
                </Link>
              </MDBCardFooter>
            </MDBCard>
          </Col>
        </Row>
      </Col>
  );
}
