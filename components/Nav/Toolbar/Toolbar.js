import React from "react"
import classes from "./Toolbar.module.css"
import Logo from "../../Logo/Logo"
import NavItems from "../NavItems/NavItems"
import SideToggle from "../SideToggle/SideToggle"

const toolbar = (props) => {
	return (
		<header className={classes.Toolbar}>
			<div>
				<SideToggle clicked={props.sbOpen} />
			</div>

			<div className={classes.Logo}>
				<Logo />
			</div>

			<nav className={classes.DesktopOnly}>
				<NavItems isAuthent={props.isAuth} />
			</nav>
		</header>
	)
}

export default toolbar
