import React from "react"
import Burger from "../../Burger/Burger"
import Button from "../../UI/Button/Button"
import classes from "./CheckoutSumm.module.css"
const CheckoutSumm = (props) => {
	return (
		<div className={classes.CheckoutSumm}>
			<h1> Enjoy! </h1>
			<div style={{ width: "100%", margin: "auto" }}>
				<Burger ingredients={props.ingredients} />
			</div>
			<Button btnType="Danger" clicked={props.cancCheck}>
				Cancel
			</Button>
			<Button btnType="Success" clicked={props.contCheck}>
				Continue
			</Button>
		</div>
	)
}

export default CheckoutSumm
