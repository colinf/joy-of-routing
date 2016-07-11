import { Component } from 'cerebral-view-snabbdom'
import { Col, Row, Paper, Table } from 'snabbdom-material';
import TeamList from '../TeamList';
import TeamDetailView from '../TeamDetailView';

export default Component (() => (
  <Row>
    <Col type="md-5">
      <TeamList />
    </Col>
    <Col type="md-5">
      <TeamDetailView />
    </Col>
  </Row>
));

