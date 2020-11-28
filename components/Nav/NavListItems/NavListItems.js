import React from "react"
import { NavLink } from "react-router-dom"
import classes from "./NavListItems.module.css"

const navListItems = (props) => {
	return (
		<li className={classes.NavListItems}>
			<NavLink to={props.link} exact activeClassName={classes.active}>
				{props.children}
			</NavLink>
		</li>
	)
}

export default navListItems
