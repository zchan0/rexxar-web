import React, { Component } from 'react'

class AnnotationsComponent extends Component {
  render () {
    const { annotations } = this.props
    return (
      <ol className='annotationList'>
        {annotations.map(annotation => {
          return (
            <li className='annotation' key={annotation.id}>
            {annotation.summary}
            </li>
          )
        })}
      </ol>
    )
  }
}

class BookListComponent extends Component {
  render () {
    const { books, bookAnnotations } = this.props
    return (
      <div className='bookList'>
        {books.map(book => {
          return (
            <div className='book' key={book.id}>
              <h1>{book.title}</h1>
              <AnnotationsComponent annotations = {bookAnnotations.get(book.id)} />
            </div>
          )
        })}
      </div>
    )
  }
}

export default BookListComponent
