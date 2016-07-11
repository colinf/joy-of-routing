import Controller from 'cerebral';
import Model from 'cerebral-model-baobab';
import testData from './testData';

const teamSort = (a, b) => a.name.localeCompare(b.name);

const teamsArray = Model.monkey(
  ['teams', 'data'],
  teams => {
    if (Object.keys(teams).length > 0) {
      return Object.keys(teams).map(id => teams[id]).sort(teamSort);
    } else {
      return [];
    }
  }
)

const model = Model({
  app: {
    currentPage: ''
  },
  teams: {
    data: testData,
    byName: teamsArray
  }
});

export default Controller(model);
