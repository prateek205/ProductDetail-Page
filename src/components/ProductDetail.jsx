import React, { useEffect, useState } from "react";
import "../styles/productDetail.css";
import { useProductDetail } from "../context/productDetailContext";

const ProductDetail = () => {
  const { product } = useProductDetail();

  const [activeImg, setActiveImg] = useState(null);
  const [selectColor, setSelectColor] = useState(null);

  useEffect(() => {
    if (product && product.colors?.length) {
      setSelectColor(product.colors[0]);
      setActiveImg(product.colors[0].images[0]);
    }
  }, [product]);

  const getDiscountPrice = (price, discount) => {
    return Math.round(price - (price * discount) / 100);
  };

  const handleColor = (color) => {
    setSelectColor(color);
    setActiveImg(color.images[0]);
  };

  if (!product) {
    return (
      <div className="loader">
        <p>Loading please wait...</p>
      </div>
    );
  }
  return (
    <div className="productDetailContainer">
      <div className="leftSideDetail">
        <div className="imgMainContainer">
          <div className="thumbnailImg">
            {selectColor?.images.map((img, i) => {
              return (
                <img key={i} src={img} onClick={() => setActiveImg(img)} />
              );
            })}
          </div>

          <div className="imgContainer">
            <img src={activeImg} alt="" />
          </div>
        </div>
        <div className="btnDetail">
          <div className="btn btnAdd">
            <button>Add to Cart</button>
          </div>
          <div className="btn btnAdd btnBuy">
            <button>Buy Now</button>
          </div>
        </div>
      </div>
      <div className="detailContainer">
        <div className="title-section">
          <p className="title">{`${selectColor?.title}`}</p>
        </div>

        <div className="price-section">
          {selectColor?.discount > 0 ? (
            <>
              <div className="priceDiscount">
                <p className="discountPrice">
                  &#8377;{" "}
                  {getDiscountPrice(selectColor.price, selectColor.discount)}/-
                </p>
                <p className="discount">({selectColor.discount}% off)</p>
              </div>
              <div className="priceActual">
                <p className="mainPrice">&#8377; {selectColor.price}/-</p>
              </div>
            </>
          ) : (
            <div className="actualPrice">
              <p className="actual">&#8377; {selectColor?.price}/-</p>
            </div>
          )}
        </div>

        <div className="color-section">
          <div className="color-heading">
            <p>Selected color</p>
          </div>
          <div className="colorProduct">
            {product.colors.map((color, i) => {
              return (
                <div key={i} className="colorList">
                  <p
                    style={{ backgroundColor: color.name }}
                    className={`color-circle ${selectColor}`}
                    onClick={() => handleColor(color)}
                  ></p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="description-section">
          <div className="description-title">
            <p>Features</p>
          </div>
          <div className="featureList">
            <div className="featureHeading">
              <p>Dimensions</p>
              <p>Brand</p>
              <p>Capacity</p>
              <p>Special Features</p>
            </div>
            <div className="featureDetail">
              <p>{selectColor?.dimensions}</p>
              <p> {selectColor?.brand}</p>
              <p> {selectColor?.capacity} Watts</p>
              <p> {selectColor?.["special feature"]}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
