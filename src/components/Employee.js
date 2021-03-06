import React from 'react'
import { Table } from 'semantic-ui-react'


export default function Employee(props) {
    return (
      <Table.Row>
          <Table.Cell>{props.name}</Table.Cell>
          
          <Table.Cell>{props.department}</Table.Cell>
          <Table.Cell>{props.salary}</Table.Cell>
      </Table.Row>
    )
}
