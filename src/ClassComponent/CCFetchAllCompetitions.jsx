import React, { Component } from 'react'
import FCAllCompetitions from '../FunctionalComponent/FCAllCompetitions';


export default class CCFetchAllCompetitions extends Component {
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
                    this.setState({ Competitionsrender: <FCAllCompetitions id={this.state.Competitions} /> })
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
