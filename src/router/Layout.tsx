import { Outlet } from "react-router-dom"
import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"
import { AppProps } from "../helpers/types"

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
