import './App.css';
import Dropdown from './components/Dropdown';
import FileUploader from './components/FileUploader';
import { Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
    <main>
      <Switch>
        <Route path='/' exact>
          <FileUploader />
        </Route>
        <Route path='/dropdown'>
          <Dropdown />
        </Route>
      </Switch>
    </main>
    </div>
  );
}

export default App;
