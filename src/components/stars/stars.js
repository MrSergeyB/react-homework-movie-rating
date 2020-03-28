import React from "react";
import Star from "../star";
import PropTypes from "prop-types";

const Stars = props => {
  const {count} = props;

  return (
    <div>
      <ul className="card-body-stars u-clearfix">
        {Array.from(Array(count).keys()).map(a => {
          return <Star />;
        })}
      </ul>
    </div>
  );
};

Stars.propTypes = {
  count: PropTypes.number
};

export default Stars;
