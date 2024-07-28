import Routerecommerce from './Router';
import './App.css'
import ContextProvider from "./store/ContextProvider";



function App() {
  
  return (
      <Routerecommerce>
          <ContextProvider/>
      </Routerecommerce>
  );
}

export default App;
