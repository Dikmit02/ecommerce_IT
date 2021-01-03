import React from "react";

const success = () => {
  return (
    <div className="d-flex justify-content-center align-items-center" >
        <img
      src="https://cdn11.bigcommerce.com/s-4yo3xyp5/product_images/uploaded_images/adding-an-order-summary-to-the-order-confirmation-page.png"
      alt="order successfull"
    ></img>
    <div style={{fontSize:'40px'}}>Congratulations on successfully placing your order! </div>
    </div>
  );
};

export default success;
