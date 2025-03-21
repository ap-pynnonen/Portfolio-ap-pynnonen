import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import "../styles.css";


const Practicaltraining2 = (props) => {
    return (
        <Container>
            <Row>
                <Col xs={props.ColSize[0]}></Col>
                <Col xs={props.ColSize[1]}>
                    <Card bg='dark'>
                        <Card.Body style={{color: 'white', paddingTop: props.PaddTop, paddingBottom: props.PaddBot}}>
                            <Card.Title style={{paddingRight: props.PaddR, paddingLeft: props.PaddL, fontSize: props.TitleFontSize}}>Practical training Neuwo | 1 Month</Card.Title>
                            <Card.Text style={{paddingRight: props.PaddR, paddingLeft: props.PaddL, fontSize: props.TextFontSize}}>The main task for practical training at Neuwo was to edit Neuwo's UI. Neuwo wanted their UI to be made
                            more practical and better looking. The task consisted of editing the UI for multilayered (probably N-ary Tree) Tree data structure to show the three layers side by side.
                             The data shown should be changed depending on which of the layers data was selected.</Card.Text>
                            <Card.Text style={{paddingRight: props.PaddR, paddingLeft: props.PaddL, fontSize: props.TextFontSize}}>Practical training included the use of technologies such as React, TypeScript, CSS and Github.
                             </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={props.ColSize[0]}></Col>
            </Row>
        </Container>
    );
}

export default Practicaltraining2;