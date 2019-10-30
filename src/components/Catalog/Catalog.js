import React from "react";
import { Card } from "../Card/index";
import "./Catalog.css";

class Catalog extends React.Component {
	componentDidMount() {
		console.log("DM");
		if (localStorage.shoppingCard && !this.props.shoppingCard.length) {
			this.props.updateShoppingCard(
				JSON.parse(localStorage.getItem("shoppingCard"))
			);
		}
	}

	componentDidUpdate() {
		console.log("DU");
		if (this.props.shoppingCard.length) {
			localStorage.setItem(
				"shoppingCard",
				JSON.stringify(this.props.shoppingCard)
			);
		}
	}

	render() {
		return (
			<div className="menu-catalog">
				{this.props.catalog.map(item => (
					<Card item={item} />
				))}
			</div>
		);
	}
}

export default Catalog;
