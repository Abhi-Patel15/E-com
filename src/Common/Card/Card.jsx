import React from "react";

const Cards = (props) => {
   const name = props.name;
   const number = props.number;
  return (
    <React.Fragment>
    <div className="page-wrapper">
        <div className="page-content"> 
          <div className="card radius-20 bg-light bg-gradient shadow-lg p-3 mb-5 bg-white rounded border-start border-0 border-3 border-info text-wrap">
            <div className="card-body text-wrap">
              <div className="d-flex align-items-center">
                <div>
                  <p className="mb-0 text-secondary text-wrap">{name}</p>
                  <h4 className="my-1 text-info text-wrap">{number}</h4>
                </div>
                <div className="widgets-icons-2 rounded-circle bg-gradient-scooter text-white ms-auto"><i className="bx bxs-cart" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Cards;
