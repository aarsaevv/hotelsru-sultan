import './Catalogue.scss';
import Item from './Item';
import ButtonMedium from './UI/Buttons/ButtonMedium';
import RoundButtonLarge from './UI/Buttons/RoundButtonLarge';
import SearchMedium from './UI/Forms/SearchMedium';
import search from '../assets/icons/search.svg';
import bin from '../assets/icons/bin.svg'

function Catalogue() {
    return (
        <section className="_container catalogue-section">
            <p className="catalogue-section__breadcrumbs">Главная | <span>Косметика и гигиена</span></p>
            <div className="catalogue-section__heading heading">
                <h1 className="heading__title">КОСМЕТИКА И ГИГИЕНА</h1>
                <p className="heading__sort">Сортировка:
                    <span>
                        <select>
                            <option value="">Цена по возрастанию ⏶</option>
                            <option value="">Цена по убыванию ⏷</option>
                            <option value="">Название по возрастанию ⏶</option>
                            <option value="">Название по убыванию ⏷</option>
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
                    <p className="aside__range">РАНЖИРЧИК</p>

                    <div className="aside__manufacturer manufacturer">
                        <p className="manufacturer__heading">Производитель</p>
                        <SearchMedium placeholder="Поиск..." iconSrc={search} />
                        Здесь будет генериться список из JSON <br />
                        <a className="manufacturer__show-all">Показать все ⏷</a>
                    </div>

                    <div className="aside__brand brand">
                        <p className="brand__heading">Бренд</p>
                        <SearchMedium placeholder="Поиск..." iconSrc={search} />
                        Здесь будет генериться список из JSON <br />
                        <a className="brand__show-all">Показать все ⏷</a>

                    </div>

                    <div className="aside__filter-buttons">
                        <ButtonMedium textContent="Показать" />
                        <RoundButtonLarge iconSrc={bin} />
                    </div>
                </div>
                <div className="catalogue__items">
                    {[...Array(20)].map((x, i) =>
                        <Item key={i} />
                    )}
                </div>
            </div>
        </section>
    )
}

export default Catalogue;