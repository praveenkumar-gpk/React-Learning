import './App.css';
import React from 'react'
import Header from './components/Header';
import CartProvider from './store/CartProvider';
import List from './components/List';
import VotingModal from './components/modal/VotingModal';

function App() {
  return <CartProvider>
      <Header/>
      <VotingModal/>
      <List/>
    </CartProvider>
}

export default App;
