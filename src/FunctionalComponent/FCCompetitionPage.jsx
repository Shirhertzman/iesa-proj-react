import React from 'react'
import { Button, Jumbotron, Col, Row } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
import FCFooter from '../FunctionalComponent/FCFooter';

export default function FCCompetitionPage(props) {
    var logo = "../" + props.Competition.Logo
    return (
        <div>
            <Jumbotron>
                <h1>{props.Competition.Competitionname}</h1>

                <div>
                    <Image src={logo} style={{ height: '180px', width: '100%' }} fluid />
                </div>
                <p>{props.Competition.Body}</p>
                <h4>:תחילת התחרות</h4>
                <p>{props.Competition.Startdate}</p>
                <h4>:סיום התחרות</h4>
                <p>{props.Competition.Enddate}</p>
                <h4>:פרסים</h4>
                <Row>
                    <Col>#1</Col>
                    <Col>#2</Col>
                    <Col>#3</Col>
                </Row>
                <Row>
                    <Col>{props.Competition.Prize1}</Col>
                    <Col>{props.Competition.Prize2}</Col>
                    <Col>{props.Competition.Price3}</Col>
                </Row>
                <br />
                <h4>:מיקום</h4>
                <p>{props.Competition.Address1 ? props.Competition.Address1 : "Online"}</p>
                <br />
                <h4>:שידור</h4>
                <iframe width="100%" height="250" src="https://www.youtube.com/embed/-1m9BN2f5Vg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                <br />
                <br />

                <Button variant="primary" href={props.Competition.Linkforregistration}>!להרשמה לתחרות</Button>

            </Jumbotron>

            <FCFooter> </FCFooter>
           
        </div>
    )
}
