interface ITableHead {
  names: string[]
}

export const TableHead = (props: ITableHead) => {
  return (
    <thead>
      <tr>
        {props.names.map((itemName) => (
          <th key={itemName}>{itemName}</th>
        ))}
      </tr>
    </thead>
  )
}
