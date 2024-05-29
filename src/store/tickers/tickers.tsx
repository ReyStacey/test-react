import { makeAutoObservable, runInAction } from 'mobx'
import { ITickerData, getData } from '../../api/ticker/getData'

class Tickers {
  private tickersData: ITickerData[] = []
  private tickersDataOne: ITickerData[] = []
  private tickersDataTwo: ITickerData[] = []
  public isLoading: boolean = false
  public error: string | null = null
  public activeTab: number = 0

  constructor() {
    makeAutoObservable(this)
  }

  public getTickets = async () => {
    this.isLoading = true
    try {
      const res = await getData()

      runInAction(() => {
        this.tickersData = res.data.map((item) => ({
          symbol: item.symbol,
          price: item.price,
          bestAskSize: item.bestAskSize,
          bestAskPrice: item.bestAskPrice,
          bestBidPrice: item.bestBidPrice,
        }))

        const half = Math.ceil(res.data.length / 2)

        this.activeTab === 0
          ? (this.tickersDataOne = this.tickersData.slice(0, half))
          : (this.tickersDataTwo = this.tickersData.slice(half))

        this.error = null
        this.isLoading = false
      })
    } catch (error) {
      console.error(error)

      runInAction(() => {
        this.error = 'Error'
        this.isLoading = false
      })
    }
  }

  public setActiveTab = (tabIndex: number) => {
    this.activeTab = tabIndex
  }

  get allTickers() {
    return {
      0: this.tickersDataOne,
      1: this.tickersDataTwo,
    }
  }
}

export const tickersStore = new Tickers()
