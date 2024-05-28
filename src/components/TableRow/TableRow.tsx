import React from 'react'
import { ITickerData } from '../../api/ticker'
import { observer } from 'mobx-react-lite'

interface ITicket {
  item: ITickerData
  setModalActive: (value: boolean) => void
  setSelectedTicker: (item: ITickerData) => void
}

export const TableRow = observer((props: ITicket) => {
  const { item, setModalActive, setSelectedTicker } = props

  const cells = [
    item.symbol,
    item.price,
    item.bestAskSize,
    item.bestAskPrice,
    item.bestBidPrice,
  ]

  const handleClick = () => {
    setSelectedTicker(item)
    setModalActive(true)
  }

  return (
    <tr onClick={handleClick}>
      {cells.map((cell, index) => (
        <td key={index}>{cell}</td>
      ))}
    </tr>
  )
})
