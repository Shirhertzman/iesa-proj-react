import React from 'react'
import { Card, Badge} from 'react-bootstrap';

export default function FCPostCard(props) {


    var myArray = props.item.Body1.split('');
    myArray = myArray.slice(0, 80)
    myArray = myArray.concat("...")
    var hrefsrr = "http://localhost:3000/Post?postid=" + props.item.Postid;

    return (

        <div>
            <Card style={{ maxWidth: '100%', maxHeight: '100%' , border:'1px solid gray'}}>
                <a href={hrefsrr}>
                    <Card.Img variant="top" src={props.item.Image1} style={{ width: '428x', height: '156px', opacity: '100%' }} />
                    <Card.Body style={{ backgroundColor: '#292828' }} >
                        <Card.Title style={{ minHeight: '48px', color: 'white' }} >{props.item.Title} </Card.Title>
                        <Card.Text style={{ fontSize: '12px', color: 'white' }}>
                            {myArray}
                        </Card.Text>
                        <div className="BadgePost">
                            <Badge variant="danger">{props.item.Category}</Badge>
                            </div>
                           
                    </Card.Body>
                </a>
            </Card>
            <br/>
        </div>
    )
}
