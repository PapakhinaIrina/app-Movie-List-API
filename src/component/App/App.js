import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import Movies from '../Movies/Movies';
import MovieDetails from '../MoviesDetails/Movies-Details';
import 'bootstrap/dist/css/bootstrap.min.css';
import comments from '../../reducer/comments';


function App() {
    const stringMiddleware = () => (next) => (action) => {
        if (typeof action === 'string') {
            return next({
                type: action
            })
        }
        return next(action)
    };
    const store = configureStore({
        reducer: {comments},
        middleware: getDefaultMiddleware => getDefaultMiddleware().concat(stringMiddleware),
        devTools: process.env.NODE_ENV !== 'production',
    
    })
    return (
        <Provider store={store}>
        <div className='main'>
            <Router>
                <div className='movie-list'>
                    <Route path='/' exact component={Movies} />
                </div>
                <Route path='/movie-details/:id' component={MovieDetails} />
            </Router>
        </div>
        </Provider>
    );
}

export default App;
