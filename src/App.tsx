import React, {useState} from 'react';
import {NavigationBar} from "./shared/components/navigationBar/navigationBar";
import {Redirect, Route, Switch} from 'react-router-dom';
import {MoviePage} from "./pages/moviePage/moviePage";
import {BodySC, ContentSC, NavigationWrapperSC} from "./styles/App.styles";
import {FavouriteMoviesPageContainer} from "./pages/favouriteMoviesPage/favouriteMoviesPageContainer";
import  {SelectedMoviePageContainer} from "./pages/selectedMoviePage/selectedMoviePageContainer";
import {Person} from "./pages/personPage/person";
import {HomePage} from "./pages/homePage/homePage";
import {ChatPage} from "./pages/chatPage/chatPage";

function App() {
    const [navigationVisibility, setNavigationVisibility] = useState(true);

    return (
        <BodySC>
            {/*<NavigationWrapperSC navigationVisibility={navigationVisibility}>*/}
            {/*    <NavigationBar navigationVisibility={navigationVisibility}/>*/}
            {/*</NavigationWrapperSC>*/}
            <ContentSC navigationVisibility={navigationVisibility}>
                <Switch>
                    <Route exact path='/movies' render={() => <MoviePage />}/>
                    <Route path='/home' render={() => <HomePage setNavigationVisibility={setNavigationVisibility} navigationVisibility={navigationVisibility}/>}/>
                    <Route path='/about' render={() => <div>about</div>}/>
                    <Route path='/person/:personId?' render={() => <Person />}/>
                    <Route path='/movie/:movieId?' render={() => <SelectedMoviePageContainer />}/>
                    <Route path='/favourite' render={() => <FavouriteMoviesPageContainer />}/>
                    <Route path='/chat' render={() => <ChatPage />}/>
                    <Route path="/404" render={() => <div>not found 404</div>}/>
                    <Redirect exact from="/" to="/home" />
                    {/*<Redirect to="/404"/>*/}
                </Switch>
            </ContentSC>
        </BodySC>
    );
}

export default App;
