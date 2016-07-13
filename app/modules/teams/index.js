import opened from './signals/opened';
import switchToTeams from './signals/switchToTeams';
import teamSelected from './signals/teamSelected';

export default () => {
  return module => {

    module.addSignals({
      opened,
      switchToTeams,
      teamSelected: [...opened, ...teamSelected]
    });
  };
}
