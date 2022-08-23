import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import CreateBook from './components/CreateBook';
import ShowBookList from './components/ShowBookList';
import ShowBookDetails from './components/ShowBookDetails';
import UpdateBookInfo from './components/UpdateBookInfo';
import homepage from './components/HomePage/homepage';
import testbook from './components/testbook';
import userprofile from './components/UserProfile/UserProfile';
import Question from './components/Question/question';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={ShowBookList} />
          <Route path='/create-book' component={CreateBook} />
          <Route path='/edit-book/:id' component={UpdateBookInfo} />
          <Route path='/show-book/:id' component={ShowBookDetails} />
          <Route path='/home/' component={homepage} />
          <Route path='/user/' component={userprofile} />
          <Route path='/question/' component={Question} />
          <Route path='/testing' component={testbook} />
        </div>
      </Router>
    );
  }
}

export default App;