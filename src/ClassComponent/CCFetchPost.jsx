import React, { Component } from 'react'
import FCPostPage from '../FunctionalComponent/FCPostPage';

export default class CCFetchPost extends Component {
    constructor(props) {
        super(props)
        this.state = {
            PostRender: '',
            Post: '',
            
        }

    }


    GetOnePost = () => {
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
                    this.setState({ Post: result })
                    this.setState({ PostRender: <FCPostPage post={this.state.Post} /> })
                },
                (error) => {
                });
    }

    componentDidMount = () => {
        this.GetOnePost();
    }


    render() {

        return (
            <div>
                {this.state.PostRender}
            </div>
        )
    }
}
