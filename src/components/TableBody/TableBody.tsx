import { TableRow } from '../TableRow'
import { observer } from 'mobx-react-lite'
import { ITickerData } from '../../api/ticker'

interface ITableBody {
  data: ITickerData[]
}

export const TableBody = observer((props: ITableBody) => {
  return (
    <tbody>
      {props.data.map((item) => (
        <TableRow key={item.symbol} item={item} name={item.symbol} />
      ))}
    </tbody>
  )
})
