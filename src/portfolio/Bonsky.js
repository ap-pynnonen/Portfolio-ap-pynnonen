import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import "../styles.css";
import Image from 'react-bootstrap/Image';
import rule1 from './img/rule1.PNG'
import rule2 from './img/rule2.PNG'

const Bonsky = (props) => {

    const imageWidth = 1200;
    const imageHeight = 500;

    return (
        <Container>
            <Row>
                <Col xs={props.ColSize[0]}></Col>
                <Col xs={props.ColSize[1]}>
                    <Card bg='dark'>
                        <Card.Body style={{color: 'white', paddingTop: props.PaddTop, paddingBottom: props.PaddBot}}>
                            <Card.Title style={{paddingRight: props.PaddR, paddingLeft: props.PaddL, fontSize: props.TitleFontSize}}>Bonky Digital OY student customer project</Card.Title>
                            <Card.Text style={{paddingRight: props.PaddR, paddingLeft: props.PaddL, fontSize: props.TextFontSize}}>Student customer project for Bonsky Digital OY was done as project course. Students would make 4-5 people student groups and select topics that companies had given to University of Applied Sciences.
                             The companies had a contact person working with the student group with the given topic.</Card.Text>
                            <Card.Text style={{paddingRight: props.PaddR, paddingLeft: props.PaddL, fontSize: props.TextFontSize}}>My student group selected Bonsky Digital OY's topic of creating web application to fetch JSON files, file data display, search through data, data editin and data deletion.</Card.Text>
                            <Card.Text style={{paddingRight: props.PaddR, paddingLeft: props.PaddL, fontSize: props.TextFontSize}}>The technologies I ended up using in the project were Figma for the prototypes, CSS and SASS for visual, React and Javascript for frontend coding.
                             My main contributions to project were Accordion component, Breadcrumbs component, Info text component, data deletion option, connecting Routes and testing application and checking if there were any areas to improve.</Card.Text>
                            <Image src={rule1} style={{paddingRight: props.PaddR, paddingLeft: props.PaddL}} width={imageWidth} height={imageHeight} />
                            <Image src={rule2} style={{paddingRight: props.PaddR, paddingLeft: props.PaddL}} width={imageWidth} height={imageHeight} />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={props.ColSize[0]}></Col>
            </Row>
        </Container>
    );
}

export default Bonsky;