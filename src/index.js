import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch  } from 'react-router-dom';
import promise from 'redux-promise';

import Header from './components/Header';
// import Footer from './components/Footer';
import Home from './components/Home';
// import Results from './components/results';
import Movie from './components/Movie';
import reducers from './reducers';
import registerServiceWorker from './registerServiceWorker';

import "./styles/app.css";

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter>
            <div>
                {<Header />  }
                
                <Switch >
                    {/* <Route path="/search/:term" component={ Results }/> */}
                    <Route path="/movie/:id" component={ Movie } />
                    <Route path="/" component={ Home } />
                </Switch>
                
                {/* <Footer /> */}
            </div>
        </BrowserRouter>
    </Provider>
, document.getElementById('root'));
registerServiceWorker();
