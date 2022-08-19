import React, { Component } from "react";
import "./homepage.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { NavForHome } from "../NavBar/NavBar";
import { SideFeatured } from "../SideFeatured/sidefeatured"
import { Questions } from "../Questions/questions"
import $ from "jquery";

class homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
    };
  }

  jquerychangecss = () => {
    $(".clickleftmenu").click(function () {
      $(".clickleftmenu")
        .css("color", "black")
        .css("border", "none")
        .css("background", "none");
    });
    $(".clickleftmenu").on("click", function () {
      var takenid = this.id;
      var str = `#${takenid}`;
      $(str)
        .css("color", "#007bff")
        .css("border-right", "5px solid #007bff")
        .css("background", "")
        .removeClass("bg-light")
        .addClass("bg-sec");
    });
  };

  initialcss = () => {
    $("document").ready(function () {
      $("#clickleftmenu1")
        .css("color", "#007bff")
        .css("border-right", "5px solid #007bff")
        .removeClass("bg-light")
        .addClass("bg-sec");
    });
  };

  componentDidMount() {
    this.jquerychangecss();
    this.initialcss();
  }

  render() {
    return (
      <div>
        <NavForHome />
        {/* Grid System for questions */}
        <div class="maincontent">
          <div class="row">
        {/*first grid*/}
            <div class="col-2 bg-light bg-gradient">
              <div class="just-padding">
                <div class="list-group list-group-flush bg-light bg-gradient">
                  <a
                    href="#item-1"
                    class="list-group-item clickleftmenu bg-light bg-gradient"
                    style={{ fontSize: "12px", textDecoration: "none" }}
                    id="clickleftmenu1"
                  >
                    Home
                  </a>

                  <div
                    class="list-group-item clickleftmenu bg-light bg-gradient"
                    // data-toggle="collapse"
                    style={{ fontSize: "12px", textDecoration: "none" }}
                    id="clickleftmenu2"
                  >
                    PUBLIC
                  </div>
                  <div
                    class="list-group list-group-flush bg-light bg-gradient"
                    id="item-3"
                  >
                    <a
                      href="#item-3-1"
                      id="clickleftmenu3"
                      style={{ textDecoration: "none" }}
                      class=" clickleftmenu list-group-item bg-light bg-gradient"
                    >
                      <i class="fas fa-globe-africa"></i>Questions
                      <span class="badge countbadge badge-primary">9</span>
                    </a>

                    <a
                      href="#item-3-2"
                      id="clickleftmenu4"
                      style={{ textDecoration: "none" }}
                      class="clickleftmenu list-group-item bg-light bg-gradient"
                    >
                      <i class="fas fa-tags"></i>Tags
                      <span class="badge countbadge badge-primary">9</span>
                    </a>

                    <a
                      href="#item-3-3"
                      id="clickleftmenu5"
                      style={{ textDecoration: "none" }}
                      class="clickleftmenu list-group-item bg-light bg-gradient"
                    >
                      <i class="fas fa-users"></i>Users
                      <span class="badge countbadge badge-primary">9</span>
                    </a>

                    <a
                      href="#item-3-3"
                      id="clickleftmenu6"
                      style={{ textDecoration: "none" }}
                      class="clickleftmenu list-group-item bg-light bg-gradient"
                    >
                      <i class="fas fa-briefcase"></i>Jobs
                      <span class="badge countbadge badge-primary">9</span>
                    </a>
                  </div>
                  <a
                    href="#item-1"
                    class="list-group-item clickleftmenu bg-light bg-gradient"
                    style={{ fontSize: "12px", textDecoration: "none" }}
                    id="clickleftmenu7"
                  >
                    Teams
                  </a>
                </div>
              </div>
            </div>
          {/*second grid*/}
            <div class="col-7 bgmoredark">
              <div class="row margquesions">
                <div class="col-9">
                  <h3 class="allquesionhead">Top Questions</h3>
                </div>
                <div class="col-3">
                  <button class="btn btn-secondary">Ask Question</button>
                </div>
              </div>

              <div class="row margquesions1">
                <div class="col-5">
                  <h4 class="countallquesion">38 Questions</h4>
                </div>
                <div class="col-5">
                  <div class="row">
                    <ul class="list-group list-group-horizontal">
                      <a href="#" class="list-group-item active list-group-item-action border border-secondary">Newest</a>
                      <a href="#" class="list-group-item d-flex align-items-center list-group-item-action border border-secondary"><span class="badge badge-secondary">15</span>&nbsp;&nbsp;Top</a>
                      <a href="#" class="list-group-item list-group-item-action border border-secondary">Views</a>
                      <a href="#" class="list-group-item list-group-item-action border border-secondary">Oldest</a>
                    </ul>
                  </div>
                </div>
              </div>
              <hr />


              <Questions />
              <nav aria-label="Page navigation example">
                <ul class="pagination justify-content-center">
                  <li class="page-item disabled">
                    <a class="page-link" href="#" tabindex="-1">Previous</a>
                  </li>
                  <li class="page-item"><a class="page-link" href="#">1</a></li>
                  <li class="page-item"><a class="page-link" href="#">2</a></li>
                  <li class="page-item"><a class="page-link" href="#">3</a></li>
                  <li class="page-item">
                    <a class="page-link" href="#">Next</a>
                  </li>
                </ul>
              </nav>
            </div>
          {/*third grid*/}
            <div class="col-3 bgmoredark">
            <br/>
              <SideFeatured/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default homepage;
