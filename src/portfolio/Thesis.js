import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import "../styles.css";
import Image from 'react-bootstrap/Image';
import Kartta_datapisteet from './img/Kartta_datapisteet.JPG'
import Graafi1 from './img/Graafi_ajoneuvot&nopeudet.JPG'
import Graafi2 from './img/Graafi_ajoneuvot&nopeudet2.JPG'
import Graafi3 from './img/Graafi_ajoneuvot&nopeudet3.JPG'
import { useLocalization } from '../LocalizationProvider';

const Thesis = (props) => {
    const { t } = useLocalization();
    const imageWidth = 1200;
    const imageHeight = 500;

    return (
        <Container>
            <Row>
                <Col xs={props.ColSize[0]}></Col>
                <Col xs={props.ColSize[1]}>
                    <Card bg='dark'>
                        <Card.Body style={{color: 'white', paddingTop: props.PaddTop, paddingBottom: props.PaddBot}}>
                            <Card.Title style={{paddingRight: props.PaddR, paddingLeft: props.PaddL, fontSize: props.TitleFontSize}}>{t("portfolio.thesis")}</Card.Title>
                            <Card.Text style={{paddingRight: props.PaddR, paddingLeft: props.PaddL, fontSize: props.TextFontSize}}>{t("portfolio.thesispara1")}</Card.Text>
                            <Card.Text style={{paddingRight: props.PaddR, paddingLeft: props.PaddL, fontSize: props.TextFontSize}}>{t("portfolio.thesispara2")}</Card.Text>
                            <Card.Text style={{paddingRight: props.PaddR, paddingLeft: props.PaddL, fontSize: props.TextFontSize}}>{t("portfolio.thesispara3")}</Card.Text>
                            <Card.Text style={{paddingRight: props.PaddR, paddingLeft: props.PaddL, fontSize: props.TextFontSize}}>{t("portfolio.thesispara4")}</Card.Text>
                            <Image src={Kartta_datapisteet} style={{paddingRight: props.PaddR, paddingLeft: props.PaddL, paddingBottom: "10px"}} width={imageWidth} height={imageHeight} />
                            <Image src={Graafi1} style={{paddingRight: props.PaddR, paddingLeft: props.PaddL, paddingBottom: "10px"}} width={imageWidth} height={imageHeight} />
                            <Image src={Graafi2} style={{paddingRight: props.PaddR, paddingLeft: props.PaddL, paddingBottom: "10px"}} width={imageWidth} height={imageHeight} />
                            <Image src={Graafi3} style={{paddingRight: props.PaddR, paddingLeft: props.PaddL}} width={imageWidth} height={imageHeight} />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={props.ColSize[0]}></Col>
            </Row>
        </Container>
    );
}

export default Thesis;