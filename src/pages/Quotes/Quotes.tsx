import { useEffect } from 'react'
import { tickersStore } from '../../store/tickers'
import { observer } from 'mobx-react-lite'
import { Table } from '../../components/Table'
import { ITickerData } from '../../api/ticker'
import { modalStore } from '../../store/modals'
import { useParams } from 'react-router-dom'
import { NotFound } from '../NotFound'

const COLUMN_NAMES = [
  'symbol',
  'price',
  'bestAskSize',
  'bestAskPrice',
  'bestBidPrice',
]

export const Quotes = observer(() => {
  const { isOpen } = modalStore

  const { id } = useParams<{ id: string }>()
  const validId = id !== undefined ? parseInt(id, 10) : 0

  const {
    getTickets,
    tickersDataOne,
    tickersDataTwo,
    isLoading,
    error,
    setActiveTab,
  } = tickersStore

  const allTickers: { [key: number]: ITickerData[] } = {
    0: tickersDataOne,
    1: tickersDataTwo,
  }

  useEffect(() => {
    getTickets()

    if (!isOpen) {
      const interval = setInterval(() => {
        getTickets()
      }, 5000)

      return () => clearInterval(interval)
    }
  }, [isOpen, getTickets])

  useEffect(() => {
    setActiveTab(validId)
  }, [validId, setActiveTab])

  if (!(validId in allTickers)) {
    return <NotFound />
  }

  return (
    <div>
      <Table
        data={allTickers[validId]}
        error={error}
        names={COLUMN_NAMES}
        isLoading={isLoading}
        label={`Quotes ${validId === 0 ? 'A' : 'B'}`}
        id={validId}
      />
    </div>
  )
})
