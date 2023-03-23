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
  // const [localStorageItems, setLocalStorageItems] = useState<Array<any>>(json);

  // useEffect(() => {
  //   let stringifiedCatalogue = JSON.stringify(localStorageItems);
  //   let localStorage = window.localStorage;
  //   if (
  //     localStorage.getItem("catalogue") &&
  //     localStorage.getItem("catalogue") !== "[]"
  //   ) {
  //     setLocalStorageItems(JSON.parse(localStorage.getItem("catalogue")));
  //   }
  //   if (!localStorage.getItem("catalogue")) {
  //     localStorage.setItem("catalogue", stringifiedCatalogue);
  //   }
  // }, []);

  const [itemsJSON, setItemsJSON] = useState(json);

  function priceAscend(arr: Array<any>) {
    let copyArr = [...arr];
    copyArr.sort((a, b) => {
      return a.price > b.price ? 1 : -1;
    });
    setItemsJSON(copyArr);
  }

  function priceDescend(arr: Array<any>) {
    let copyArr = [...arr];
    copyArr.sort((a, b) => {
      return a.price < b.price ? 1 : -1;
    });
    setItemsJSON(copyArr);
  }

  function nameAscend(arr: Array<any>) {
    let copyArr = [...arr];
    copyArr.sort((a, b) => {
      return a.brand + " " + a.title > b.brand + " " + b.title ? 1 : -1;
    });
    setItemsJSON(copyArr);
  }

  function nameDescend(arr: Array<any>) {
    let copyArr = [...arr];
    copyArr.sort((a, b) => {
      return a.brand + " " + a.title < b.brand + " " + b.title ? 1 : -1;
    });
    setItemsJSON(copyArr);
  }

  function clearFilter() {
    setItemsJSON(json);
    let radioBoxes: NodeListOf<HTMLInputElement> =
      document.querySelectorAll("input[type=radio]");
    for (let radioBox of radioBoxes) {
      radioBox.checked = false;
    }
    let categories = document.querySelectorAll(".categories__item");
    for (let category of categories) {
      category.classList.remove("active");
    }
    priceAscend(itemsJSON);
  }

  function filterArrayByCare(arr: Array<any>, careType: String) {
    let copyArr = [...arr];
    copyArr = copyArr.filter((el) => el.careType.includes(careType));
    setItemsJSON(copyArr);
    return copyArr;
  }

  useEffect(() => {
    priceAscend(itemsJSON);

    document.addEventListener("click", (e: any) => {
      if (e.target && e.target.closest(".categories__item")) {
        let radioBoxes: NodeListOf<HTMLInputElement> =
          document.querySelectorAll("input[type=radio]");
        for (let radioBox of radioBoxes) {
          if (
            radioBox.nextSibling &&
            radioBox.nextSibling.textContent == e.target.textContent
          ) {
            radioBox.checked = true;
          }
        }
        for (let item of document.querySelectorAll(".categories__item")) {
          item.classList.remove("active");
        }
        e.target.closest(".categories__item").classList.add("active");

        priceAscend(filterArrayByCare(itemsJSON, e.target.textContent));
      }
      if (e.target.closest(".care__type")) {
        if (e.target.closest("label")) {
          for (let item of document.querySelectorAll(".categories__item")) {
            item.classList.remove("active");
            if (item.textContent == e.target.textContent) {
              item.classList.add("active");
            }
          }

          priceAscend(filterArrayByCare(itemsJSON, e.target.textContent));
        }
      }
      if (e.target.closest("._button-round-big > button")) {
        clearFilter();
      }
    });

    document.addEventListener("change", (e: any) => {
      if (e.target.closest("select")) {
        if (e.target.closest("select").value == "priceAscend") {
          priceAscend(itemsJSON);
        }
        if (e.target && e.target.closest("select").value == "priceDescend") {
          priceDescend(itemsJSON);
        }
        if (e.target.closest("select").value == "nameAscend") {
          nameAscend(itemsJSON);
        }
        if (e.target.closest("select").value == "nameDescend") {
          nameDescend(itemsJSON);
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
          <div className="aside__range">
            <PriceSelector />
          </div>

          <div className="aside__manufacturer manufacturer">
            <p className="manufacturer__heading">Производитель</p>
            <SearchMedium placeholder="Поиск..." iconSrc={search} />
            Здесь будет генериться список чекбоксов из JSON <br />
            <a className="manufacturer__show-all">Показать все ⏷</a>
          </div>

          <div className="aside__filter-buttons">
            <ButtonMedium textContent="Показать" />
            <RoundButtonLarge iconSrc={bin} />
          </div>

          <div className="aside__care care">
            <div className="care__type">
              <input type="radio" id="care__body" name="care" value="body" />
              <label htmlFor="care__body">Уход за телом</label>
            </div>

            <div className="care__type">
              <input type="radio" id="care__hands" name="care" value="hands" />
              <label htmlFor="care__hands">Уход за руками</label>
            </div>

            <div className="care__type">
              <input type="radio" id="care__legs" name="care" value="legs" />
              <label htmlFor="care__legs">Уход за ногами</label>
            </div>

            <div className="care__type">
              <input type="radio" id="care__face" name="care" value="face" />
              <label htmlFor="care__face">Уход за лицом</label>
            </div>
          </div>
        </div>
        <div className="catalogue__items items">
          <div className="items__list">
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
          <div className="items__pagination">
            <Paginator />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Catalogue;
