import { Component } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import s from "./Modal.module.css";

const modalRoot = document.querySelector("#modal-root");
class Modal extends Component {
  static defaultProps = {
    largeImg: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown = (e) => {
    if (e.code === "Escape") {
      console.log("Нажали Escape");

      this.props.onClick();
    }
  };

  handleBackdrop = (e) => {
    if (e.currentTarget === e.target) {
      console.log("Нажали Backdrop");

      this.props.onClick();
    }
  };

  render() {
    return createPortal(
      <div className={s.Overlay} onClick={this.handleBackdrop}>
        <div className={s.Modal}>
          <img src={this.props.largeImg} alt="" />
        </div>
      </div>,
      modalRoot
    );
  }
}

export default Modal;
