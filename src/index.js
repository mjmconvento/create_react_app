import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import CreatePost from './components/CreatePost';
import Upload from './components/Upload';
import CompleteUpload from './components/CompleteUpload';
import registerServiceWorker from './registerServiceWorker';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


// ReactDOM.render(<App />, document.getElementById('root'));
render(
    <Router>
        <Switch>
            <Route exact path="/" component={App}/>
            <Route path="/create" component={CreatePost} />
            <Route path="/upload" component={Upload} />
            <Route path="/complete_upload" component={CompleteUpload} />
            <Route path="*" render={() => <h1>Not found</h1>} />
        </Switch>
    </Router>
  , document.getElementById('root')
);

registerServiceWorker();
