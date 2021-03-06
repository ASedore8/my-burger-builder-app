import React from "react"
import classes from "./SideToggle.module.css"

const sideToggle = (props) => {
	return (
		<div onClick={props.clicked} className={classes.SideToggle}>
			<div></div>
			<div></div>
			<div></div>
		</div>
	)
}

export default sideToggle
