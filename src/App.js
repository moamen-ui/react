import React from 'react'
import {
  Routes,
  Route
} from "react-router-dom"

import * as BooksAPI from './BooksAPI'
import Service from './Service'
import './App.css'


import {Home, Search} from './pages'


class BooksApp extends React.Component {
  state = {
    shelfs: []
  }
  componentDidMount() {
    this.shelfBooks()
  }

  shelfBooks = async () => {

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
        })
    })
  }

  updateBook = async (bookID, shelfTitle) => {
    const updatedBooks = await BooksAPI.update(bookID, shelfTitle).then(res => {
      this.shelfBooks()
    })
  }

  render() {
    return (
      <div className="app">
        <Service.Provider value={{'shelfs': this.state.shelfs, 'updateBook': this.updateBook }}>
          <Routes>
            <Route exact path={'/'} element={<Home shelf={this.state.shelfs}/>} />
            <Route exact path={'/search'} element={<Search shelf={this.state.shelfs}/>} />
          </Routes>
        </Service.Provider>
      </div>
    )
  }
}

export default BooksApp
