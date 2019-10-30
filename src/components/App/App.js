import React from "react";
import Header from "../Header/Header";
import { Catalog } from "../Catalog/index";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ShoppingCard } from "../ShoppingCard/index";

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
