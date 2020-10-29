import React from 'react';
import Estrenos from './components/Estrenos';
import { BrowserRouter , Route, Switch} from "react-router-dom";
import './App.css';
import Detalles from './components/Detalles';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Switch>
           <Route path='/' exact  component={Estrenos}/>
           <Route path='/detalles/:peliculaId' exact  component={Detalles}/>

        </Switch>

      </BrowserRouter>

      
    
    </div>
  );
}

export default App;
