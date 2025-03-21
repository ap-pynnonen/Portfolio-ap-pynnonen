import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import "./styles.css";

const Contact = () => {

    const PaddR = "10%";
    const PaddL = "10%";
    const PaddTop = "30px";
    const PaddBot = "30px";
    const TitleFontSize = "30px";
    const TextFontSize = "20px";

    return(
        <Container>
            <Row>
                <Col xs={1}></Col>
                <Col xs={10}>
                    <Card bg='dark'>
                        <Card.Body style={{color: 'white', paddingTop: PaddTop, paddingBottom: PaddBot}}>
                            <Card.Title style={{paddingRight: PaddR, paddingLeft: PaddL, fontSize: TitleFontSize}}>Contact</Card.Title>
                            <Card.Text style={{paddingRight: PaddR, paddingLeft: PaddL, fontSize: TextFontSize}}>Email: ap.pynnonen@gmail.com</Card.Text>
                            <Card.Text style={{paddingRight: PaddR, paddingLeft: PaddL, fontSize: TextFontSize}}>LinkedIN: <a href='https://linkedin.com/in/aleksi-pynnönen-1b2940205'>Aleksi Pynnönen</a></Card.Text>
                            <Card.Text style={{paddingRight: PaddR, paddingLeft: PaddL, fontSize: TextFontSize}}>Git: <a href='https://github.com/ap-pynnonen?tab=repositories'>repositories</a></Card.Text>
                            <Card.Text style={{paddingRight: PaddR, paddingLeft: PaddL, fontSize: TextFontSize}}>Phone: 0404148775</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={1}></Col>
            </Row>
        </Container>
    );
}

export default Contact;