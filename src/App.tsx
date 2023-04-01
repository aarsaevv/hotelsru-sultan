import { useState } from "react"
import { Route, Routes } from "react-router-dom"
import { AppProps } from "./helpers/types"
import "./App.scss"
import Layout from "./router/Layout"
import ScrollToTop from "./helpers/ScrollToTop"
import Catalogue from "./components/Pages/Catalogue"
import ItemCard from "./components/Pages/ItemCard"
import Cart from "./components/Pages/Cart"
import AdminPanel from "./components/Pages/AdminPanel"

function App(props: { data: AppProps[]; cartItems: AppProps[] }) {
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
