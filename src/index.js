import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './index.css';
import Home from "./Pages/Home";
import BookViewer from "./Pages/Viewer";
import SearchResult from "./Pages/SearchResult";
import GridItemList from "./Componets/GridItemList";
import reportWebVitals from './reportWebVitals';

require('typeface-noto-serif-jp');

ReactDOM.render(
    <Router>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/viewer" component={BookViewer}/>
            <Route path="/result" component={SearchResult}/>
            <Route path="/grid" component={GridItemList}/>
        </Switch>
    </Router>
    ,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
