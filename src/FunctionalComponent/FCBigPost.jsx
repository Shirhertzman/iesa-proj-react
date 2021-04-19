import React from 'react'
import { Button, Jumbotron, Row } from 'react-bootstrap';

export default function FCPostCard(props) {

    
    var myArray = props.item.Body1.split('');
    myArray = myArray.slice(0,300)
    myArray = myArray.concat("...")

    const divStyle = {
        backgroundImage: 'url(' + props.item.Image1 + ')',
        backgroundSize: 'cover',
        overflow: 'hidden',
        marginLeft: '5px',
        minHeight: '708px',
        position:'relative',
    }; 

    return (
        
        <div >
           
           <Jumbotron style={divStyle}  className="bg-cover">
               <Row></Row>
                    <Row>
                        <div className="bigpostelment">
                        <h3 className="mainposttitle">{props.item.Title}</h3>
                        <br/>
                            <p className="mainposttitlebig">
                            {myArray}
                            <Button variant="primary">קרא עוד</Button>
                            </p>
                           

                        </div>
                        
                    </Row>
                </Jumbotron>
        </div>
    )
}
