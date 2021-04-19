import React from 'react';
import CCFetchAllCompetitions from '../ClassComponent/CCFetchAllCompetitions';
import FCFooter from '../FunctionalComponent/FCFooter';


const AllCompetitions = () => {
    return (
       <div className="AllCompetitions">
         <h1 style={{color: 'white'}}>כל התחרויות</h1>
        <CCFetchAllCompetitions></CCFetchAllCompetitions>
        <FCFooter></FCFooter>
       </div>
    );
}
export default AllCompetitions;