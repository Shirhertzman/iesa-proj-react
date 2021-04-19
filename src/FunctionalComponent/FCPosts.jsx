import React from 'react'
import FCPostCard from './FCPostCard';
import { Button } from 'react-bootstrap';

export default function FCPosts(props) {

    var a = props.id.slice(1, 5);

    let PostCards2Show1 = a.map(postCard => <FCPostCard key={postCard.Postid} item={postCard} />);



    return (
        <div>
             <h2 style={{color:'white'}}>פוסטים מהעמותה</h2>
            {PostCards2Show1}
            <div className="btnAllPosts">
                <Button variant="outline-secondary" size="sm" href="/AllPosts">
                    כל הפוסטים
            </Button>
            </div>
        </div>
    )
}
