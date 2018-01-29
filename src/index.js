import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import CreatePage from './components/CreatePage';
import registerServiceWorker from './registerServiceWorker';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


// ReactDOM.render(<App />, document.getElementById('root'));
render(
  <Router>
    <Switch>
      <Route exact path="/" component={App}/>
      <Route path="/create" component={CreatePage} />
      <Route path="*" render={() => <h1>Not found</h1>} />
    </Switch>
  </Router>
  , document.getElementById('root')
);

registerServiceWorker();
