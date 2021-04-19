import React from 'react'
import { Button, Jumbotron, Row, Col } from 'react-bootstrap';

export default function FCMainPost(props) {

    const divStyle = {
        backgroundImage: 'url(' + props.img + ')',

        backgroundSize: 'cover',
        overflow: 'hidden',
    };

    var myArray = props.id.Body1.split('');
    myArray = myArray.slice(0,125)
    myArray = myArray.concat("...")

    return (
        <div>
            <hr style={{ backgroundColor: '#04b8a5', height: 1}}></hr>
            <div className="container">
                <Jumbotron style={divStyle}  className="bg-cover">
                    <Row>
                        <Col>
                        <div className="mainpostdiv" >
                        <h3 className="mainposttitle">{props.id.Title}</h3>
                        <br/>
                            <p className="mainposttitle">
                            {myArray}
                            </p>
                            <p>
                                <Button variant="primary">קרא עוד</Button>
                            </p>
                        </div>
                        </Col>
                        <Col>
                        </Col>
                        <Col>
                        </Col>
                    </Row>
                </Jumbotron>
                <hr style={{ backgroundColor: 'white', height: 1.2}}></hr>
              

            </div>
        </div>
    )
}
