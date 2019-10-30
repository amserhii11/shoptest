import { connect } from "react-redux";
import ShoppingCard from "./ShoppingCard";
import { deleteFromShoppingCard } from "../../store";
import { withRouter } from "react-router-dom";
export default withRouter;

const mapDispatchToProps = dispatch => ({
	deleteFromShoppingCard: id => dispatch(deleteFromShoppingCard(id))
});

const newShoppingCard = withRouter(
	connect(
		({ shoppingCard }) => ({ shoppingCard }),
		mapDispatchToProps
	)(ShoppingCard)
);

export { newShoppingCard as ShoppingCard };
