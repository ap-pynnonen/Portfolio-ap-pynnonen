import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import "./styles.css";

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
    return (
        <Container>
        <Row>
            <Col xs={1}></Col>
            <Col xs={10}>
            <Card bg='dark'>
                <Card.Body style={{color: 'white', paddingTop: props.PaddTop, paddingBottom: props.PaddBot}}>
                    <Card.Title style={{paddingRight: props.PaddR, paddingLeft: props.PaddL, fontSize: props.TitleFontSize}}>My hobbies</Card.Title>
                    <Card.Text style={{paddingRight: props.PaddR, paddingLeft: props.PaddL, fontSize: props.TextFontSize}}></Card.Text>
                    <Card.Title style={{paddingRight: props.PaddR, paddingLeft: props.PaddL, fontSize: props.TitleFontSize}}>Drawing</Card.Title>
                    <Card.Text  style={{paddingRight: props.PaddR, paddingLeft: props.PaddL, fontSize: props.TextFontSize}}>I have attended the City of Jyväskylä School of Fine Arts for a total of 4 years doing basic studies in fine arts an part of advanced studies.
                     I have studied art as optional study in primary school and 4 courses in upper secondary school.
Pictures below are a part of my free time art collection made using pencil, marker pen and photoshop.</Card.Text>
                    <DrawingImages />
                    <Card.Text style={{paddingRight: props.PaddR, paddingLeft: props.PaddL, fontSize: props.TextFontSize}}></Card.Text>
                    <Card.Title style={{paddingRight: props.PaddR, paddingLeft: props.PaddL, fontSize: props.TitleFontSize}}>Cycling</Card.Title>
                    <Card.Text style={{paddingRight: props.PaddR, paddingLeft: props.PaddL, fontSize: props.TextFontSize}}>Cycling is my favorite form of excercise. I cycle through all seasons.</Card.Text>
                    <Card.Title style={{paddingRight: props.PaddR, paddingLeft: props.PaddL, fontSize: props.TitleFontSize}}>Gaming</Card.Title>
                    <Card.Text style={{paddingRight: props.PaddR, paddingLeft: props.PaddL, fontSize: props.TextFontSize}}>Gaming is my favorite way to spend free time. Gaming lets you experience many stories, explore different worlds, enjoy music and coperate with other players.</Card.Text>
                    <Card.Title style={{paddingRight: props.PaddR, paddingLeft: props.PaddL, fontSize: props.TitleFontSize}}>3D modeling</Card.Title>
                    <Card.Text style={{paddingRight: props.PaddR, paddingLeft: props.PaddL, fontSize: props.TextFontSize}}>Game level 3D modeling and Blender 3D modeling. I have developed game levels with Valves Source game engines Hammer level editor to make game level for Counter strike global offensive (CSGO) and Garry's mod.
                    With Blender I have made 3D models for a DayZ mod for buildings.</Card.Text>
                    <Card.Title style={{paddingRight: props.PaddR, paddingLeft: props.PaddL, fontSize: props.TitleFontSize}}>Summer hobbies</Card.Title>
                    <Card.Text style={{paddingRight: props.PaddR, paddingLeft: props.PaddL, fontSize: props.TextFontSize}}>Summer hobbies disc golf and archery. </Card.Text>
                </Card.Body>
            </Card>
            </Col>
            <Col xs={1}></Col>
        </Row>
    </Container>


    );
}

export default About;