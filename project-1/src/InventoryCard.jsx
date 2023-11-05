export default function InventoryCard({ products, addToCart }) {
  return (
    // displaying list of products with name, brand, quantity and price
    <div> <h1> Groceries App</h1>
    <div className="Inventory-Container">
      {products.map((product) => (
        <div className="Inventory-Card" key={product.id}>
          <img className="img"src={product.image} alt={product.productName} />
          <h2>{product.productName}</h2>
          <h3>{product.brand}</h3>
          <p>{product.quantity}</p>
          <p><b>{product.price}</b></p>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
    </div>
  );
}


