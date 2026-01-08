import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import "./styles.css";
import Image from 'react-bootstrap/Image';
import portrait from './img/me.PNG';
import { useLocalization } from './LocalizationProvider';

const Home = (props) => {
    const { t } = useLocalization();
    return(
        <Container>
            <Row>
                <Col xs={1}></Col>
                <Col xs={10}>
                    <Card bg='dark'>
                        <Card.Body style={{color: 'white', paddingTop: props.PaddTop, paddingBottom: props.PaddBot}}>
                            <Card.Title style={{paddingRight: props.PaddR, paddingLeft: props.PaddL, fontSize: props.TitleFontSize}}>Aleksi Pynnönen</Card.Title>
                            <Card.Text style={{paddingRight: props.PaddR, paddingLeft: props.PaddL, fontSize: props.TextFontSize}}><b>{t('home.role')}</b></Card.Text>
                            <Image src={portrait} style={{paddingRight: props.PaddR, paddingLeft: props.PaddL, fontSize: props.TextFontSize}}/>
                            <Card.Text style={{paddingRight: props.PaddR, paddingLeft: props.PaddL, paddingTop: "20px", fontSize: props.TextFontSize}}> {t('home.para1')}
                            </Card.Text>
                            <Card.Text style={{paddingRight: props.PaddR, paddingLeft: props.PaddL, paddingTop: "20px", fontSize: props.TextFontSize}}> {t('home.para2')}
                            </Card.Text>
                            <Card.Text style={{paddingRight: props.PaddR, paddingLeft: props.PaddL, paddingTop: "20px", fontSize: props.TextFontSize}}>  {t('home.para3')}
                            </Card.Text>
                            <Card.Text style={{paddingRight: props.PaddR, paddingLeft: props.PaddL, fontSize: props.TextFontSize}}></Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={1}></Col>
            </Row>
        </Container>
    );
}

export default Home;