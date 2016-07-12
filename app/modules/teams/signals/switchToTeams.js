import when from 'cerebral-addons/when';
import {redirect} from 'cerebral-module-router';
import redirectToDetail from '../actions/redirectToDetail';


export default [
  when('state:/app.selectedTeamId'), {
    true: [redirectToDetail],
    false: [redirect('/teams')]
  }
];
