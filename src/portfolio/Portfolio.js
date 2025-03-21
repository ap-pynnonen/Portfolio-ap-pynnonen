import React from "react";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import "../styles.css";
import Thesis from "./Thesis"
import Bonsky from './Bonsky';
import Algorithm from './Algorithm';
import Gameproject from './Gameproject';
import Dmodel from './Dmodel';
import Webproject2 from './Webproject2';
import Webproject1 from './Webproject1';
import Fireball from './Fireball';
import Operationmetro from './Operationmetro';
import Practicaltraining1 from './Practicaltraining1';
import Practicaltraining2 from './Practicaltraining2';

const Portfoliodefault = (props) => {

    const ColSize = [0, 12];

    return (
        <Container>
            <Row>
                <Col xs={1}></Col>
                <Col xs={10}>
                    <Card bg="dark">
                        <Card.Body style={{color: 'white', paddingTop: props.PaddTop, paddingBottom: props.PaddBot }}>
                            <Card.Title style={{paddingRight: props.PaddR, paddingLeft: props.PaddL, fontSize: props.TitleFontSize}}>Portfolio</Card.Title>
                            <Thesis PaddR={props.PaddR} PaddL={props.PaddL} PaddTop={props.PaddTop} PaddBot={props.PaddBot} TitleFontSize={props.TitleFontSize} TextFontSize={props.TextFontSize} ColSize={ColSize}/>
                            <Practicaltraining2 PaddR={props.PaddR} PaddL={props.PaddL} PaddTop={props.PaddTop} PaddBot={props.PaddBot} TitleFontSize={props.TitleFontSize} TextFontSize={props.TextFontSize} ColSize={ColSize}/>
                            <Practicaltraining1 PaddR={props.PaddR} PaddL={props.PaddL} PaddTop={props.PaddTop} PaddBot={props.PaddBot} TitleFontSize={props.TitleFontSize} TextFontSize={props.TextFontSize} ColSize={ColSize}/>
                            <Gameproject PaddR={props.PaddR} PaddL={props.PaddL} PaddTop={props.PaddTop} PaddBot={props.PaddBot} TitleFontSize={props.TitleFontSize} TextFontSize={props.TextFontSize} ColSize={ColSize}/>
                            <Bonsky PaddR={props.PaddR} PaddL={props.PaddL} PaddTop={props.PaddTop} PaddBot={props.PaddBot} TitleFontSize={props.TitleFontSize} TextFontSize={props.TextFontSize} ColSize={ColSize}/>
                            <Algorithm PaddR={props.PaddR} PaddL={props.PaddL} PaddTop={props.PaddTop} PaddBot={props.PaddBot} TitleFontSize={props.TitleFontSize} TextFontSize={props.TextFontSize} ColSize={ColSize}/>
                            <Dmodel PaddR={props.PaddR} PaddL={props.PaddL} PaddTop={props.PaddTop} PaddBot={props.PaddBot} TitleFontSize={props.TitleFontSize} TextFontSize={props.TextFontSize} ColSize={ColSize}/>
                            <Fireball PaddR={props.PaddR} PaddL={props.PaddL} PaddTop={props.PaddTop} PaddBot={props.PaddBot} TitleFontSize={props.TitleFontSize} TextFontSize={props.TextFontSize} ColSize={ColSize}/>
                            <Webproject2 PaddR={props.PaddR} PaddL={props.PaddL} PaddTop={props.PaddTop} PaddBot={props.PaddBot} TitleFontSize={props.TitleFontSize} TextFontSize={props.TextFontSize} ColSize={ColSize}/>
                            <Webproject1 PaddR={props.PaddR} PaddL={props.PaddL} PaddTop={props.PaddTop} PaddBot={props.PaddBot} TitleFontSize={props.TitleFontSize} TextFontSize={props.TextFontSize} ColSize={ColSize}/>
                            <Operationmetro PaddR={props.PaddR} PaddL={props.PaddL} PaddTop={props.PaddTop} PaddBot={props.PaddBot} TitleFontSize={props.TitleFontSize} TextFontSize={props.TextFontSize} ColSize={ColSize}/>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={1}></Col>
            </Row>
        </Container>
    );
}

export default Portfoliodefault;