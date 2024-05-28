import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { tickersStore } from '../../store/tickers'
import { observer } from 'mobx-react-lite'
import { Table } from '../../components/Table'
import { Tabs } from '../../components/Tabs'
import { ITickerData } from '../../api/ticker'

const COLUMN_NAMES = [
  'symbol',
  'price',
  'bestAskSize',
  'bestAskPrice',
  'bestBidPrice',
]

export const Quotes = observer(() => {
  const {
    getTickets,
    tickersDataOne,
    tickersDataTwo,
    isLoading,
    error,
    setActiveTab,
  } = tickersStore

  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  const initialTab = parseInt(searchParams.get('tab') || '0', 10)
  const [selectedActiveTab, setSelectedActiveTab] = useState(initialTab)

  const activeData: ITickerData[] =
    selectedActiveTab === 0 ? tickersDataOne : tickersDataTwo

  useEffect(() => {
    getTickets()

    const interval = setInterval(() => {
      getTickets()
    }, 5000)

    return () => clearInterval(interval)
  }, [getTickets])

  useEffect(() => {
    setActiveTab(selectedActiveTab)
  }, [selectedActiveTab, setActiveTab])

  return (
    <div>
      <Tabs setSelectedActiveTab={setSelectedActiveTab}>
        <Table
          data={activeData}
          error={error}
          names={COLUMN_NAMES}
          isLoading={isLoading}
          label="Quotes A"
          id={0}
        />
        <Table
          data={activeData}
          error={error}
          names={COLUMN_NAMES}
          isLoading={isLoading}
          label="Quotes B"
          id={1}
        />
      </Tabs>
    </div>
  )
})
