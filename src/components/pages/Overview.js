import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// ACTIONS
import { getStockInfo } from '../../actions/stockActions';
// COMPONENTS
import Information from '../stock/Information';
import News from '../stock/News';
import MovingAverage from '../stock/MovingAverage';
import Historic from '../stock/Historic';
import KeyStatistics from '../stock/KeyStatistics';
// CSS
import '../../App.css';
import TabPane from 'react-bootstrap/TabPane';
import TabContainer from 'react-bootstrap/TabContainer';
import TabContent from 'react-bootstrap/TabContent';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Overview extends Component {
  componentDidMount() {
    const { symbol } = this.props.match.params;
    this.props.getStockInfo(symbol);
  }

  render() {
    const { stock_info } = this.props;
    const { symbol, currency } = this.props.match.params;
    return (
      <React.Fragment>
        <div className="header-container d-flex flex-row align-items-center mb-5">
          <a href={stock_info.company.website}>
            <img src={stock_info.logo.url} alt="" className="company-logo" />
          </a>
          <h1 className="display-5 m-3">
            ({symbol.toUpperCase()}) {stock_info.company.companyName} -{' '}
            {Number(stock_info.currentPrice)
              .toFixed(2)
              .toLocaleString()}{' '}
            ({currency.toUpperCase()})
          </h1>
        </div>

        <TabContainer id="company-tab-container" defaultActiveKey="information">
          <Row>
            <Col sm={2}>
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="information">Information</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="news">News</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="historic">Historic Prices</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="movingAverage">Moving Averages</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="keyStats">Key Statistics</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={10}>
              <TabContent>
                <TabPane eventKey="information">
                  <h4 className="mb-3">Information</h4>
                  <Information company={stock_info.company} />
                </TabPane>
                <TabPane eventKey="news">
                  <h4 className="mb-3">News</h4>
                  <News articles={stock_info.articles} />
                </TabPane>
                <TabPane eventKey="historic">
                  <h4 className="mb-3">Historic Prices</h4>
                  <Historic historicData={stock_info.historicalData} />
                </TabPane>
                <TabPane eventKey="movingAverage">
                  <h4 className="mb-3">Moving Averages</h4>
                  <MovingAverage historicData={stock_info.historicalData} />
                </TabPane>
                <TabPane eventKey="keyStats">
                  <h4 className="mb-3">Key Statistics</h4>
                  <KeyStatistics stats={stock_info.keyStats} />
                </TabPane>
              </TabContent>
            </Col>
          </Row>
        </TabContainer>
      </React.Fragment>
    );
  }
}

Overview.propTypes = {
  stock_info: PropTypes.object.isRequired,
  //EVENTS
  getStockInfo: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  stock_info: state.stock.stock_info
});

export default connect(
  mapStateToProps,
  { getStockInfo }
)(Overview);
