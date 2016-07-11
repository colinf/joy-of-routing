import Devtools from 'cerebral-module-devtools';
import { render, Component } from 'cerebral-view-snabbdom';
import Router from 'cerebral-module-router';
import controller from './controller';
import styles from './styles';

import App from './components/App';
import About from './modules/about';
import AppModule from './modules/app';
import Teams from './modules/teams';

styles.init();

controller.addModules({
  devTools: Devtools(),

  app: AppModule(),

  about: About(),

  teams: Teams(),

  router: Router({
    '/': 'app.opened',
    '/about': 'about.opened',
    '/teams': {
      '': 'teams.opened',
      '/:id': 'teams.teamSelected'
    }
  })
});

render(() => <App/>, document.querySelector('#root'), controller);
