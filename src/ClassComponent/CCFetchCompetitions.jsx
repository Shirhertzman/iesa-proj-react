import React, { Component } from 'react'
import FCCompetitions from '../FunctionalComponent/FCCompetitions';

export default class CCFetchCompetitions extends Component {
    constructor(props) {
        super(props)
        this.state = {}
        this.Competitions = []
        this.Competitionsrender = 's'
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
                    this.setState({ Competitionsrender: <FCCompetitions id={this.state.Competitions} /> })
                },
                (error) => {
                });
    }

    componentDidMount = () => {
        this.GetAllCompetitions();
    }


    render() {

        return (
            <div>
                {this.state.Competitionsrender}
            </div>
        )
    }
}
