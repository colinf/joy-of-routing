import { Component } from 'cerebral-view-snabbdom'
import TeamList from '../TeamList';
import TeamDetailView from '../TeamDetailView';

export default Component (() => (
  <div className="pure-g">
    <TeamList />
    <TeamDetailView />
  </div>
));

