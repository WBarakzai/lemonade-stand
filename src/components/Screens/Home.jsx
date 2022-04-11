import { useState } from "react";
import Card from "../Card/Card";
import Product from "../Product/Product";

const Home = () => {
  const [products, updateProducts] = useState([
    {
      name: "Lemons",
      count: 0,
    },
    {
      name: "Sugar",
      count: 0,
    },
    {
      name: "Ice Cubes",
      count: 0,
    },
  ]);
  const incrementProduct = (name) => {
    updateProducts(
      products.reduce(
        (acc, product) =>
          product.name === name
            ? [...acc, { name, count: product.count + 1 }]
            : [...acc, product],
        []
      )
    );
  };
  return (
    <div className="Home">
      <Card>
        {products.map((product, ind) => (
          <Product
            Key={product.name + ind}
            name={product.name}
            count={product.count}
            increment={() => incrementProduct(product.name)}
          />
        ))}
      </Card>
    </div>
  );
};

export default Home;
