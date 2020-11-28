import React from "react"
import Logo from "../../Logo/Logo"
import NavItems from "../NavItems/NavItems"
import classes from "./Sidebar.module.css"
import Aux from "../../../hoc/Aux"
import Backdrop from "../../UI/Backdrop/Backdrop"

const sidebar = (props) => {
	let attachedClases = [classes.Sidebar, classes.Close]
	if (props.open) {
		attachedClases = [classes.Sidebar, classes.Open]
	}
	return (
		<Aux>
			<Backdrop show={props.open} clicked={props.closed} />
			<div className={attachedClases.join(" ")} onClick={props.closed}>
				<div className={classes.Logo}>
					<Logo />
				</div>
				<nav>
					<NavItems isAuthent={props.isAuth} />
				</nav>
			</div>
		</Aux>
	)
}

export default sidebar
