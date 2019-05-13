import React from 'react';
import { Link } from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup';

const Stock = props => {
  const { stock } = props;
  return (
    <React.Fragment>
      <ListGroup.Item>
        <Link
          to={`/company-overview/${stock.symbol.toLowerCase()}/${stock.currency.toLowerCase()}`}
          className="nav-link"
        >
          ({stock.symbol}) {stock.name}
        </Link>
      </ListGroup.Item>
    </React.Fragment>
  );
};
export default Stock;
