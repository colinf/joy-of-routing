import { Component } from 'cerebral-view-snabbdom';
import { Paper, Table } from 'snabbdom-material';
import TeamListItem from '../TeamListItem';

export default Component(({
  state: {app: {selectedTeamId}, teams: {byName}},
  signals
}) => {
  return (
    <Paper noPadding style={{ paper: { margin: '24px 0' } }}>
      <Table>
        <tbody>
        {byName.map(team =>
          <TeamListItem
            key={team._id}
            {...team}
            onClick={() => signals.teams.teamSelected({id: team._id})}
          />
        )}
        </tbody>
      </Table>
    </Paper>
  );
});


