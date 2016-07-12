import set from 'cerebral-addons/set';
import {redirect} from 'cerebral-module-router'

export default [
  set('state:/app.selectedTeamId', null),
  redirect('/teams')
];
