import React from 'react';
import Table from 'react-bootstrap/Table';

const KeyStatistics = props => {
  const { stats } = props;
  return (
    <Table responsive>
      <thead>
        <tr>
          <th>Field</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>YTD Change</th>
          <th style={{ fontWeight: 'lighter' }}>
            {Number(stats.ytdChangePercent * 100).toFixed(2)}%
          </th>
        </tr>
        <tr>
          <th>52 Week Range</th>
          <th style={{ fontWeight: 'lighter' }}>
            {Number(stats.week52low)
              .toFixed(2)
              .toLocaleString()}{' '}
            -{' '}
            {Number(stats.week52high)
              .toFixed(2)
              .toLocaleString()}
          </th>
        </tr>
        <tr>
          <th>5 Year Change</th>
          <th style={{ fontWeight: 'lighter' }}>
            {Number(stats.year5ChangePercent * 100).toFixed(2)}%
          </th>
        </tr>
        <tr>
          <th>Shares Outstanding</th>
          <th style={{ fontWeight: 'lighter' }}>
            {Number(stats.sharesOutstanding).toLocaleString()}
          </th>
        </tr>
        <tr>
          <th>Market Cap</th>
          <th style={{ fontWeight: 'lighter' }}>
            {Number(stats.marketcap).toLocaleString()}
          </th>
        </tr>
        <tr>
          <th>Beta</th>
          <th style={{ fontWeight: 'lighter' }}>
            {Number(stats.beta).toFixed(5)}
          </th>
        </tr>
      </tbody>
    </Table>
  );
};
export default KeyStatistics;
