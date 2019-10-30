import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import goods from "../api/goods";

const ACTION_TYPES = {
	ADD_TO_SHOPPING_CARD: "ADD_TO_SHOPPING_CARD",
	DELETE_FROM_SHOPPING_CARD: "DELETE_FROM_SHOPPING_CARD",
	UPDATE_SHOPPING_CARD: "UPDATE_SHOPPING_CARD"
};

export const addToShoppingCard = item => ({
	type: ACTION_TYPES.ADD_TO_SHOPPING_CARD,
	payload: item
});

export const deleteFromShoppingCard = id => ({
	type: ACTION_TYPES.DELETE_FROM_SHOPPING_CARD,
	payload: id
});

export const updateShoppingCard = item => ({
	type: ACTION_TYPES.UPDATE_SHOPPING_CARD,
	payload: item
});

const initialState = {
	catalog: goods,
	shoppingCard: []
};

const uuidv1 = require("uuid/v1");

function reducer(state = initialState, action = {}) {
	switch (action.type) {
		case ACTION_TYPES.ADD_TO_SHOPPING_CARD:
			return {
				...state,
				shoppingCard: [
					...state.shoppingCard,
					{
						...action.payload,
						cardId: uuidv1()
					}
				]
			};

		case ACTION_TYPES.DELETE_FROM_SHOPPING_CARD:
			return {
				...state,
				shoppingCard: state.shoppingCard.filter(
					item => item.cardId !== action.payload
				)
			};

		case ACTION_TYPES.UPDATE_SHOPPING_CARD:
			return {
				...state,
				shoppingCard: [...state.shoppingCard, ...action.payload]
			};

		default:
			return state;
	}
}

export const store = createStore(reducer, applyMiddleware(thunk));
