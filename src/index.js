import React from "react";
import App from "./App";
import CreatePost from "./components/CreatePost";
import Upload from "./components/Upload";
import CompleteUpload from "./components/CompleteUpload";
import registerServiceWorker from "./registerServiceWorker";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./semantic/dist/semantic.min.css";
import "./index.css";

render(
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/create" component={CreatePost} />
      <Route path="/upload" component={Upload} />
      <Route path="/complete_upload" component={CompleteUpload} />
      <Route path="*" render={() => <h1>Not found</h1>} />
    </Switch>
  </Router>,
  document.getElementById("root")
);

registerServiceWorker();
