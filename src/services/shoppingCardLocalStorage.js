export const addToLocalStorage = item => {
	const uuidv1 = require("uuid/v1");

	if (localStorage.shoppingCard) {
		const newLocalStorage = JSON.parse(localStorage.getItem("shoppingCard"));
		newLocalStorage.push({ ...item, cardId: uuidv1() });
		localStorage.setItem("shoppingCard", JSON.stringify(newLocalStorage));
	} else {
		localStorage.setItem(
			"shoppingCard",
			JSON.stringify([{ ...item, cardId: uuidv1() }])
		);
	}
};

export const deleteFromLocalStorage = (id, updateComponent) => {
	localStorage.setItem(
		"shoppingCard",
		JSON.stringify(
			JSON.parse(localStorage.getItem("shoppingCard")).filter(
				item => item.cardId !== id
			)
		)
	);
	updateComponent();
};
