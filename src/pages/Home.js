import React from 'react'
import { Link } from 'react-router-dom'
import {Shelf} from '../components'
import * as BooksAPI from '../BooksAPI'
import Service from '../Service'


class Home extends React.Component {
  state = {
    shelfs: []
  }
  async componentDidMount() {
    await BooksAPI.getAll().then(books => {
      
      let shelfTitle = [
        ...new Set(books.map(book => book.shelf))
      ];

      this.setState({
        shelfs: shelfTitle.map(shelf => {
          let obj = {}
          obj['title'] = shelf
          obj['books'] = books.filter(book => shelf === book.shelf)
          return obj
        })
      });

    })
  }

  shelfBooks(shelf, books) {
    this.setState({
      shelfs: shelfTitle.map(shelf => {
        let obj = {}
        obj['title'] = shelf
        obj['books'] = books.filter(book => shelf === book.shelf)
        return obj
      })
    });
  }

  async updateBook (book, shelf) {
    await BooksAPI.update(book, shelf).then(book => {
      console.log (book)
    })
  }


  async getBook (book) {
    await BooksAPI.get(book.id).then(book => {
      console.log (book)
    })
  }


  render() {
    return (
      <Service.Provider value={{'shelfs': this.state.shelfs, 'updateBook': this.updateBook}}>
      <div className="list-books">
            <div className="list-books-title">
              <h1 onClick={() => {this.updateBook('vv')}}>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                {this.state.shelfs.map((shelf, index) => (
                  <Shelf key={index} title={shelf.title} books={shelf.books} />
                ))}
                
                
              </div>
            </div>
            <div className="open-search">
              <Link to="/search">Add a book</Link>
            </div>
          </div>
        </Service.Provider>
    )
  }
}

export default Home

