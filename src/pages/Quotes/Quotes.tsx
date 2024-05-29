import { useEffect } from 'react'
import { tickersStore } from '../../store/tickers'
import { observer } from 'mobx-react-lite'
import { Table } from '../../components/Table'
import { modalStore } from '../../store/modals'
import { useParams } from 'react-router-dom'
import { NotFound } from '../NotFound'
import { Loader } from '../../components/Loader'

const COLUMN_NAMES = [
  'symbol',
  'price',
  'bestAskSize',
  'bestAskPrice',
  'bestBidPrice',
]

const Quotes = observer(() => {
  const { isOpen } = modalStore
  const { id } = useParams<{ id: string }>()
  const validId = id !== undefined ? parseInt(id, 10) : 0

  const {
    getTickets,
    isLoading,
    error,
    setActiveTab,
    allTickers,
  } = tickersStore

  useEffect(() => {
    getTickets()

    if (!isOpen) {
      const interval = setInterval(() => {
        getTickets()
      }, 5000)

      return () => clearInterval(interval)
    }
  }, [isOpen])

  useEffect(() => {
    setActiveTab(validId)
  }, [validId])

  if (!(validId in allTickers)) {
    return <NotFound />
  }

  return (
    <>
      {!allTickers[validId].length && isLoading ? (
        <Loader />
      ) : (
        <Table
          data={allTickers[validId]}
          error={error}
          names={COLUMN_NAMES}
          isLoading={isLoading}
          label={`Quotes ${validId === 0 ? 'A' : 'B'}`}
          id={validId}
        />
      )}
    </>
  )
})

export default Quotes
