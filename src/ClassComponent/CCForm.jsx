import React, { Component } from 'react'
import { Button, Col, Form } from 'react-bootstrap';



export default class CCForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            message: '',
            name: '',
            items: []
        }
    }

    sendEmail = () => {
        const Swal = require('sweetalert2')

        window.Email.send({
            Host: "smtp.google.com",
            Username: "reactapptest230@gmail.com",
            Password: "FA1278973EE70094257D1CFD15BECDBA0BDC",

            To: "reactapptest230@gmail.com",
            From: this.state.email,
            Subject: "Message from customer",
            Body: "FROM: " + this.state.name + "<br/> Body:" + this.state.message,
        }).then((message) => {
            if (message === "OK") {
                Swal.fire({
                    icon: 'success',
                    title: 'פנייתך התקבלה בהצלחה',
                    showConfirmButton: true,
                    timer: 2500
                })
                    .then(() => {
                        window.location.href = "http://localhost:3000/Main";
                    }
                    )
            }
            else {
                alert("err");
            }
        }
        )

    }

    render() {
        return (
            <div className="PageStyle">
                <Form style={{ width: '99%' }} >
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label style={{ color: 'white' }}>כתובת אימייל</Form.Label>
                            <Form.Control onChange={(e) => this.setState({ email: e.target.value })} type="email" placeholder="email@email.com" />
                        </Form.Group>
                    </Form.Row>

                    <Form.Group controlId="formGridAddress1">
                        <Form.Label style={{ color: 'white' }}>השם שלך</Form.Label>
                        <Form.Control onChange={(e) => this.setState({ name: e.target.value })} placeholder="שם +משפחה" />
                    </Form.Group>


                    <Form.Group controlId="textarea">
                        <Form.Label style={{ color: 'white' }}>גוף ההודעה</Form.Label>
                        <Form.Control onChange={(e) => this.setState({ message: e.target.value })} as="textarea" placeholder="תוכן הפניה" />
                    </Form.Group>


                    <Button onClick={this.sendEmail} variant="primary">
                        שלח פניה
                    </Button>
                </Form>
                <div className="ContactUsIMG">
                    <img src="https://iesa.org.il/wp-content/uploads/2020/04/newlogosite.png" alt="alt-text" />
                </div>
            </div>
        )
    }
}
