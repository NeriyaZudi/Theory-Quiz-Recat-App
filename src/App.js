

import { BrowserRouter,Switch,Route} from 'react-router-dom';
import './App.css';
import {Link} from 'react-router-dom';
import HomePage from './HomePage';
import Questions from './Questions';
import ErrorPage from './ErrorPage';


function App() {
  return (
    
    <main>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/quiz" exact>
            <Questions />
         </Route>
          <Route>
            <ErrorPage />
          </Route>
      </Switch>
      </BrowserRouter>
    
    </main>
  
  );
}

export default App;
