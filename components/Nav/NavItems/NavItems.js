import React from "react"
import classes from "./NavItems.module.css"
import NavListItems from "../NavListItems/NavListItems"

const navItems = (props) => {
	return (
		<ul className={classes.NavItems}>
			<NavListItems link="/">Burger</NavListItems>
			{props.isAuthent ? <NavListItems link="/orders">Orders</NavListItems> : null}
			{!props.isAuthent ? <NavListItems link="/auth">Authenticate</NavListItems> : <NavListItems link="/logout">Logout</NavListItems>}
		</ul>
	)
}

export default navItems
