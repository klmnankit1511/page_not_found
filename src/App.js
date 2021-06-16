import logo from './logo.svg';
import './App.css';
import Error from './Error';
import { BrowserRouter as Router , Link,Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/error" exact={true}><Error /></Route>
      </Router>
    
    </div>
  );
}


export default App;
