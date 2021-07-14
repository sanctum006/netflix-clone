import React from "react";
import "./Plans.css";

function Plans() {
  const products = [
    { name: "Premium", description: "4K + HDR" },
    { name: "Standard", description: "1080p" },
    { name: "Basic", description: "720p" },
  ];

  return (
    <div className="plans">
      {products.map((product) => (
        <div className="plans__plan">
          <div className="plans__info">
            <h5>{product.name}</h5>
            <h6>{product.description}</h6>
          </div>

          <button
            onClick={() =>
              alert(
                "Oops!! The payment gateways are under maintenance. Please try again later."
              )
            }
          >
            Subscribe
          </button>
        </div>
      ))}
    </div>
  );
}

export default Plans;
