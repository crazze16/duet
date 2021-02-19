import { Header } from "./components/Header";

import { Home } from "./pages/Home";
import { Dapi } from "./pages/Dapi"
import { Aapi } from "./pages/Aapi"
import { About } from "./pages/About"
import { Route } from 'react-router-dom';
import {VMoviePage} from "./pages/MoviePage";
import { Auth } from "./pages/Auth";

function App() {
  return (
    <div className="App">
      <Header />
      <Route path='/home' render={() => <Home />} />
      <Route path='/Auth' render={() => <Auth />} />
      <Route path='/home' render={() => <Home />} />
      <Route path='/Vapi' render={() => <VMoviePage />} />
      <Route path='/Dapi' render={() => <Dapi />} />
      <Route path='/Aapi' render={() => <Aapi />} />
      <Route path='/About' render={() => <About />} />
    </div>
  );
}

export default App;
