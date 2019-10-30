import { connect } from "react-redux";
import Catalog from "./Catalog";

const newCatalog = connect(({ catalog }) => ({ catalog }))(Catalog);

export { newCatalog as Catalog };
