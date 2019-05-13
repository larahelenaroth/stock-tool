import React from 'react';
import FusionCharts from 'fusioncharts';
import TimeSeries from 'fusioncharts/fusioncharts.timeseries';
import ReactFC from 'react-fusioncharts';
import { ma } from 'moving-averages';

ReactFC.fcRoot(FusionCharts, TimeSeries);

const MovingAverage = props => {
  const { historicData } = props;

  const dataSource = {
    chart: { connectNullData: '0' },
    caption: {
      text: '5 Year Moving Averages'
    },
    subcaption: {
      text: ''
    },
    series: 'Type',
    yaxis: [
      {
        plot: 'Stock Price',
        title: 'Stock Price (High)',
        format: {
          prefix: '$'
        }
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

  // Get all high points for historical data
  const highPoints = historicData.map(datapoint => {
    return datapoint.high;
  });

  //Push only high data
  const highData = []; //date, label, value
  for (let i = 0; i < highPoints.length; i++) {
    let datapoint = [];
    datapoint.push(historicData[i].date, 'High Price', highPoints[i]);
    highData.push(datapoint);
  }

  //Get moving average 10 days
  const movingAverage10Day = [];
  const ma10 = ma(highPoints, 10);
  for (let [i, val] of ma10.entries()) {
    let ma10d = [];
    if (val === undefined || val === null) {
      val = 0;
    }
    ma10d.push(historicData[i].date, 'Moving Average 10 Day Price', val);
    movingAverage10Day.push(ma10d);
  }

  //Get moving average 20 days
  const movingAverage20Day = [];
  const ma20 = ma(highPoints, 20);
  for (let [i, val] of ma20.entries()) {
    let ma20d = [];
    if (val === undefined || val === null) {
      val = 0;
    }
    ma20d.push(historicData[i].date, 'Moving Average 20 Day Price', val);
    movingAverage20Day.push(ma20d);
  }

  //Get moving average 50 days
  const movingAverage50Day = [];
  const ma50 = ma(highPoints, 50);
  for (let [i, val] of ma50.entries()) {
    let ma50d = [];
    if (val === undefined || val === null) {
      val = 0;
    }
    ma50d.push(historicData[i].date, 'Moving Average 50 Day Price', val);
    movingAverage50Day.push(ma50d);
  }

  //Get moving average 100 days
  const movingAverage100Day = [];
  const ma100 = ma(highPoints, 100);
  for (let [i, val] of ma100.entries()) {
    let ma100d = [];
    if (val === undefined || val === null) {
      val = 0;
    }
    ma100d.push(historicData[i].date, 'Moving Average 100 Day Price', val);
    movingAverage100Day.push(ma100d);
  }

  //Get moving average 200 days
  const movingAverage200Day = [];
  const ma200 = ma(highPoints, 200);
  for (let [i, val] of ma200.entries()) {
    let ma200d = [];
    if (val === undefined || val === null) {
      val = 0;
    }
    ma200d.push(historicData[i].date, 'Moving Average 200 Day Price', val);
    movingAverage200Day.push(ma200d);
  }

  // push all datapoints into same array
  const data = [];
  for (let i = 0; i < highPoints.length; i++) {
    data.push(
      highData[i],
      movingAverage10Day[i],
      movingAverage20Day[i],
      movingAverage50Day[i],
      movingAverage100Day[i],
      movingAverage200Day[i]
    );
  }
  const s = [
    {
      name: 'Time',
      type: 'date',
      format: '%Y-%m-%d'
    },
    {
      name: 'Type',
      type: 'string'
    },
    {
      name: 'Price',
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
export default MovingAverage;
