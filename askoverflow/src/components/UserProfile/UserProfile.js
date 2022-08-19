import React, { Component } from "react";
import "./UserProfile.css";
import axios from "axios";
import { Link } from "react-router-dom";
import $ from "jquery";
import fox from "../Questions/fox.jpg";
import "./script.js"
import { Questions } from "../Questions/questions"

class userprofile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
    };
  }

  render() {

    const toggleusermenu = () => {
        $(".sidebar").toggleClass("active");
    }

    const openPage = (event, pageName) => {
      var i, pagecontent, tablinks;
      pagecontent = document.getElementsByClassName("Right-bar");
      for (i = 0; i < pagecontent.length; i++) {
          pagecontent[i].style.display = "none";
      }
      $(".nav-links li a").removeClass("active");
      var tempPageName = "#" + pageName;
      $(tempPageName).css("display", "block");
      event.currentTarget.className += " active";
    }

    return (
  <div>
    <div class="sidebar bg-primary">
      <div class="logo-details">
        <i class="fab fa-stack-overflow"></i>
        <a href="/home/" class="logo_name">AskOverflow</a>
      </div>
      <ul class="nav-links">
        <li>
          <a href="#" class="active" onClick={event => openPage(event, 'contentName1')}>
            <i class="fas fa-tachometer-alt"></i>
            <span class="nav-1 links_name nav-tab active">Dashboard</span>
          </a>
        </li>
        <li>
          <a href="#" onClick={event => openPage(event, 'user_answers')}>
            <i class='fas fa-user' ></i>
            <span class="nav-2 links_name nav-tab">Your Answers</span>
          </a>
        </li>
        <li>
          <a href="#" onClick={event => openPage(event, 'user_questions')}>
            <i class="fas fa-question"></i>
            <span class="nav-3 links_name nav-tab" >Your Questions</span>
          </a>
        </li>
        <li>
          <a href="#" onClick={event => openPage(event, 'user_comments')}>
            <i class="fas fa-comments"></i>
            <span class="nav-4 links_name nav-tab" >Your Comments</span>
          </a>
        </li>
        <li>
          <a href="#" onClick={event => openPage(event, 'user_discussion')}>
            <i class="fas fa-comment"></i>
            <span class="nav-5 links_name nav-tab">Discussion</span>
          </a>
        </li>
        <li>
          <a href="#" onClick={event => openPage(event, 'user_teams')}> 
            <i class="fas fa-user-friends"></i>
            <span class="nav-6 links_name nav-tab">Teams</span>
          </a>
        </li>
        <li>
          <a href="#" onClick={event => openPage(event, 'user_settings')}> 
            <i class='fas fa-cog' ></i>
            <span class="nav-6 links_name nav-tab">Setting</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fas fa-arrow-alt-circle-left"></i>
            <span class="links_name">Log out</span>
          </a>
        </li>
      </ul>
    </div>
  <section class="home-section">
    <nav>
      <div class="sidebar-button">
        <i class='fas fa-bars sidebarBtn' onClick={toggleusermenu}></i>
        <span class="dashboard">Profile</span>
      </div>
      <div class="search-box">
        <input type="text" placeholder="Search..." />
        <i class="fas fa-search"></i>
      </div>
      <div class="profile-details">
        <img src={fox} alt="" />
        <span class="admin_name">Prem Shahi</span>
      </div>
    </nav>

    <div class="home-content Right-bar" id="contentName1">
      <div class="overview-boxes">
        <div class="box">
          <div class="right-side">
            <div class="box-topic">Reputation</div>
            <div class="number">40</div>
            <div class="indicator">
            </div>
          </div>
          <i class='fas fa-users-cog cart'></i>
        </div>
        <div class="box">
          <div class="right-side">
            <div class="box-topic">Answers</div>
            <div class="number">38</div>
            <div class="indicator">
            </div>
          </div>
          <i class="fas fa-chalkboard-teacher cart two"></i>
        </div>
        <div class="box">
          <div class="right-side">
            <div class="box-topic">Questions</div>
            <div class="number">12</div>
            <div class="indicator">
            </div>
          </div>
          <i class='fas fa-question cart three' ></i>
        </div>
        <div class="box">
          <div class="right-side">
            <div class="box-topic">Visits</div>
            <div class="number">40</div>
            <div class="indicator">
            </div>
          </div>
          <i class='fas fa-eye cart four' ></i>
        </div>
      </div>

      <div class="container">

        <div class="row container">
          <div class="col-10 container">
          <Questions/>
          </div>
        </div>

      </div>
      
    </div>

    <div class="home-content Right-bar" id="user_answers" style={{display: "none"}}>
        <div class="container">
        <h3>Answers</h3>
        <div class="row container">
          <div class="col-10 container">
          <Questions/>
          </div>
        </div>

      </div>
    </div>

    <div class="home-content Right-bar" id="user_questions" style={{display: "none"}}>
        <div class="container">
        <h3>Questions</h3>
        <div class="row container">
          <div class="col-10 container">
          <Questions/>
          </div>
        </div>

      </div>
    </div>

    <div class="home-content Right-bar" id="user_comments" style={{display: "none"}}>
        <div class="container">
        <h3>Comments</h3>
        <div class="row container">
          <div class="col-10 container">
          <Questions/>
          </div>
        </div>

      </div>
    </div>


    <div class="home-content Right-bar" id="user_discussion" style={{display: "none"}}>
        <div class="container">
        <h3>Discussion</h3>
        <div class="row container">
          <div class="col-10 container">
          <Questions/>
          </div>
        </div>

      </div>
    </div>


    <div class="home-content Right-bar" id="user_teams" style={{display: "none"}}>
        <h1>Hello Teams</h1>
    </div>


    <div class="home-content Right-bar" id="user_settings" style={{display: "none"}}>
        <h1>Hello Settings</h1>
    </div>


  </section>

  </div>
    );
  }
}

export default userprofile;