import React from "react";
import "./ShoppingCard.css";

class ShoppingCard extends React.Component {
	componentDidMount() {
		if (this.props.shoppingCard.length) {
			localStorage.setItem(
				"shoppingCard",
				JSON.stringify(this.props.shoppingCard)
			);
		}
		if (localStorage.shoppingCard && this.props.shoppingCard.length === 0) {
			this.props.updateShoppingCard(
				JSON.parse(localStorage.getItem("shoppingCard"))
			);
		}
	}

	componentDidUpdate() {
		localStorage.setItem(
			"shoppingCard",
			JSON.stringify(this.props.shoppingCard)
		);
	}

	render() {
		const { shoppingCard, deleteFromShoppingCard } = this.props;
		return (
			<div className="container">
				<h2>Shopping Card</h2>
				<table className="table">
					<thead>
						<tr>
							<th>Name</th>
							<th className="label">Description</th>
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
									<td className="label">{item.label}</td>
									<td>{item.price}</td>
									<td>
										<span
											className="close"
											onClick={() => deleteFromShoppingCard(item.cardId)}
										></span>
									</td>
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
	}
}

export default ShoppingCard;
