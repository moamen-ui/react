import React from 'react'
import { Link } from 'react-router-dom'
import {Shelf} from '../components'


class Home extends React.Component {
  


  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {this.props.shelf.map((shelf, index) => (
              <Shelf key={index} title={shelf.title} books={shelf.books} />
            ))}
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    )
  }
}


export default Home

