import React from "react";
import "./NavBar.css";
import { Profileinsmall, Profileinlarge1 } from "../ProfileContent/profile";
import $ from "jquery";

let countloginsignup=0

const NavForHome = (props) => {
  const book = props.book;
  var well={
            boxShadow: "0px 4px 0px 0px #f0f0f0"
        }
  const  submitdataforloginorsignup = () => {
    var tempvar = $("#loginuserconfirmidtochange").attr("name");
    console.log(tempvar)
  }

  function openPage(evt, pageName) {
    var i, pagecontent, tablinks;
    pagecontent = document.getElementsByClassName("Right-bar");
    for (i = 0; i < pagecontent.length; i++) {
        pagecontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("nav-tab");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(pageName).style.display = "block";
    evt.currentTarget.className += " active";
}

  const signupmodalclick = () => {
    if(countloginsignup%2 == 0){
    var nameinput = "<div class='form-group'><input required type='text' class='nameremove1 form-control' id='user-name' placeholder='Name..'/></div>";
    var emailinput = "<div class='form-group'><input required type='email' class='emailremove1 form-control' id='email-name' placeholder='Email..'/></div>";
    $(".fornname").prepend(nameinput);
    $(".fornname").prepend(emailinput);
    $(".signupmodalclick").text("Have an account? Login");
    $(".loginmodalLabelchange").text("Sign Up");
    $("#loginuserconfirmidtochange").text("SignUp")
                                    .attr("name", "signupuserconfirm");
    $("#user-usernamename").attr("placeholder", "Create a username..");
    $("#user-password").attr("placeholder", "Create a password..");
      countloginsignup += 1

    }else{
      $(".nameremove1").remove();
      $(".emailremove1").remove();
      $(".signupmodalclick").text("Don't have an account? Sign up");
      $("#user-usernamename").attr("placeholder", "Username..");
      $("#user-password").attr("placeholder", "Password..");
      $(".loginmodalLabelchange").text("Login");
      $("#loginuserconfirmidtochange").text("Login");
      $("#loginuserconfirmidtochange").attr("name", "loginuserconfirm");
      countloginsignup += 1

    }
  }

  return (
    <div>
      <nav class="fixed-top navbar navbar-expand-md navbar-light bg-light" style={well}>
        <div class="container-fluid">
          <div class="navbar-brand d-flex" style={{ fontWeight: "400" }}>
          <div class="d-block d-sm-none"><i class="fas fa-bars"></i>&nbsp;&nbsp;</div>
            <a href="/home" style={{ textDecoration: "none" }}>
            {/* <img src="images/logo.svg" height="28" alt="CoolBrand" /> */}
            <i class="fab fa-stack-overflow"></i>&nbsp;AskOverflow
            </a>
          </div>
          <Profileinsmall />

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
              <div class="nav-item dropdown">
                <a
                  href="#"
                  class="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  Products
                </a>
                <div class="dropdown-menu">
                  <a href="#" class="dropdown-item">
                    StackExchange
                  </a>
                  <a href="#" class="dropdown-item">
                    Community Forum
                  </a>
                  <a href="#" class="dropdown-item">
                    Code Editor
                  </a>
                </div>
              </div>
            &nbsp;
              <div class="d-flex">
                <input type="text" class="form-control searchmainnav" placeholder="Search a question.." />
                &nbsp;
                <button type="button" class="btn btn-outline-primary">
                  <i class="fa fa-search"></i>
                </button>
              </div>
            {/* <div class> */}
            <div class="navbar-nav ml-auto">
              <a href="#" class="fainbox nav-item nav-link">
                <i class="fas fa-inbox"></i>
              </a>
            </div>

            <div class="navbar-nav">
              <a href="#" class="fainbox nav-item nav-link">
                <i class="fas fa-trophy"></i>
              </a>
            </div>

            <div class="navbar-nav">
              <a href="#" class="fainbox nav-item nav-link">
                <i class="fas fa-question-circle"></i>
              </a>
            </div>

            <div class="row ml-auto">
              <div class="col-5 d-flex">
                <button
                  type="button"
                  class="btn btn-outline-primary nav-item"
                  data-toggle="modal"
                  data-target="#loginModal"
                >
                  Login
                </button>
              </div>
              <div class="col-1">
                <Profileinlarge1 />
              </div>
            </div>
            <div class="navbar-nav"></div>
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
              <h5 class="modal-title loginmodalLabelchange" id="loginmodalLabel">
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
                <div class="fornname form-group">
                  {/* <label for="recipient-name" class="col-form-label">Username:</label> */}
                  <input
                    type="text"
                    class="form-control"
                    id="user-usernamename"
                    placeholder="Username.."
                    required
                  />
                </div>
                <div class="form-group">
                  {/* <label for="message-text" class="col-form-label">Password:</label> */}
                  <input
                    type="password"
                    class="form-control"
                    id="user-password"
                    placeholder="Password.."
                    required
                  />
                </div>
            </div>
            <div class="container">
              <div class="row">
                <div class="col-lg-7 col-sm-7 col-12 col-md-7">
                  <div class="row">
                    <div class="col-lg-4 col-sm-4 col-6 col-md-4">
                      <input type="submit" onClick={submitdataforloginorsignup} name="loginuserconfirm" id="loginuserconfirmidtochange" class="btn btn-primary" />
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
                  <a href="#" class="signupmodalclick" onClick={signupmodalclick}>
                    Don't have an account? Sign up
                  </a>
                </div>
              </div>
            </div>
            <br />
          </div>
        </div>
      </div>

      {/* End of Modal */}
    </div>
  );
};

export { NavForHome };
