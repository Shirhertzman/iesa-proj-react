import React, { Component } from 'react'
import CCFetch from './CCFetch'
import CCFetchCompetitions from './CCFetchCompetitions';

export default class CCMain extends Component {


    render() {
        return (
            <div>
                <br/>
                <div className="Posts">
                <CCFetch></CCFetch>
                </div>
                <div className="competitionsList">
                    <br/>
                    <CCFetchCompetitions></CCFetchCompetitions>
                </div>
                
                <section id="site_footer">
                    <div className="jumbotron jumbotron-fluid" style={{backgroundColor: '#1a1a1a'}}>
                    <h2>IESA</h2>
                    </div>
                </section>
            </div>
        )
    }
}
