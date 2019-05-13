import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// ACTIONS
import {
  getStocks,
  searchStocks,
  nextPage,
  previousPage,
  changePage
} from '../../actions/stockActions';
//COMPONENTS
import Stock from '../layout/Stock';
// CSS
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Pagination from 'react-bootstrap/Pagination';

class StockList extends Component {
  componentDidMount() {
    this.props.getStocks();
  }
  searchOnChange = e => {
    e.preventDefault();
    const searchText = e.target.value;
    this.props.searchStocks(searchText);
    console.log('SEARCH: ', searchText);
  };
  nextPage = e => {
    e.preventDefault();
    this.props.nextPage();
  };
  previousPage = e => {
    e.preventDefault();
    this.props.previousPage();
  };
  changePage = e => {
    e.preventDefault();
    this.props.changePage(Number(e.target.id));
  };
  render() {
    const { stocks, numStocks, currentPage, numPages } = this.props;
    const pageLBound = currentPage - 2 < 0 ? 0 : currentPage - 2;
    const pageUBound = currentPage - 2 < 0 ? 5 : currentPage + 3;
    return (
      <React.Fragment>
        <h1 className="display-5">Stock List</h1>
        <Pagination size="sm" className="mr-auto">
          <Pagination.Prev onClick={this.previousPage} active={true} />
          {Array.apply(null, { length: numPages })
            .map(Number.call, Number)
            .map(page => {
              return (
                <Pagination.Item
                  key={page}
                  onClick={this.changePage}
                  id={page}
                  active={page === currentPage}
                >
                  {page + 1}
                </Pagination.Item>
              );
            })
            .slice(pageLBound, pageUBound)}
          <Pagination.Next onClick={this.nextPage} active={true} />
        </Pagination>
        <Form className="ml-auto">
          <FormControl
            type="text"
            placeholder="Search"
            className="mb-2"
            onChange={this.searchOnChange}
          />
        </Form>
        <p className="d-flex justify-content-end font-italic">
          {numStocks.toLocaleString()} Results
        </p>
        {stocks.map(stock => (
          <Stock key={stock.symbol} stock={stock} />
        ))}
      </React.Fragment>
    );
  }
}

StockList.propTypes = {
  stocks: PropTypes.array.isRequired,
  numStocks: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  numPages: PropTypes.number.isRequired,
  //EVENTS
  getStocks: PropTypes.func.isRequired,
  searchStocks: PropTypes.func.isRequired,
  nextPage: PropTypes.func.isRequired,
  previousPage: PropTypes.func.isRequired,
  changePage: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  stocks: state.stock.stocks.slice(
    state.stock.currentPage * state.stock.stocksPerPage,
    (state.stock.currentPage + 1) * state.stock.stocksPerPage
  ),
  numStocks: state.stock.numStocks,
  currentPage: state.stock.currentPage,
  numPages: state.stock.numPages
});

export default connect(
  mapStateToProps,
  { getStocks, searchStocks, nextPage, previousPage, changePage }
)(StockList);
