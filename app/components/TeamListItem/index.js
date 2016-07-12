import { Component } from 'cerebral-view-snabbdom';
import classnames from 'classnames';

const selectedRowStyle = { row: {backgroundColor: '#F5F5F5'}};

export default Component (({
  props: {id, name, onClick},
  state: {app: {selectedTeamId}}
}) => (
  <div className={classnames({'team-item': true, 'pure-g': true, 'team-item-selected': selectedTeamId === id})}
       on-click={onClick}
  >
    <div className="pure-u-1">
      <h5 className="email-name">{name}</h5>
    </div>
  </div>
));

