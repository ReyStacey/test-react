import React from 'react'
interface ITableHead {
  names: string[]
}
export const TableHead = ({ names }: ITableHead) => {
  return (
    <thead>
      <tr>
        {names.map((itemName) => (
          <th key={itemName}>{itemName}</th>
        ))}
      </tr>
    </thead>
  )
}
