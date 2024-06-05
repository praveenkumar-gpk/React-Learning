import { Fragment } from 'react';
import './App.css';
import Header from './components/layout/header';
import Meals from './components/meal/Meals';

function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
