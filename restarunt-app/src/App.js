import { Fragment } from 'react';
import './App.css';
import Header from './components/layout/header';
import CartButton from './components/layout/ButtonForCart';

function App() {
  return (
    <Fragment>
      <Header />
      <CartButton />
    </Fragment>
  );
}

export default App;
