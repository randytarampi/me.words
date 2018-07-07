import {configureStore, reducers, ReduxRoot} from "@randytarampi/jsx";
import createBrowserHistory from "history/createBrowserHistory";
import React from "react";
import routes from "../routes";

const history = createBrowserHistory();
const store = configureStore(undefined, history, reducers);
const App = () => <ReduxRoot fetchUrl={`${__WORDS_URL__}`} history={history} routes={routes} store={store}/>;

export default App;
