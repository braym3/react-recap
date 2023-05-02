import { useState } from "react";

const Basket = () => {
    const [productBasket, setProductBasket] = useState([]);

    const AddProduct = ({target}) => {
        setProductBasket(target.value);
    }

}

export default Basket;