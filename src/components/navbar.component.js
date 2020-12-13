import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light" >
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">ExcerTrakcer</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active" to="/">Exercises</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/create">Create Exercise Log</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/user">Create User</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav >
        )
    }
}