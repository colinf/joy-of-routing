import { Component } from 'cerebral-view-snabbdom'
import TeamList from '../TeamList';
import TeamDetailView from '../TeamDetailView';

export default Component (() => (
  <div>
    <TeamList />
    <TeamDetailView />
  </div>
));

