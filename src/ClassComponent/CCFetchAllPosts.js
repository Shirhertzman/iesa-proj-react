import React, { Component } from 'react'
import FCAllPosts from '../FunctionalComponent/FCAllPosts';
import FCCompetitions from '../FunctionalComponent/FCCompetitions';



export default class CCFetchAllPosts extends Component {

    constructor(props) {
        super(props)
        this.state = {}
        this.str = 'test'
        this.tst = ''
        this.items = []


    }



    btnGetAllPosts = () => {
        this.apiUrl = 'https://localhost:44318/api/Posts/mark9'
        fetch(this.apiUrl,
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
                    this.setState({ items: result })
                    this.setState({ str: <FCAllPosts id={this.state.items} img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh0EuwMLxRJL16iS2MMgcKekdZm5gI6IIxfA&usqp=CAU' /> })
                    
                },
                (error) => {
                });
    }

    GetAllCompetitions = () => {
        this.apiUrl = 'https://localhost:44318/api/Competitions/CompetitonsList'
        fetch(this.apiUrl,
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
                    this.setState({ Competitions: result })
                    this.setState({ Competitionsrender: <FCCompetitions id={this.state.Competitions} img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh0EuwMLxRJL16iS2MMgcKekdZm5gI6IIxfA&usqp=CAU' /> })
                },
                (error) => {
                });
    }


    componentDidMount = () => {
        this.btnGetAllPosts();
        this.GetAllCompetitions();
    }

    render() {

        return (
            <div>
                {/* {this.state.tst} */}
                {this.state.str}
            </div>
        )
    }
}
