import { Component } from 'cerebral-view-snabbdom';
import { Sidenav } from 'snabbdom-material'
import { Paper } from 'snabbdom-material'
import TeamPage from '../TeamPage';
import AboutPage from '../AboutPage';

const pages = {
  'ABOUT': AboutPage,
  'TEAMS': TeamPage
};

const renderPage = pageText => {
  let Page = pages[pageText];
  if (Page) {
    return <Page />
  } else {
    return <div>Please select a page using the tabs on the left.</div>
  }
}

export default Component(({
  state: {app: {currentPage}},
  signals
}) => {
    return (
      <Paper noPadding
             elevation={0}
             style={{
              paper: {
              height: '600px',
              width: '800px',
              margin: '16px 0'
              }
      }}>
        <Sidenav mini style={{
          mini: {
            float: 'left',
            position: 'relative',
            top: '0',
            width: '100px',
            height: '600px'
          }
        }}>
          <Sidenav.Item
            onClick={() => signals.teams.opened()}
            selected={currentPage=='TEAMS'}
          >
            Teams
          </Sidenav.Item>
          <Sidenav.Separator/>
          <Sidenav.Item
            onClick={() => signals.about.opened()}
            selected={currentPage=='ABOUT'}
          >
            About
          </Sidenav.Item>
          <Sidenav.Separator/>
        </Sidenav>
        <div style={{ padding: '16px', marginLeft: '100px' }}>
          {renderPage(currentPage)}
        </div>
      </Paper>
    )
  }
);
