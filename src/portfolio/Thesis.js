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

const Thesis = (props) => {

    const imageWidth = 1200;
    const imageHeight = 500;

    return (
        <Container>
            <Row>
                <Col xs={props.ColSize[0]}></Col>
                <Col xs={props.ColSize[1]}>
                    <Card bg='dark'>
                        <Card.Body style={{color: 'white', paddingTop: props.PaddTop, paddingBottom: props.PaddBot}}>
                            <Card.Title style={{paddingRight: props.PaddR, paddingLeft: props.PaddL, fontSize: props.TitleFontSize}}>LAM visualization</Card.Title>
                            <Card.Text style={{paddingRight: props.PaddR, paddingLeft: props.PaddL, fontSize: props.TextFontSize}}>Bachelor’s Thesis. Bachelor’s Degree Programme in Information and
                             Communication Technology. </Card.Text>
                            <Card.Text style={{paddingRight: props.PaddR, paddingLeft: props.PaddL, fontSize: props.TextFontSize}}>The purpose of the Thesis was to visualize road traffic data collected by Fintraffic’s LAM-datapoints. The
target was to visualize the traffic volumes and speeds of road traffic and develop an application to visualize
the LAM station road traffic data. The client of the Thesis was JAMK University of Applied Sciences and
Tieto tuottamaan project.</Card.Text>
                            <Card.Text style={{paddingRight: props.PaddR, paddingLeft: props.PaddL, fontSize: props.TextFontSize}}>Visualization application was developed with JavaScript’s React framework. Finland’s map was added to the
applications main view with react-simple-maps components and LAM-datapoint markers were added to the
map. Visualization view needed to be opened and closed so that function was added to map markers. A column chart was added to visualization view with React Google charts to visualize LAM-datapoint data.
 LAM-datapoint selection was added to map markers along with automatic Digitraffic API call for data. Column
chart speed column selection was added to visualize selected speed with that driven speeds time of day.</Card.Text>
                            <Card.Text style={{paddingRight: props.PaddR, paddingLeft: props.PaddL, fontSize: props.TextFontSize}}>The targets of the Thesis were fulfilled. Compliant with requirements the application was created to
                             functionally visualize LAM stations road traffic data. The application enables observing driven speeds and
speeding of the LAM stations. It is also possible to check when the speeds were driven.</Card.Text>
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