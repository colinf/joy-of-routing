import { Component } from 'cerebral-view-snabbdom'
import RuttingImg from '../../../static/rutting.jpg';

export default Component (() => (
  <div className="pure-u-1">
    <img src={RuttingImg} className="pure-img"/>
    <h2>Joy of Routing</h2>
    <p>A project to demonstrate routing using Cerebral.</p>
    <p>See this <a href="http://www.colinfallon.com">blog post</a> for more information.</p>
  </div>
));

