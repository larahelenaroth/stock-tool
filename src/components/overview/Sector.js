import React from 'react';
// CSS
import classNames from 'classnames';
import '../../App.css';

const Sector = props => {
  const { sector } = props;
  return (
    <React.Fragment>
      <tr>
        <td>{sector.name}</td>
        <td
          className={classNames(
            { 'stock-green': sector.performance > 0 },
            { 'stock-red': sector.performance < 0 }
          )}
        >
          {Number(sector.performance * 100).toFixed(2)}%
        </td>
      </tr>
    </React.Fragment>
  );
};
export default Sector;
