import React from 'react'
import { Jumbotron } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
export default function FCPostPage(props) {
    console.log("in class: ", props)

    return (
        <div>


            <Jumbotron>
                <h1>{props.post.Title}</h1>

                <div>
                    <Image src={props.post.Image1} fluid />
                </div>

                <p>
                    {props.post.Body1}
                </p>
                <p>
                    {props.post.Body2}
                </p>
                <p>
                    {props.post.Body3}
                </p>

            </Jumbotron>

        </div>
    )
}
