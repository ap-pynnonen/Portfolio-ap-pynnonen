import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import "../styles.css";
import Image from 'react-bootstrap/Image';
import render1 from './img/render1.png'
import render2 from './img/render2.png'
import { useLocalization } from '../LocalizationProvider';

const Dmodel = (props) => {
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
                            <Card.Title style={{paddingRight: props.PaddR, paddingLeft: props.PaddL, fontSize: props.TitleFontSize}}>{t("portfolio.3dmodeling")}</Card.Title>
                            <Card.Text style={{paddingRight: props.PaddR, paddingLeft: props.PaddL, fontSize: props.TextFontSize}}>{t("portfolio.3dmodelingpara1")}</Card.Text>
                            <Card.Text style={{paddingRight: props.PaddR, paddingLeft: props.PaddL, fontSize: props.TextFontSize}}>{t("portfolio.3dmodelingpara2")}</Card.Text>
                            <Image src={render1} style={{paddingRight: props.PaddR, paddingLeft: props.PaddL}} width={imageWidth} height={imageHeight} />
                            <Image src={render2} style={{paddingRight: props.PaddR, paddingLeft: props.PaddL}} width={imageWidth} height={imageHeight} />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={props.ColSize[0]}></Col>
            </Row>
        </Container>
    );
}

export default Dmodel;