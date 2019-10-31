import React from "react";
import Card from "../Card/Card";
import "./Catalog.css";
import goods from "../../api/goods";

class Catalog extends React.Component {
	state = {
		catalog: goods
	};

	render() {
		return (
			<div className="menu-catalog">
				{this.state.catalog.map(item => (
					<Card item={item} />
				))}
			</div>
		);
	}
}

export default Catalog;
