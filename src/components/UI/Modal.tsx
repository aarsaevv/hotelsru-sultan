import "./Modal.scss";
import cross from "../../assets/icons/cross-yellow.svg";
import doubleTick from "../../assets/icons/double-tick.svg";

function Modal() {
  return (
    <div className="modal">
      <button className="modal__cross">
        <img src={cross} alt="" />
      </button>
      <div className="modal__message message">
        <img className="message__image" src={doubleTick} alt="" />
        <h1 className="message__header">Спасибо за заказ</h1>
        <h2 className="message__text">
          Наш менеджер свяжется с вами в ближайшее время
        </h2>
      </div>
    </div>
  );
}

export default Modal;
