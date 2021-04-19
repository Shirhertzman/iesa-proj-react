import React, { Component } from 'react'
import FCCompetitions from '../FunctionalComponent/FCCompetitions';
import FCMainPost from '../FunctionalComponent/FCMainPost';
import FCPosts from '../FunctionalComponent/FCPosts';


export default class CCFetch extends Component {

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
                    this.setState({ tst: <FCMainPost id={this.state.items[0]} img='https://iesa.org.il/wp-content/uploads/thumbs/unnamed-4-3cul8yzzczqibtb09sk0lm.jpg' /> })
                    this.setState({ str: <FCPosts id={this.state.items} img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh0EuwMLxRJL16iS2MMgcKekdZm5gI6IIxfA&usqp=CAU' /> })
                    
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
