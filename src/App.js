import { Header } from "./components/Header";

import { Home } from "./pages/Home";
import { DapiContainer } from "./pages/Dapi"
import { Aapi } from "./pages/Aapi"
import { AboutContainer } from "./pages/About"
import { Route } from 'react-router-dom';
import { VMoviePage, VMoviePageContainer } from "./pages/MoviePage";
import { Auth } from "./pages/Auth";
import { VSelectedMoviePageContainer } from "./pages/MoviePage/VSelectedMoviePage/VSelectedMoviePageContainer";
import { VWrapperSC } from "./pages/MoviePage/styles";

function App() {
  return (
    <div className="App">
      <Header />
      <Route path='/Auth' render={() => <Auth />} />
      <Route path='/home' render={() => <Home />} />

      <Route path='/Dapi' render={() => <DapiContainer />} />
      <Route exact path='/Vapi' render={() => <VMoviePageContainer />} />

      <Route path='/Aapi' render={() => <Aapi />} />
      <Route path='/Vapi/movie/:movieId?' render={() => <VSelectedMoviePageContainer />} />
      <Route path='/About' render={() => <AboutContainer />} />
    </div>
  );
}

export default App;
