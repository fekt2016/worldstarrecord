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
        <strong>Company Name :</strong>
        <br /> World Star Records Limited
      </P>
      <P>
        <strong>Postal Address: </strong>
        <br />P O Box AN 6676 Accra North Ghana
      </P>
      <P>
        <strong>Call:</strong>
        <br /> 00233546009191
      </P>
      <P>
        <strong>email: </strong>
        <br />
        info@worldstargh.com
        <br /> worldstarrecords626@gmail.com
        <br />
        ernestdjan@worldstargh.com
        <br />
      </P>

      <Ps>
        For more information, Feel free to contact us anytime for more
        information about all events
      </Ps>
    </StyledContact>
  )
}

export default Contact
