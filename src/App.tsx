import { Route, Routes } from "react-router-dom"
import { AppProps } from "./helpers/types"
import ScrollToTop from "./helpers/ScrollToTop"
import "./App.scss"
import Catalogue from "./components/Pages/Catalogue"
import ItemCard from "./components/Pages/ItemCard"
import Cart from "./components/Pages/Cart"
import Layout from "./router/Layout"

function App(props: { data: AppProps[]; cartData: any[] }) {
	return (
		<div className="App">
			<ScrollToTop />
			<Routes>
				<Route
					path="/"
					element={
						<Layout
							data={props.data}
							cartData={props.cartData}
						/>
					}>
					<Route
						index
						element={
							<Catalogue
								data={props.data}
								cartData={props.cartData}
							/>
						}></Route>
					<Route
						path="catalogue"
						element={
							<Catalogue
								data={props.data}
								cartData={props.cartData}
							/>
						}></Route>
					<Route
						path="catalogue/:id"
						element={
							<ItemCard
								data={props.data}
								cartData={props.cartData}
							/>
						}></Route>
					<Route
						path="cart"
						element={<Cart cartData={props.cartData} />}></Route>
				</Route>
			</Routes>
		</div>
	)
}

export default App
