import opened from './signals/opened';

export default () => {
  return module => {

    module.addSignals({
      opened
    });
  };
}
