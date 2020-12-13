import React, { Component } from 'react';
import axios from 'axios'

export default class CreateUser extends Component {

    constructor(props) {
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

        this.state = {
            username: '',
            response: ''
        }
    }
    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();

        const user = {
            username: this.state.username,
        }

        console.log(user);

        axios.post('http://localhost:5000/users/add', user)
            .then(res => this.setState({
                response:res.data
            }))
            .catch((err) => {
                this.setState({
                    response : err
                })
            })

        this.setState({
            username: ''
        })
    }

    render() {
        return (
            <div>
                <h3>Create New Exercise Log</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Username: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.username}
                            onChange={this.onChangeUsername} />
                    </div>
                    <div className="form-group mt-4">
                        <input type="submit" value="Create User" className="btn btn-outline-primary" />
                    </div>
                </form>
            </div>
        )
    }
}