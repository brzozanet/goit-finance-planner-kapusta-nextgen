import { ThreeDots } from "react-loader-spinner";

import PropTypes from "prop-types";

const Loader = ({width, height}) => {
  return (
    <ThreeDots
      visible={true}
      height={height}
      width={width}
      color="#FF751D"
      radius="9"
      ariaLabel="three-dots-loading"
      wrapperStyle={{}}
      wrapperClass=""
    />
  );
};

Loader.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string
};

export default Loader;