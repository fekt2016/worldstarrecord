// import styled from 'styled-components'
// import Table from '../ui/Table'
// import CartRow from '../features/cart/CartRow'
// const ticket = [
//   {
//     event: 'ghana-canada international festival music',
//     date: '24th April, 2024',
//     venue: '(Kipling/belfield), Toronto, Ontario, M9WIGI, Canada',
//   },
// ]
// const CartDetail = styled.div``
// const H3 = styled.h3`
//   padding: 1rem;
//   background-color: var(--color-grey-100);
//   margin-bottom: 5px;
// `

// function ShoppingCart() {
//   // const handleAddToCart = (product) => {
//   //   const isProductInCart = Boolean(
//   //     cart.find((item) => item.productId === product.id),
//   //   )
//   //   if (isProductInCart) {
//   //     // If product is already in the cart, increase its quantity
//   //     setCart(
//   //       cart.map((item) => {
//   //         if (item.productId === product.id) {
//   //           return {
//   //             ...item,
//   //             quantity: item.quantity + 1,
//   //           }
//   //         }
//   //         return item
//   //       }),
//   //     )
//   //   } else {
//   //     // If product is not already in the cart, add it
//   //     setCart([...cart, { productId: product.id, quantity: 1 }])
//   //   }
//   // }
//   // if (!products.length) {
//   //   return;
//   // }

//   // const cartWithDetails = cart.map((item) => {
//   //   const productDetails = products.find(
//   //     (product) => product.id === item.productId
//   //   );
//   //   return {
//   //     ...item,
//   //     productName: productDetails.name,
//   //     productPrice: productDetails.price,
//   //     totalProductPrice: productDetails.price * item.quantity,
//   //   };
//   // });

//   // const totalCartPrice = cartWithDetails.reduce((total, currentItem) => {
//   //   return total + currentItem.totalProductPrice;
//   // }, 0);
//   return (
//     <div>
//       <H3>1 ticket found in your cart</H3>
//       <CartDetail>
//         <Table type="table" columns="repeat(5, 1fr)">
//           <Table.Header>
//             <div>Event/ Ticket</div>
//             <div>Price</div>
//             <div>Quantity</div>
//             <div>Subtotal</div>
//             <div>remove</div>
//           </Table.Header>
//           <Table.Body
//             data={ticket}
//             render={(data) => <CartRow key={data.id} data={data} />}
//           />
//         </Table>
//       </CartDetail>
//     </div>
//   )
// }

// export default ShoppingCart
