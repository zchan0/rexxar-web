import './demo.css';

import React from 'react';
import { render } from 'react-dom';

// import TitleComponent from './components/TitleComponent';
// import ToastComponent from './components/ToastComponent';
// import MenuComponent from './components/MenuComponent';
// import DialogComponent from './components/DialogComponent';
// import CntrAPIComponent from './components/CntrAPIComponent';
import BookListComponent from './components/BookListComponent';

const Demo = () => (
  <div>
    {/* <TitleComponent />
    <ToastComponent />
    <MenuComponent />
    <DialogComponent />
    <CntrAPIComponent />  */}
    <BookListComponent uid='theyear' />
  </div>
)

render(
  <Demo />,
  document.getElementById('app')
)
