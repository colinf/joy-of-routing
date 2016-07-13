import { Component } from 'cerebral-view-snabbdom';
import classnames from 'classnames';

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
    return <div className="pure-u-1 home-page">Please select a page using the tabs on the left.</div>
  }
}

export default Component(({
  state: {app: {currentPage}},
  signals
}) => {
  return (
    <div id="layout" className="content pure-g">
      <div id="nav" className="pure-u">
        <div className="nav-inner">
          <div className="pure-menu">
            <ul className="pure-menu-list">
              <li className={classnames({'pure-menu-item': true, 'pure-menu-selected': currentPage == 'TEAMS'})}>
                <a className="pure-menu-link"
                   on-click={() => signals.teams.switchToTeams()}
                >
                  Teams
                </a>
              </li>
              <li className={classnames({'pure-menu-item': true, 'pure-menu-selected': currentPage == 'ABOUT'})}>
                <a className="pure-menu-link"
                   on-click={() => signals.about.opened()}
                >
                  About
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

        {renderPage(currentPage)}

    </div>
  );
});

//       <Paper noPadding
//              elevation={0}
//              style={{
//               paper: {
//               height: '600px',
//               width: '800px',
//               margin: '16px 0'
//               }
//       }}>
//       //   <Sidenav mini style={{
//       //     mini: {
//       //       float: 'left',
//       //       position: 'relative',
//       //       top: '0',
//       //       width: '100px',
//       //       height: '600px'
//       //     }
//       //   }}>
//       //     <Sidenav.Item
//       //       onClick={() => signals.teams.opened()}
//       //       selected={currentPage=='TEAMS'}
//       //     >
//       //       Teams
//       //     </Sidenav.Item>
//       //     <Sidenav.Separator/>
//       //     <Sidenav.Item
//       //       onClick={() => signals.about.opened()}
//       //       selected={currentPage=='ABOUT'}
//       //     >
//       //       About
//       //     </Sidenav.Item>
//       //     <Sidenav.Separator/>
//       //   </Sidenav>
//       //   <div style={{ padding: '16px', marginLeft: '100px' }}>
//       //     {renderPage(currentPage)}
//         {/*</div>*/}
//       {/*</Paper>*/}
//     )
//   }
// );
