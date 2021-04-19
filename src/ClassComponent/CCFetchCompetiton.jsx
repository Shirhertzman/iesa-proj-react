import React, { Component } from 'react'
import FCCompetitionPage from '../FunctionalComponent/FCCompetitionPage'

export default class CCFetchCompetiton extends Component {
    constructor(props) {
        super(props)
        this.state = {
            CompetitionRender: '',
            Competition: '',
            
        }

    }


    GetOnePost = () => {
        fetch(this.props.Competitionid,
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
                    this.setState({ Competition: result })
                    this.setState({ CompetitionRender: <FCCompetitionPage Competition={this.state.Competition} /> })
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
                {this.state.CompetitionRender}
            </div>
        )
    }
}
