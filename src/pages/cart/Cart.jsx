import Accordion from "../../components/accordion/Accordion";

const Cart = () => {

  const addressManager = <>
    <h1>This is the address manager</h1></>;
  const offerSelector = <>
    <h1>This is the offerSelector</h1></>;
  const paymentSelector = <>
    <h1>This is the payment selector</h1></>;
  const accordionClass = "border-black border-2 my-2 p-[0.3rem] rounded-[3px] text-left";

  return (
    <>
      <h2 className="text-4xl font-bold">The Cart Page</h2>
      <div className="cartContainer m-[0.3rem] p-[0.3rem] border-black border-2 rounded-[3px]">
        <div className="cartSummary border-2 border-black m-[0.3rem] p-[0.3rem]  rounded-[3px]">
          <div className="restaurantDetails flex justify-between text-xl font-bold">
            <div className="restaurantName">Restaurant Name</div>
            <div className="restaurantLocation">Restaurant Location</div>
          </div>
          <div className="cartItemContainer flex justify-between items-center my-2 border-black border-2 py-[0.3rem] px-2 rounded-[3px] text-lg">
            {/* <div className="cartItemContainerLeft text-left flex justify-between"> */}
            <div className="cartItemName">Item Name</div>
            <div className="cartItemQuantityButtons flex gap-6 font-bold cursor-pointer border-black border-2 px-4 py-1 rounded-[3px] my-2">
              <button className="quantityButtons">-</button>
              <div className="cartItemQuantity">{2}</div>
              <button className="quantityButtons">+</button>
            </div>
            {/* </div> */}
            {/* <div className="cartItemContainerLeft"> */}
            <div className="cartItemPrice font-bold">156</div>
            {/* </div> */}
          </div>
        </div>
        <div className="accordionContainer">
          <div className={`${accordionClass} offerSelector`}>
            <Accordion title="Special Offers" content={offerSelector} />
          </div>
          <div className={`${accordionClass} addressManager`}>
            <Accordion title="Select Address" content={addressManager} />
          </div>
          <div className={`${accordionClass} paymentSelector`}>
            <Accordion title="Complete Your Payment" content={paymentSelector} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Cart;