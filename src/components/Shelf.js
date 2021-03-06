import React from 'react'
import {Book} from './'

// import * as BooksAPI from './BooksAPI'

class Shelf extends React.Component {
  render() {
    const {title, books} = this.props
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            
              {
                books.map((book, index) => (
                  <li key={book.id}>
                    <Book shelf={title} book={book} />
                  </li>
                ))
              }
          </ol>
        </div>
      </div>
    )
  }
}


export default Shelf

