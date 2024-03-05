import styled from 'styled-components'

const StyledContact = styled.div`
  padding: 8rem;
`
function Contact() {
  return (
    <StyledContact>
      <div> Company Name : World Star Records Ltd</div>{' '}
      <div>Address: P O Box AN 6676 Accra Norh Ghana</div>
      <div>Tell 00233546009191</div>
      <div> email: worldstarrecords626@gmail.com</div>
    </StyledContact>
  )
}

export default Contact
