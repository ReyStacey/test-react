import { useEffect } from 'react'
import { tickersStore } from '../../store/tickers'
import { observer } from 'mobx-react-lite'
import { Table } from '../../components/Table'
import { modalStore } from '../../store/modals'
import { useParams } from 'react-router-dom'
import { NotFound } from '../NotFound/index.async'
import { Loader } from '../../components/Loader'
import { Notification } from '../../components/Notification'

const COLUMN_NAMES: string[] = [
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
    setActiveTab(validId)
    getTickets()

    if (!isOpen) {
      const interval = setInterval(() => {
        getTickets()
      }, 5000)

      return () => clearInterval(interval)
    }
  }, [isOpen, validId])

  if (!(validId in allTickers)) {
    return <NotFound />
  }

  return (
    <>
      {error && <Notification notificationText={error} />}
      {!allTickers[validId].length && isLoading ? (
        <Loader />
      ) : (
        <Table
          data={allTickers[validId]}
          names={COLUMN_NAMES}
          label={`Quotes ${validId === 0 ? 'A' : 'B'}`}
          id={validId}
        />
      )}
    </>
  )
})

export default Quotes
