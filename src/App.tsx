import { useState } from "react"
import { Route, Routes } from "react-router-dom"
import {CartProps, CatalogueProps} from "./types/types"
import "./scss/App.scss"
import AdminPanel from "./pages/AdminPanel"
import Cart from "./pages/Cart"
import Catalogue from "./pages/Catalogue"
import ItemCard from "./pages/ItemCard"
import Layout from "./router/Layout"
import ScrollToTop from "./helpers/scrollToTop"

function App(props: { data: CatalogueProps[]; cartItems: CartProps[] }) {
	/** Создаем себе копии для манипуляций с данными */
	const [data, setData] = useState(props.data)
	const [cartItems, setCartItems] = useState(props.cartItems)

	return (
		<div className="App">
			<ScrollToTop />
			<Routes>
				<Route
					path="/"
					element={<Layout cartItems={cartItems} />}>
					<Route
						index
						element={
							<Catalogue
								data={data}
								setData={setData}
								cartItems={cartItems}
								setCartItems={setCartItems}
							/>
						}></Route>
					<Route
						path="catalogue"
						element={
							<Catalogue
								data={data}
								setData={setData}
								cartItems={cartItems}
								setCartItems={setCartItems}
							/>
						}></Route>
					<Route
						path="catalogue/:id"
						element={
							<ItemCard
								data={data}
								cartItems={cartItems}
							/>
						}></Route>
					<Route
						path="cart"
						element={
							<Cart
								cartItems={cartItems}
								setCartItems={setCartItems}
							/>
						}></Route>
					<Route
						path="my_admin"
						element={
							<AdminPanel
								data={data}
								setData={setData}
							/>
						}></Route>
				</Route>
			</Routes>
		</div>
	)
}

export default App
