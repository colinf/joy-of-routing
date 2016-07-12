import opened from './signals/opened';
import teamClosed from './signals/teamClosed';
import switchToTeams from './signals/switchToTeams';
import teamSelected from './signals/teamSelected';

export default () => {
  return module => {

    module.addSignals({
      opened,
      teamClosed,
      switchToTeams,
      teamSelected: [...opened, ...teamSelected]
    });
  };
}
