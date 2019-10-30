import React from "react";
import "./ShoppingCard.css";

const ShoppingCard = ({ shoppingCard, deleteFromShoppingCard }) => (
	<div className="container">
		<h2>Shopping Card</h2>
		<table className="table">
			<thead>
				<tr>
					<th>Name</th>
					<th>Description</th>
					<th>Price</th>
					<th>Delete</th>
				</tr>
			</thead>
			<tfoot>
				<tr>
					<td>
						<h4>
							Total price:
							{shoppingCard.length &&
								shoppingCard.reduce(
									(total, amount) => (total += amount.price),
									0
								)}
							$
						</h4>
					</td>
				</tr>
			</tfoot>
			<tbody>
				{shoppingCard.length > 0 ? (
					shoppingCard.map(item => (
						<tr>
							<td>{item.name}</td>
							<td>{item.label}</td>
							<td>{item.price}</td>
							<td>
								<span
									className="close"
									onClick={() => deleteFromShoppingCard(item.cardId)}
								></span>
							</td>
							<td>{console.log(shoppingCard)}</td>
						</tr>
					))
				) : (
					<tr>
						<td>Shopping card is empty</td>
					</tr>
				)}
			</tbody>
		</table>
	</div>
);

export default ShoppingCard;
