import { Header } from "./components/Header";

import { Home } from "./pages/Home";
import { DapiContainer } from "./pages/Dapi"
import { Aapi } from "./pages/Aapi"
import { AboutContainer } from "./pages/About"
import { Route } from 'react-router-dom';
import { VMoviePage } from "./pages/MoviePage";
import { Auth } from "./pages/Auth";

function App() {
  return (
    <div className="App">
      <Header />


      <Route path='/Auth' render={() => <Auth />} />
      <Route path='/home' render={() => <Home />} />
      <Route path='/Vapi' render={() => <VMoviePage />} />
      <Route path='/Dapi' render={() => <DapiContainer />} />
      <Route path='/Aapi' render={() => <Aapi />} />
      <Route path='/About' render={() => <AboutContainer />} />
    </div>
  );
}

export default App;
