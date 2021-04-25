import useForm from '../lib/useForm';

export default function CreateProduct() {
  const { inputs, handleChange, resetForm, clearForm } = useForm({
    image: '',
    name: 'Nice Shoes',
    price: 34234,
    description: 'These are the best shoes!',
  });
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log(inputs);
      }}
    >
      <label htmlFor="name">
        Name
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          value={inputs.name}
          onChange={handleChange}
        />
      </label>

      <label htmlFor="price">
        Price
        <input
          type="number"
          id="price"
          name="price"
          placeholder="Name"
          value={inputs.price}
          onChange={handleChange}
        />
      </label>

      <label htmlFor="description">
        Description
        <textarea
          id="description"
          name="description"
          placeholder="Description"
          value={inputs.description}
          onChange={handleChange}
        />
      </label>
      <button type="submit">+ Add Product</button>

      <button type="button" onClick={clearForm}>
        + Clear Product
      </button>
    </form>
  );
}