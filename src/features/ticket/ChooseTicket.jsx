import styled from 'styled-components'
import FormRow from '../../ui/FormRow'
import Form from '../../ui/Form'
import Button from '../../ui/Button'
import { Link } from 'react-router-dom'

const Container = styled.div``
const Header = styled.div`
  border-bottom: 1px solid var(--color-grey-400);
  margin-bottom: 2rem;
`
const H3 = styled.h3`
  font-size: 2rem;
  text-transform: capitalize;
`

const Label = styled.label`
  text-transform: capitalize;
  flex: 1;
`
const Input = styled.input`
  background-color: var(--color-grey-200);
  border: none;
  margin: 0 1rem;
`
const BtnBox = styled.div`
  display: flex;
  gap: 5px;
  padding: 0 1rem;
`

const SubBox = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  margin-top: 4rem;
`
const P = styled.p`
  text-transform: capitalize;
`
function ChooseTicket() {
  return (
    <Container>
      <Header>
        <H3>ghana - canada international music festival</H3>
        <P>24th april 2024</P>
      </Header>
      <Form>
        <FormRow>
          <Label>single $200</Label>
          <Input type="number" />
          <BtnBox>
            <Button variation="secondary">+</Button>
            <Button variation="secondary">-</Button>
          </BtnBox>
        </FormRow>
        <SubBox>
          <Button size="medium">
            <Link to={`checkout`}>proceed to checkout</Link>
          </Button>
        </SubBox>
      </Form>
    </Container>
  )
}

export default ChooseTicket
