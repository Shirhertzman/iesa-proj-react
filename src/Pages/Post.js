import React from 'react';
import CCCommets from '../ClassComponent/CCCommets';
import CCFetchPost from '../ClassComponent/CCFetchPost';



export default function Post(props) {

    var postid = props.location.search.split('=');
    postid = postid.slice(1, 2)


    return (
        <div>
            <div className="PageStyle">
                <CCFetchPost postid={"https://localhost:44318/api/Posts/rendpost?idtoserver=" + postid[0]} />
            </div>
            <CCCommets postid = {"https://localhost:44318/api/Comments?Pid=" + postid[0] } postComment={"https://localhost:44318/api/Comments"} id={postid[0]}></CCCommets>
        </div>
    )
}
