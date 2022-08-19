import React, { Component } from "react";
import "./UserProfile.css";
import axios from "axios";
import { Link } from "react-router-dom";
import $ from "jquery";
import fox from "../Questions/fox.jpg";
import "./script.js"

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
      <span class="logo_name">Profile</span>
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
        <li class="log_out">
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
        <span class="dashboard">AskOverflow</span>
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
      <div class="sales-boxes">
        <div class="recent-sales box">
          <div class="title">Recent Requests</div>
          <div class="sales-details">
            <ul class="details">
              <li class="topic">Date</li>
              <li><a href="#">02 Jan 2021</a></li>
              <li><a href="#">02 Jan 2021</a></li>
              <li><a href="#">02 Jan 2021</a></li>
              <li><a href="#">02 Jan 2021</a></li>
              <li><a href="#">02 Jan 2021</a></li>
              <li><a href="#">02 Jan 2021</a></li>
              <li><a href="#">02 Jan 2021</a></li>
              <li><a href="#">02 Jan 2021</a></li>
              <li><a href="#">02 Jan 2021</a></li>
            </ul>
            <ul class="details">
            <li class="topic">Customer</li>
            <li><a href="#">Alex Doe</a></li>
            <li><a href="#">David Mart</a></li>
            <li><a href="#">Roe Parter</a></li>
            <li><a href="#">Diana Penty</a></li>
            <li><a href="#">Martin Paw</a></li>
            <li><a href="#">Doe Alex</a></li>
            <li><a href="#">Aiana Lexa</a></li>
            <li><a href="#">Rexel Mags</a></li>
             <li><a href="#">Tiana Loths</a></li>
          </ul>
          <ul class="details">
            <li class="topic">Sales</li>
            <li><a href="#">Delivered</a></li>
            <li><a href="#">Pending</a></li>
            <li><a href="#">Returned</a></li>
            <li><a href="#">Delivered</a></li>
            <li><a href="#">Pending</a></li>
            <li><a href="#">Returned</a></li>
            <li><a href="#">Delivered</a></li>
             <li><a href="#">Pending</a></li>
            <li><a href="#">Delivered</a></li>
          </ul>
          <ul class="details">
            <li class="topic">Total</li>
            <li><a href="#">$204.98</a></li>
            <li><a href="#">$24.55</a></li>
            <li><a href="#">$25.88</a></li>
            <li><a href="#">$170.66</a></li>
            <li><a href="#">$56.56</a></li>
            <li><a href="#">$44.95</a></li>
            <li><a href="#">$67.33</a></li>
             <li><a href="#">$23.53</a></li>
             <li><a href="#">$46.52</a></li>
          </ul>
          </div>
          <div class="button">
            <a href="#">See All</a>
          </div>
        </div>
        <div class="top-sales box">
          <div class="title">Recent Notice</div>
          <ul class="top-sales-details">
          <li>
            <a href="#">
              <span class="product">Vuitton Sunglasses</span>
            </a>
            <span class="price">$1107</span>
          </li>
          <li>
            <a href="#">
              <span class="product">Hourglass Jeans </span>
            </a>
            <span class="price">$1567</span>
          </li>
          <li>
            <a href="#">
              <span class="product">Nike Sport Shoe</span>
            </a>
            <span class="price">$1234</span>
          </li>
          <li>
            <a href="#">
              <span class="product">Hermes Silk Scarves.</span>
            </a>
            <span class="price">$2312</span>
          </li>
          <li>
            <a href="#">
              <span class="product">Succi Ladies Bag</span>
            </a>
            <span class="price">$1456</span>
          </li>
          <li>
            <a href="#">
              <span class="product">Gucci Womens's Bags</span>
            </a>
            <span class="price">$2345</span>
          </li>
          <li>
            <a href="#">
              <span class="product">Addidas Running Shoe</span>
            </a>
            <span class="price">$2345</span>
          </li>
          <li>
            <a href="#">
              <span class="product">Bilack Wear's Shirt</span>
            </a>
            <span class="price">$1245</span>
          </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="home-content Right-bar" id="user_answers" style={{display: "none"}}>
        <div class="sales-boxes">
        <div class="recent-sales box">
          <div class="title">Recent Answers</div>
          <div class="sales-details">
            <ul class="details">
              <li class="topic">Date</li>
              <li><a href="#">02 Jan 2021</a></li>
              <li><a href="#">02 Jan 2021</a></li>
              <li><a href="#">02 Jan 2021</a></li>
              <li><a href="#">02 Jan 2021</a></li>
              <li><a href="#">02 Jan 2021</a></li>
              <li><a href="#">02 Jan 2021</a></li>
              <li><a href="#">02 Jan 2021</a></li>
              <li><a href="#">02 Jan 2021</a></li>
              <li><a href="#">02 Jan 2021</a></li>
            </ul>
            <ul class="details">
            <li class="topic">Customer</li>
            <li><a href="#">Alex Doe</a></li>
            <li><a href="#">David Mart</a></li>
            <li><a href="#">Roe Parter</a></li>
            <li><a href="#">Diana Penty</a></li>
            <li><a href="#">Martin Paw</a></li>
            <li><a href="#">Doe Alex</a></li>
            <li><a href="#">Aiana Lexa</a></li>
            <li><a href="#">Rexel Mags</a></li>
             <li><a href="#">Tiana Loths</a></li>
          </ul>
          <ul class="details">
            <li class="topic">Sales</li>
            <li><a href="#">Delivered</a></li>
            <li><a href="#">Pending</a></li>
            <li><a href="#">Returned</a></li>
            <li><a href="#">Delivered</a></li>
            <li><a href="#">Pending</a></li>
            <li><a href="#">Returned</a></li>
            <li><a href="#">Delivered</a></li>
             <li><a href="#">Pending</a></li>
            <li><a href="#">Delivered</a></li>
          </ul>
          <ul class="details">
            <li class="topic">Total</li>
            <li><a href="#">$204.98</a></li>
            <li><a href="#">$24.55</a></li>
            <li><a href="#">$25.88</a></li>
            <li><a href="#">$170.66</a></li>
            <li><a href="#">$56.56</a></li>
            <li><a href="#">$44.95</a></li>
            <li><a href="#">$67.33</a></li>
             <li><a href="#">$23.53</a></li>
             <li><a href="#">$46.52</a></li>
          </ul>
          </div>
          <div class="button">
            <a href="#">See All</a>
          </div>
        </div>
      </div>
    </div>

    <div class="home-content Right-bar" id="user_questions" style={{display: "none"}}>
        <h1>Hello Questions</h1>
    </div>

    <div class="home-content Right-bar" id="user_comments" style={{display: "none"}}>
        <h1>Hello Comments</h1>
    </div>


    <div class="home-content Right-bar" id="user_discussion" style={{display: "none"}}>
        <h1>Hello Discussion</h1>
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