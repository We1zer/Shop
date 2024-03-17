import React, { useState } from "react";
import product1 from "./product/6f46e984-82c1-4bdc-8701-675155021227.jpg";
const ShoppingCart = () => {
  const [count, setCount] = useState(1);

  const product = {
    title: "COTTON CANDY",
    author: " Abby Muscles",
    imageUrl: "./product/6f46e984-82c1-4bdc-8701-675155021227.jpg",
    category: { name: "SciFi" },
    ISBN: "WS3333333301",
    listPrice: 70.0,
    price: 65.0,
    price50: 60.0,
    price100: 55.0,
    description:
      "Mauris eget eros neque. Integer pellentesque volutpat leo sit amet gravida. Cras sagittis elit et faucibus luctus. Quisque vel ipsum et lacus condimentum tempus. Proin interdum magna vitae ultrices consequat.      Curabitur in pulvinar leo, quis feugiat augue. Morbi luctus orci id est maximus, id molestie augue mattis. Maecenas interdum, velit sed malesuada porttitor, risus est varius augue, vel feugiat sapien arcu eu ex.",
  };

  const handleCountChange = (e) => {
    setCount(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const priceFormatted = (price) =>
    price.toLocaleString("uk-UA", {
      style: "currency",
      currency: "UAH",
      minimumFractionDigits: 2,
    });
  return (
    <form method="post" onSubmit={handleSubmit}>
      <input type="hidden" name="ProductId" value={product.id} />
      <div className="card shadow border-0 mt-4 mb-4">
        <div className="card-header bg-secondary bg-gradient text-light py-4">
          <div className="row">
            <div className="col-12 text-center">
              <h3 className="text-white text-uppercase">{product.title}</h3>
              <p className="text-white-50 fw-semibold mb-0">
                by {product.author}
              </p>
            </div>
          </div>
        </div>
        <div className="card-body">
          <div className="py-3">
            <div className="row">
              <div className="col-6 col-md-2 offset-lg-1 pb-1">
                <a
                  href="/Home"
                  className="btn btn-outline-primary bg-gradient mb-5 fw-semibold btn-sm text-uppercase"
                >
                  <small>Back to home</small>
                </a>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-lg-3 offset-lg-1 text-center mb-3">
                <img
                  src={product1}
                  width="100%"
                  className="rounded"
                  alt={product.title}
                />
              </div>
              <div className="col-12 col-lg-6 offset-lg-1">
                <div className="col-12 col-md-6 pb-4">
                  <span className="badge">{product.category.name}</span>
                </div>
                <div className="row ps-2">
                  <h6 className="text-dark text-opacity-50 ">
                    ISBN : {product.ISBN}
                  </h6>
                </div>
                <div className="row ps-2">
                  <h6 className="text-dark text-opacity-50  pb-2">
                    List Price:
                    <span className="text-decoration-line-through">
                      {priceFormatted(product.listPrice)}
                    </span>
                  </h6>
                </div>
                <div className="row text-center ps-2">
                  <div className="p-1 col-3 col-lg-2 bg-white border-bottom">
                    <div className="text-dark text-opacity-50 fw-semibold">
                      Quantity
                    </div>
                  </div>
                  <div className="p-1 col-3 col-lg-2 bg-white border-bottom">
                    <div className="text-dark text-opacity-50 fw-semibold">
                      1-50
                    </div>
                  </div>
                  <div className="p-1 col-3 col-lg-2 bg-white border-bottom">
                    <div className="text-dark text-opacity-50 fw-semibold">
                      51-100
                    </div>
                  </div>
                  <div className="p-1 col-3 col-lg-2 bg-white border-bottom">
                    <div className="text-dark text-opacity-50 fw-semibold">
                      100+
                    </div>
                  </div>
                </div>
                <div className="row text-center ps-2">
                  <div className="p-1 col-3 col-lg-2 bg-white text-warning fw-bold">
                    <div>{priceFormatted(product.price)}</div>
                  </div>
                  <div className="p-1 col-3 col-lg-2 bg-white text-warning fw-bold">
                    <div>{priceFormatted(product.price)}</div>
                  </div>
                  <div className="p-1 col-3 col-lg-2 bg-white text-warning fw-bold">
                    <div>{priceFormatted(product.price50)}</div>
                  </div>
                  <div className="p-1 col-3 col-lg-2 bg-white text-warning fw-bold">
                    <div>{priceFormatted(product.price100)}</div>
                  </div>
                </div>
                <div className="row col-10 pl-2 my-3">
                  <p className="text-secondary lh-sm">{product.description}</p>
                </div>
                <div className="row pl-2 mb-3">
                  <div className="col-md-4">
                    <div className="input-group mb-3">
                      <span
                        className="input-group-text bg-primary text-white border-0 fw-semibold"
                        id="inputGroup-sizing-default"
                      >
                        Count
                      </span>
                      <input
                        type="number"
                        name="Count"
                        value={count}
                        onChange={handleCountChange}
                        className="form-control text-end"
                        aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-default"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 col-md-6 pb-1">
                    <button
                      type="submit"
                      className="btn btn-primary bg-gradient  w-100 py-2 text-uppercase fw-semibold"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ShoppingCart;
