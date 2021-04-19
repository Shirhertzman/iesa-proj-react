import React, { Component } from 'react'
import FCComments from '../FunctionalComponent/FCComments';
import { Button , FormControl } from 'react-bootstrap';



export default class CCCommets extends Component {
    constructor(props) {
        super(props)
        this.state = {
            calltoFetch: '',
            talkBack: {},
            name: '',
            body: '',
            id: '1',
        };
    }
    btnaddcomment = () => {
        

        const c1 = {
            Postid: this.props.id,
            Name: this.state.name, 
            Body: this.state.body
        };

        fetch(this.props.postComment,
            {
              method: 'POST',
              body: JSON.stringify(c1),
              headers: new Headers({
                'Content-Type': 'application/json; charset=UTF-8',
                'Accept': 'application/json; charset=UTF-8'
              })
            })
            .then(res => {

            })
            .then(
                window.location.reload(false)
                );
    }

    GetAllComments = () => { 
        fetch(this.props.postid,
            {
                method: 'GET',
                headers: new Headers({
                    'Content-Type': 'application/json; charset=UTF-8',
                    'Accept': 'application/json; charset=UTF-8'
                })

            })
            .then(res => {
                return res.json()
            })
            .then(
                (result) => {
                    this.setState({talkBack: result})
                    this.setState({calltoFetch: <FCComments comments={this.state.talkBack}></FCComments>})
                },
                (error) => {
                });
    }



    componentDidMount = () => {
        this.GetAllComments();
    }

    render() {
        return (
            <div>
                <h3>:תגובות הגולשים</h3>
                {this.state.calltoFetch}
                <h5>:כתוב את שמך כאן</h5>
                <FormControl  onChange={(e) => this.setState({ name: e.target.value })}></FormControl >
                <h5>:כתוב את התגובה כאן</h5>
                <FormControl onChange={(e) => this.setState({ body: e.target.value })}></FormControl>
                <br />
                <Button onClick={this.btnaddcomment}>שלח פניה</Button>
            </div>
        )
    }
}
