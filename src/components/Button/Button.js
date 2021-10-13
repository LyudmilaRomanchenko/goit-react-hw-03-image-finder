// window.scrollTo({
//   top: document.documentElement.scrollHeight,
//   behavior: "smooth",
// });

import s from "./Button.module.css";

function Button() {
  window.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: "smooth",
  });
  return (
    <button type="button" className={s.Button}>
      Load more
    </button>
  );
}

export default Button;
