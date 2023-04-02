import { Outlet } from "react-router-dom"
import { AppProps } from "../helpers/types"
import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"

function Layout(props: { cartItems: AppProps[] }) {
	return (
		<div>
			<Header cartItems={props.cartItems} />
			<Outlet />
			<Footer />
		</div>
	)
}

export default Layout
