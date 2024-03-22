/* eslint react/prop-types: 0 */

import Table from '../../ui/Table'
import { formatTime } from '../../utils/helpers'

function CartRow({ data }) {
  return (
    <>
      <Table.Row columns="repeat(5, 1fr)">
        <div>{formatTime(data)}</div>
      </Table.Row>
    </>
  )
}

export default CartRow
