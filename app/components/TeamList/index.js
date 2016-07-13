import { Component } from 'cerebral-view-snabbdom';
import TeamListItem from '../TeamListItem';

export default Component(({
  state: {app: {selectedTeamId}, teams: {byName}},
  signals
}) => {
  return (
    <div id="list" className="pure-u-1">
      {byName.map(team =>
        <TeamListItem
          key={team.id}
          {...team}
          onClick={() => signals.teams.teamSelected({id: team.id})}
        />
      )}
    </div>
  );
});


