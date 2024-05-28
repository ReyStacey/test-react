import axios from 'axios'

const BASE_URL = 'https://futures-api.poloniex.com/api/v2/tickers'

export interface ITickerData {
  symbol: string
  price: string
  bestBidPrice: string
  bestAskPrice: string
  bestAskSize: number
}

export const getData = async () =>
  (
    await axios.get<{ code: string; msg: string; data: ITickerData[] }>(
      BASE_URL,
    )
  ).data
