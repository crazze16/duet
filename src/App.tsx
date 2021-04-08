import {NavigationBar} from "./components/NavigationBar/NavigationBar";
import {Redirect, Route, Switch} from 'react-router-dom';
import {MoviePage} from "./pages/MoviePage/MoviePage";
import {BodySC, ContentSC, NavigationWrapperSC} from "./styles/AppSC";
import {FavouriteMoviesPageContainer} from "./pages/FavouritesMoviesPage/FavouriteMoviesPageContainer";
import  {SelectedMoviePageContainer} from "./pages/MoviePage/SelectedMoviePage/SelectedMoviePageContainer";

function App() {
    return (
        <BodySC>
            <NavigationWrapperSC>
                <NavigationBar/>
            </NavigationWrapperSC>
            <ContentSC>
                <Switch>
                    <Route exact path='/Vapi' render={() => <MoviePage/>}/>
                    <Route path='/home' render={() => <div>home</div>}/>
                    <Route path='/about' render={() => <div>about</div>}/>
                    <Route path='/Vapi/movie/:movieId?' render={() => <SelectedMoviePageContainer/>}/>
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
