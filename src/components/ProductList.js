import { useState } from "react";
import "./ProductList.css";
import Product from "./Product";
const ProductList = () => {
  const [numberOfLemons, updateNumberOfLemons] = useState(0);
  const [amountOfSugar, updateAmountOfSugar] = useState(0);
  const [numberOfIceCubes, updateNumberOfIceCubes] = useState(0);
  return (
    <div className="ProductList">
      <Product
        name="Lemons"
        count={numberOfLemons}
        increment={() => updateNumberOfLemons(numberOfLemons + 1)}
        decrement={() =>
          numberOfLemons > 0 ? updateNumberOfLemons(numberOfLemons - 1) : 0
        }
      />
      <Product
        name="Sugar"
        count={amountOfSugar}
        increment={() => updateAmountOfSugar(amountOfSugar + 1)}
        decrement={() =>
          amountOfSugar > 0 ? updateAmountOfSugar(amountOfSugar - 1) : 0
        }
      />
      <Product
        name="Ice Cubes"
        count={numberOfIceCubes}
        increment={() => updateNumberOfIceCubes(numberOfIceCubes + 1)}
        decrement={() =>
          numberOfIceCubes > 0
            ? updateNumberOfIceCubes(numberOfIceCubes - 1)
            : 0
        }
      />
    </div>
  );
};

export default ProductList;
