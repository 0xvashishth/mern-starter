import React, { Component } from "react";
import "./homepage.css";
import axios from "axios";
import { Link } from "react-router-dom";
import {NavForHome} from '../NavBar/NavBar';

class homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
    };
  }

  render() {
    return (
      <div>
        <NavForHome/>
      </div>
    );
  }
}

export default homepage;
