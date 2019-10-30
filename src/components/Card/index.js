import { connect } from "react-redux";
import Card from "./Card";
import { addToShoppingCard } from "../../store";

const mapDispatchToProps = dispatch => ({
	addToShoppingCard: item => dispatch(addToShoppingCard(item))
});

const newCard = connect(
	null,
	mapDispatchToProps
)(Card);

export { newCard as Card };
