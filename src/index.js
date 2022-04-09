import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./index.css";

const LazyApp = lazy(() => import("./App"));
const LazyAnimeDetails = lazy(() => import("./components/AnimeDetails"));

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={null}>
      <Router>
        <Switch>
          <Route path="/" exact component={LazyApp} />
          <Route path="/:id" exact component={LazyAnimeDetails} />
          <Route path="*" render={() => <h1>Page Not Found</h1>} />
        </Switch>
      </Router>
    </Suspense>
  </React.StrictMode>,
  document.getElementById("root")
);
