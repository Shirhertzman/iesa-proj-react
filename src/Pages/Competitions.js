import React from 'react';

import CCFetchCompetiton from '../ClassComponent/CCFetchCompetiton';


 
const Competitions = (props) => {

  var Competitionid = props.location.pathname.split('=');
  Competitionid = Competitionid.slice(1, 2)




  return (
      <div>
          <div className="PageStyle">
              <CCFetchCompetiton Competitionid={"https://localhost:44318/api/Competitions/getone?CompetitionId=" + Competitionid[0]} />
          </div>
      </div>
  )
    
}
export default Competitions;