import { Col, Container, Image, Row } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Header from "../../Components/Header/index";
import Footer from "../../Components/Footer";
import './../../style.css'
import './style.css';
import Logo from './../../Assets/MACAUBAS-FM-300x102 LOGO.png';
import { Card } from 'flowbite-react';
import { useState } from "react";
import { useEffect } from "react";

import AdrianaSantos from './../../Assets/Fotos Equipe/Adriana Santos.jpg';
import AnaDultra from './../../Assets/Fotos Equipe/Ana Clara Dultra.jpg';
import FelipeFrancisco from './../../Assets/Fotos Equipe/Felipe Francisco.jpg';
import RaiHenrique from './../../Assets/Fotos Equipe/Raí Henrique.jpg';
import TatiDomingues from './../../Assets/Fotos Equipe/Tati Domingues.jpg';
import NaliPereira from  './../../Assets/Fotos Equipe/Nali Pereira.jpg'

function Sobre() {

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
                <h1 className="titulos-home">A RÁDIO</h1>
                <p className="p-sobre">
                Dia 25 de fevereiro de 1986 chegava ao município de Macaúbas a Rádio fm macaubense LTDA. O som do meu sertão, com o intuito de levar alegria, música e informação a sociedade, contando com uma enorme abrangência de sinal, chegando a mais de 20 cidades.
                Em 2019 reformulamos toda nossa identidade visual, com nova direção, novas programações, novos locutores, novo site, novo aplicativo, tudo novo! Mas, com o mesmo compromisso de sempre com você ouvinte. Passamos a estar com você onde você for! A final são 36 anos no ar, mantendo o primeiro lugar em audiência!
                36 anos lhe fazendo companhia e parte do seu dia a dia! E com 36 anos de história temos que agradecer a você ouvinte, que faz nossa rádio líder em audiência! Obrigado ouvintes e parceiros da Macaúbas FM 103,9!
                36 anos! Com você, onde você for!
                </p>
              </Col>
            </Row>
            <Row>
              <Col className="faixa-azul-sobre">
                <img className="img-faixa" src={Logo} height={120}/>
                <p className="P-BANNER-SOBRE">COM VOCÊ ONDE VOCÊ FOR!</p>
              </Col>
            </Row>
            <Row>
              <Col>            
                <h1 className="titulos-home">Nossa Equipe</h1>
                <Row lg={12}>
                  <Col className="col-cards-sobre">
                    <Card className="max-w-sm card-equipe-sobre">
                      <div className="flex flex-col items-center pb-10">
                        <Image
                          alt="Bonnie image"
                          src={NaliPereira}
                          width="100"
                          className="img-equipe"
                        />
                        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Nali Pereira</h5>
                        <span className="text-sm text-gray-500 dark:text-gray-400">Gerência</span>
                      </div>
                    </Card>
                  </Col>
                  <Col className="col-cards-sobre">
                    <Card className="max-w-sm card-equipe-sobre">
                      <div className="flex flex-col items-center pb-10">
                        <Image
                          alt="Bonnie image"
                          src={AdrianaSantos}
                          width="100"
                          className="img-equipe"
                        />
                        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Adriana Santos</h5>
                        <span className="text-sm text-gray-500 dark:text-gray-400">Locutora</span>
                      </div>
                    </Card>
                  </Col>
                  <Col className="col-cards-sobre">
                    <Card className="max-w-sm card-equipe-sobre">
                      <div className="flex flex-col items-center pb-10">
                        <Image
                          alt="Bonnie image"
                          src={AnaDultra}
                          width="100"
                          className="img-equipe"
                        />
                        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Ana Clara Dultra</h5>
                        <span className="text-sm text-gray-500 dark:text-gray-400">Locutora</span>
                      </div>
                    </Card>
                  </Col>
                </Row>
                <Row lg={12}>
                  <Col className="col-cards-sobre">
                    <Card className="max-w-sm card-equipe-sobre">
                      <div className="flex flex-col items-center pb-10">
                        <Image
                          alt="Bonnie image"
                          src={FelipeFrancisco}
                          width="100"
                          className="img-equipe"
                        />
                        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Felipe Francisco</h5>
                        <span className="text-sm text-gray-500 dark:text-gray-400">Locutor</span>
                      </div>
                    </Card>
                  </Col>
                  <Col className="col-cards-sobre">
                    <Card className="max-w-sm card-equipe-sobre">
                      <div className="flex flex-col items-center pb-10">
                        <Image
                          alt="Bonnie image"
                          src={RaiHenrique}
                          width="100"
                          className="img-equipe"
                        />
                        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Raí Henrique</h5>
                        <span className="text-sm text-gray-500 dark:text-gray-400 locutor">Locutor - Bacharel em Comunicação Social Rádio e TV</span>
                      </div>
                    </Card>
                  </Col>
                  <Col className="col-cards-sobre">
                    <Card className="max-w-sm card-equipe-sobre">
                      <div className="flex flex-col items-center pb-10">
                        <Image
                          alt="Bonnie image"
                          src={TatiDomingues}
                          width="100"
                          className="img-equipe"
                        />
                        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Tati Domingues</h5>
                        <span className="text-sm text-gray-500 dark:text-gray-400">Locutora</span>
                      </div>
                    </Card>
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

export default Sobre;
