import React from "react";
import "./Card.css";

const Card = ({ item, addToShoppingCard }) => (
	<div className="product-information">
		<img
			src="https://s.dou.ua/CACHE/images/img/static/companies/sw-logo-dou_2/d7e715c5280fef8b4d77d951a3d50ddc.png"
			alt="Photo of product"
			className="product-photo"
		/>
		<div className="product-content">
			<div className="product-name">
				<h1 className="product-name">{item.name}</h1>
			</div>
			<div className="product-id">ID: {item.id} </div>
			<div className="description">{item.label}</div>
			<div className="product-price">
				<div className="price-label">Price:</div>
				<div className="price-number">{item.price} $</div>
			</div>
			<button
				type="button"
				className="btn btn-dark button-buy"
				onClick={() => addToShoppingCard(item)}
			>
				ADD
			</button>
		</div>
	</div>
);

export default Card;
