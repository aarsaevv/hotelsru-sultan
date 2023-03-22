import "./Paginator.scss";
import arrow from "../../assets/icons/arrow.svg";

function Paginator() {
  return (
    <div className="pagination">
      <button className="pagination__button button">
        <img className="button__left" src={arrow} alt="" />
      </button>
      <div className="pagination__list list">
        <a className="list__number active" href="#">
          1
        </a>
        <a className="list__number" href="#">
          2
        </a>
        <a className="list__number" href="#">
          3
        </a>
        <a className="list__number" href="#">
          4
        </a>
        <a className="list__number" href="#">
          5
        </a>
      </div>
      <button className="pagination__button">
        <img className="button__right" src={arrow} alt="" />
      </button>
    </div>
  );
}

export default Paginator;
