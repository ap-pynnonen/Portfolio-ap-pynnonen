import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import "./styles.css";
import Image from 'react-bootstrap/Image';
import portrait from './img/me.PNG';

const Home = (props) => {
    return(
        <Container>
            <Row>
                <Col xs={1}></Col>
                <Col xs={10}>
                    <Card bg='dark'>
                        <Card.Body style={{color: 'white', paddingTop: props.PaddTop, paddingBottom: props.PaddBot}}>
                            <Card.Title style={{paddingRight: props.PaddR, paddingLeft: props.PaddL, fontSize: props.TitleFontSize}}>Aleksi Pynnönen</Card.Title>
                            <Card.Text style={{paddingRight: props.PaddR, paddingLeft: props.PaddL, fontSize: props.TextFontSize}}><b>Web developer</b></Card.Text>
                            <Image src={portrait} style={{paddingRight: props.PaddR, paddingLeft: props.PaddL, fontSize: props.TextFontSize}}/>
                            <Card.Text style={{paddingRight: props.PaddR, paddingLeft: props.PaddL, paddingTop: "20px", fontSize: props.TextFontSize}}> I am eager to learn new skills, use new and existing skills for 
                            work tasks. I like being able to advance work tasks and solve 
                            problems regarding work tasks. As an employee I adapt to 
                            working independently and in a group. I am interested in utilizing 
                            and using AI.
                            </Card.Text>
                            <Card.Text style={{paddingRight: props.PaddR, paddingLeft: props.PaddL, paddingTop: "20px", fontSize: props.TextFontSize}}> My more familiar programming languages are JavaScript and its library React 
                            that I have used for a couple of years in different Software projects like Thesis, 
                            practical trainings and personal projects. Practical trainings have given me the 
                            opportunity to get familiar with and use Git and TypeScript programming.
                            </Card.Text>
                            <Card.Text style={{paddingRight: props.PaddR, paddingLeft: props.PaddL, paddingTop: "20px", fontSize: props.TextFontSize}}>  I have a basic understanding of responsive design and REST API. I 
                            have also advanced my skills after studies with FullstackOpen exercises 
                            bringing together React front-end, NodeJS backend and REST API into one 
                            fullstack entity. Also Microsoft Career Bootcamp in where I got familiar with 
                            Azure and AI in which I am interested in learning more and using more.
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