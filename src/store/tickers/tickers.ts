import { makeAutoObservable, runInAction } from 'mobx'
import { ITickerData, getData } from '../../api/ticker/getData'

class Tickers {
  tickersData: ITickerData[] = []
  tickersDataOne: ITickerData[] = []
  tickersDataTwo: ITickerData[] = []
  isLoading: boolean = false
  error: string | null = null
  activeTab: number = 0
  modalIsOpen: boolean = false

  constructor() {
    makeAutoObservable(this)
  }

  getTickets = async () => {
    try {
      this.isLoading = true
      const res = await getData()

      runInAction(() => {
        this.tickersData = res.data
        const half = Math.ceil(res.data.length / 2)
        if (!this.modalIsOpen) {
          this.activeTab === 0
            ? (this.tickersDataOne = this.tickersData.slice(0, half))
            : (this.tickersDataTwo = this.tickersData.slice(half))
        }

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

  setActiveTab = (tabIndex: number) => {
    this.activeTab = tabIndex
  }

  setModalIsOpen = (value: boolean) => {
    this.modalIsOpen = value
  }
}

export const tickersStore = new Tickers()
