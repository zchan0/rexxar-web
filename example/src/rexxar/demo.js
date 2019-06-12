import './demo.css';

import React from 'react';
import { render } from 'react-dom';
import { rexxarFetch } from 'rexxar-web';
import { Request } from '../common/utils/request';
import BookListComponent from './components/BookListComponent';

class DemoApp extends React.Component {
  state = {
    annotations: [],
    books: [],
    bookAnnotations: new Map()
  }

  getAnnotations = (uid) => {
    const url = 'https://api.douban.com/v2/book/user/' + uid + '/annotations';
    return rexxarFetch(url)
    .then(Request.checkError)
    .then(Request.parseJSON)
  }

  processRawAnnotations = (annotations) => {
    const books = []
    const bookMap = new Map()
    annotations.map(annotation => {
      const found = books.find(book => {
        return book.id === annotation.book.id
      })
      if (found === undefined) {
        books.push(annotation.book)
        const array = new Array(annotation)
        bookMap.set(annotation.book.id, array)
      } else {
        const array = bookMap.get(found.id)
        array.push(annotation)
        bookMap.set(found.id, array)
      }
    })
    this.setState({ books: books, bookAnnotations: bookMap})
  }

  componentDidMount() {
    const uid = 'theyear'
    this.getAnnotations(uid).then(response => {
      let annotations = response.annotations
      this.setState( {annotations: annotations} )
      this.processRawAnnotations(annotations)
    })
  }

  render() {
    return (
      <div>
        <BookListComponent books = {this.state.books} bookAnnotations = {this.state.bookAnnotations}/>
      </div>
    )
  }
}

export default DemoApp

render(
  <DemoApp />,
  document.getElementById('app')
)
