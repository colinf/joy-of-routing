import opened from './signals/opened';
import teamSelected from './signals/teamSelected';

export default () => {
  return module => {

    module.addSignals({
      opened,
      teamSelected
    });
  };
}
