import Header from "./components/Header";
import Card from "./components/Cards";
import './App.css'
import Footer from "./components/Footer"
import ContextProvider from "./store/ContextProvider";
import Cart from "./components/Cart";

function App() {
  return (
    <ContextProvider >
      <Header/>
      <div className="title_holder"><p className="title">The one Zone of all your wanted collections</p></div>
      <Card/>
      <Footer/>
      <Cart/>
    </ContextProvider>
  );
}

export default App;
