import React, { useState } from 'react';
import { FaStar } from "react-icons/fa";

const Card = ({data,SetCount,Count}) => {
    const [status, setStatus] = useState(Array(data.length).fill(true));
  
  const style1 = {
    top: "0.5rem",
    right: "0.5rem",
  };
   // Function to handle adding an item to the cart
  function handleClickInc(index) {
    SetCount((val) => val + 1);
    const newStatus = [...status];
    newStatus[index] = false;
    setStatus(newStatus);
  }
// Function to handle removing an item from the cart
  function handleClickDec(index) {
    if (Count > 0) {
      SetCount((val) => val - 1);
    }
    const newStatus = [...status];
    newStatus[index] = true;
    setStatus(newStatus);
  }
  return (
      <>
      {data.map((element,index)=>{
          return(
              <div key={index}>
            <div className="col mb-5">
                      <div className="card h-100">
                          {/* <!-- Sale badge--> */}
                          <div className="badge bg-dark text-white position-absolute" style={style1}>{element.Sale}</div>
                          {/* <!-- Product image--> */}
                          <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..."/>
                          {/* <!-- Product details--> */}
                          <div className="card-body p-4">
                              <div className="text-center">
                                  {/* <!-- Product name--> */}
                                  <h5 className="fw-bolder">{element.product}</h5>
                                  {/* <!-- Product reviews--> */}
                                  <div className="d-flex justify-content-center small text-warning mb-2">
                                    {element.review?(
                                      <div>
                                       <FaStar /><FaStar /><FaStar /><FaStar />{""}<FaStar />   
                                      </div>
                                    ):(
                                    <div></div>
                                    )} 
                                  </div>
                                  {/* <!-- Product price--> */}
                                  {element.discount ? (
                    <div>
                      <span className="text-muted text-decoration-line-through">
                        {element.price1}
                      </span>
                      {element.price2}
                    </div>
                  ) : element.price2 ? (
                    <div>
                      {element.price1} - {element.price2}
                    </div>
                  ) : (
                    <div>{element.price1}</div>
                  )}
                </div>
                          </div>
                          {/* <!-- Product actions--> */}
              <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div className="text-center">
                {status[index] ? (
                    <button
                      onClick={(event) => handleClickInc(index, event)}
                      className="btn btn-outline-success mt-auto"
                    >
                      Add to cart
                    </button>
                  ) : (
                    <button
                      onClick={() => handleClickDec(index)}
                      className="btn btn-outline-danger mt-auto"
                    >
                      Remove from Card
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
          </div>
          )
      })}
           
        </>
    );
};

export default Card;