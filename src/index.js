import React from "react";
import App from "./App";
import CreatePost from "./components/CreatePost";
import FullClient from "./components/complete_upload/FullClient";
import Upload from "./components/Upload";
import Topbar from "./template/Topbar";
import Navbar from "./template/Navbar";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import registerServiceWorker from "./registerServiceWorker";
import "./semantic/dist/semantic.min.css";
import { Grid } from "semantic-ui-react";
import Inbox from "./components/Inbox";

render(
  <div>
    <Topbar />
    <Grid celled>
      <Grid.Row style={{ height: "90vh" }}>

        <Grid.Column width={2} style={{ backgroundColor: "blue" }}>
          <Navbar />
        </Grid.Column>

        <Grid.Column width={9}>
          <Router basename={'dashboard'}>
            <Switch>
              <Route exact path="/" component={App} />
              <Route path="/create" component={CreatePost} />
              <Route path="/upload" component={Upload} />
              <Route path="/sv_admin" component={FullClient} />
              <Route path="*" render={() => <h1>Not found</h1>} />
            </Switch>
          </Router>
        </Grid.Column>

        <Grid.Column width={5}>
          <Inbox />
        </Grid.Column>

      </Grid.Row>
    </Grid>
  </div>,
  document.getElementById("root")
);

registerServiceWorker();
