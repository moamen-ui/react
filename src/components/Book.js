import React from 'react'
import Service from '../Service';

// import * as BooksAPI from './BooksAPI'

class Book extends React.Component {

  componentDidMount() {
    const {shelf} = this.props;
  }
  render() {
    const {book, shelf} = this.props;
    const myFun = this.context.updateBook;
    const image = book.imageLinks ? book.imageLinks.thumbnail : 'https://via.placeholder.com/128x193';

    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${image}")` }}></div>
          <div className="book-shelf-changer">
            <select defaultValue={shelf || 'none'} onChange={(e) => {this.context.updateBook(book, e.currentTarget.value)}}>
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
            { book.authors && book.authors.map((author, index) => (
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



