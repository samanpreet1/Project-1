export default function CartList({ cart, removeFromCart, emptyCart, Total }) {
  return (
    <div className="CartList-Card-Info">
      {cart.length === 0 ? (
        <p>Your Cart is Empty!</p>
      ) : (
        //Displaying cart items
        <div>
          <div><h3>Your Cart</h3></div>
          <p>No. of items: {cart.length}</p>
          {cart.map((item) => (
            <div key={item.id} className=".CartList-Container">
              <h2>{item.productName}</h2>
              <p><b>{item.price}</b></p>
              <button className=".Remove-Button" onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          ))}
          <div className="CartList-Buttons">
            <button onClick={emptyCart}>Empty Cart</button>
            <button className="#Buy-Button" onClick={Total}>Buy-Total: ${Total({ cart }).toFixed(2)}</button>
          </div>
        </div>
      )}
    </div>
    
  );
}
