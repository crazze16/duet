import {NavigationBar} from "./shared/components/navigationBar/navigationBar";
import {Redirect, Route, Switch} from 'react-router-dom';
import {MoviePage} from "./pages/moviePage/moviePage";
import {BodySC, ContentSC, NavigationWrapperSC} from "./styles/App.styles";
import {FavouriteMoviesPageContainer} from "./pages/favouriteMoviesPage/favouriteMoviesPageContainer";
import  {SelectedMoviePageContainer} from "./pages/selectedMoviePage/selectedMoviePageContainer";
import {Person} from "./pages/personPage/person";

function App() {
    return (
        <BodySC>
            <NavigationWrapperSC>
                <NavigationBar/>
            </NavigationWrapperSC>
            <ContentSC>
                <Switch>
                    <Route exact path='/movies' render={() => <MoviePage/>}/>
                    <Route path='/home' render={() => <div>home</div>}/>
                    <Route path='/about' render={() => <div>about</div>}/>
                    <Route path='/person/:personId?' render={() => <Person/>}/>
                    <Route path='/movie/:movieId?' render={() => <SelectedMoviePageContainer/>}/>
                    <Route path='/favourite' render={() => <FavouriteMoviesPageContainer/>}/>
                    <Route path="/404" render={() => <div>not found 404</div>}/>
                    <Redirect exact from="/" to="/home" />
                    <Redirect to="/404"/>
                </Switch>
            </ContentSC>
        </BodySC>
    );
}

export default App;
