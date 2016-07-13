import { Component } from 'cerebral-view-snabbdom'

export default Component (({
  state: {app: {selectedTeamId}, teams: {data}},
  signals
}) => {
  if (!selectedTeamId) return <div id="main" className="pure-u-1"></div>
  const {id, name, stadium} = data[selectedTeamId];
  return (
    <div id="main" className="pure-u-1">
      <div className="team-content">
        <div className="team-content-header">
            <h1 className="team-content-title">{name}</h1>
        </div>

        <div className="team-content-body">
          <form className="pure-form pure-form-aligned">
            <fieldset>
              <div className="pure-control-group">
                <label htmlFor="teamId">Id</label>
                <input id="teamId" type="text" value={id} readOnly />
              </div>
              <div className="pure-control-group">
                <label htmlFor="teamName">Name</label>
                <input id="teamName" type="text" value={name} readOnly />
              </div>
              <div className="pure-control-group">
                <label htmlFor="stadiumName">Stadium</label>
                <input id="stadiumName" type="text" value={stadium.name} readOnly />
              </div>
              <div className="pure-control-group">
                <label htmlFor="stadiumPostcode">Postcode</label>
                <input id="stadiumPostcode" type="text" value={stadium.postcode} readOnly />
              </div>
              <div className="pure-control-group">
                <label htmlFor="stadiumCapacity">Capacity</label>
                <input id="stadiumCapacity" type="text" value={stadium.capacity} readOnly />
              </div>
            </fieldset>
            <button className="pure-button secondary-button"
                    type="button"
                    on-click={() => signals.teams.opened()}
            >
              Close
            </button>
          </form>
        </div>
      </div>
    </div>
  );
});

