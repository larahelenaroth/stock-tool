import React from 'react';
import FusionCharts from 'fusioncharts';
import TimeSeries from 'fusioncharts/fusioncharts.timeseries';
import ReactFC from 'react-fusioncharts';

ReactFC.fcRoot(FusionCharts, TimeSeries);

const Historic = props => {
  const { historicData } = props;

  const dataSource = {
    chart: {},
    caption: {
      text: '5 year Historical Price Analysis'
    },
    subcaption: {
      text: ''
    },
    yaxis: [
      {
        plot: {
          value: {
            open: 'Open',
            high: 'High',
            low: 'Low',
            close: 'Close'
          },
          type: 'candlestick'
        },
        format: {
          prefix: '$'
        },
        title: 'Stock Value'
      },
      {
        plot: {
          value: 'Volume'
        },
        title: 'Volume'
      }
    ]
  };

  const timeseriesDs = {
    type: 'timeseries',
    renderAt: 'container',
    width: '100%',
    height: '500',
    dataSource
  };

  const data = [];
  for (let i = 0; i < historicData.length; i++) {
    let historic = [];
    historic.push(
      historicData[i].date,
      historicData[i].open,
      historicData[i].high,
      historicData[i].low,
      historicData[i].close,
      historicData[i].volume
    );
    data.push(historic);
  }
  const s = [
    {
      name: 'Date',
      type: 'date',
      format: '%Y-%m-%d'
    },
    {
      name: 'Open',
      type: 'number'
    },
    {
      name: 'High',
      type: 'number'
    },
    {
      name: 'Low',
      type: 'number'
    },
    {
      name: 'Close',
      type: 'number'
    },
    {
      name: 'Volume',
      type: 'number'
    }
  ];
  const schema = JSON.parse(JSON.stringify(s));
  const fusionTable = new FusionCharts.DataStore().createDataTable(
    data,
    schema
  );
  timeseriesDs.dataSource.data = fusionTable;

  return (
    <div>
      {timeseriesDs.dataSource.data ? (
        <ReactFC {...timeseriesDs} />
      ) : (
        'Loading...'
      )}
    </div>
  );
};
export default Historic;
