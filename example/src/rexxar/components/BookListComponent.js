require('es6-promise').polyfill();
import React, { PureComponent } from 'react';
import { rexxarFetch } from 'rexxar-web';
import { Request } from '../../common/utils/request';

class BookListComponent extends PureComponent {
  getAnnotations = (uid) => {
    let url = 'https://api.douban.com/v2/book/user/' + uid + '/annotations';
    rexxarFetch(url)
    .then(Request.checkError)
    .then(Request.parseJSON);
  }

  render () {
    const { uid } = this.props;
    this.getAnnotations(uid);
    return (
      <div className='bookList'>
        <h1>Test</h1>
      </div>
    )
  }
}

export default BookListComponent;
