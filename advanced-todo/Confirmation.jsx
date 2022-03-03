import React from "react";
import { useState } from "react";
const Confirmation = ({
  remove,
  clears,
  showConfirmation,
  deleteid,
  removeItem,
  setItems
}) => {
  return (
    <div className="confirmation-container">
      <section>
        <h1>Are you sure ?</h1>
        <article className="btn-container">
          <button
            className="btn"
            onClick={() => {
              if (remove === true && clears === false) {
                removeItem(deleteid);
              } else {
                setItems([]);
              }
              showConfirmation(false, false, false);
            }}
          >
            Yes
          </button>
          <button
            className="btn"
            onClick={() => {
              showConfirmation(false, false, false);
            }}
          >
            Cancel
          </button>
        </article>
      </section>
    </div>
  );
};

export default Confirmation;
