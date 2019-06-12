import React, { Component } from 'react'

class AnnotationsComponent extends Component {
  render () {
    const { annotations } = this.props
    return (
      <ol className='annotationList' style={{overflow: 'hidden'}}>
        {annotations.map((annotation, index) => {
          return (
            <li className='annotation' key={annotation.id}>
            <p>{annotation.summary}</p>
            {annotation.abstract_photo && (<img src={annotation.abstract_photo} />)}
            <div className='caption' style={{color: '#999999', textAlign: 'right', marginBottom: 8, marginRight: 14}}>
              {'第 ' + annotation.page_no + ' 页 ' + annotation.time}
            </div>
            { index + 1 !== annotations.length && (<hr></hr>)}
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
        {books.map((book, index) => {
          return (
            <div className='book' key={book.id}>
              <h1>{book.title}</h1>
              <hr></hr>
              <AnnotationsComponent annotations = {bookAnnotations.get(book.id)} />
              { index + 1 !== books.length && (<div className='block' style={ {height: 14, width: '100%', backgroundColor: '#fafafa', margin: 0} }></div>) }
            </div>
          )
        })}
      </div>
    )
  }
}

export default BookListComponent
