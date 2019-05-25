import React from 'react';
import { Route, HashRouter as Router } from 'react-router-dom';
import { createBrowserHistory } from "history";
import RepositoriesProvider from "../context";


import Home from "../home/home.component";
import BookMarks from "../bookmarks/bookmarks.component";

const customHistory = createBrowserHistory();

const Routes = () => {
    return (
        <RepositoriesProvider>
            <Router history={customHistory}>
                <>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/bookmarks" component={BookMarks} />
                </>
            </Router>
        </RepositoriesProvider>



    )
}
export default Routes