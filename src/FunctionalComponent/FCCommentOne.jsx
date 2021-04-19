import React from 'react'
import { Toast, Row } from 'react-bootstrap';
export default function FCCommentOne(props) {

    return (
        <div >
            <Row className="ToastClass">
            <Toast >
                <Toast.Header>
                    <img src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/dark-blue-square-thomas-woolworth.jpg" className="rounded mr-2" alt="" />
                    <strong className="mr-auto">{props.comment.Name}</strong>
                    <small>{props.comment.Date}</small>
                </Toast.Header>
                <Toast.Body>{props.comment.Body}</Toast.Body>
            </Toast>
            </Row>


        </div>
    )
}
