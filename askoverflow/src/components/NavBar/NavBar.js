import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import {Profileinsmall,Profileinlarge1} from '../ProfileContent/profile';


const NavForHome = (props) => {
    const  book  = props.book;

    return(
        <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid">
            <a href="/home" class="navbar-brand" style={{fontWeight: "400"}}>
              {/* <img src="images/logo.svg" height="28" alt="CoolBrand" /> */}
              AskOverflow
            </a>
            <Profileinsmall/>

            <button
              type="button"
              class="navbar-toggler"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div
              class="collapse navbar-collapse justify-content-between"
              id="navbarCollapse"
            >
              <div class="navbar-nav">
                <a href="#" class="nav-item nav-link active">
                  Home
                </a>
                <a href="#" class="nav-item nav-link">
                  Profile
                </a>
                <div class="nav-item dropdown">
                  <a
                    href="#"
                    class="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    Messages
                  </a>
                  <div class="dropdown-menu">
                    <a href="#" class="dropdown-item">
                      Inbox
                    </a>
                    <a href="#" class="dropdown-item">
                      Sent
                    </a>
                    <a href="#" class="dropdown-item">
                      Drafts
                    </a>
                  </div>
                </div>
              </div>
              <form class="d-flex">
                <div class="input-group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Search"
                  />
                  &nbsp;
                  <button type="button" class="btn btn-outline-primary">
                    <i class="fa fa-search"></i>
                  </button>
                </div>
              </form>
              {/* <div class> */}&nbsp;
              &nbsp;
              <div class="row">
                <div class="col-8 d-flex">
                
                  <button
                    type="button"
                    class="btn btn-outline-primary nav-item"
                    data-toggle="modal"
                    data-target="#loginModal"
                  >
                    Login
                  </button>
                

                </div>
                <div class="col-4">

                <Profileinlarge1/>
                </div>
              </div>
              <div class="navbar-nav">
                
                
              </div>
            </div>
            {/* </div> */}
            {/* </div> */}
          </div>
        </nav>

        {/* Modal For Login & Signup */}
        <div
          class="modal fade"
          id="loginModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="loginmodalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="loginmodalLabel">
                  Login
                </h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <form>
                  <div class="form-group">
                    {/* <label for="recipient-name" class="col-form-label">Username:</label> */}
                    <input
                      type="text"
                      class="form-control"
                      id="user-name"
                      placeholder="Username.."
                    />
                  </div>
                  <div class="form-group">
                    {/* <label for="message-text" class="col-form-label">Password:</label> */}
                    <input
                      type="password"
                      class="form-control"
                      id="user-password"
                      placeholder="Password.."
                    />
                  </div>
                </form>
              </div>
              <div class="container">
                <div class="row">
                  <div class="col-lg-7 col-sm-7 col-12 col-md-7">
                    <div class="row">
                      <div class="col-lg-4 col-sm-4 col-6 col-md-4">
                        <button type="button" class="btn btn-primary">
                          Submit
                        </button>
                      </div>
                      <div class="col-lg-3 col-sm-3 col-6 col-md-4">
                        <button
                          type="button"
                          class="btn btn-secondary"
                          data-dismiss="modal"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>

                  <div class="col-lg-5 col-sm-5 col-12 col-md-5">
                    <p>
                      Don't have an account? <a href="#signupModal">Sign up</a>
                    </p>
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
};


export {NavForHome};