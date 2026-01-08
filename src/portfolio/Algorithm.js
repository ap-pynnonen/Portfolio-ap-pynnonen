import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import "../styles.css";
import Image from 'react-bootstrap/Image';
import loops from './img/javascript-loops.png'
import { useLocalization } from '../LocalizationProvider';

const Algorithm = (props) => {
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
                            <Card.Title style={{paddingRight: props.PaddR, paddingLeft: props.PaddL, fontSize: props.TitleFontSize}}>{t("portfolio.algroithms")}</Card.Title>
                            <Card.Text style={{paddingRight: props.PaddR, paddingLeft: props.PaddL, fontSize: props.TextFontSize}}>{t("portfolio.algroithmspara1")}</Card.Text>
                            <Card.Text style={{paddingRight: props.PaddR, paddingLeft: props.PaddL, fontSize: props.TextFontSize}}>{t("portfolio.algroithmspara2")}</Card.Text>
                            <Image src={loops} style={{paddingRight: props.PaddR, paddingLeft: props.PaddL}} width={imageWidth} height={imageHeight} />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={props.ColSize[0]}></Col>
            </Row>
        </Container>
    );
}

export default Algorithm;