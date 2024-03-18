import styled from 'styled-components'
import FormRow from '../../ui/FormRow'
import Form from '../../ui/Form'

const Container = styled.div``
const Header = styled.div`
  border-bottom: 1px solid var(--color-grey-400);
`
const H3 = styled.h3`
  font-size: 1.2rem;
  text-transform: capitalize;
`
function ChooseTicket() {
  return (
    <Container>
      <Header>
        <H3>ghana - canada international music festival</H3>
        <p>24th april 2024</p>
      </Header>
      <Form>
        <FormRow>
          <label>single $200</label>
          <input />
          <div>
            <button>+</button>
            <button>-</button>
          </div>
        </FormRow>
        <FormRow>
          <button>proceed to checkout</button>
        </FormRow>
      </Form>
    </Container>
  )
}

export default ChooseTicket
