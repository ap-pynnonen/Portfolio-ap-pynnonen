import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import "./styles.css";
import { useLocalization } from './LocalizationProvider';

import drawing1 from "./img/drawing1.PNG";
import drawing2 from "./img/drawing2.PNG";
import drawing3 from "./img/drawing3.PNG";
import drawing4 from "./img/drawing4.jpg";
import drawing5 from "./img/drawing5.jpg";
import drawing6 from "./img/drawing6.jpg";
import drawing7 from "./img/drawing7.jpg";
import drawing8 from "./img/maisema2.png";
import drawing9 from "./img/maisema4.png";

const DrawingImages = () => {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };

    const imageWidth = 800;
    const imageHeight = 600;

    return(
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item style={{textAlign: 'center'}}>
        <Image src={drawing1} width={imageWidth} height={imageHeight}/>
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{textAlign: 'center'}}> 
      <Image src={drawing2} width={imageWidth} height={imageHeight}/>
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{textAlign: 'center'}}>
      <Image src={drawing3} width={imageWidth} height={imageHeight}/>
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{textAlign: 'center'}}>
      <Image src={drawing4} width={imageWidth} height={imageHeight}/>
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{textAlign: 'center'}}>
      <Image src={drawing5} width={imageWidth} height={imageHeight}/>
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{textAlign: 'center'}}>
      <Image src={drawing6} width={imageWidth} height={imageHeight}/>
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{textAlign: 'center'}}>
      <Image src={drawing7} width={imageWidth} height={imageHeight}/>
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{textAlign: 'center'}}>
      <Image src={drawing8} width={imageWidth} height={imageHeight}/>
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{textAlign: 'center'}}>
      <Image src={drawing9} width={imageWidth} height={imageHeight}/>
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    );
}

const About = (props) => {
      const { t } = useLocalization();
    return (
        <Container>
        <Row>
            <Col xs={1}></Col>
            <Col xs={10}>
            <Card bg='dark'>
                <Card.Body style={{color: 'white', paddingTop: props.PaddTop, paddingBottom: props.PaddBot}}>
                    <Card.Title style={{paddingRight: props.PaddR, paddingLeft: props.PaddL, fontSize: props.TitleFontSize}}>{t('about.title')}</Card.Title>
                    <Card.Text style={{paddingRight: props.PaddR, paddingLeft: props.PaddL, fontSize: props.TextFontSize}}></Card.Text>
                    <Card.Title style={{paddingRight: props.PaddR, paddingLeft: props.PaddL, fontSize: props.TitleFontSize}}>{t('about.drawing')}</Card.Title>
                    <Card.Text  style={{paddingRight: props.PaddR, paddingLeft: props.PaddL, fontSize: props.TextFontSize}}>{t('about.drawingpara')}</Card.Text>
                    <DrawingImages />
                    <Card.Text style={{paddingRight: props.PaddR, paddingLeft: props.PaddL, fontSize: props.TextFontSize}}></Card.Text>
                    <Card.Title style={{paddingRight: props.PaddR, paddingLeft: props.PaddL, fontSize: props.TitleFontSize}}>{t('about.cycling')}</Card.Title>
                    <Card.Text style={{paddingRight: props.PaddR, paddingLeft: props.PaddL, fontSize: props.TextFontSize}}>{t('about.cyclingpara')}</Card.Text>
                    <Card.Title style={{paddingRight: props.PaddR, paddingLeft: props.PaddL, fontSize: props.TitleFontSize}}>{t('about.gaming')}</Card.Title>
                    <Card.Text style={{paddingRight: props.PaddR, paddingLeft: props.PaddL, fontSize: props.TextFontSize}}>{t('about.gamingpara')}</Card.Text>
                    <Card.Title style={{paddingRight: props.PaddR, paddingLeft: props.PaddL, fontSize: props.TitleFontSize}}>{t('about.3dmodeling')}</Card.Title>
                    <Card.Text style={{paddingRight: props.PaddR, paddingLeft: props.PaddL, fontSize: props.TextFontSize}}>{t('about.3dmodelingpara')}</Card.Text>
                    <Card.Title style={{paddingRight: props.PaddR, paddingLeft: props.PaddL, fontSize: props.TitleFontSize}}>{t('about.summerhobbies')}</Card.Title>
                    <Card.Text style={{paddingRight: props.PaddR, paddingLeft: props.PaddL, fontSize: props.TextFontSize}}>{t('about.summerhobbiespara')}</Card.Text>
                </Card.Body>
            </Card>
            </Col>
            <Col xs={1}></Col>
        </Row>
    </Container>


    );
}

export default About;