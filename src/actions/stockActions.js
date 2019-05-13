import {
  GET_OVERVIEW,
  GET_STOCKS,
  SEARCH_STOCKS,
  GET_STOCK_INFO,
  NEXT_PAGE,
  PREVIOUS_PAGE,
  CHANGE_PAGE
} from './types';
import axios from 'axios';
import config from '../config';

export const getOverview = () => async dispatch => {
  const sectRes = await axios.get(
    config.url + `/stock/market/sector-performance?token=${config.public}`
  );
  const top20Res = await axios.get(
    config.url + `/stock/market/list/gainers?token=${config.public}`
  );
  const bot20Res = await axios.get(
    config.url + `/stock/market/list/losers?token=${config.public}`
  );
  const ipoRes = await axios.get(
    config.url + `/stock/market/upcoming-ipos?token=${config.public}`
  );
  const overview = {
    sector: sectRes.data,
    top20: top20Res.data,
    bottom20: bot20Res.data,
    ipos: ipoRes.data.rawData
  };
  dispatch({
    type: GET_OVERVIEW,
    payload: overview
  });
};

export const getStocks = () => async dispatch => {
  const res = await axios.get(
    `${config.url}/ref-data/symbols?token=${config.public}`
  );

  dispatch({
    type: GET_STOCKS,
    payload: res.data
  });
};

export const searchStocks = searchText => async dispatch => {
  dispatch({
    type: SEARCH_STOCKS,
    payload: searchText
  });
};
// STOCK INFORMATION
export const getStockInfo = symbol => async dispatch => {
  const companyRes = await axios.get(
    config.url + `/stock/${symbol}/company?token=${config.public}`
  );
  const logoRes = await axios.get(
    config.url + `/stock/${symbol}/logo?token=${config.public}`
  );
  const priceRes = await axios.get(
    config.url + `/stock/${symbol}/price?token=${config.public}`
  );
  const articleRes = await axios.get(
    config.url + `/stock/${symbol}/news/last/?token=${config.public}`
  );
  const historicRes = await axios.get(
    config.url + `/stock/${symbol}/chart/1y?token=${config.public}`
  );
  const statsRes = await axios.get(
    config.url + `/stock/${symbol}/stats?token=${config.public}`
  );
  const stockInfo = {
    company: companyRes.data,
    logo: logoRes.data,
    currentPrice: priceRes.data,
    articles: articleRes.data,
    historicalData: historicRes.data,
    keyStats: statsRes.data
  };
  dispatch({
    type: GET_STOCK_INFO,
    payload: stockInfo
  });
};

// PAGINATION
export const nextPage = () => async dispatch => {
  dispatch({
    type: NEXT_PAGE
  });
};

export const previousPage = () => async dispatch => {
  dispatch({
    type: PREVIOUS_PAGE
  });
};

export const changePage = pageNum => async dispatch => {
  dispatch({
    type: CHANGE_PAGE,
    payload: pageNum
  });
};
