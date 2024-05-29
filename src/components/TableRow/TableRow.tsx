import React from 'react'
import { ITickerData } from '../../api/ticker'
import { observer } from 'mobx-react-lite'
import { modalStore } from '../../store/modals'
import { TableCell } from '../TableCell'

interface ITicket {
  item: ITickerData
}

export const TableRow = observer((props: ITicket) => {
  const { item } = props
  const { setModalState, setModalData } = modalStore

  const cells = [
    item.symbol,
    item.price,
    item.bestAskSize,
    item.bestAskPrice,
    item.bestBidPrice,
  ]

  const handleClick = () => {
    setModalState(true)
    setModalData(item)
  }

  return (
    <tr onClick={handleClick}>
      {cells.map((cell, index) => (
        <TableCell key={index} cell={cell} />
      ))}
    </tr>
  )
})
