import React from "react"
import ReactDOM from "react-dom/client"
import { HashRouter as Router } from "react-router-dom"
import { AppProps } from "./helpers/types"
import App from "./App"

let data: AppProps[] = [
	{
		imageSrc: require("../src/assets/images/spray.jpg"),
		title: 'Парфюмированный спрей для тела "Капля росы',
		sizeType: "объем, мл",
		size: 100,
		barcode: 114000519,
		manufacturer: "MEA",
		brand: "MEA",
		description:
			"Мист для тела, сверкающий, словно капля росы в лучах утреннего солнца. Этот спрей с шиммерами содержит не только отражающие свет микрочастицы, но и ухаживающие компоненты, которые освежают, увлажняют и питают кожу.",
		price: 2217.3,
		careType: ["Уход за телом"],
	},
	{
		imageSrc: require("../src/assets/images/cream-lotion.jpg"),
		title: "Крем-лосьон для рук и тела Les notes de Bisou du soleil",
		sizeType: "объем, мл",
		size: 200,
		barcode: 109200025,
		manufacturer: "D`Michael",
		brand: "D`Michael",
		description:
			"Ультралегкий лосьон для рук и тела от D`Michael имеет нежную тающую текстуру с изысканным ароматом, обеспечивает насыщенное увлажнение кожи, не оставляя жирной пленки. Благодаря особой формуле с легкими маслами мгновенно впитывается, поддерживая естественный pH-баланс кожи.",
		price: 3847.5,
		careType: ["Уход за телом", "Уход за руками"],
	},
	{
		imageSrc: require("../src/assets/images/body-milk-strawberry.jpg"),
		title: "Молочко для тела «Мисс Клубничный компромисс»",
		sizeType: "объем, мл",
		size: 200,
		barcode: 81500030,
		manufacturer: "DOLCE MILK",
		brand: "DOLCE MILK",
		description:
			"Моментально впитывается и питает кожу всем необходимым. Благодаря формуле с молочными протеинами и маслу ШИ, ощущение увлажненности сохранится гораздо дольше! Ура? Ура!",
		price: 2046.3,
		careType: ["Уход за телом"],
	},
	{
		imageSrc: require("../src/assets/images/body-butter.jpg"),
		title: "Омолаживающее масло для тела с минералами Мертвого Моря и натуральными маслами",
		sizeType: "объем, мл",
		size: 250,
		barcode: 100600089,
		manufacturer: "SEACARE",
		brand: "SEACARE",
		description:
			"Масло для Тела является исключительно обогащенным кремом, содержащим тщательно подобранные комбинации масел, витаминов и минералов. Обладает успокаивающим ароматом. Формула обогащена минералами Мертвого моря, и создана в соответствии со стандартами Израильской ассоциации производителей косметики.",
		price: 5762.7,
		careType: ["Уход за телом", "Уход за ногами"],
	},
	{
		imageSrc: require("../src/assets/images/body-balm.jpg"),
		title: "Увлажняющий бальзам с тающей текстурой",
		sizeType: "объем, мл",
		size: 250,
		barcode: 67100004,
		manufacturer: "AVENE",
		brand: "AVENE",
		description:
			"Формула, гарантирующая длительное увлажнение (24 часа) и обеспечивающая комфорт и мягкость для сухой и чувствительной кожи. Высокая переносимость обеспечивается формулой, разработанной специально для самой чувствительной кожи.",
		price: 7392.9,
		careType: ["Уход за телом"],
	},
	{
		imageSrc: require("../src/assets/images/cream-mea.jpg"),
		title: "Увлажняющий крем для рук «Догорающее солнце»",
		sizeType: "объем, мл",
		size: 50,
		barcode: 111501257,
		manufacturer: "MEA",
		brand: "MEA",
		description:
			"Легкая белоснежная текстура этого крема со свежим цветочным ароматом мгновенно впитывается, не стягивая кожу рук и не оставляя на ней жирной пленки.",
		price: 1533.3,
		careType: ["Уход за руками"],
	},
	{
		imageSrc: require("../src/assets/images/cream-dolchemilk.jpg"),
		title: "Крем для рук «Ханна Банана»",
		sizeType: "объем, мл",
		size: 75,
		barcode: 81500025,
		manufacturer: "DOLCE MILK",
		brand: "DOLCE MILK",
		description:
			"Им достается больше всего. Посчитайте, сколько раз в день вы моете руки? Чтобы вода и прочие вредные воздействия не портили кожу, под рукой всегда должен быть крем. И лучше, если он с новой формулой молочных протеинов, которая увлажняет еще активнее!",
		price: 1191.3,
		careType: ["Уход за руками"],
	},
	{
		imageSrc: require("../src/assets/images/fluid-mea.jpg"),
		title: "Бархатистый флюид для рук «Жидкое небо»",
		sizeType: "объем, мл",
		size: 100,
		barcode: 129000732,
		manufacturer: "MEA",
		brand: "MEA",
		description:
			"Этот легкий флюид впитывается за секунды, не оставляя жирной пленки. Можно не бояться поправить руками волосы или коснуться одежды. Но несмотря на деликатную текстуру, это полноценный смягчающий лосьон с мощным составом.",
		price: 2103.3,
		careType: ["Уход за руками"],
	},
	{
		imageSrc: require("../src/assets/images/cream-seacare.jpg"),
		title: "Омолаживающий крем для рук с минералами Мертвого Моря и натуральными маслами",
		sizeType: "объем, мл",
		size: 150,
		barcode: 100600094,
		manufacturer: "SEACARE",
		brand: "SEACARE",
		description:
			"SeaCare Омолаживающий Крем для Рук - это питающий, восстанавливающий и увлажняющий крем для сухой, грубой или потрескавшейся кожи рук. Крем обогащен минералами Мертвого моря, и создан в соответствии со стандартами Израильской ассоциации производителей косметики. ",
		price: 4565.7,
		careType: ["Уход за руками"],
	},
	{
		imageSrc: require("../src/assets/images/cream-drjart.jpg"),
		title: "Крем для рук Ceramidin",
		sizeType: "объем, мл",
		size: 50,
		barcode: 92400102,
		manufacturer: "DR. JART+",
		brand: "DR. JART+",
		description:
			"Активный компонент CERAMIDIN на клеточном уровне защищает и питает вашу кожу, регулируя трансэпидермальную потерю влаги и поддерживая целостность поверхностного слоя. Подходит для чувствительной кожи.",
		price: 5226.9,
		careType: ["Уход за руками"],
	},
	{
		imageSrc: require("../src/assets/images/foot-dolchemilk.jpg"),
		title: "Крем для ног «Дикий инжир»",
		sizeType: "объем, мл",
		size: 100,
		barcode: 88800072,
		manufacturer: "DOLCE MILK",
		brand: "DOLCE MILK",
		description:
			"С ультраэффективным кремом дикий инжир весь мир у ваших ног. У ваших - мягких, ухоженных ног с нежными как у младенца пяточками. Не ножки, а мечта!",
		price: 1704.3,
		careType: ["Уход за ногами"],
	},
	{
		imageSrc: require("../src/assets/images/foot-lotion.jpg"),
		title: "Лосьон для удаления мозолей и натоптышей «Жидкий педикюр»",
		sizeType: "объем, мл",
		size: 150,
		barcode: 122800074,
		manufacturer: "ARAVIA",
		brand: "ARAVIA PROFESSIONAL",
		description:
			"Лосьон создан специально для проведения процедуры педикюра максимально быстро и эффективно. Кератолитик размягчает ороговевший слои кожи, который можно легко удалить с помощью пилки-терки. Лосьон разработан специально для ухода за проблемами кожи ног.",
		price: 2901.3,
		careType: ["Уход за ногами"],
	},
	{
		imageSrc: require("../src/assets/images/foot-cream.jpg"),
		title: "Активный увлажняющий крем для ног с гиалуроновой кислотой Active Cream",
		sizeType: "объем, мл",
		size: 150,
		barcode: 107600035,
		manufacturer: "ARAVIA",
		brand: "ARAVIA PROFESSIONAL",
		description:
			"Глицерин и 100% гиалуроновая кислота в составе крема удерживают влагу в глубоких слоях эпидермиса, способствуют регенерации кожи, значительно снижая вероятность появления натоптышей и ороговелостей. Масло ши восстанавливает защитный липидный барьер и смягчает поверхность кожи, делает её мягкой и бархатистой.",
		price: 2901.3,
		careType: ["Уход за ногами"],
	},
	{
		imageSrc: require("../src/assets/images/foot-mask.jpg"),
		title: "Педикюрная маска «Гладкие пяточки» (носочки) FOOT PEELING PACK",
		sizeType: "объем, мл",
		size: 40,
		barcode: 105100280,
		manufacturer: "KOCOSTAR",
		brand: "KOCOSTAR",
		description:
			"Активные компоненты маски позволят за несколько дней мягко отшелушить кожу, а комплекс растительных экстрактов поможет снять усталость с ног во время процедуры и успокоить кожу после нее. Удобная упаковка в виде непромокаемого носочка сделает процедуру простой, безопасной и комфортной.",
		price: 2513.7,
		careType: ["Уход за ногами"],
	},
	{
		imageSrc: require("../src/assets/images/foot-and-hand-cream.jpg"),
		title: "Парфюмированный крем для рук и ног Hand&Foot Perfume Cream #Lumineux Gardénia",
		sizeType: "объем, мл",
		size: 100,
		barcode: 105100054,
		manufacturer: "VILLAGE 11 FACTORY",
		brand: "VILLAGE 11 FACTORY",
		description:
			"Крем обеспечивает достаточное увлажнение и питание грубой, потрескавшейся кожи рук и ног. Благодаря содержанию кератина смягчает грубую кожу, делая ее нежной и увлажненной. Данный парфюмированный крем содержит масло из плодов кокосовой пальмы, полимер двойного действия, благодаря которому кожа остается увлажненной в течение длительного периода времени.",
		price: 1596,
		careType: ["Уход за ногами", "Уход за руками"],
	},
	{
		imageSrc: require("../src/assets/images/face-serum.jpg"),
		title: "Увлажняющая сыворотка с гиалуроновой кислотой Hyaluronic Active Serum",
		sizeType: "объем, мл",
		size: 30,
		barcode: 107300092,
		manufacturer: "ARAVIA",
		brand: "ARAVIA LABORATORIES",
		description:
			"Сыворотка интенсивно и глубоко увлажняет, повышает эластичность и упругость кожи, замедляет процесс старения, разглаживает морщины. Предотвращает потерю влаги, улучшает защитные функции кожи, снимает раздражения, успокаивает, способствует заживлению кожи. Делает кожу сияющей.",
		price: 3710.7,
		careType: ["Уход за лицом"],
	},
	{
		imageSrc: require("../src/assets/images/face-cream.jpg"),
		title: "Антивозрастной Ночной Крем для Лица с Матриксил, Минералами Мертвого Моря и Маслами",
		sizeType: "объем, мл",
		size: 50,
		barcode: 100600074,
		manufacturer: "SEACARE",
		brand: "SEACARE",
		description:
			"Обеспечивает обильное питание и защиту кожи. Формула обогащена минералами Мертвого моря, и создана в соответствии со стандартами Израильской ассоциации производителей косметики. Содержит Matrixyl Synthe новый активный ингредиент, который выравнивает тон кожи и разглаживает морщины.",
		price: 8555.7,
		careType: ["Уход за лицом"],
	},
	{
		imageSrc: require("../src/assets/images/face-cream-clinique.jpg"),
		title: "Увлажняющий крем-гель для проблемной кожи Anti-Blemish Solutions",
		sizeType: "объем, мл",
		size: 15,
		barcode: 9365,
		manufacturer: "CLINIQUE",
		brand: "CLINIQUE",
		description:
			"Разработано для проблемной кожи. Средство в легкой текстуре - третий шаг в нашей системе ухода за проблемной кожей Anti-Blemish System. Применение всех средств из трехступенчатой системы ухода за кожей помогает добиться максимального эффекта и устранить до 37 % высыпаний за три дня.",
		price: 3140.7,
		careType: ["Уход за лицом"],
	},
	{
		imageSrc: require("../src/assets/images/face-mask.jpg"),
		title: "Очищающая, контролирующая излишки жира маска Anti-Blemish Solutions Oil-Control Cleansing Mask",
		sizeType: "объем, мл",
		size: 100,
		barcode: 9055,
		manufacturer: "CLINIQUE",
		brand: "CLINIQUE",
		description:
			"Интенсивная очищающая маска, которая не сушит и не стягивает кожу. Созданная на основе глины, она помогает успокоить воспаленные участки, уменьшить размер и количество прыщиков, очистить и сделать менее заметными поры, снять раздражение и красноту и предотвратить новые высыпания.",
		price: 13514.7,
		careType: ["Уход за лицом"],
	},
	{
		imageSrc: require("../src/assets/images/face-lotion.jpg"),
		title: "Лосьон мягкий",
		sizeType: "объем, мл",
		size: 100,
		barcode: 67100009,
		manufacturer: "AVENE",
		brand: "AVENE",
		description:
			"Благодаря высокому содержанию в составе Термальной воды Avene лосьон полностью сохраняет ее успокаивающие и снимающие раздражение свойства. Содержащиеся в лосьоне природные силикаты в виде суспензии защищают кожу от агрессивных внешних воздействий, образуя на ней нежнейшую защитную пленку.",
		price: 5323.8,
		careType: ["Уход за лицом"],
	},
]

/** Помещаем данные в локальное хранилище и пустую корзину, если их нет */
;(function setJsonToLocalStorage() {
	if (localStorage.getItem("catalogue") !== "[]" && localStorage.getItem("cart")) {
		return
	} else {
		localStorage.setItem("catalogue", `${JSON.stringify(data)}`)
		localStorage.setItem("cart", `[]`)
	}
})()
/** Сразу же читаем */
;(function readCatalogueFromLocalStorage() {
	if (localStorage.getItem("catalogue")) {
		data = JSON.parse(String(localStorage.getItem("catalogue")))
		localStorage.setItem("catalogue", `${JSON.stringify(data)}`)
		return data
	}
})()

let cartItems
if (localStorage.getItem("cart")) {
	cartItems = JSON.parse(String(localStorage.getItem("cart")))
} else {
	cartItems = []
}

/** Сбрасываем скролл при обновлении */
window.onbeforeunload = function () {
	window.scrollTo(0, 0)
}

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
	<React.StrictMode>
		<Router>
			<App
				data={data}
				cartItems={cartItems}
			/>
		</Router>
	</React.StrictMode>,
)
