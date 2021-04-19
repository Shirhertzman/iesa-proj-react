import React from 'react'
import FCCompetitionsCard from './FCCompetitionsCard';
import {Container } from 'react-bootstrap';

export default function FCAllCompetitions(props) {
    


    let CompetitionsCards2Show = props.id.map(CompetitionsCard => CompetitionsCard.Competitionstatus ==='2'?(
         <FCCompetitionsCard key={CompetitionsCard.Competitionid} item={CompetitionsCard} />):(""));
    let CompetitionsCards2ShowPast = props.id.map(CompetitionsCard => CompetitionsCard.Competitionstatus >'3'?(
        <FCCompetitionsCard key={CompetitionsCard.Competitionid} item={CompetitionsCard} />):(""));
   

    
        
    return (
        <div>
            <Container >
                <br></br>
            <br></br>
            <div>
            <h3 style={{color:'white'}}>תחרויות עתדיות</h3><br/>
            </div>
                <div syle={{marginLeft : 'auto' , marginRight:'auto'}}>
                    {CompetitionsCards2Show}
                </div>
            <div>
            <h3 style={{color:'white'}}>תחרויות עבר</h3>
                <div syle={{marginLeft : 'auto' , marginRight:'auto'}}>
                    {CompetitionsCards2ShowPast}
                </div>
            </div>
            </Container>
           
        </div>
    )
}
