import {
  GET_OVERVIEW,
  GET_STOCKS,
  SEARCH_STOCKS,
  GET_STOCK_INFO,
  NEXT_PAGE,
  PREVIOUS_PAGE,
  CHANGE_PAGE
} from '../actions/types';

const initialState = {
  overview: {
    sector: [],
    top20: [],
    bottom20: [],
    ipos: []
  },
  stocks: [],
  masterStocks: [],
  numStocks: 0,
  currentPage: 0,
  stocksPerPage: 30,
  numPages: 0,
  stock_info: {
    company: {
      companyName: '',
      exchange: '',
      industry: '',
      website: '',
      description: '',
      CEO: '',
      sector: '',
      employees: 0,
      tags: []
    },
    logo: { url: '' },
    currentPrice: 0,
    articles: [],
    historicalData: [],
    keyStats: []
  }
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_OVERVIEW:
      return {
        ...state,
        overview: action.payload
      };
    case GET_STOCKS:
      return {
        ...state,
        stocks: action.payload,
        masterStocks: action.payload,
        numStocks: action.payload.length,
        numPages:
          state.stocksPerPage === undefined || state.stocksPerPage === 0
            ? 0
            : Math.ceil(action.payload.length / state.stocksPerPage)
      };
    case SEARCH_STOCKS:
      return {
        ...state,
        stocks:
          action.payload === ''
            ? state.masterStocks
            : state.masterStocks.filter(stock =>
                stock.name.toLowerCase().includes(action.payload.toLowerCase())
              ),
        numStocks:
          action.payload === ''
            ? state.masterStocks.length
            : state.masterStocks.filter(stock =>
                stock.name.toLowerCase().includes(action.payload.toLowerCase())
              ).length,
        numPages:
          state.numStocks === undefined ||
          state.stocksPerPage === undefined ||
          state.numStocks === 0 ||
          state.stocksPerPage === 0
            ? 0
            : Math.ceil(state.numStocks / state.stocksPerPage)
      };
    case GET_STOCK_INFO:
      return {
        ...state,
        stock_info: action.payload
      };
    case NEXT_PAGE:
      return {
        ...state,
        currentPage:
          state.currentPage < state.numPages
            ? state.currentPage + 1
            : state.numPages
      };
    case PREVIOUS_PAGE:
      return {
        ...state,
        currentPage: state.currentPage > 0 ? state.currentPage - 1 : 0
      };
    case CHANGE_PAGE:
      return {
        ...state,
        currentPage: action.payload
      };
    default:
      return state;
  }
}
