import { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h1>Inventory App</h1>
      <ul>
        {products.map((p) => (
          <li key={p.id}>
            {p.name} - {p.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
