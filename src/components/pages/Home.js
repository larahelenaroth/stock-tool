import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// ACTIONS
import { getOverview } from '../../actions/stockActions';
//COMPONENTS
import Sector from '../overview/Sector';
import Ipo from '../overview/Ipo';
import TopBottom from '../overview/TopBottom';
// CSS
import '../../App.css';
import TabPane from 'react-bootstrap/TabPane';
import TabContainer from 'react-bootstrap/TabContainer';
import TabContent from 'react-bootstrap/TabContent';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';

class Home extends Component {
  componentDidMount() {
    this.props.getOverview();
  }

  render() {
    const { overview } = this.props;
    const today = new Date();
    return (
      <React.Fragment>
        <h1 className="display-4 m-3">
          Daily Overview {today.getDate()}/{today.getMonth()}/
          {today.getFullYear()}
        </h1>
        <TabContainer id="company-tab-container" defaultActiveKey="upIPO">
          <Row>
            <Col sm={2}>
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="upIPO">Upcoming IPOs</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="sectPerf">Sector Performance</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="top20">Gainers</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="bott20">Losers</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={10}>
              <TabContent>
                <TabPane eventKey="upIPO">
                  <h4 className="mb-3">Upcoming IPOs</h4>
                  <Ipo ipos={overview.ipos} />
                </TabPane>
                <TabPane eventKey="sectPerf">
                  <h4 className="mb-3">Sector Performance</h4>
                  <Table responsive>
                    <thead>
                      <tr>
                        <th>Sector</th>
                        <th>Change Percent</th>
                      </tr>
                    </thead>
                    <tbody>
                      {overview.sector.map(sect => (
                        <Sector key={sect.name} sector={sect} />
                      ))}
                    </tbody>
                  </Table>
                </TabPane>
                <TabPane eventKey="top20">
                  <h4 className="mb-3">Gainers</h4>
                  <Table responsive>
                    <thead>
                      <tr>
                        <th>Company</th>
                        <th>Latest Price</th>
                        <th>Latest Volume</th>
                        <th>Change Percent</th>
                        <th>YTD Change</th>
                        <th>As Of</th>
                      </tr>
                    </thead>
                    <tbody>
                      {overview.top20.map(top => (
                        <TopBottom key={top.symbol} topbottom={top} />
                      ))}
                    </tbody>
                  </Table>
                </TabPane>
                <TabPane eventKey="bott20">
                  <h4 className="mb-3">Losers</h4>
                  <Table responsive>
                    <thead>
                      <tr>
                        <th>Company</th>
                        <th>Latest Price</th>
                        <th>Latest Volume</th>
                        <th>Change Percent</th>
                        <th>YTD Change</th>
                        <th>As Of</th>
                      </tr>
                    </thead>
                    <tbody>
                      {overview.bottom20.map(bot => (
                        <TopBottom key={bot.symbol} topbottom={bot} />
                      ))}
                    </tbody>
                  </Table>
                </TabPane>
              </TabContent>
            </Col>
          </Row>
        </TabContainer>
      </React.Fragment>
    );
  }
}

Home.propTypes = {
  overview: PropTypes.object.isRequired,
  //EVENTS
  getOverview: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  overview: state.stock.overview
});

export default connect(
  mapStateToProps,
  { getOverview }
)(Home);
