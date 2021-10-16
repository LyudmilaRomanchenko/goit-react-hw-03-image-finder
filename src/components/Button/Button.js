// window.scrollTo({
//   top: document.documentElement.scrollHeight,
//   behavior: "smooth",
// });

import PropTypes from "prop-types";
import s from "./Button.module.css";

function Button({ handleButtonLoadMore }) {
  // window.scrollTo({
  //   top: document.documentElement.scrollHeight,
  //   behavior: "smooth",
  // });
  return (
    <button type="button" className={s.Button} onClick={handleButtonLoadMore}>
      Load more
    </button>
  );
}

Button.prototype = {
  handleButtonLoadMore: PropTypes.func.isRequired,
};

export default Button;
