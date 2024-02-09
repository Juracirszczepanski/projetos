import './../../style.css';
import './style.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon, MDBBtn } from 'mdb-react-ui-kit';
import Logo from './../../Assets/MACAUBAS-FM-300x102 LOGO.png';
import Logo_playStore from './../../Assets/ANDROID.png';
import Logo_AppStore from './../../Assets/IOS.png';
import React from 'react';

export default function Footer(){

    return(
    <MDBFooter className='Footer text-center text-lg-start'>
        <section>
            <MDBContainer className='text-center text-md-start mt-5'>
                <MDBRow className='row-footer'>
                    <MDBCol md="4" lg="3" xl="3" className='logo-footer mx-auto'>
                        <img src={Logo} width={180}/>
                    </MDBCol>
                    <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0'>
                    <p>
                        <MDBIcon icon="home" className="me-2" />
                        Rua Dr. Vital Soares, Macaúbas – BA, CEP: 46500-000
                    </p>
                    <p>
                        <MDBIcon icon="envelope" className="me-3" />
                        macaubasfmproducao@hotmail.com
                    </p>
                    <p>
                        <MDBIcon icon="phone" className="me-3" /> +55 (77) 3473-2589
                    </p>
                    </MDBCol>
                    <MDBCol md="4" lg="3" xl="3" className='logo-footer mx-auto'>
                        <h6 className='text-uppercase fw-bold mb-4'>Baixe Nosso App</h6>
                        <a href='https://play.google.com/store/apps/details?id=hoostcomv2.macaubas' target='_blank' className='text-reset mb-4'>
                            <img src={Logo_playStore} width={160}/>
                        </a>
                        <a href='https://apps.apple.com/br/app/r%C3%A1dio-maca%C3%BAbas-fm/id1482288445' target='_blank' className='text-reset mb-4'>
                            <img src={Logo_AppStore} width={160}/>
                        </a>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </section>
        <section className='redes-sociais-container' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
            <div className='text-center p-4'>
                <p className='p-footer'>
                    © Rádio Macaúbas FM – 103,9 Todos os direitos reservados
                </p>
            </div>
            <div className='text-center p-4'>
                <MDBBtn outline color="light" floating className='m-2' href='https://www.youtube.com/@macaubasfmoficial1636' target='_blank' role='button'>
                    <MDBIcon fab icon='youtube' />
                </MDBBtn>
                <MDBBtn outline color="light" floating className='m-2' href='https://www.instagram.com/macaubasfmoficial/' target='_blank' role='button'>
                    <MDBIcon fab icon='instagram' />
                </MDBBtn>
                <MDBBtn outline color="light" floating className='m-2' href='https://wa.me/message/74Z3AQ7EJKTSG1' target='_blank' role='button'>
                    <MDBIcon fab icon='whatsapp' />
                </MDBBtn>
            </div>
        </section>
    </MDBFooter>
    )
}