/* eslint react/prop-types: 0 */
import styled from 'styled-components'
import { formatTime } from '../../utils/helpers'
import Table from '../../ui/Table'

const Date = styled.div``

function TicketRow({ data }) {
  return (
    <>
      <Table.Row columns="repeat(7, 1fr)">
        <Date>{formatTime(data)}</Date>
      </Table.Row>
    </>
  )
}

export default TicketRow
