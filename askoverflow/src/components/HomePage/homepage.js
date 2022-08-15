import React, { Component } from "react";
import "./homepage.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { NavForHome } from "../NavBar/NavBar";
import $ from "jquery";

class homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
    };
  }

  render() {
    $(function () {
      $(".list-group-item").on("click", function () {
        $(".fas", this)
          .toggleClass("fa-chevron-right")
          .toggleClass("fa-chevron-down");
      });
    });

    (function () {
      $(".clickleftmenu").on("click", function () {
        
        $(".clickleftmenu", this)
        .css("border-right-width", "10px")
        .css("border-right-style", "solid")
        .css("border-color", "red");
      });
    });

    return (
      <div>
        <NavForHome />
        <br />
        {/* Grid System for questions */}
        <div class="container" style={{ bottom: "10px" }}>
          <div class="row">
            <div class="col-3 bg-light bg-gradient">
              <div class="just-padding ">
                <div class="list-group list-group-flush bg-light bg-gradient">
                  <a
                    href="#item-1"
                    class="list-group-item clickleftmenu bg-light bg-gradient"
                    style={{ fontSize: "20px" }}
                    data-toggle="collapse"
                  >
                    HOME
                  </a>

                  <a
                    href="#item-3"
                    class="list-group-item clickleftmenu bg-light bg-gradient"
                    data-toggle="collapse"
                    style={{ fontSize: "20px" }}
                  >
                    PUBLIC
                  </a>
                  <div class="list-group list-group-flush bg-light bg-gradient" id="item-3">
                    <a href="#item-3-1" class=" clickleftmenu list-group-item bg-light bg-gradient">
                      <i class="fas fa-globe-africa"></i>Questions
                      <span class="badge countbadge badge-primary">9</span>
                    </a>

                    <a href="#item-3-2" class="clickleftmenu list-group-item bg-light bg-gradient">
                    <i class="fas fa-tags"></i>Tags<span class="badge countbadge badge-primary">9</span>
                    </a>

                    <a href="#item-3-3" class="clickleftmenu list-group-item bg-light bg-gradient">
                    <i class="fas fa-users"></i>Users<span class="badge countbadge badge-primary">9</span>
                    </a>

                    <a href="#item-3-3" class="clickleftmenu list-group-item bg-light bg-gradient">
                    <i class="fas fa-briefcase"></i>Jobs<span class="badge countbadge badge-primary">9</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-9"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default homepage;
