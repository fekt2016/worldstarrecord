import styled from 'styled-components'
import Table from '../ui/Table'
import CartRow from '../features/cart/CartRow'
const data = []
const CartDetail = styled.div``
const H3 = styled.h3`
  padding: 1rem;
  background-color: var(--color-grey-100);
  margin-bottom: 5px;
`

function Cart() {
  return (
    <div>
      <H3>1 ticket found in your cart</H3>
      <CartDetail>
        <Table type="table" columns="repeat(5, 1fr)">
          <Table.Header>
            <div>Event/ Ticket</div>
            <div>Price</div>
            <div>Quantity</div>
            <div>Subtotal</div>
            <div>remove</div>
          </Table.Header>
          <Table.Body
            data={data}
            render={(data) => <CartRow key={data.id} data={data} />}
          />
        </Table>
      </CartDetail>
    </div>
  )
}

export default Cart
