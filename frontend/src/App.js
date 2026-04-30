import { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({ name: "", quantity: "" });
  const [editId, setEditId] = useState(null);

  const fetchProducts = async () => {
    const res = await fetch("/api/products");
    const data = await res.json();
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (editId) {
      await fetch(`/api/products/${editId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setEditId(null);
    } else {
      await fetch("/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
    }

    setForm({ name: "", quantity: "" });
    fetchProducts();
  };

  const handleDelete = async (id) => {
    await fetch(`/api/products/${id}`, {
      method: "DELETE",
    });
    fetchProducts();
  };

  const handleEdit = (p) => {
    setForm({ name: p.name, quantity: p.quantity });
    setEditId(p.id);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Inventory App</h1>

      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Product Name"
          value={form.name}
          onChange={handleChange}
        />
        <input
          name="quantity"
          placeholder="Quantity"
          value={form.quantity}
          onChange={handleChange}
        />
        <button type="submit">{editId ? "Update" : "Add"}</button>
      </form>

      <ul>
        {products.map((p) => (
          <li key={p.id}>
            {p.name} - {p.quantity}
            <button onClick={() => handleEdit(p)}>Edit</button>
            <button onClick={() => handleDelete(p.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
