function Product({ name, price }) {
  return (
    <p>
      Product: {name} – Price: ₹{price}
    </p>
  );
}

function Task2() {
  return <Product name="Mobile" price={15000} />;
}

export default Task2;
