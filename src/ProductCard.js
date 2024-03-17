import React from "react";
import { Link } from "react-router-dom";

function ProductCard({}) {
  const products = [
    {
      id: 1,
      Title: "COTTON CANDY",
      Author: "Abby Muscles",
      ListPrice: 20.0,
      Price100: 15.0,
      ImageUrl: "./product/6f46e984-82c1-4bdc-8701-675155021227.jpg",
    },

    {
      id: 2,
      Title: "ROCK IN THE OCEAN",
      Author: "Ron Parker",
      ListPrice: 25.0,
      Price100: 18.0,
      ImageUrl: "./product/7e1e5b33-2684-462c-a0c3-7c927eca22b6.jpg",
    },
    {
      id: 3,
      Title: "VANISH IN THE SUNSET",
      Author: "Julian Button",
      ListPrice: 25.0,
      Price100: 18.0,
      ImageUrl: "./product/bf6bee01-2ade-43d9-aecf-ca79aaa0594b.jpg",
    },
    {
      id: 4,
      Title: "FORTUNE OF TIME",
      Author: "Billy Spark",
      ListPrice: 25.0,
      Price100: 18.0,
      ImageUrl: "./product/90d486f0-1140-4f5e-8bb2-299393baf738.jpg",
    },
    {
      id: 5,
      Title: "DARK SKIES",
      Author: "Nancy Hoover",
      ListPrice: 25.0,
      Price100: 18.0,
      ImageUrl: "./product/c55c7724-a4a6-4df4-b4ef-c662bc875ede.jpg",
    },
    {
      id: 6,
      Title: "LEAVES AND WONDERS",
      Author: "Laura Phantom",
      ListPrice: 25.0,
      Price100: 18.0,
      ImageUrl: "./product/d90601cc-9c3d-49e6-8a4c-f7301038d13d.jpg",
    },
  ];
  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-sm-4 row-cols-md-6">
        {products.map((product) => {
          const listPriceFormatted = product.ListPrice.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
            minimumFractionDigits: 2,
          });

          const price100Formatted = product.Price100.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
            minimumFractionDigits: 2,
          });

          const image1 = require(`${product.ImageUrl}`);

          return (
            <div
              key={product.id}
              className="col-lg-3 col-md-4 col-sm-6 col-xs-12 mb-4"
            >
              <div className="card border-0 p-3 shadow border-top border-5 rounded px-2">
                <img
                  src={image1}
                  alt="Product"
                  className="card-img-top rounded"
                />
                <div className="card-body pb-0">
                  <div className="pl-1">
                    <p className="card-title h5 text-dark opacity-75 text-uppercase text-center">
                      {product.Title}
                    </p>
                    <p className="card-title text-warning text-center">
                      by <b>{product.Author}</b>
                    </p>
                  </div>
                  <div className="pl-1">
                    <p className="text-dark text-opacity-75 text-center mb-0">
                      List Price:{" "}
                      <span className="text-decoration-line-through">
                        {listPriceFormatted}
                      </span>
                    </p>
                  </div>
                  <div className="pl-1">
                    <p className="text-dark text-opacity-75 text-center">
                      As low as: <span>{price100Formatted}</span>
                    </p>
                  </div>
                </div>
                <div>
                  <Link
                    to={{
                      pathname: "/Details",
                      state: { product },
                    }}
                    className="btn btn-primary bg-gradient border-0 form-control"
                  >
                    Details
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProductCard;
