import React from "react";

const RatingDisplay = ({ rating }) => {
  return (
    <div className="rating">
      {[1, 2, 3, 4, 5].map((num) => (
        <input
          key={num}
          type="radio"
          name="rating"
          className="mask mask-star-2 bg-orange-400"
          checked={rating === num}
          readOnly
        />
      ))}
    </div>
  );
};

export default RatingDisplay;
