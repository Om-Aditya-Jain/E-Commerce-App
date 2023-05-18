import React, { useState } from "react";
import "./Product.scss";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import BalanceIcon from "@mui/icons-material/Balance";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartReducer";

const Product = () => {
  const productId = useParams().id;
  const [index, setIndex] = useState("img");
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const { data, loading, error } = useFetch(
    `/products/${productId}?populate=*`
  );
  return (
    <div className="product">
      <div className="left">
        <div className="images">
          <img
            src={
              process.env.REACT_APP_UPLOAD_URL +
              data?.attributes?.img?.data?.attributes?.url
            }
            alt=""
            onClick={(e) => setIndex("img")}
          />
          <img
            src={
              process.env.REACT_APP_UPLOAD_URL +
              data?.attributes?.img2?.data?.attributes?.url
            }
            alt=""
            onClick={(e) => setIndex("img2")}
          />
        </div>
        <div className="mainImg">
          <img
            src={
              process.env.REACT_APP_UPLOAD_URL +
              data?.attributes[index]?.data?.attributes?.url
            }
            alt=""
          />
        </div>
      </div>
      <div className="right">
        <h1>{data?.attributes?.title}</h1>
        <span className="price">₹ {data?.attributes?.price}</span>
        <p>{data?.attributes?.desc}</p>
        <div className="quantity">
          <button
            onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}
          >
            -
          </button>
          {quantity}
          <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
        </div>
        <button
          className="addCart"
          onClick={() =>
            dispatch(
              addToCart({
                id: data.id,
                title: data.attributes.title,
                desc: data.attributes.desc,
                img: data.attributes.img.data.attributes.url,
                price: data.attributes.price,
                quantity,
              })
            )
          }
        >
          <AddShoppingCartIcon /> ADD TO CART
        </button>
        <div className="links">
          <div className="item">
            <FavoriteBorderOutlinedIcon /> ADD TO WISH LIST
          </div>
          <div className="item">
            <BalanceIcon /> ADD TO COMPARE
          </div>
        </div>
        <div className="info">
          <span>Brand : Polo</span>
          <span>Product Type : T-Shirt</span>
          <span>Tag : T-Shirt, Women, Top</span>
        </div>
        <hr />
        <div className="info">
          <span>DESCRIPTION</span>
          <hr />
          <span>ADDITIONAL INFORMATION</span>
          <hr />
          <span>FAQ</span>
        </div>
      </div>
    </div>
  );
};

export default Product;
