import { connect } from "react-redux";
import Catalog from "./Catalog";
import { addToShoppingCard, updateShoppingCard } from "../../store";

const mapDispatchToProps = dispatch => ({
	addToShoppingCard: item => dispatch(addToShoppingCard(item)),
	updateShoppingCard: item => dispatch(updateShoppingCard(item))
});

const newCatalog = connect(
	({ catalog, shoppingCard }) => ({ catalog, shoppingCard }),
	mapDispatchToProps
)(Catalog);

export { newCatalog as Catalog };
