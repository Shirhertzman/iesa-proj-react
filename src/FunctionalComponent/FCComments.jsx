import React from 'react'
import FCCommentOne from './FCCommentOne';

export default function FCComments(props) {
    let CommentsToShow = props.comments.map(c1 => <FCCommentOne key={c1.Commentid} comment={c1} />);


    return (
        <div>
            {CommentsToShow}
        </div>
    )
}
