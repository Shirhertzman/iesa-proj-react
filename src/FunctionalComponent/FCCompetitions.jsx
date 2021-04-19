import React from 'react'
import FCCompetitionsCard from './FCCompetitionsCard';
import { Row, Container } from 'react-bootstrap';

export default function FCCompetitions(props) {

    let CompetitionsCards2Show = props.id.map(CompetitionsCard => CompetitionsCard.Competitionstatus ==='2'?(
         <FCCompetitionsCard key={CompetitionsCard.Competitionid} item={CompetitionsCard} />):(""));

    
        
    return (
        <div>
            <Container>
                <br></br>
            <h3 style={{color:'white'}}>תחרויות קרובות</h3>
            <br></br>
            <Row>
                <div syle={{marginLeft : 'auto' , marginRight:'auto'}}>
                    {CompetitionsCards2Show}
                </div>
            </Row>
            </Container>
        </div>
    )
}
