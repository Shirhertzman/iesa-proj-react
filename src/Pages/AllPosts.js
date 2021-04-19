import React from 'react';

import CCFetchAllPosts from '../ClassComponent/CCFetchAllPosts';

 
const AllPosts = (props) => {
    return (
       <div className="AllPosts">
         <h1 style={{color: 'white'}}>כל הפוסטים</h1>
        <CCFetchAllPosts></CCFetchAllPosts>
       </div>
    );
}
export default AllPosts;