import React, { Component } from 'react';
import './homepage.css';
import axios from 'axios';
import { Link } from 'react-router-dom';


class homepage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            questions: []
        };
    }

    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <div class="container-fluid">
                        <a href="/home" class="navbar-brand">
                            {/* <img src="images/logo.svg" height="28" alt="CoolBrand" /> */}
                            AskOverflow
                        </a>

                        <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                            <div class="navbar-nav">
                                <a href="#" class="nav-item nav-link active">Home</a>
                                <a href="#" class="nav-item nav-link">Profile</a>
                                <div class="nav-item dropdown">
                                    <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Messages</a>
                                    <div class="dropdown-menu">
                                        <a href="#" class="dropdown-item">Inbox</a>
                                        <a href="#" class="dropdown-item">Sent</a>
                                        <a href="#" class="dropdown-item">Drafts</a>

                                    </div>
                                </div>
                            </div>
                            <form class="d-flex">
                                <div class="input-group">
                                    <input type="text" class="form-control" placeholder="Search" />&nbsp;
                                    <button type="button" class="btn btn-outline-primary"><i class="fa fa-search"></i></button>
                                </div>
                            </form>
                            &nbsp;
                            <div class="navbar-nav">
                                <button type="button" class="btn btn-outline-primary nav-item" data-toggle="modal" data-target="#loginModal">Login</button>
                            </div>
                        </div>
                    </div>
                </nav>

                {/* Modal For Login & Signup */}
                <div class="modal fade" id="loginModal" tabindex="-1" role="dialog" aria-labelledby="loginmodalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="loginmodalLabel">Login</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <form>
                                    <div class="form-group">
                                        {/* <label for="recipient-name" class="col-form-label">Username:</label> */}
                                        <input type="text" class="form-control" id="user-name" placeholder="Username.." />
                                    </div>
                                    <div class="form-group">
                                        {/* <label for="message-text" class="col-form-label">Password:</label> */}
                                        <input type="password" class="form-control" id="user-password" placeholder='Password..' />
                                    </div>
                                </form>
                            </div>
                            {/* <div class="row">
                            <div class="modal-footer ">
                                <button type="button" class="btn btn-primary">Signup</button>
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary">Submit</button>
                            </div>
                            </div> */}

                            {/* <div class="container">
                                <div class="row">
                                    <div class="col-md-12 text-left">
                                        Don't Have An Account? <a href="#signupModal" class="link">Signup</a>
                                    </div>
                                </div>
                                <div class="col-md-2 text-right"></div>
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                &nbsp;&nbsp;
                                <button type="button" class="btn btn-primary">Submit</button>
                            </div> */}

                            <div class="container">

                                <div class="row">
                                    <div class="col-lg-7 col-sm-6 col-md-6 border border-secondary">
                                        <div class="row">
                                            <div class="col-lg-3 col-sm-6 col-md-4 border border-warning"><button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button></div>
                                            <div class="col-lg-4 col-sm-6 col-md-4 border border-primary"><button type="button" class="btn btn-primary">Submit</button></div>
                                        </div>

                                    </div>

                                    <div class="col-lg-5 col-sm-6 col-md-6 border border-danger">
                                        <p>Don't have an account? <a href='#signupModal'>Sign up</a></p>
                                    </div>


                                </div>
                            </div>
                            <br />

                        </div>


                    </div>
                </div>
                {/* End of Modal */}
            </div>
        )
    }

}

export default homepage;