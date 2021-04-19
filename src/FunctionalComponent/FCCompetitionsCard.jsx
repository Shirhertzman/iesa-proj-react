import React from 'react'
import { Card ,Col} from 'react-bootstrap';

export default function FCCompetitionsCard(props) {
    var sdate = props.item.Startdate.split('T');
    sdate = sdate.slice(0,1)
    var edate = props.item.Enddate.split('T');
    edate = edate.slice(0,1)
    var address = '';
    if (props.item.Address1==="")
    {
        address= 'ONLINE'

    }
    else
    {
        address =props.item.Address1
    }
    var hrefsrr = "http://localhost:3000/Competitions/CompetitionId=" + props.item.Competitionid;
    
    return (
        <div>
            <Col>
            <Card style={{ maxWidth: '100%', maxHeight: '100%', marginbottom: '20px' , borderolor:'black'}}>
            <a href={hrefsrr}>
                <Card.Img variant="top" src={props.item.Logo} style={{height:'189px' ,opacity : '100%'}}/>
                <Card.Body style={{ backgroundColor:'black', borderColor:'black'}} >
                    <Card.Title style={{color:'white',fontSize:'20px', textAlign:'left'}}>{props.item.Competitionname}</Card.Title>
                    <Card.Text style={{fontSize:'18px' ,  color:'white' ,textAlign:'left'}}>
                    {sdate}<br/>
                    {edate}<br/>
                    {address}<br/>
                    </Card.Text>
                    
                </Card.Body>
                </a>
            </Card>
            <br/>
            </Col>
         
        </div>
    )
}
