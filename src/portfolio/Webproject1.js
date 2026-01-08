import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import "../styles.css";
import Image from 'react-bootstrap/Image';
import webp1 from './img/webproject1.PNG'
import webp2 from './img/webproject2.PNG'
import { useLocalization } from '../LocalizationProvider';

const Webproject1 = (props) => {
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
                            <Card.Title style={{paddingRight: props.PaddR, paddingLeft: props.PaddL, fontSize: props.TitleFontSize}}>{t("portfolio.webproject1")}</Card.Title>
                            <Card.Text style={{paddingRight: props.PaddR, paddingLeft: props.PaddL, fontSize: props.TextFontSize}}>{t("portfolio.webproject1para1")}</Card.Text>
                            <Card.Text style={{paddingRight: props.PaddR, paddingLeft: props.PaddL, fontSize: props.TextFontSize}}>{t("portfolio.webproject1para2")}</Card.Text>
                            <Image src={webp1} style={{paddingRight: props.PaddR, paddingLeft: props.PaddL}} width={imageWidth} height={imageHeight} />
                            <Image src={webp2} style={{paddingRight: props.PaddR, paddingLeft: props.PaddL}} width={imageWidth} height={imageHeight} />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={props.ColSize[0]}></Col>
            </Row>
        </Container>
    );
}

export default Webproject1;