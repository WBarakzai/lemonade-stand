import "./Product.css";
const Product = (props) => (
  <div className="Product">
    <p>{props.name}</p>
    <div className="Count">
      <button onClick={props.increment}>+</button>
      <h4>{props.count}</h4>
      <button onClick={props.decrement}>-</button>
    </div>
  </div>
);

export default Product;
