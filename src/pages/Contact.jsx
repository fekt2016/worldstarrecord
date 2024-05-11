import styled from 'styled-components'

const StyledContact = styled.div`
  padding: 8rem;
`

const H1 = styled.h1`
  font-size: 6rem;
  text-transform: capitalize;
  background: linear-gradient(to right, red, yellow, green);
  background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
  margin-bottom: 3rem;
`
const P = styled.p`
  font-size: 1.8rem;
  margin-bottom: 4rem;
`
const Ps = styled.p`
  font-weight: bold;
`
function Contact() {
  return (
    <StyledContact>
      <H1>contact Info</H1>
      <P>
        <strong>Company Name :</strong> World Star Records Ltd
      </P>
      <P>
        <strong>Postal Address: </strong>P O Box AN 6676 Accra Norh Ghana
      </P>
      <P>
        <strong>Call:</strong> 00233546009191
      </P>
      <P>
        <strong>email: </strong>worldstarrecords626@gmail.com
      </P>

      <Ps>
        Information Feel free to contact us anytime for more information about
        all events
      </Ps>
    </StyledContact>
  )
}

export default Contact
