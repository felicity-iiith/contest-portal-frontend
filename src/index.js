import { render } from 'inferno';
import App from './App';
import './index.css';

import { Router, Route, IndexRoute } from 'inferno-router';
import createBrowserHistory from 'history/createBrowserHistory';

import './fetchWithAuth';

import Login from './Login';
import Logout from './Logout';
import QuestionsList from './QuestionsList';
import QuestionViewer from './QuestionViewer';
import Scoreboard from './Scoreboard';

const browserHistory = createBrowserHistory();
window.browserHistory = browserHistory;

window.email = window.localStorage.getItem('email')

const routes = (
  <Router history={ browserHistory }>
    <Route component={ App }>
      <IndexRoute component={QuestionsList}/>
      <Route path="/question/:qno" component={QuestionViewer} />
      <Route path="/login" component={Login} />
      <Route path="/scoreboard" component={Scoreboard} />
      <Route path="/logout" component={Logout} />
    </Route>
  </Router>
);

render(routes, document.getElementById('app'));
