import React from 'react'
import Service from '../Service';

// import * as BooksAPI from './BooksAPI'

class Book extends React.Component {
  render() {
    const {book, shelf} = this.props;
    const myFun = this.context.updateBook;
    // console.log(book);
    // console.log(book.id, shelf);
    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${book.imageLinks.thumbnail}")` }}></div>
          <div className="book-shelf-changer">
            {/* <select onChange={(e) => {console.log(book.id, e.currentTarget.value)}}> */}
            <select onChange={(e) => {this.context.updateBook(book.id, e.currentTarget.value)}}>
              <option value="move" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
          <div className="book-authors">
            {
              book.authors.map((author, index) => (
                <span key={index}>
                  {index > 0 && ', '}
                  {author}</span>
              ))
            }
          </div>
      </div>
    )
  }
}

Book.contextType = Service

export default Book



