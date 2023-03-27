import { Route, Routes } from "react-router-dom"
import { AppProps } from "./helpers/types"
import "./App.scss"
import ScrollToTop from "./helpers/ScrollToTop"
import Catalogue from "./components/Pages/Catalogue"
import ItemCard from "./components/Pages/ItemCard"
import Cart from "./components/Pages/Cart"
import Layout from "./router/Layout"

function App(props: { data: AppProps[] }) {
	return (
		<div className="App">
			<ScrollToTop />
			<Routes>
				<Route
					path="/"
					element={<Layout />}>
					<Route
						index
						element={<Catalogue data={props.data} />}></Route>
					<Route
						path="catalogue"
						element={<Catalogue data={props.data} />}></Route>
					<Route
						path="catalogue/:id"
						element={<ItemCard data={props.data} />}></Route>
					<Route
						path="cart"
						element={<Cart />}></Route>
				</Route>
			</Routes>
		</div>
	)
}

export default App
