import styled from 'styled-components'
import Table from '../ui/Table'
import TicketRow from '../features/ticket/TicketRow'
import Pagination from '../ui/Pagination'
import Form from '../ui/Form'
import FormRow from '../ui/FormRow'
import Input from '../ui/Input'
import Button from '../ui/Button'
const data = []

const Container = styled.div`
  padding: 4rem;
  display: flex;
`
const TicketDetail = styled.div`
  padding: 4rem;
  flex: 1;
`
const Payment = styled.div`
  flex-basis: 400px;
`
const FormBox = styled.div`
  margin: 2rem;
`
const Row = styled.div`
  margin: 2rem;
`

const Total = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  text-transform: capitalize;

  span {
    font-size: 2rem;
  }
`
const P = styled.p`
  font-size: 1.2rem;
  text-align: center;
`
const H3 = styled.h3`
  background-color: var(--color-grey-100);
  text-transform: capitalize;
  padding: 1rem;
`
const TimeLeft = styled.div`
  padding: 1rem;
  background-color: orangered;
`
const ImgBox = styled.div`
  padding: 2rem;
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
`
const Img = styled.img`
  height: 5rem;
`
const Label = styled.label`
  padding: 1rem;
  display: flex;
  gap: 20px;
  justify-content: flex-start;
  align-items: center;
`
const StyledTop = styled.div`
  margin-bottom: 4rem;
`

const Btn = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 10rem;
`
function Checkout() {
  return (
    <Container>
      <TicketDetail>
        <h1>Order summary</h1>
        <Table type="table" columns="repeat(4, 1fr)">
          <Table.Header>
            <div>event/ticket</div>
            <div>price</div>
            <div>Quantity</div>
            <div>Subtotal</div>
          </Table.Header>
          <Table.Body
            data={data}
            render={(data) => <TicketRow key={data.id} data={data} />}
          />
          <Table.Footer>
            <Pagination />
          </Table.Footer>
        </Table>

        <FormBox>
          <Form type="send">
            <StyledTop>
              <H3>Send ticket to email</H3>
              <FormRow label="Email">
                <Input type="email" />
              </FormRow>
            </StyledTop>
            <div>
              <H3>pay with</H3>
              <Row>
                <Label htmlFor="radio">
                  <input type="radio" name="radio" id="radio" />
                  Mobile Money , card
                </Label>
              </Row>
              <Row>
                <Label htmlFor="radio1">
                  <input type="radio" name="radio1" id="radio1" />
                  banks
                </Label>
              </Row>
            </div>
            <Btn>
              <Button variation="tertiary">pay now</Button>
            </Btn>
          </Form>
        </FormBox>
      </TicketDetail>
      <Payment>
        <div>
          <div>
            <TimeLeft>04:31 left before tickets are released</TimeLeft>
            <Total>
              <span>total</span>
              <span>$20</span>
            </Total>
          </div>
          <P>A processing fee will be applied during payment.</P>
        </div>
        <ImgBox>
          <Img src="../../mtnmomo.png" alt="mtn" />
          <Img src="../../airtelmomo.jpeg" alt="mtn" />
          <Img src="../../vadacash.png" alt="mtn" />
          <Img src="../../master.png" alt="mtn" />
          <Img src="../../visa.png" alt="mtn" />
        </ImgBox>
      </Payment>
    </Container>
  )
}

export default Checkout
