import React from "react"
import classes from "./Ord.module.css"

const Ord = (props) => {
	const ingr = []

	for (let ingrName in props.ing) {
		ingr.push({
			name: ingrName,
			amount: props.ing[ingrName],
		})
	}

	const ingOutput = ingr.map((ig) => {
		return (
			<span key={ig.name}>
				{ig.name} ({ig.amount})
			</span>
		)
	})
	return (
		<div className={classes.Ord}>
			<p>Ingredients: {ingOutput} </p>
			<p>
				Price <strong>CAD {Number.parseFloat(props.cost).toFixed(2)}</strong>
			</p>
		</div>
	)
}

export default Ord
