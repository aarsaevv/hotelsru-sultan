//@ts-nocheck

import "./Catalogue.scss";
import { useEffect, useState } from "react";
import bin from "../assets/icons/bin.svg";
import ButtonMedium from "./UI/Buttons/ButtonMedium";
import Item from "./Item";
import Paginator from "./UI/Paginator";
import PriceSelector from "./UI/Forms/PriceSelector";
import RoundButtonLarge from "./UI/Buttons/RoundButtonLarge";
import search from "../assets/icons/search.svg";
import SearchMedium from "./UI/Forms/SearchMedium";

function Catalogue({ json = [{}] }) {
  const [itemsJSON, setItemsJSON] = useState(json);

  // function collectManufacturers

  function sortArrayPriceAscend(arr) {
    let copyArr = [...arr];
    copyArr.sort((a, b) => {
      return a.price > b.price ? 1 : -1;
    });
    setItemsJSON(copyArr);
  }

  function sortArrayPriceDescend(arr) {
    let copyArr = [...arr];
    copyArr.sort((a, b) => {
      return a.price < b.price ? 1 : -1;
    });
    setItemsJSON(copyArr);
  }

  function sortArrayNameAscend(arr) {
    let copyArr = [...arr];
    copyArr.sort((a, b) => {
      return a.brand + " " + a.title > b.brand + " " + b.title ? 1 : -1;
    });
    setItemsJSON(copyArr);
  }

  function sortArrayNameDescend(arr) {
    let copyArr = [...arr];
    copyArr.sort((a, b) => {
      return a.brand + " " + a.title < b.brand + " " + b.title ? 1 : -1;
    });
    setItemsJSON(copyArr);
  }

  function filterArrayByCare(arr, careTypeArr) {
    let copyArr = [...arr];
    copyArr = copyArr.filter((el) =>
      careTypeArr.every((item) => el.careType.includes(item))
    );
    setItemsJSON(copyArr);
  }

  useEffect(() => {
    sortArrayPriceAscend(itemsJSON);
    // filterArrayByCare(itemsJSON, ["Уход за руками", "Уход за ногами"]);
    document.addEventListener("change", (e) => {
      if (e.target.closest("select")) {
        if (e.target.closest("select").value === "priceAscend") {
          sortArrayPriceAscend(itemsJSON);
        }
        if (e.target.closest("select").value === "priceDescend") {
          sortArrayPriceDescend(itemsJSON);
        }
        if (e.target.closest("select").value === "nameAscend") {
          sortArrayNameAscend(itemsJSON);
        }
        if (e.target.closest("select").value === "nameDescend") {
          sortArrayNameDescend(itemsJSON);
        }
      }
    });
  }, []);

  return (
    <section className="_container catalogue-section">
      <p className="catalogue-section__breadcrumbs">
        Главная | <span>Косметика и гигиена</span>
      </p>
      <div className="catalogue-section__heading heading">
        <h1 className="heading__title">КОСМЕТИКА И ГИГИЕНА</h1>
        <p className="heading__sort">
          Сортировка:
          <span>
            <select>
              <option value="priceAscend">Цена по возрастанию ⏶</option>
              <option value="priceDescend">Цена по убыванию ⏷</option>
              <option value="nameAscend">Название по возрастанию ⏶</option>
              <option value="nameDescend">Название по убыванию ⏷</option>
            </select>
          </span>
        </p>
      </div>
      <div className="catalogue-section__categories categories">
        <button className="categories__item">Уход за телом</button>
        <button className="categories__item">Уход за руками</button>
        <button className="categories__item">Уход за ногами</button>
        <button className="categories__item">Уход за лицом</button>
      </div>
      <div className="catalogue-section__catalogue catalogue">
        <div className="catalogue__aside aside">
          <p className="aside__heading">ПОДБОР ПО ПАРАМЕТРАМ</p>
          <p className="aside__price">Цена ₸</p>
          <p className="aside__range">
            <PriceSelector />
          </p>

          <div className="aside__manufacturer manufacturer">
            <p className="manufacturer__heading">Производитель</p>
            <SearchMedium placeholder="Поиск..." iconSrc={search} />
            Здесь будет генериться список из JSON <br />
            <a className="manufacturer__show-all">Показать все ⏷</a>
          </div>

          <div className="aside__filter-buttons">
            <ButtonMedium textContent="Показать" />
            <RoundButtonLarge iconSrc={bin} />
          </div>

          <div className="aside__care care">
            <p className="care__body">УХОД ЗА ТЕЛОМ</p>
            <p className="care__hands">УХОД ЗА РУКАМИ</p>
            <p className="care__legs">УХОД ЗА НОГАМИ</p>
            <p className="care__face">УХОД ЗА ЛИЦОМ</p>
          </div>
        </div>
        <div className="catalogue__items">
          {itemsJSON.map((el: any, idx: number) => {
            return (
              <Item
                key={idx}
                imageSrc={el.imageSrc}
                size={el.size + " " + el.sizeType.split(", ")[1]}
                brand={el.brand + " "}
                title={el.title}
                barcode={el.barcode}
                manufacturer={el.manufacturer}
                price={el.price}
              />
            );
          })}
        </div>
      </div>
      <Paginator />
    </section>
  );
}

export default Catalogue;
