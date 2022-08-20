import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
// import { Link } from 'react-router-dom';
import BookCard from './BookCard';

class testbook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:8082/api/books')
      .then(res => {
        this.setState({
          books: res.data
        })
      })
      .catch(err =>{
        console.log('Error from ShowBookList');
      })
  };



	render(){
		const books = this.state.books;
		let data
		if(!books) {
	      data = "there is no book record!";
	    } else {
	      data = books.map((book, k) =>
	        <BookCard book={book} key={k} />
	      );
	    }
		return(
			<div>
				<h1>This is our function</h1>
				<div>
				{data}
				</div>
			</div>
		);
	}

 }

 export default testbook;