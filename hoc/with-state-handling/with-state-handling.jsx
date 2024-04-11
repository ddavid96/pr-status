import React from "react";
import EmptyScreen from "../../components/empty-screen/empty-screen";
import PropTypes from "prop-types";

const withStateHandling = (Component) => {
  const WithStateHandlingComponent = ({ isEmpty, emptyMessage, ...props }) => {
    if (isEmpty) {
      return (
        <Component {...props}>
          <EmptyScreen message={emptyMessage} />
        </Component>
      );
    }
    return <Component {...props} />;
  };

  WithStateHandlingComponent.propTypes = {
    isEmpty: PropTypes.bool,
    emptyMessage: PropTypes.string,
  };

  WithStateHandlingComponent.defaultProps = {
    isEmpty: false,
  };

  return WithStateHandlingComponent;
};

export default withStateHandling;
