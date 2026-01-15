
import './App.css'
function App() {
  const products = [
    { name: "Mobile", price: 15000 },
    { name: "Laptop", price: 50000 },
  ];

  return (
    <>
      <h2>Product List</h2>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            {product.name} - ₹{product.price}
          </li>
        ))}
      </ul>
    </>
  );
}
export default App;
