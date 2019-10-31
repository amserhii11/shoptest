import React from "react";
import Header from "../Header/Header";
import Catalog from "../Catalog/Catalog";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ShoppingCard from "../ShoppingCard/ShoppingCard";

const App = () => (
	<>
		<BrowserRouter>
			<Header />
			<Switch>
				<Route exact path="/" component={Catalog} />
				<Route path="/shoppingcard" component={ShoppingCard} />
			</Switch>
		</BrowserRouter>
	</>
);
export default App;
