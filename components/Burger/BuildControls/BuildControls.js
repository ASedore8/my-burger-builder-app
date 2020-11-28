import React from "react"
import classes from "./BuildControls.module.css"
import BuildCon from "./BuildCon"

const controls = [
	{ label: "Salad", type: "salad" },
	{ label: "Bacon", type: "bacon" },
	{ label: "Cheese", type: "cheese" },
	{ label: "Meat", type: "meat" },
]

const buildControls = (props) => {
	return (
		<div className={classes.BuildControls}>
			<p>
				Current Price: <strong>{props.price.toFixed(2)}</strong>
			</p>
			{controls.map((ctrl) => (
				<BuildCon key={ctrl.label} label={ctrl.label} added={() => props.ingredientAdded(ctrl.type)} remove={() => props.ingredientRemoved(ctrl.type)} disabled={props.disabled[ctrl.type]} />
			))}
			<button className={classes.OrderButton} disabled={!props.purchasable} onClick={props.ordered}>
				{props.isAuth ? "ORDER NOW" : "SIGN IN"}
			</button>
		</div>
	)
}

export default buildControls
