import React from 'react'
import Service from '../Service';

// import * as BooksAPI from './BooksAPI'

class Book extends React.Component {

  
  render() {
    let {book, shelf} = this.props
    shelf = shelf || this.context.shelfs.map(s => s.books.some(b => b.id == book.id) && s.title).find(i => i)
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



