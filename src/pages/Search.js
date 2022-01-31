import React from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from '../BooksAPI'
import { Book } from '../components'
import Service from '../Service';
class Search extends React.Component {
  state = {
    books: [],
  }

  searchBooks(keyword) {
    
    if(keyword.trim().length <= 0) {
      this.setState({books: []})
      return 
    }
    BooksAPI.search(keyword).then(list => {
      if (list.error) {
        this.setState({books: []})
        return
      }
      this.setState({
        books: list
      })
    }).catch(err => {
      console.log(err);
      this.setState({books: []})
    })
  }

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            <input type="text" onKeyUp={(e) => {this.searchBooks(e.target.value)}} placeholder="Search by title or author"/>
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.books.map(book => <Book key={book.id} book={book} />)}
          </ol>
        </div>
      </div>
    )
  }
}
Search.contextType = Service
export default Search