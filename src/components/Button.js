import React from "react";

const LoadMoreButton = ({ handleLoadMore, disabled }) => (
  <button
    type="button"
    className="Button"
    onClick={handleLoadMore}
    disabled={disabled}
  >
    Load more
  </button>
);

export default LoadMoreButton;
