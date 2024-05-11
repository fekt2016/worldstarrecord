// import styled from 'styled-components'
// import FormRow from '../../ui/FormRow'
// import Form from '../../ui/Form'
// import Button from '../../ui/Button'
// import { Link } from 'react-router-dom'
// import { useState } from 'react'

// const Container = styled.div``
// const Header = styled.div`
//   border-bottom: 1px solid var(--color-grey-400);
//   margin-bottom: 2rem;
// `
// const H3 = styled.h3`
//   font-size: 2rem;
//   text-transform: capitalize;
// `

// const Label = styled.label`
//   text-transform: capitalize;
//   flex: 1;
// `
// const Input = styled.input`
//   background-color: var(--color-grey-200);
//   border: none;
//   margin: 0 1rem;
// `
// const BtnBox = styled.div`
//   display: flex;
//   gap: 5px;
//   padding: 0 1rem;
// `

// const SubBox = styled.div`
//   display: flex;
//   justify-content: space-around;
//   align-items: center;
//   margin-top: 4rem;
// `
// const P = styled.p`
//   text-transform: capitalize;
// `
// function ChooseTicket() {
//   const [ticketCount, setTicketCount] = useState(0)
//   // const [cart, setCart] = useState([])
//   // console.log(cart)
//   const handleSubmit = function (e) {
//     e.preventDefault()

//     // const isProductInCart = Boolean(ticket.find((item) => item.id === 1))

//     // if (isProductInCart)
//     //   setCart((item) => {
//     //     if (item.id === 1) {
//     //       return { ...item }
//     //     }
//     //   })
//   }
//   return (
//     <Container>
//       <Header>
//         <H3>ghana - canada international music festival</H3>
//         <P>24th april 2024</P>
//       </Header>
//       <Form onSubmit={handleSubmit}>
//         <FormRow>
//           <Label>single $200</Label>
//           <Input
//             type="number"
//             value={ticketCount}
//             onChange={() => {
//               setTicketCount((prev) => prev + 1)
//             }}
//           />
//           <BtnBox>
//             <Button
//               variation="secondary"
//               onClick={() => setTicketCount((prev) => prev + 1)}
//             >
//               +
//             </Button>
//             <Button
//               disabled={ticketCount === 0}
//               variation="secondary"
//               onClick={() => setTicketCount((prev) => prev - 1)}
//             >
//               -
//             </Button>
//           </BtnBox>
//         </FormRow>
//         <SubBox>
//           <Button size="small" variation="tertiary" onClick={() => {}}>
//             add to cart
//           </Button>
//           <Button type="submit" size="medium">
//             <Link to={`checkout`}>proceed to checkout</Link>
//           </Button>
//         </SubBox>
//       </Form>
//     </Container>
//   )
// }

// export default ChooseTicket
