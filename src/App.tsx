import {Navigation} from "./components/Header";
import {Redirect, Route, Switch} from 'react-router-dom';
import {VMoviePage} from "./pages/MoviePage";
import {Auth} from "./pages/Auth";
import {BodySC, ContentSC, NavigationWrapperSC} from "./styles/AppSC";
import FavouriteMoviesPageContainer from "./pages/FavouritesMoviesPage/FavouriteMoviesPageContainer";
import  VSelectedMoviePageContainer from "./pages/MoviePage/VSelectedMoviePage/VSelectedMoviePageContainer";

function App() {
    return (
        <BodySC>
            <NavigationWrapperSC>
                <Navigation/>
            </NavigationWrapperSC>
            <ContentSC>
                <Switch>
                    <Route path='/Auth' render={() => <Auth/>}/>
                    <Route exact path='/Vapi' render={() => <VMoviePage/>}/>
                    <Route path='/home' render={() => <div>home</div>}/>
                    <Route path='/about' render={() => <div>about</div>}/>
                    <Route path='/Vapi/movie/:movieId?' render={() => <VSelectedMoviePageContainer/>}/>
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
