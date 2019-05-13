import React from 'react';
import classNames from 'classnames';

const TopBottom = props => {
  const { topbottom } = props;
  return (
    <React.Fragment>
      <tr>
        <td>
          ({topbottom.symbol}) {topbottom.companyName}
        </td>
        <td>{Number(topbottom.latestPrice).toFixed(2)}</td>
        <td>{topbottom.latestVolume.toLocaleString()}</td>
        <td
          className={classNames(
            { 'stock-green': topbottom.changePercent > 0 },
            { 'stock-red': topbottom.changePercent < 0 }
          )}
        >
          {Number(topbottom.changePercent * 100).toFixed(2)}%
        </td>
        <td
          className={classNames(
            { 'stock-green': topbottom.ytdChange > 0 },
            { 'stock-red': topbottom.ytdChange < 0 }
          )}
        >
          {Number(topbottom.ytdChange * 100).toFixed(2)}%
        </td>
        <td>{topbottom.latestTime}</td>
      </tr>
    </React.Fragment>
  );
};
export default TopBottom;
