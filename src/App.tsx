import { Route, Routes } from "react-router-dom"
import "./App.scss"
import ScrollToTop from "./helpers/ScrollToTop"
import Catalogue from "./components/Pages/Catalogue"
import ItemCard from "./components/Pages/ItemCard"
import Cart from "./components/Pages/Cart"
import Layout from "./router/Layout"

function App({ json = [{}] }) {
	return (
		<div className="App">
			<ScrollToTop />
			<Routes>
				<Route
					path="/"
					element={<Layout />}>
					<Route
						index
						element={<Catalogue json={json} />}></Route>
					<Route
						path="catalogue"
						element={<Catalogue json={json} />}></Route>
					<Route
						path="catalogue/:id"
						element={<ItemCard json={json} />}></Route>
					<Route
						path="cart"
						element={<Cart json={json} />}></Route>
				</Route>
			</Routes>
		</div>
	)
}

export default App
