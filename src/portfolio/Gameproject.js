import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import "../styles.css";

const Gameproject = (props) => {
    return (
        <Container>
            <Row>
                <Col xs={props.ColSize[0]}></Col>
                <Col xs={props.ColSize[1]}>
                    <Card bg='dark'>
                        <Card.Body style={{color: 'white', paddingTop: props.PaddTop, paddingBottom: props.PaddBot}}>
                            <Card.Title style={{paddingRight: props.PaddR, paddingLeft: props.PaddL, fontSize: props.TitleFontSize}}>Game project course</Card.Title>
                            <Card.Text style={{paddingRight: props.PaddR, paddingLeft: props.PaddL, fontSize: props.TextFontSize}}>Game project course was for students to make a game using modern game engines like Unity or Unreal engine. My group of 4 students chose Unity for game development. Our group decided on a 3D rogue like game with procedurally generated castle dungeon as the setting.</Card.Text>
                            <Card.Text style={{paddingRight: props.PaddR, paddingLeft: props.PaddL, fontSize: props.TextFontSize}}>My role on our group was to make most of 3D models and some animations for them and the game trailer. Some 3D models like the player, normal skeleton enemies were free basic weapons were free to download and use from Unity store. The games final boss was custom made and animated by me. I also contributed by making furniture for the game and finding textures for walls and floors.</Card.Text>
                            <Card.Text style={{paddingRight: props.PaddR, paddingLeft: props.PaddL, fontSize: props.TextFontSize}}>Blender was used for all the 3D models I made. Most models I worked on were basic furniture like chairs, tables, barrels, doors and pillars. More complicated models I worked on were torch, scythe and final boss grim reaper. Grim reapers animations were made using Blender.</Card.Text>
                            <div style={{paddingRight: props.PaddR, paddingLeft: props.PaddL}}>
                            <iframe width="960" height="600" src="https://www.youtube.com/embed/kRZSKgo0HZM?si=XSiKZ2T_nx_yGEMD"
                             title="YouTube video player" frameborder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                               referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={props.ColSize[0]}></Col>
            </Row>
        </Container>
    );
}

export default Gameproject;