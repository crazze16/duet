import { Header } from "./components/Header";

import { Home } from "./pages/Home";
import { Vapi } from "./pages/Vapi";
import { Dapi } from "./pages/Dapi"
import { Aapi } from "./pages/Aapi"
import { About } from "./pages/About"
import { Auth } from "./pages/Auth";

import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Route path='/Auth' render={() => <Auth />} />
      <Route path='/home' render={() => <Home />} />
      <Route path='/Vapi' render={() => <Vapi />} />
      <Route path='/Dapi' render={() => <Dapi />} />
      <Route path='/Aapi' render={() => <Aapi />} />
      <Route path='/About' render={() => <About />} />
    </div>
  );
}

export default App;
