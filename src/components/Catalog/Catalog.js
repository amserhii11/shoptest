import React from "react";
import { Card } from "../Card/index";
import "./Catalog.css";

const Catalog = ({ catalog }) => (
	<div className="menu-catalog">
		{catalog.map(item => (
			<Card item={item} />
		))}
	</div>
);

export default Catalog;
