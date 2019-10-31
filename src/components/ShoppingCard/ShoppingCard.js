import React from "react";
import "./ShoppingCard.css";
import { deleteFromLocalStorage } from "../../services/shoppingCardLocalStorage";

class ShoppingCard extends React.Component {
	state = {
		shoppingCard: []
	};

	componentDidMount() {
		this.setState({
			shoppingCard: JSON.parse(localStorage.getItem("shoppingCard"))
		});
	}

	updateComponent = () => {
		this.setState({
			shoppingCard: JSON.parse(localStorage.getItem("shoppingCard"))
		});
	};

	render() {
		const { shoppingCard } = this.state;
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
									{shoppingCard &&
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
						{shoppingCard ? (
							shoppingCard.map(item => (
								<tr>
									<td>{item.name}</td>
									<td className="label">{item.label}</td>
									<td>{item.price}</td>
									<td>
										<span
											className="close"
											onClick={() =>
												deleteFromLocalStorage(
													item.cardId,
													this.updateComponent
												)
											}
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
