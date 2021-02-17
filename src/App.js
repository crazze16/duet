import { Header } from "./components/Header";
import { Home } from "./components/Home";

import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path='/home' render={() => <Home />} />
      </Switch>
    </div>
  );
}

export default App;
