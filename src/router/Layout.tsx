import { Outlet } from "react-router-dom"
import { CartProps } from "../types/types"
import Footer from "../components/Footer"
import Header from "../components/Header"

function Layout(props: { cartItems: CartProps[] }) {
	return (
		<div>
			<Header cartItems={props.cartItems} />
			<Outlet />
			<Footer />
		</div>
	)
}

export default Layout
