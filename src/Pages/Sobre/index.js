import { Col, Container, Image, ListGroup, Row } from "react-bootstrap";
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
        <p className="titulos-home">Carregando...</p>
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
                <Row md={10}>
                  <Col className="col-cards-sobre">
                    <Card className="max-w-sm card-equipe-sobre">
                      <div className="flex flex-col items-center pb-10">
                        <Image
                          alt="Bonnie image"
                          height="96"
                          src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                          width="96"
                          className="img-equipe"
                        />
                        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Bonnie Green</h5>
                        <span className="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>
                      </div>
                    </Card>
                  </Col>
                  <Col className="col-cards-sobre">
                    <Card className="max-w-sm card-equipe-sobre">
                      <div className="flex flex-col items-center pb-10">
                        <Image
                          alt="Bonnie image"
                          height="96"
                          src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                          width="96"
                          className="img-equipe"
                        />
                        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Bonnie Green</h5>
                        <span className="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>
                      </div>
                    </Card>
                  </Col>
                  <Col className="col-cards-sobre">
                    <Card className="max-w-sm card-equipe-sobre">
                      <div className="flex flex-col items-center pb-10">
                        <Image
                          alt="Bonnie image"
                          height="96"
                          src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                          width="96"
                          className="img-equipe"
                        />
                        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Bonnie Green</h5>
                        <span className="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>
                      </div>
                    </Card>
                  </Col>
                  <Col className="col-cards-sobre">
                    <Card className="max-w-sm card-equipe-sobre">
                      <div className="flex flex-col items-center pb-10">
                        <Image
                          alt="Bonnie image"
                          height="96"
                          src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                          width="96"
                          className="img-equipe"
                        />
                        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Bonnie Green</h5>
                        <span className="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>
                      </div>
                    </Card>
                  </Col>
                  <Col className="col-cards-sobre">
                    <Card className="max-w-sm card-equipe-sobre">
                      <div className="flex flex-col items-center pb-10">
                        <Image
                          alt="Bonnie image"
                          height="96"
                          src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                          width="96"
                          className="img-equipe"
                        />
                        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Bonnie Green</h5>
                        <span className="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>
                      </div>
                    </Card>
                  </Col>
                </Row>
                <Row md={10}>
                  <Col className="col-cards-sobre">
                    <Card className="max-w-sm card-equipe-sobre">
                      <div className="flex flex-col items-center pb-10">
                        <Image
                          alt="Bonnie image"
                          height="96"
                          src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                          width="96"
                          className="img-equipe"
                        />
                        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Bonnie Green</h5>
                        <span className="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>
                      </div>
                    </Card>
                  </Col>
                  <Col className="col-cards-sobre">
                    <Card className="max-w-sm card-equipe-sobre">
                      <div className="flex flex-col items-center pb-10">
                        <Image
                          alt="Bonnie image"
                          height="96"
                          src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                          width="96"
                          className="img-equipe"
                        />
                        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Bonnie Green</h5>
                        <span className="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>
                      </div>
                    </Card>
                  </Col>
                  <Col className="col-cards-sobre">
                    <Card className="max-w-sm card-equipe-sobre">
                      <div className="flex flex-col items-center pb-10">
                        <Image
                          alt="Bonnie image"
                          height="96"
                          src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                          width="96"
                          className="img-equipe"
                        />
                        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Bonnie Green</h5>
                        <span className="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>
                      </div>
                    </Card>
                  </Col>
                  <Col className="col-cards-sobre">
                    <Card className="max-w-sm card-equipe-sobre">
                      <div className="flex flex-col items-center pb-10">
                        <Image
                          alt="Bonnie image"
                          height="96"
                          src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                          width="96"
                          className="img-equipe"
                        />
                        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Bonnie Green</h5>
                        <span className="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>
                      </div>
                    </Card>
                  </Col>
                  <Col className="col-cards-sobre">
                    <Card className="max-w-sm card-equipe-sobre">
                      <div className="flex flex-col items-center pb-10">
                        <Image
                          alt="Bonnie image"
                          height="96"
                          src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                          width="96"
                          className="img-equipe"
                        />
                        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Bonnie Green</h5>
                        <span className="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>
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
